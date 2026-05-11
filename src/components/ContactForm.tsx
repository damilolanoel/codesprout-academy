import { useState } from 'react';
import { motion } from 'framer-motion';
import { useFormSubmit } from '../hooks/useFormSubmit';

interface FormData {
  parentName: string;
  email: string;
  phone: string;
  childName: string;
  childAge: string;
  programme: string;
  message: string;
}

const INITIAL: FormData = {
  parentName: '',
  email: '',
  phone: '',
  childName: '',
  childAge: '',
  programme: '',
  message: '',
};

const PROGRAMMES = [
  'CodeSprout Juniors (Ages 7–10)',
  'CodeSprout Builders (Ages 11–14)',
  'CodeSprout Innovators (Ages 14–17)',
  'Summer Camp 2026',
  'Not sure yet',
];

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  border: '1.5px solid #e0e0e0',
  borderRadius: 10,
  fontFamily: 'Nunito, sans-serif',
  fontSize: 14,
  fontWeight: 600,
  color: '#1a1a1a',
  background: '#fff',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontWeight: 700,
  fontSize: 13,
  color: '#444',
  marginBottom: 6,
};

function Field({
  label,
  required,
  children,
  htmlFor,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  htmlFor?: string;
}) {
  return (
    <div>
      <label style={labelStyle} htmlFor={htmlFor}>
        {label} {required && <span style={{ color: '#1D9E75' }}>*</span>}
      </label>
      {children}
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const { isSubmitting, error: apiError, submit, clearError } = useFormSubmit({
    endpoint: (import.meta.env.VITE_API_ENDPOINT as string | undefined) ?? '/api/leads',
  });

  const set = (key: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(f => ({ ...f, [key]: e.target.value }));
    setErrors(er => ({ ...er, [key]: '' }));
    if (apiError) clearError();
  };

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.parentName.trim()) e.parentName = 'Required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Valid email required';
    if (!form.phone.trim()) e.phone = 'Required';
    if (!form.childName.trim()) e.childName = 'Required';
    if (!form.childAge || +form.childAge < 7 || +form.childAge > 17)
      e.childAge = 'Age must be 7–17';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const result = await submit(form as unknown as Record<string, unknown>);
    if (result.success) {
      setSubmitted(true);
      setForm(INITIAL);
    }
  };
  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ textAlign: 'center', padding: '60px 24px' }}
        className="card"
        role="status"
        aria-live="polite"
      >
        <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
        <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 24, fontWeight: 800, color: '#0f6e56', marginBottom: 8 }}>
          Registration Received!
        </h3>
        <p style={{ color: '#555', maxWidth: 400, margin: '0 auto', lineHeight: 1.7 }}>
          Thank you, <strong>{form.parentName.split(' ')[0]}</strong>! We'll confirm{' '}
          <strong>{form.childName.split(' ')[0]}</strong>'s spot and call you within 24 hours.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm(INITIAL); }}
          className="btn btn-secondary"
          style={{ marginTop: 28 }}
          aria-label="Submit another registration"
        >
          Submit another
        </button>
      </motion.div>
    );
  }

  const focusStyle = { borderColor: '#1D9E75', boxShadow: '0 0 0 3px rgba(29,158,117,0.12)' };
  const errStyle = { borderColor: '#ef4444' };

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      noValidate
      style={{ maxWidth: 680, margin: '0 auto' }}
      role="form"
    >
      {apiError && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6"
          role="alert"
          aria-live="polite"
        >
          <p className="font-semibold">Error submitting form</p>
          <p className="text-sm">{apiError}</p>
        </motion.div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 20 }}>
        <Field label="Parent / Guardian Name" required htmlFor="parentName">
          <input
            id="parentName"
            type="text"
            value={form.parentName}
            onChange={set('parentName')}
            placeholder="Your full name"
            aria-label="Parent or guardian name"
            aria-required="true"
            aria-invalid={!!errors.parentName}
            aria-describedby={errors.parentName ? 'error-parentName' : undefined}
            style={{ ...inputStyle, ...(errors.parentName ? errStyle : {}) }}
            onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
            onBlur={e => Object.assign(e.currentTarget.style, { borderColor: errors.parentName ? '#ef4444' : '#e0e0e0', boxShadow: 'none' })}
            minLength={2}
          />
          {errors.parentName && <p id="error-parentName" style={{ color: '#ef4444', fontSize: 12, marginTop: 4 }} role="alert">{errors.parentName}</p>}
        </Field>

        <Field label="Email Address" required htmlFor="email">
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={set('email')}
            placeholder="your@email.com"
            aria-label="Email address"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'error-email' : undefined}
            style={{ ...inputStyle, ...(errors.email ? errStyle : {}) }}
            onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
            onBlur={e => Object.assign(e.currentTarget.style, { borderColor: errors.email ? '#ef4444' : '#e0e0e0', boxShadow: 'none' })}
          />
          {errors.email && <p id="error-email" style={{ color: '#ef4444', fontSize: 12, marginTop: 4 }} role="alert">{errors.email}</p>}
        </Field>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 20 }}>
        <Field label="Phone / WhatsApp" required htmlFor="phone">
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={set('phone')}
            placeholder="+234 8xx xxx xxxx"
            aria-label="Phone or WhatsApp number"
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'error-phone' : undefined}
            style={{ ...inputStyle, ...(errors.phone ? errStyle : {}) }}
            onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
            onBlur={e => Object.assign(e.currentTarget.style, { borderColor: errors.phone ? '#ef4444' : '#e0e0e0', boxShadow: 'none' })}
          />
          {errors.phone && <p id="error-phone" style={{ color: '#ef4444', fontSize: 12, marginTop: 4 }} role="alert">{errors.phone}</p>}
        </Field>

        <Field label="Child's Name" required htmlFor="childName">
          <input
            id="childName"
            type="text"
            value={form.childName}
            onChange={set('childName')}
            placeholder="Child's full name"
            aria-label="Child's full name"
            aria-required="true"
            aria-invalid={!!errors.childName}
            aria-describedby={errors.childName ? 'error-childName' : undefined}
            style={{ ...inputStyle, ...(errors.childName ? errStyle : {}) }}
            onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
            onBlur={e => Object.assign(e.currentTarget.style, { borderColor: errors.childName ? '#ef4444' : '#e0e0e0', boxShadow: 'none' })}
            minLength={2}
          />
          {errors.childName && <p id="error-childName" style={{ color: '#ef4444', fontSize: 12, marginTop: 4 }} role="alert">{errors.childName}</p>}
        </Field>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 20 }}>
        <Field label="Child's Age" required htmlFor="childAge">
          <input
            id="childAge"
            type="number"
            value={form.childAge}
            onChange={set('childAge')}
            placeholder="7 – 17"
            min={7}
            max={17}
            aria-label="Child's age"
            aria-required="true"
            aria-invalid={!!errors.childAge}
            aria-describedby={errors.childAge ? 'error-childAge' : undefined}
            style={{ ...inputStyle, ...(errors.childAge ? errStyle : {}) }}
            onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
            onBlur={e => Object.assign(e.currentTarget.style, { borderColor: errors.childAge ? '#ef4444' : '#e0e0e0', boxShadow: 'none' })}
          />
          {errors.childAge && <p id="error-childAge" style={{ color: '#ef4444', fontSize: 12, marginTop: 4 }} role="alert">{errors.childAge}</p>}
        </Field>

        <Field label="Programme of Interest" htmlFor="programme">
          <select
            id="programme"
            value={form.programme}
            onChange={set('programme')}
            aria-label="Programme of interest"
            style={{ ...inputStyle }}
            onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
            onBlur={e => Object.assign(e.currentTarget.style, { borderColor: '#e0e0e0', boxShadow: 'none' })}
          >
            <option value="">Select a programme…</option>
            {PROGRAMMES.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message (optional)" htmlFor="message">
        <textarea
          id="message"
          value={form.message}
          onChange={set('message')}
          rows={4}
          placeholder="Any questions, special requirements, or things we should know…"
          aria-label="Additional message or questions"
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
          onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
          onBlur={e => Object.assign(e.currentTarget.style, { borderColor: '#e0e0e0', boxShadow: 'none' })}
        />
      </Field>

      <div style={{ textAlign: 'center', marginTop: 28 }}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary btn-lg"
          style={{ opacity: isSubmitting ? 0.7 : 1, minHeight: '44px' }}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span style={{ display: 'inline-block', width: 16, height: 16, border: '2px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.6s linear infinite' }} />
              Submitting…
            </>
          ) : (
            'Submit Registration'
          )}
        </button>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <p style={{ fontSize: 13, color: '#999', marginTop: 12 }}>
          * Required fields. We'll contact you within 24 hours.
        </p>
      </div>
    </motion.form>
  );
}

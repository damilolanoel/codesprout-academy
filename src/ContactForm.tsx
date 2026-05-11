import { useState } from 'react';
import { motion } from 'framer-motion';
import { useFormSubmit } from './hooks/useFormSubmit';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  childName: string;
  childAge: string;
  programme: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    programme: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const { isSubmitting, error, submit, clearError } = useFormSubmit({
    endpoint: (import.meta.env.VITE_API_ENDPOINT as string | undefined) ?? '/api/leads',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) clearError();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await submit(formData as unknown as Record<string, unknown>);

    if (result.success) {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        childName: '',
        childAge: '',
        programme: '',
        message: ''
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
        role="status"
        aria-live="polite"
      >
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h3>
        <p className="text-gray-600">We'll get back to you within 24 hours.</p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-6"
      noValidate
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Parent/Guardian Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="+234 xxx xxx xxxx"
          />
        </div>
        <div>
          <label htmlFor="childName" className="block text-sm font-semibold text-gray-700 mb-2">
            Child's Name *
          </label>
          <input
            type="text"
            id="childName"
            name="childName"
            value={formData.childName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Child's full name"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="childAge" className="block text-sm font-semibold text-gray-700 mb-2">
            Child's Age *
          </label>
          <input
            type="number"
            id="childAge"
            name="childAge"
            value={formData.childAge}
            onChange={handleChange}
            required
            min="7"
            max="17"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="7-17"
          />
        </div>
        <div>
          <label htmlFor="programme" className="block text-sm font-semibold text-gray-700 mb-2">
            Interested Programme
          </label>
          <select
            id="programme"
            name="programme"
            value={formData.programme}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">Select a programme</option>
            <option value="juniors">CodeSprout Juniors (Ages 7-10)</option>
            <option value="builders">CodeSprout Builders (Ages 11-14)</option>
            <option value="innovators">CodeSprout Innovators (Ages 14-17)</option>
            <option value="camp">Summer Camp 2026</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-vertical"
          placeholder="Any questions or special requirements?"
        />
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
          role="alert"
          aria-live="polite"
        >
          <p className="font-semibold">Error</p>
          <p className="text-sm">{error}</p>
        </motion.div>
      )}

      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          aria-busy={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Registration'}
        </button>
        <p className="text-sm text-gray-500 mt-4">
          * Required fields. We'll contact you within 24 hours to confirm your spot.
        </p>
      </div>
    </motion.form>
  );
};

export default ContactForm;
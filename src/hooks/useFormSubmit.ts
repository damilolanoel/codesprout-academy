import { useState, useCallback } from 'react';

interface FormSubmitOptions {
  endpoint?: string;
  timeout?: number;
}

interface UseFormSubmitReturn {
  isSubmitting: boolean;
  error: string | null;
  submit: (data: Record<string, unknown>) => Promise<{ success: boolean; message: string }>;
  clearError: () => void;
}

export function useFormSubmit(options: FormSubmitOptions = {}): UseFormSubmitReturn {
  const { endpoint = '/api/leads', timeout = 30000 } = options;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = useCallback(
    async (data: Record<string, unknown>) => {
      setIsSubmitting(true);
      setError(null);

      try {
        // Create abort controller with timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          const message = errorData.message || `Server error: ${response.status}`;
          setError(message);
          return { success: false, message };
        }

        const result = await response.json();
        return { success: true, message: result.message || 'Submitted successfully' };
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') {
          const msg = 'Request timed out. Please try again.';
          setError(msg);
          return { success: false, message: msg };
        }

        const msg = err instanceof Error ? err.message : 'An error occurred. Please try again.';
        setError(msg);
        console.error('Form submission error:', err);
        return { success: false, message: msg };
      } finally {
        setIsSubmitting(false);
      }
    },
    [endpoint, timeout]
  );

  const clearError = useCallback(() => setError(null), []);

  return { isSubmitting, error, submit, clearError };
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

  interface ResponseData {
    message: string;
  }

  const onSubmit = async (data: FormData): Promise<void> => {
    setIsSubmitting(true);
    setError('');

    try {
        const response: Response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/portfolio/mcclain/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data),
        });

        const responseData: ResponseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message || 'Failed to send message');
        }

        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 3000);
    } catch (error: unknown) {
        setError((error as Error).message || 'An error occurred while sending your message');
        console.error('Error submitting form:', error);
    } finally {
        setIsSubmitting(false);
    }
};

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
        </div>
      )}

      {isSuccess && (
        <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <p className="text-green-600 dark:text-green-400 text-sm">Message sent successfully!</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
          >
            Full Name *
          </label>
          <input
            id="name"
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 2,
                message: 'Name must be at least 2 characters'
              }
            })}
            className={`w-full px-4 py-3 bg-white dark:bg-zinc-800 border rounded-lg 
              text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500
              transition-colors duration-200
              ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-zinc-700'}`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
          >
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className={`w-full px-4 py-3 bg-white dark:bg-zinc-800 border rounded-lg 
              text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500
              transition-colors duration-200
              ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-zinc-700'}`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
        >
          Subject *
        </label>
        <input
          id="subject"
          {...register('subject', {
            required: 'Subject is required',
            minLength: {
              value: 5,
              message: 'Subject must be at least 5 characters'
            }
          })}
          className={`w-full px-4 py-3 bg-white dark:bg-zinc-800 border rounded-lg 
            text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500
            transition-colors duration-200
            ${errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-zinc-700'}`}
          placeholder="How can I help?"
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 20,
              message: 'Message must be at least 20 characters'
            }
          })}
          rows={6}
          className={`w-full px-4 py-3 bg-white dark:bg-zinc-800 border rounded-lg 
            text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500
            transition-colors duration-200 resize-y
            ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-zinc-700'}`}
          placeholder="Tell me about your project..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className={`w-full md:w-auto px-8 py-3 rounded-lg font-medium text-white 
          ${isSuccess ? 'bg-green-500' : 'bg-gradient-to-r from-blue-500 to-purple-500'} 
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-200
          hover:opacity-90 hover:shadow-md
          active:transform active:scale-95
          flex items-center justify-center gap-2`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Sending...</span>
          </>
        ) : isSuccess ? (
          <span>Message Sent!</span>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </>
        )}
      </motion.button>
    </motion.form>
  );
}
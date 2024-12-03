import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters')
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      console.log('Form data:', data);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
            Full Name *
          </label>
          <input
            {...register('name')}
            className={`w-full px-4 py-3 bg-white dark:bg-zinc-800 border rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 ${
              errors.name ? 'border-red-500' : 'border-gray-300 dark:border-zinc-700'
            }`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
            Email Address *
          </label>
          <input
            {...register('email')}
            className={`w-full px-4 py-3 bg-white dark:bg-zinc-800 border rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300 dark:border-zinc-700'
            }`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
          Subject *
        </label>
        <input
          {...register('subject')}
          className={`w-full px-4 py-3 bg-white dark:bg-zinc-800 border rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 ${
            errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-zinc-700'
          }`}
          placeholder="How can we help?"
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
          Message *
        </label>
        <textarea
          {...register('message')}
          rows={6}
          className={`w-full px-4 py-3 bg-white dark:bg-zinc-800 border rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 ${
            errors.message ? 'border-red-500' : 'border-gray-300 dark:border-zinc-700'
          }`}
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
          disabled:opacity-50 disabled:cursor-not-allowed transition-colors
          flex items-center justify-center gap-2 hover:opacity-90`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : isSuccess ? (
          'Message Sent!'
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </motion.button>
    </motion.form>
  );
}
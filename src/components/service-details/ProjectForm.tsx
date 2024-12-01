import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Upload, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^\+?[\d\s-]{10,}$/, 'Please enter a valid phone number'),
  company: z.string().optional(),
  projectGoals: z.string().min(20, 'Please provide more detail about your project goals'),
  budget: z.string().min(1, 'Please select a budget range'),
  timeline: z.string().min(1, 'Please select a timeline'),
  additionalInfo: z.string().optional()
});

type FormData = z.infer<typeof formSchema>;

interface ProjectFormProps {
  packageName: string;
  totalPrice: number;
  onBack: () => void;
}

export function ProjectForm({ packageName, totalPrice, onBack }: ProjectFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors, isValid }, watch } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange'
  });

  const totalSteps = 3;
  const watchedFields = watch();

  const isStepValid = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return !errors.name && !errors.email && !errors.phone;
      case 2:
        return !errors.company && !errors.projectGoals;
      case 3:
        return !errors.budget && !errors.timeline;
      default:
        return false;
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
      // Handle successful submission
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getMinBudget = () => {
    return Math.ceil(totalPrice / 1000) * 1000;
  };

  return (
    <div className="max-w-3xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to package details
      </button>

      <div className="bg-zinc-900/50 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-white mb-2">
          Let's Build Something Amazing Together
        </h2>
        <p className="text-gray-400 mb-8">
          Tell us about your project and we'll get back to you within 24 hours.
        </p>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Step {step} of {totalSteps}</span>
            <span>{Math.round((step / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ width: 0 }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  {...register('name')}
                  className={`w-full px-4 py-3 bg-zinc-800 border rounded-lg text-white focus:outline-none focus:border-blue-500 ${
                    errors.name ? 'border-red-500' : 'border-zinc-700'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  {...register('email')}
                  className={`w-full px-4 py-3 bg-zinc-800 border rounded-lg text-white focus:outline-none focus:border-blue-500 ${
                    errors.email ? 'border-red-500' : 'border-zinc-700'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  {...register('phone')}
                  className={`w-full px-4 py-3 bg-zinc-800 border rounded-lg text-white focus:outline-none focus:border-blue-500 ${
                    errors.phone ? 'border-red-500' : 'border-zinc-700'
                  }`}
                  placeholder="+1 (555) 000-0000"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company/Organization
                </label>
                <input
                  {...register('company')}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  placeholder="Company Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Goals *
                </label>
                <textarea
                  {...register('projectGoals')}
                  className={`w-full px-4 py-3 bg-zinc-800 border rounded-lg text-white focus:outline-none focus:border-blue-500 h-32 ${
                    errors.projectGoals ? 'border-red-500' : 'border-zinc-700'
                  }`}
                  placeholder="Describe your project goals and objectives..."
                />
                {errors.projectGoals && (
                  <p className="mt-1 text-sm text-red-500">{errors.projectGoals.message}</p>
                )}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Budget Range *
                </label>
                <select
                  {...register('budget')}
                  className={`w-full px-4 py-3 bg-zinc-800 border rounded-lg text-white focus:outline-none focus:border-blue-500 ${
                    errors.budget ? 'border-red-500' : 'border-zinc-700'
                  }`}
                >
                  <option value="">Select a budget range</option>
                  <option value={`${getMinBudget()}-${getMinBudget() + 5000}`}>
                    ${getMinBudget().toLocaleString()} - ${(getMinBudget() + 5000).toLocaleString()}
                  </option>
                  <option value={`${getMinBudget() + 5001}-${getMinBudget() + 10000}`}>
                    ${(getMinBudget() + 5001).toLocaleString()} - ${(getMinBudget() + 10000).toLocaleString()}
                  </option>
                  <option value={`${getMinBudget() + 10001}+`}>
                    ${(getMinBudget() + 10001).toLocaleString()}+
                  </option>
                </select>
                {errors.budget && (
                  <p className="mt-1 text-sm text-red-500">{errors.budget.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Preferred Timeline *
                </label>
                <select
                  {...register('timeline')}
                  className={`w-full px-4 py-3 bg-zinc-800 border rounded-lg text-white focus:outline-none focus:border-blue-500 ${
                    errors.timeline ? 'border-red-500' : 'border-zinc-700'
                  }`}
                >
                  <option value="">Select a timeline</option>
                  <option value="1-2-months">1-2 months</option>
                  <option value="2-3-months">2-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6+-months">6+ months</option>
                </select>
                {errors.timeline && (
                  <p className="mt-1 text-sm text-red-500">{errors.timeline.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Information
                </label>
                <textarea
                  {...register('additionalInfo')}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500 h-32"
                  placeholder="Any additional details you'd like to share..."
                />
              </div>
            </motion.div>
          )}

          <div className="flex justify-between pt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-6 py-2 text-gray-400 hover:text-white transition-colors"
              >
                Previous
              </button>
            )}
            {step < totalSteps ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                disabled={!isStepValid(step)}
                className="ml-auto px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting || !isValid}
                className="ml-auto px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Project'
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
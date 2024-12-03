import { motion } from 'framer-motion';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import { ContactMap } from '../components/contact/ContactMap';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help bring your ideas to life.
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <ContactInfo />
            <ContactMap />
          </div>
          <div className="bg-gray-50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<{
    loading: boolean;
    success: boolean;
    error: string | null;
  }>({
    loading: false,
    success: false,
    error: null
  });

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return 'Invalid email format';
    if (!formData.message.trim()) return 'Message is required';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const error = validateForm();
    if (error) {
      setStatus({ loading: false, success: false, error });
      return;
    }

    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch(`${apiBaseUrl}/portfolio/mcclain/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message');
      }

      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      setStatus({ 
        loading: false, 
        success: false, 
        error: (error instanceof Error ? error.message : 'Failed to send message')
      });
    }
  };

  interface FormData {
    name: string;
    email: string;
    message: string;
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-black dark:text-white text-center mb-12">Contact Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                disabled={status.loading}
                className="w-full p-3 bg-gray-50 dark:bg-gray-900 text-black dark:text-white rounded-lg border border-gray-200 dark:border-gray-800 focus:border-blue-500 focus:outline-none disabled:opacity-50"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                disabled={status.loading}
                className="w-full p-3 bg-gray-50 dark:bg-gray-900 text-black dark:text-white rounded-lg border border-gray-200 dark:border-gray-800 focus:border-blue-500 focus:outline-none disabled:opacity-50"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                disabled={status.loading}
                className="w-full p-3 bg-gray-50 dark:bg-gray-900 text-black dark:text-white rounded-lg border border-gray-200 dark:border-gray-800 focus:border-blue-500 focus:outline-none disabled:opacity-50"
              />
              {status.error && (
                <div className="text-red-500 text-sm">{status.error}</div>
              )}
              {status.success && (
                <div className="text-green-500 text-sm">Message sent successfully!</div>
              )}
              <button 
                type="submit"
                disabled={status.loading}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-blue-500" />
              <div>
                <h3 className="text-black dark:text-white font-semibold">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">mcclainkel@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-blue-500" />
              <div>
                <h3 className="text-black dark:text-white font-semibold">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-blue-500" />
              <div>
                <h3 className="text-black dark:text-white font-semibold">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
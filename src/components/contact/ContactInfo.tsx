import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Location',
    content: 'Litein - Kericho, Kenya',
    color: 'from-blue-500/20 to-blue-600/20'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+254712388864',
    color: 'from-purple-500/20 to-purple-600/20'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'mcclainkel@gmail.com',
    color: 'from-pink-500/20 to-pink-600/20'
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Mon - Fri, 9am - 5pm',
    color: 'from-green-500/20 to-green-600/20'
  }
];

export function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {contactInfo.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color}`}>
                <Icon className="w-6 h-6 text-gray-900 dark:text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{item.content}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
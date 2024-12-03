import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function ContactMap() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative h-[400px] rounded-xl overflow-hidden bg-gray-50 dark:bg-zinc-900/50"
    >
      <iframe
        src="https://www.openstreetmap.org/export/embed.html?bbox=35.1813,-0.5850,35.1853,-0.5810&layer=mapnik&marker=-0.5830,35.1833"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        className="grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 15 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="p-3 bg-blue-500 rounded-full shadow-lg">
          <MapPin className="w-6 h-6 text-white" />
        </div>
        <div className="absolute -bottom-2 left-1/2 w-4 h-4 -translate-x-1/2 translate-y-full bg-blue-500 rotate-45" />
      </motion.div>
    </motion.div>
  );
}

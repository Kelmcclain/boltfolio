import { Github, Twitter, Instagram, Globe, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export function ProfileCard() {
  return (
    <div className="text-center mb-8">
      <div className="relative mb-20">
        <img 
          src="https://flashfocusstudios.org/flashfocus/1732452463493-photo.webp" 
          alt="Cover" 
          className="w-full h-32 object-cover rounded-lg"
        />
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
          <div className="w-32 h-32 rounded-full border-4 border-zinc-900 overflow-hidden">
            <img 
              src="https://flashfocusstudios.org/images/flashfocusstudios-15-10-2024-0033.webp" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold">McClain Kelvin</h2>
      <p className="text-zinc-400">Software Engineer</p>

      <div className="flex justify-center gap-4 mt-6">
        <a href="https://github.com/Kelmcclain" className="hover:text-blue-400 transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://twitter.com/Kelmcclain" className="hover:text-blue-400 transition-colors">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="https://Instagram.com/Kelmcclain" className="hover:text-blue-400 transition-colors">
          <Instagram className="w-5 h-5" />
        </a>
      </div>

      <div className="mt-6 space-y-2 text-left">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-zinc-400" />
          <span>+254712388864</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-zinc-400" />
          <span>mcclainkel@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-zinc-400" />
          <a href="https://kelmcclain.github.io/" className="hover:text-blue-400 transition-colors">
            kelmcclain.github.io
          </a>
        </div>
      </div>
    </div>
  );
}
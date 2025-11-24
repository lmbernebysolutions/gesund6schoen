import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingContact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Zeige Button erst an, wenn etwas gescrollt wurde
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Nur WhatsApp
  const whatsapp = {
    icon: <MessageCircle size={28} />,
    label: 'WhatsApp',
    href: 'https://wa.me/4915735603381',
    color: 'bg-[#25D366]'
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href={whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              ${whatsapp.color} text-white p-4 rounded-full shadow-xl 
              hover:scale-110 transition-transform flex items-center gap-3 group
              hover:pr-6
            `}
            aria-label={whatsapp.label}
          >
            <div>{whatsapp.icon}</div>
            <span className="hidden group-hover:block font-bold text-sm whitespace-nowrap">
              {whatsapp.label}
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContact;

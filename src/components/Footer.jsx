import React from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/18-saurabh', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/saurabh-patel-8b0526249/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:saurabhpatel4589@gmail.com', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    gsap.fromTo('.footer-content', 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
    );
  }, []);

  return (
    <footer className="bg-black/80 backdrop-blur-sm text-white py-12 border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8 footer-content">
          <motion.button
            onClick={scrollToTop}
            className="font-bold text-2xl hover:text-blue-400 transition-colors duration-200 text-white"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.button>

          <div className="flex space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 rounded-full hover:bg-gray-700 transition-colors duration-200 border border-gray-800"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          <div className="text-center space-y-2">
            <p className="text-gray-400">
              © 2025 Saurabh Patel. All rights reserved.
            </p>
            <p className="text-gray-400 flex items-center justify-center space-x-1">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>using React, Tailwind CSS & GSAP</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
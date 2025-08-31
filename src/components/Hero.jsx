import React from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/18-saurabh', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/saurabh-patel-8b0526249/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:saurabhpatel4589@gmail.com', label: 'Email' }
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/MY_NEW_RESUME (1).pdf';
    link.download = 'Saurabh_Patel_Resume.pdf';
    link.click();
  };

  React.useEffect(() => {
    // GSAP animations for hero section
    const tl = gsap.timeline();
    
    tl.fromTo('.hero-profile', 
      { scale: 0, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)' }
    )
    .fromTo('.hero-title', 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, 
      '-=0.5'
    )
    .fromTo('.hero-subtitle', 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, 
      '-=0.3'
    )
    .fromTo('.hero-buttons', 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, 
      '-=0.2'
    );
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* Enhanced gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 relative z-10"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hero-profile"
          >
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-xl relative z-10">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQFJBfaPfXP46Q/profile-displayphoto-shrink_800_800/B4DZV5mQ8AG4Ac-/0/1741501830169?e=1759363200&v=beta&t=4MQ0p1I7d4iEutWLeD9Id4EMsMm0qqUQYS_XUa8g73Y"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-lg" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-title"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Hi, I'm{' '}
              <motion.span
                className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Saurabh Patel
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-subtitle"
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-2">
              Full Stack Developer & Data Science Enthusiast
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              I create beautiful, responsive web applications and build intelligent data-driven solutions.
              Passionate about clean code, machine learning, and exceptional user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center hero-buttons"
          >
            <motion.button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Resume
            </motion.button>

            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-300 hover:text-blue-400 border border-gray-700"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Palette, Rocket, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  React.useEffect(() => {
    if (inView) {
      gsap.fromTo('.about-title', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      );
      
      gsap.fromTo('.about-content', 
        { x: -50, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power2.out' }
      );
      
      gsap.fromTo('.about-image', 
        { x: 50, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.8, delay: 0.4, ease: 'power2.out' }
      );
    }
  }, [inView]);

  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code with best practices.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces that users love.'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed and exceptional user experience.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams with excellent communication skills.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 about-title"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer and data science enthusiast with experience creating 
            digital solutions that make a difference. I specialize in web development, machine learning, 
            and data visualization, turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 about-content"
          >
            <div className="prose prose-lg text-gray-300">
              <p>
                With a strong foundation in computer science and expertise in both web development 
                and data science, I specialize in ReactJS, Python, Java, and modern web technologies. 
                I have hands-on experience with machine learning, NLP, and data visualization tools 
                like Power BI and Tableau.
              </p>
              <p>
                I previously worked as a Full Stack Web Developer at Shaurav Network Solution (Dec 2024 – Feb 2025), 
                where I focused on performance optimization, cross-browser responsive design, and data analytics using Power BI. 
                I'm passionate about using technology to solve real-world problems, from combating 
                misinformation to creating inclusive educational platforms.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300 border border-gray-700"
                >
                  <feature.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative about-image"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About me"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-30 blur-xl"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
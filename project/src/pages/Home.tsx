import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Code, Bot, Zap } from 'lucide-react';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-dark-100 via-dark to-dark-200" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple bg-clip-text text-transparent">
                Transforming Ideas
              </span>
              <br />
              Into Digital Reality
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Expert web development, automation solutions, and AI integration
              to elevate your digital presence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-bold text-white shadow-[0_0_20px_rgba(0,243,255,0.5)] hover:shadow-[0_0_30px_rgba(0,243,255,0.8)] transition-shadow"
              >
                Get Started
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-neon-pink rounded-lg font-bold text-white hover:bg-neon-pink/10 transition-colors"
              >
                View Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-neon-blue rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: 0.3,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div ref={ref} className="py-24 bg-dark-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Code className="w-8 h-8 text-neon-blue" />,
                title: "Web Development",
                description: "Modern, responsive websites built with the latest technologies.",
              },
              {
                icon: <Bot className="w-8 h-8 text-neon-pink" />,
                title: "AI Solutions",
                description: "Custom AI integrations to automate and enhance your business.",
              },
              {
                icon: <Zap className="w-8 h-8 text-neon-purple" />,
                title: "Automation",
                description: "Streamline your workflows with powerful automation tools.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative p-6 rounded-xl bg-dark-200 border border-gray-800 hover:border-neon-blue/50 transition-colors group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/0 via-neon-pink/5 to-neon-purple/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                <div className="relative">
                  {feature.icon}
                  <h3 className="mt-4 text-xl font-bold text-white">{feature.title}</h3>
                  <p className="mt-2 text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
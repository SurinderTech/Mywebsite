import React from 'react';
import { motion } from 'framer-motion';
import { Code, Bot, Zap, Workflow, Globe, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-neon-blue" />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      features: ["Responsive Design", "Performance Optimization", "SEO Integration", "API Development"]
    },
    {
      icon: <Bot className="w-12 h-12 text-neon-pink" />,
      title: "AI Solutions",
      description: "Intelligent automation and AI-powered features for your business.",
      features: ["Machine Learning", "Natural Language Processing", "Predictive Analytics", "AI Integration"]
    },
    {
      icon: <Zap className="w-12 h-12 text-neon-purple" />,
      title: "Automation",
      description: "Streamline your workflows with custom automation solutions.",
      features: ["Workflow Automation", "Task Scheduling", "Data Processing", "Integration Services"]
    },
    {
      icon: <Workflow className="w-12 h-12 text-neon-blue" />,
      title: "DevOps",
      description: "Streamline your development and deployment processes.",
      features: ["CI/CD Pipeline", "Cloud Infrastructure", "Monitoring", "Security"]
    },
    {
      icon: <Globe className="w-12 h-12 text-neon-pink" />,
      title: "Web Optimization",
      description: "Enhance your website's performance and user experience.",
      features: ["Speed Optimization", "Core Web Vitals", "UX Enhancement", "Analytics"]
    },
    {
      icon: <Database className="w-12 h-12 text-neon-purple" />,
      title: "Database Solutions",
      description: "Robust database design and optimization services.",
      features: ["Database Design", "Performance Tuning", "Data Migration", "Backup Solutions"]
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple bg-clip-text text-transparent"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-gray-400"
          >
            Comprehensive solutions for your digital needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative p-6 rounded-xl bg-dark-200 border border-gray-800 hover:border-neon-blue/50 transition-all group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/0 via-neon-pink/5 to-neon-purple/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative">
                {service.icon}
                <h3 className="mt-4 text-2xl font-bold text-white">{service.title}</h3>
                <p className="mt-2 text-gray-400">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
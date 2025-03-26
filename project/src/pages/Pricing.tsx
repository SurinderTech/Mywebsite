import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: 999,
      description: "Perfect for small projects and startups",
      features: [
        "Custom Web Development",
        "Responsive Design",
        "Basic SEO Setup",
        "3 Revision Rounds",
        "1 Month Support"
      ]
    },
    {
      name: "Pro",
      price: 2499,
      description: "Ideal for growing businesses",
      features: [
        "Everything in Basic",
        "Advanced Features",
        "API Integration",
        "Performance Optimization",
        "3 Months Support",
        "Priority Support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 4999,
      description: "For large-scale applications",
      features: [
        "Everything in Pro",
        "Custom AI Integration",
        "Advanced Analytics",
        "Dedicated Support",
        "6 Months Support",
        "24/7 Priority Support",
        "Custom Features"
      ]
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
            Pricing Plans
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-gray-400"
          >
            Choose the perfect plan for your needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-xl ${
                plan.popular 
                  ? 'bg-gradient-to-b from-dark-200 to-dark border-2 border-neon-blue' 
                  : 'bg-dark-200 border border-gray-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-6 transform -translate-y-1/2">
                  <div className="px-3 py-1 bg-neon-blue text-dark text-sm font-bold rounded-full">
                    Popular
                  </div>
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="ml-2 text-gray-400">/project</span>
              </div>
              <p className="mt-2 text-gray-400">{plan.description}</p>
              
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 text-neon-blue mr-3" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`mt-8 w-full py-3 px-6 rounded-lg font-medium transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg hover:shadow-neon-blue/50'
                    : 'bg-dark-100 text-white hover:bg-neon-blue/10'
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
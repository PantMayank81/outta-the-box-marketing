'use client'

import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      title: "Awareness Campaigns",
      description: "Scroll-stopping social & creative ads that drive attention.",
      icon: "👁️",
      color: "from-blue-500 to-blue-600",
      darkColor: "from-blue-600 to-blue-700",
      features: [
        "Creative ad design & copywriting",
        "Social media strategy & execution",
        "Video content production",
        "Brand awareness metrics & tracking"
      ]
    },
    {
      title: "Engagement Strategies",
      description: "WhatsApp, RCS & gamified flows to deepen conversations.",
      icon: "💬",
      color: "from-teal to-teal-600",
      darkColor: "from-teal-600 to-teal-700",
      features: [
        "WhatsApp Business automation",
        "RCS messaging campaigns",
        "Gamified user experiences",
        "Interactive content creation"
      ]
    },
    {
      title: "Smart Lead Capture",
      description: "AI-optimized landing pages and ICP-driven targeting.",
      icon: "🎯",
      color: "from-coral to-coral-600",
      darkColor: "from-coral-600 to-coral-700",
      features: [
        "AI-powered landing page optimization",
        "ICP research & targeting",
        "Lead scoring & qualification",
        "A/B testing & conversion tracking"
      ]
    },
    {
      title: "Conversion Optimization",
      description: "From cart recovery to retargeting, we turn clicks into sales.",
      icon: "💰",
      color: "from-green-500 to-green-600",
      darkColor: "from-green-600 to-green-700",
      features: [
        "Cart abandonment recovery",
        "Retargeting & remarketing",
        "Sales funnel optimization",
        "Revenue attribution & tracking"
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deepblue to-charcoal dark:from-gray-900 dark:to-gray-800 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
              Our Services
            </h1>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-teal to-coral mx-auto mb-8"
            />
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              From awareness to conversion, we provide end-to-end marketing solutions that drive real results for your D2C brand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="bg-white dark:bg-charcoal rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 h-full">
                  {/* Card Header */}
                  <div className={`bg-gradient-to-br ${service.color} dark:${service.darkColor} p-8 text-white relative overflow-hidden`}>
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-6xl mb-4"
                    >
                      {service.icon}
                    </motion.div>
                    
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className="text-2xl md:text-3xl font-bold mb-4"
                    >
                      {service.title}
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="text-lg opacity-90 leading-relaxed"
                    >
                      {service.description}
                    </motion.p>

                    {/* Decorative Elements */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 0.1, scale: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      className="absolute -top-10 -right-10 w-32 h-32 bg-white rounded-full"
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 0.1, scale: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.7 }}
                      viewport={{ once: true }}
                      className="absolute -bottom-5 -left-5 w-20 h-20 bg-white rounded-full"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-8">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      What's Included:
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.1 + featureIndex * 0.1 + 0.4 
                          }}
                          viewport={{ once: true }}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <motion.span
                            whileHover={{ scale: 1.2 }}
                            className="w-2 h-2 bg-teal dark:bg-coral rounded-full mr-3 flex-shrink-0"
                          />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
                      viewport={{ once: true }}
                      className="mt-6"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full bg-gradient-to-r ${service.color} dark:${service.darkColor} text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg`}
                      >
                        Learn More
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our proven process ensures every campaign is strategically planned, expertly executed, and continuously optimized for maximum impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Research & Strategy", description: "Deep dive into your ICP and market landscape" },
              { step: "02", title: "Creative Development", description: "Design compelling assets that stop the scroll" },
              { step: "03", title: "Launch & Optimize", description: "Deploy campaigns and continuously improve performance" },
              { step: "04", title: "Scale & Grow", description: "Expand successful strategies across all channels" }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-teal to-coral text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal to-coral">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss which services align best with your growth goals and create a custom strategy that delivers results.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-teal px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Your Custom Strategy
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

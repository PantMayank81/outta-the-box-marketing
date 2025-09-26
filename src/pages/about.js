'use client'

import { motion } from 'framer-motion'

export default function About() {
  const features = [
    {
      icon: "🎯",
      title: "ICP Research",
      description: "Deep dive into your ideal customer profile to understand their pain points, behaviors, and buying patterns. We don't guess—we research, analyze, and validate."
    },
    {
      icon: "🔍",
      title: "Lead Qualification",
      description: "Smart lead scoring and qualification systems that separate high-intent prospects from tire-kickers, ensuring your sales team focuses on the right opportunities."
    },
    {
      icon: "🌱",
      title: "Nurture Campaigns",
      description: "Automated, personalized nurture sequences that guide prospects through their buyer's journey, building trust and moving them closer to conversion."
    }
  ]

  const stats = [
    { number: "500+", label: "D2C Brands Helped" },
    { number: "3x", label: "Average ROI Increase" },
    { number: "85%", label: "Lead Quality Score" },
    { number: "24/7", label: "AI-Powered Automation" }
  ]

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
              About Us
            </h1>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-teal to-coral mx-auto mb-8"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                Human-First, AI-Powered
              </h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  At <span className="font-semibold text-teal dark:text-coral">Outta The Box Marketing</span>, we're not just another digital marketing agency. We're a human-first, AI-powered digital marketing agency built specifically for <span className="font-semibold">Millennial & Gen Z D2C founders</span> who understand that growth requires more than just pretty ads and catchy slogans.
                </p>
                <p>
                  We believe in the power of authentic connections, data-driven decisions, and technology that amplifies human creativity. Our approach combines the personal touch of experienced marketers with the efficiency and precision of cutting-edge AI tools.
                </p>
                <p>
                  What sets us apart isn't just our tech stack—it's our deep understanding of the modern consumer journey and our commitment to building genuine relationships between brands and their audiences.
                </p>
              </div>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-teal/10 to-coral/10 dark:from-teal/20 dark:to-coral/20 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-charcoal p-6 rounded-lg shadow-lg text-center"
                  >
                    <div className="text-3xl mb-2">🤖</div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">AI-Powered</h3>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-charcoal p-6 rounded-lg shadow-lg text-center"
                  >
                    <div className="text-3xl mb-2">👥</div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Human-First</h3>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-charcoal p-6 rounded-lg shadow-lg text-center"
                  >
                    <div className="text-3xl mb-2">🎯</div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Targeted</h3>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-charcoal p-6 rounded-lg shadow-lg text-center"
                  >
                    <div className="text-3xl mb-2">📈</div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Results</h3>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
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
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our unique approach combines deep research, intelligent automation, and personalized nurturing to deliver results that matter.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-charcoal rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-teal to-coral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Numbers that speak to our commitment to delivering exceptional results for D2C brands.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Grow Together?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our human-first, AI-powered approach can transform your D2C brand's growth trajectory.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-teal to-coral text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Growth Journey
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

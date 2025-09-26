'use client'

import { motion } from 'framer-motion'
import AnimatedCard from '@/components/AnimatedCard'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Outta The Box
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-semibold text-teal dark:text-coral mb-8"
          >
            Marketing Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
          >
            Creative marketing strategies that break the mold and deliver exceptional results for your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal dark:bg-coral text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal/90 dark:hover:bg-coral/90 transition-colors"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-teal dark:border-coral text-teal dark:text-coral px-8 py-3 rounded-lg font-semibold hover:bg-teal/10 dark:hover:bg-coral/10 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedCard
              title="Digital Strategy"
              description="Comprehensive digital marketing strategies tailored to your business goals and target audience."
              delay={0.1}
            />
            <AnimatedCard
              title="Brand Development"
              description="Create compelling brand identities that resonate with your customers and stand out in the market."
              delay={0.2}
            />
            <AnimatedCard
              title="Content Creation"
              description="Engaging content that tells your story and drives meaningful connections with your audience."
              delay={0.3}
            />
            <AnimatedCard
              title="Social Media"
              description="Strategic social media management that builds communities and drives engagement across platforms."
              delay={0.4}
            />
            <AnimatedCard
              title="Analytics & Insights"
              description="Data-driven insights to optimize your marketing efforts and maximize return on investment."
              delay={0.5}
            />
            <AnimatedCard
              title="Creative Campaigns"
              description="Innovative marketing campaigns that capture attention and deliver measurable results."
              delay={0.6}
            />
          </div>
        </motion.div>
      </div>
    </main>
  )
}

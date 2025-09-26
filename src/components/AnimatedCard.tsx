'use client'

import { motion } from 'framer-motion'

interface AnimatedCardProps {
  title: string
  description: string
  delay?: number
}

export default function AnimatedCard({ title, description, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white dark:bg-charcoal rounded-lg shadow-lg p-6 cursor-pointer border border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  )
}

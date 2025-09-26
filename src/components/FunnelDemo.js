'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FunnelDemo() {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: "Awareness",
      description: "Capture attention and build brand recognition through targeted content, social media presence, and strategic advertising campaigns that reach your ideal audience where they spend their time.",
      color: "from-blue-500 to-blue-600",
      darkColor: "from-blue-600 to-blue-700",
      icon: "👁️"
    },
    {
      title: "Engagement",
      description: "Create meaningful interactions with your audience through compelling content, interactive experiences, and community building that keeps them coming back for more.",
      color: "from-teal to-teal-600",
      darkColor: "from-teal-600 to-teal-700",
      icon: "🤝"
    },
    {
      title: "Lead Capture",
      description: "Convert engaged visitors into qualified leads with strategic opt-in forms, valuable lead magnets, and personalized experiences that build trust and demonstrate value.",
      color: "from-coral to-coral-600",
      darkColor: "from-coral-600 to-coral-700",
      icon: "🎯"
    },
    {
      title: "Conversion",
      description: "Transform leads into paying customers with optimized sales funnels, compelling offers, and seamless user experiences that guide prospects through their buying journey.",
      color: "from-green-500 to-green-600",
      darkColor: "from-green-600 to-green-700",
      icon: "💰"
    }
  ]

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const goToStep = (stepIndex) => {
    setCurrentStep(stepIndex)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goToStep(index)}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300 ${
                  index <= currentStep
                    ? 'bg-teal dark:bg-coral text-white shadow-lg'
                    : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                }`}
              >
                {step.icon}
              </motion.button>
              <span className={`text-sm font-medium mt-2 ${
                index <= currentStep
                  ? 'text-teal dark:text-coral'
                  : 'text-gray-500 dark:text-gray-400'
              }`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>
        
        {/* Progress Line */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-teal to-coral h-2 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className={`bg-gradient-to-br ${steps[currentStep].color} dark:${steps[currentStep].darkColor} rounded-2xl p-8 text-white mb-8`}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-6xl mb-4"
            >
              {steps[currentStep].icon}
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl font-bold mb-4"
            >
              {steps[currentStep].title}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed"
            >
              {steps[currentStep].description}
            </motion.p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                currentStep === 0
                  ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              ← Back
            </motion.button>

            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => goToStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStep
                      ? 'bg-teal dark:bg-coral'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            {currentStep < steps.length - 1 ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextStep}
                className="bg-teal dark:bg-coral text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal/90 dark:hover:bg-coral/90 transition-colors"
              >
                Next →
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-teal to-coral text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Let's Build Your Funnel 🚀
              </motion.button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Step Counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center mt-6"
      >
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Step {currentStep + 1} of {steps.length}
        </span>
      </motion.div>
    </div>
  )
}

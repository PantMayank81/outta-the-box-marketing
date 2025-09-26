'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      metric: "48h",
      title: "Sneakers Sold Out",
      subtitle: "via WhatsApp & Instagram Funnel",
      description: "How we helped a sneaker brand achieve complete sell-out in just 48 hours using a strategic combination of WhatsApp automation and Instagram Stories funnel.",
      image: "/case-sneakers.png",
      results: [
        "Complete inventory sold in 48 hours",
        "2,500+ WhatsApp conversations initiated",
        "85% conversion rate from WhatsApp to purchase",
        "3x increase in average order value"
      ],
      color: "from-blue-500 to-blue-600",
      darkColor: "from-blue-600 to-blue-700"
    },
    {
      id: 2,
      metric: "3x",
      title: "Engagement Uplift",
      subtitle: "for Cosmetics D2C Brand",
      description: "Transformed a struggling cosmetics brand's social media presence with gamified engagement strategies and user-generated content campaigns.",
      image: "/case-cosmetics.png",
      results: [
        "3x increase in social media engagement",
        "150% boost in user-generated content",
        "40% increase in email list growth",
        "2.5x improvement in brand sentiment"
      ],
      color: "from-teal to-teal-600",
      darkColor: "from-teal-600 to-teal-700"
    },
    {
      id: 3,
      metric: "2x",
      title: "Sales Growth",
      subtitle: "in 6 Months through CRO & Retargeting",
      description: "Optimized conversion rates and implemented sophisticated retargeting campaigns that doubled sales for an e-commerce fashion brand.",
      image: "/case-fashion.png",
      results: [
        "2x increase in monthly sales revenue",
        "60% improvement in conversion rate",
        "45% reduction in cart abandonment",
        "3x ROI on retargeting ad spend"
      ],
      color: "from-coral to-coral-600",
      darkColor: "from-coral-600 to-coral-700"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
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
              Case Studies
            </h1>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-teal to-coral mx-auto mb-8"
            />
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Real results from real brands. See how we've helped D2C companies achieve breakthrough growth through strategic marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-20"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                variants={cardVariants}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
              >
                {/* Image Section */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex-1"
                >
                  <div className="relative group">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative overflow-hidden rounded-2xl shadow-2xl"
                    >
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={study.image}
                          alt={`${study.title} case study`}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            // Fallback for missing images
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'flex'
                          }}
                        />
                        {/* Fallback for missing images */}
                        <div className="hidden w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-6xl">
                          📊
                        </div>
                      </div>
                      
                      {/* Overlay with metric */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${study.color} dark:${study.darkColor} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}>
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className="text-white text-center"
                        >
                          <div className="text-6xl font-bold mb-2">{study.metric}</div>
                          <div className="text-lg font-semibold">Result</div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex-1"
                >
                  <div className="max-w-lg">
                    {/* Metric Badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                      className={`inline-block bg-gradient-to-r ${study.color} dark:${study.darkColor} text-white px-6 py-3 rounded-full text-2xl font-bold mb-6`}
                    >
                      {study.metric}
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
                    >
                      {study.title}
                    </motion.h3>

                    {/* Subtitle */}
                    <motion.h4
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="text-xl text-teal dark:text-coral font-semibold mb-6"
                    >
                      {study.subtitle}
                    </motion.h4>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                    >
                      {study.description}
                    </motion.p>

                    {/* Results List */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Key Results:
                      </h5>
                      <ul className="space-y-3">
                        {study.results.map((result, resultIndex) => (
                          <motion.li
                            key={resultIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: 0.6 + resultIndex * 0.1 
                            }}
                            viewport={{ once: true }}
                            className="flex items-center text-gray-600 dark:text-gray-300"
                          >
                            <motion.span
                              whileHover={{ scale: 1.2 }}
                              className={`w-2 h-2 bg-gradient-to-r ${study.color} dark:${study.darkColor} rounded-full mr-3 flex-shrink-0`}
                            />
                            {result}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true }}
                      className="mt-8"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`bg-gradient-to-r ${study.color} dark:${study.darkColor} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg`}
                      >
                        View Full Case Study
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
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
              Proven Track Record
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our results speak for themselves. Here's what we've achieved for our clients across all industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Campaigns Launched" },
              { number: "3.2x", label: "Average ROI" },
              { number: "85%", label: "Client Retention" },
              { number: "24/7", label: "Performance Monitoring" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-teal dark:text-coral mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
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
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your brand achieve similar breakthrough results with our proven strategies.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-teal px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Success Story
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

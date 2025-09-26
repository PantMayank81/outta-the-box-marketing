'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function BlogIndex() {
  const blogPosts = [
    {
      slug: 'ai-seo-google-overviews',
      title: 'AI SEO in the Age of Google Overviews',
      excerpt: 'How Google\'s new AI-powered search overviews are changing the SEO landscape and what D2C brands need to know to stay ahead of the competition.',
      date: 'September 2025',
      readTime: '8 min read',
      category: 'SEO & AI',
      color: 'from-blue-500 to-blue-600',
      darkColor: 'from-blue-600 to-blue-700'
    },
    {
      slug: 'icp-clarity-growth',
      title: 'Why ICP Clarity = Growth',
      excerpt: 'Discover how defining your Ideal Customer Profile with precision can unlock exponential growth opportunities and transform your marketing effectiveness.',
      date: 'August 2025',
      readTime: '6 min read',
      category: 'Strategy',
      color: 'from-teal to-teal-600',
      darkColor: 'from-teal-600 to-teal-700'
    },
    {
      slug: 'end-to-end-funnels',
      title: 'From Awareness to ROI: Full-Funnel Growth Explained',
      excerpt: 'A comprehensive guide to building complete marketing funnels that guide prospects from first awareness through to loyal customers and repeat purchases.',
      date: 'July 2025',
      readTime: '10 min read',
      category: 'Funnel Strategy',
      color: 'from-coral to-coral-600',
      darkColor: 'from-coral-600 to-coral-700'
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
              Marketing Insights
            </h1>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-teal to-coral mx-auto mb-8"
            />
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Stay ahead of the curve with our latest insights on AI-powered marketing, growth strategies, and funnel optimization for D2C brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Deep dives into the strategies and tactics that are driving real results for D2C brands in today's competitive landscape.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-white dark:bg-charcoal rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
                    <div className="p-8 md:p-12">
                      <div className="flex flex-col lg:flex-row gap-8 items-start">
                        {/* Content */}
                        <div className="flex-1">
                          {/* Category Badge */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="mb-4"
                          >
                            <span className={`inline-block bg-gradient-to-r ${post.color} dark:${post.darkColor} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                              {post.category}
                            </span>
                          </motion.div>

                          {/* Title */}
                          <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-teal dark:group-hover:text-coral transition-colors duration-300"
                          >
                            {post.title}
                          </motion.h3>

                          {/* Excerpt */}
                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                            viewport={{ once: true }}
                            className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                          >
                            {post.excerpt}
                          </motion.p>

                          {/* Meta Info */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                            viewport={{ once: true }}
                            className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400"
                          >
                            <span className="flex items-center">
                              <span className="mr-2">📅</span>
                              {post.date}
                            </span>
                            <span className="flex items-center">
                              <span className="mr-2">⏱️</span>
                              {post.readTime}
                            </span>
                          </motion.div>
                        </div>

                        {/* Read More Arrow */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                          viewport={{ once: true }}
                          className="flex-shrink-0"
                        >
                          <div className="w-12 h-12 bg-gradient-to-r from-teal to-coral rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <motion.span
                              animate={{ x: [0, 4, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="text-white text-xl"
                            >
                              →
                            </motion.span>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest marketing insights, growth strategies, and industry trends delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal dark:focus:ring-coral focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-teal to-coral text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
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
              Ready to Implement These Strategies?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's work together to apply these insights to your brand and achieve breakthrough growth.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-teal px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Growth Journey
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

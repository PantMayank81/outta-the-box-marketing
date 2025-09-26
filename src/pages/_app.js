import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/app/globals.css'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={router.asPath}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut"
          }}
          className="flex-1"
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
      
      <Footer />
    </div>
  )
}

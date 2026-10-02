import { motion, useReducedMotion } from 'framer-motion'

function AnimatedCard({ index, children }) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className="card-wrapper">{children}</div>
  }

  return (
    <motion.div
      className="card-wrapper"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.1 }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedCard

import { motion, useReducedMotion } from 'framer-motion'

const hoverScale = { scale: 1.04 }
const tapScale = { scale: 0.97 }
const scaleTransition = { duration: 0.2, ease: 'easeOut' }

function isExternalLink(href) {
  return href.startsWith('http://') || href.startsWith('https://')
}

function Button({ variant = 'primary', href, className = '', type = 'button', onClick, noFill = false, children }) {
  const shouldReduceMotion = useReducedMotion()

  const noFillClass = noFill ? 'button-no-fill' : ''
  const classNames = `button button-${variant} ${noFillClass} ${className}`.replace(/\s+/g, ' ').trim()

  const motionProps = shouldReduceMotion
    ? {}
    : { whileHover: hoverScale, whileTap: tapScale, transition: scaleTransition }

  if (href) {
    const newTabProps = isExternalLink(href)
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}

    return (
      <motion.a href={href} className={classNames} {...newTabProps} {...motionProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} className={classNames} onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  )
}

export default Button

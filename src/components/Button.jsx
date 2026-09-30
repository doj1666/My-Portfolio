import { motion, useReducedMotion } from 'framer-motion'

const hoverScale = { scale: 1.04 }
const tapScale = { scale: 0.97 }
const scaleTransition = { duration: 0.2, ease: 'easeOut' }

// Only links to other websites open in a new tab.
// In-page links (#about) and mailto: links stay in the current tab.
function isExternalLink(href) {
  return href.startsWith('http://') || href.startsWith('https://')
}

function Button({ variant = 'primary', href, className = '', type = 'button', onClick, noFill = false, children }) {
  const shouldReduceMotion = useReducedMotion()
  // noFill keeps the background and text color unchanged on hover and click; movement stays.
  const noFillClass = noFill ? 'button-no-fill' : ''
  const classNames = `button button-${variant} ${noFillClass} ${className}`.replace(/\s+/g, ' ').trim()

  // With reduced motion turned on, the button keeps its color changes but never scales.
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

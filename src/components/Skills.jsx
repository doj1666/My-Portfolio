import { motion, useReducedMotion } from 'framer-motion'

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', ],
  },
  {
    category: 'Backend and Database',
    skills: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    category: 'UI/UX Design',
    skills: ['Figma', 'Wireframing', 'Prototyping', 'Responsive Design'],
  },
  {
    category: 'Tools and Deployment',
    skills: ['Git', 'GitHub', 'Vercel', 'VS Code'],
  },
  {
    category: 'IT Support',
    skills: ['Troubleshooting', 'Hardware and Software Support', 'Network Basics'],
  },
]

// The grid staggers its children, so each group fades in 100ms after the one before it.
const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const groupVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
}

function Skills() {
  const shouldReduceMotion = useReducedMotion()

  // With reduced motion, skip the variants so every group is visible right away.
  const gridMotionProps = shouldReduceMotion
    ? {}
    : {
        variants: gridVariants,
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, amount: 0.2 },
      }
  const groupMotionProps = shouldReduceMotion ? {} : { variants: groupVariants }

  return (
    <div className="skills">
      <h3 className="skills-title">Skills</h3>

      <motion.div className="skills-grid" {...gridMotionProps}>
        {skillGroups.map((group) => (
          <motion.div key={group.category} className="skill-group" {...groupMotionProps}>
            <h4 className="skill-group-title">{group.category}</h4>
            <ul className="tag-list skill-list" aria-label={`${group.category} skills`}>
              {group.skills.map((skill) => (
                <li key={skill} className="tag skill-chip">{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Skills

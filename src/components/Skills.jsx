import { motion, useReducedMotion } from 'framer-motion'

function deviconUrl(name) {
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`
}

const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', logo: deviconUrl('html5') },
      { name: 'CSS', logo: deviconUrl('css3') },
      { name: 'JavaScript', logo: deviconUrl('javascript') },
      { name: 'React', logo: deviconUrl('react') },
      { name: 'Vite', logo: deviconUrl('vitejs') },
    ],
  },
  {
    category: 'Backend and Database',
    skills: [
      { name: 'Node.js', logo: deviconUrl('nodejs') },
      { name: 'Express', logo: deviconUrl('express') },
      { name: 'MongoDB', logo: deviconUrl('mongodb') },
    ],
  },
  {
    category: 'UI/UX Design',
    skills: [
      { name: 'Figma', logo: deviconUrl('figma') },
      { name: 'Wireframing' },
      { name: 'Prototyping' },
      { name: 'Responsive Design' },
    ],
  },
  {
    category: 'Tools and Deployment',
    skills: [
      { name: 'Git', logo: deviconUrl('git') },
      { name: 'GitHub', logo: deviconUrl('github') },
      { name: 'Vercel', logo: deviconUrl('vercel') },
      { name: 'VS Code', logo: deviconUrl('vscode') },
    ],
  },
  {
    category: 'IT Support',
    skills: [
      { name: 'Troubleshooting' },
      { name: 'Hardware and Software Support' },
      { name: 'Network Basics' },
    ],
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
                <li key={skill.name} className="tag skill-chip">
                  {skill.logo && (
                    <img src={skill.logo} alt={skill.name} className="skill-logo" width="18" height="18" />
                  )}
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Skills

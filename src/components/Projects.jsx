import awesomeImage from './awesome.jpg'
import uiImage from './ui.jpg'
import bakanteImage from './bakante.png'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Awesome Todos',
    image: awesomeImage,
    imageAlt: 'Awesome Project',
    description: 'A full-stack todo app where users can add, complete, and delete tasks. Built with React, Node.js, Express, and MongoDB.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://awesome-todos-nzoy.onrender.com',
    githubUrl: '',
  },
  {
    title: 'UI Design Project',
    image: uiImage,
    imageAlt: 'UI Design Project',
    description: 'A design-focused UI challenge that demonstrates my ability to translate concepts into clean, user-friendly interfaces.',
    tags: ['Figma'],
    liveUrl: 'https://www.figma.com/design/DB8FoeFP83eZ2Be3TZkBv9/Untitled?node-id=0-1&t=E9Z053mGvv0EEG7Y-1',
    githubUrl: '',
  },
  {
    title: 'Bakante',
    image: bakanteImage,
    imageAlt: 'Portfolio Project',
    description: 'A community-based web platform that connects local job seekers with nearby part-time and on-demand work opportunities, making hiring and job searching faster, easier, and more reliable.',
    tags: ['Figma'],
    liveUrl: 'https://www.figma.com/proto/5fdvEMZNP3eJESBf8mbNwd/Bakante?node-id=1-2&starting-point-node-id=1%3A2&t=fd8xCImfrS8bEEPd-1',
    githubUrl: '',
  },
  {
    title: 'Portfolio Website',
    image: '/preview1.png',
    imageAlt: 'Portfolio Website',
    description: 'This personal portfolio site, built with React and Vite and deployed on Vercel.',
    tags: ['React', 'Vite', 'Vercel'],
    liveUrl: 'https://diojeh.vercel.app/',
  },
]

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="card-grid project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

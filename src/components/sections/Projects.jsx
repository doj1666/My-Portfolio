import awesomeImage from '../../assets/images/awesome.jpg'
import uiImage from '../../assets/images/ui.jpg'
import bakanteImage from '../../assets/images/bakante.png'
import teechImage from '../../assets/images/teech.png'
import ProjectCard from '../ui/ProjectCard'

const projects = [
  {
    title: 'Awesome Todos',
    image: awesomeImage,
    imageAlt: 'Awesome Project',
    description: 'A full-stack todo app where users can add, complete, and delete tasks.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://awesome-todos-nzoy.onrender.com',
    githubUrl: '',
  },
  {
    title: 'UI Design Project',
    image: uiImage,
    imageAlt: 'UI Design Project',
    description: 'A design-focused UI challenge that turns concepts into clean, user-friendly interfaces.',
    tags: ['Figma'],
    liveUrl: 'https://www.figma.com/design/DB8FoeFP83eZ2Be3TZkBv9/Untitled?node-id=0-1&t=E9Z053mGvv0EEG7Y-1',
    githubUrl: '',
  },
  {
    title: 'Bakante',
    image: bakanteImage,
    imageAlt: 'Portfolio Project',
    description: 'A community-based web platform that connects local job seekers with nearby part-time and on-demand work.',
    tags: ['Figma'],
    liveUrl: 'https://www.figma.com/proto/5fdvEMZNP3eJESBf8mbNwd/Bakante?node-id=1-2&starting-point-node-id=1%3A2&t=fd8xCImfrS8bEEPd-1',
    githubUrl: '',
  },
  {
    title: 'Portfolio Website',
    image: '/preview1.png',
    imageAlt: 'Portfolio Website',
    description: 'My personal portfolio site, built with React and Vite and deployed on Vercel.',
    tags: ['React', 'Vite', 'Vercel'],
    liveUrl: 'https://diojeh.vercel.app/',
  },
  {
    title: 'Teech',
    image: teechImage,
    imageAlt: 'Teech',
    description: 'A web platform where students book consultations with faculty, and faculty manage availability and approve or decline requests.',
    tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL'],
    liveUrl: 'https://teech-app.vercel.app/welcome',
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

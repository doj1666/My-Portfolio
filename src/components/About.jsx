import SocialLinks from './SocialLinks'

const skills = ['React', 'HTML', 'CSS']

function About() {
  return (
    <section id="about" className="section about-section reveal">
      <div className="container">
        <div className="about-content">
          <img src="/me.jpg" alt="Profile Picture" className="profile-image" />

          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="about-paragraph">I am Diojeh, a full-stack developer focused on building modern, responsive, and user-friendly web applications. I work with React, HTML, CSS, and other technologies to turn ideas into functional digital experiences. I'm passionate about continuous learning and contributing to meaningful projects.</p>
            <p className="about-paragraph">When not coding, I enjoy learning new technologies and contributing to open source.</p>

            <ul className="tag-list skill-list" aria-label="Skills">
              {skills.map((skill) => (
                <li key={skill} className="tag">{skill}</li>
              ))}
            </ul>

            <SocialLinks className="about-social-links" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

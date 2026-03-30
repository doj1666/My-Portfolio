

import awesomeImage from './awesome.jpg';
import uiImage from './ui.jpg';
import bakanteImage from './bakante.png';

const Projects = () => (
  <section id="projects">
    <div className="container">
      <h2>Projects</h2>
      <div className="cards">
        <div className="card">
          <img src={awesomeImage} alt="Awesome Project" className="project-img" />
          <div className="card-content">
            <h3>Awesome Todos</h3>
            <p>A full-stack todo app where users can add, complete, and delete tasks. Built with React, Node.js, Express, and MongoDB.</p>

          </div>
        </div>

        <div className="card">
          <img src={uiImage} alt="UI Design Project" className="project-img" />
          <div className="card-content">
            <h3>UI Design Project</h3>
            <p>A design-focused UI challenge that demonstrates my ability to translate concepts into clean, user-friendly interfaces.</p>
          </div>
        </div>

        <div className="card">
          <img src={bakanteImage} alt="Portfolio Project" className="project-img" />
          <div className="card-content">
            <h3>Bakante</h3>
            <p>A community-based web platform that connects local job seekers with nearby part-time and on-demand work opportunities, making hiring and job searching faster, easier, and more reliable.</p>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Projects


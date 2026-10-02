import meImage from '../../assets/images/me.jpg'
import Button from '../ui/Button'

function Home() {
  return (
    <section id="home" className="section home-section">
      <div className="container hero">
        <div className="hero-text">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">Diojeh Mer Villaluna</h1>
          <p className="hero-role">Web Developer and UI/UX Designer</p>
          <div className="hero-buttons">
            <Button variant="primary" href="#projects">View Projects</Button>
            <Button variant="secondary" href="#about" className="button-on-dark" noFill>About Me</Button>
          </div>
        </div>

        <div className="hero-photo">
          <img src={meImage} alt="Diojeh Mer Villaluna" className="hero-image" />
        </div>
      </div>
    </section>
  )
}

export default Home

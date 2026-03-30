import { useEffect } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Services from './components/Services.jsx'
import Footer from './components/Footer.jsx'


function App() {
  useEffect(() => {
    // smooth scroll para sa navs
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
    })
  }, [])

  return (
    <>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Services />
      <Footer />
    </>
  )

}

export default App


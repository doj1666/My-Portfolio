import { useEffect } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    function revealSectionsInView() {
      const hiddenSections = document.querySelectorAll('.reveal:not(.is-visible)')

      hiddenSections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        if (sectionTop < window.innerHeight * 0.9) {
          section.classList.add('is-visible')
        }
      })
    }

    revealSectionsInView()
    window.addEventListener('scroll', revealSectionsInView)

    return () => window.removeEventListener('scroll', revealSectionsInView)
  }, [])

  return (
    <>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App

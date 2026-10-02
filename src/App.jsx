import { useEffect } from 'react'
import Nav from './components/layout/Nav'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Services from './components/sections/Services'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

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

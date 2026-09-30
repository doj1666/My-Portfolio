import SocialLinks from './SocialLinks'

const footerLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="footer reveal">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-name">Diojeh Mer Villaluna</h3>
            <p className="footer-tagline">Thanks for visiting my portfolio! Built with creativity, dedication, and continuous learning.</p>
          </div>

          <div className="footer-links">
            {footerLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="footer-link">{link.label}</a>
            ))}
          </div>

          <SocialLinks className="footer-social" />
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">&copy; {currentYear} Diojeh Mer Villaluna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

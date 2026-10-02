import Button from '../ui/Button'

function Contact() {
  return (
    <section id="contact" className="section contact-section reveal">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="contact-text">Have a project or question? The best way to reach me is by email.</p>
        <Button variant="primary" href="mailto:diojehmer@gmail.com">Email me</Button>
      </div>
    </section>
  )
}

export default Contact

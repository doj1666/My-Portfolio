import ServiceCard from '../ui/ServiceCard'

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications using React, Vite, and modern technologies.',
    icon: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive, and responsive designs that delight users.',
    icon: (
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </>
    ),
  },
  {
    title: 'IT Support',
    description: 'Reliable infrastructure support, troubleshooting, and optimization.',
    icon: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    ),
  },
]

function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className="card-grid service-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

import AnimatedCard from './AnimatedCard'

function ServiceCard({ service, index }) {
  return (
    <AnimatedCard index={index}>
      <article className="card">
        <div className="card-body">
          <div className="service-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {service.icon}
            </svg>
          </div>
          <h3 className="card-title">{service.title}</h3>
          <p className="card-text">{service.description}</p>
        </div>
      </article>
    </AnimatedCard>
  )
}

export default ServiceCard

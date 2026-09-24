import { salon } from "../config.js";

function ServiceList({ title, items }) {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <div className="service-list">
        {items.map((item) => (
          <div className="service-row" key={item.name}>
            <span className="service-row__name">{item.name}</span>
            {salon.showPrices && (
              <span className="service-row__price">from ${item.price}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container section-inner">
        <div className="section-heading">
          <div className="section-heading__text">
            <span className="section-label">Services</span>
            <h2 className="section-title">From a quick nail trim to a full spa day</h2>
          </div>
        </div>

        <div className="service-groups">
          <ServiceList title="Dogs" items={salon.services.dog} />
          {salon.services.cat.length > 0 && (
            <ServiceList title="Cats" items={salon.services.cat} />
          )}
        </div>
      </div>
    </section>
  );
}

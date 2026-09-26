const services = [
  {
    name: "Property sales",
    detail: "Residential, commercial, industrial and land — listed, viewed and closed.",
  },
  {
    name: "Property letting",
    detail: "Finding and placing tenants for landlords across Harare and Bulawayo.",
  },
  {
    name: "Property management",
    detail: "Day-to-day management of rental property on behalf of owners.",
  },
  {
    name: "Investment & consultancy",
    detail: "Advice on buying, holding and structuring property investments.",
  },
  {
    name: "Construction services",
    detail: "Managing build projects from stand to finished structure.",
  },
  {
    name: "House renovations",
    detail: "Upgrading and refurbishing existing homes and rental units.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-line">
      <div className="mx-auto max-w-content px-6 py-16">
        <h2 className="font-display text-3xl text-ink">What we do</h2>
        <p className="mt-3 max-w-lg text-ink/70">
          Six services, one office — from finding a buyer to fixing the roof.
        </p>

        <div className="mt-10 grid grid-cols-1 border-t border-line sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.name}
              className="border-b border-line px-1 py-6 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
            >
              <h3 className="font-display text-xl text-green">
                {service.name}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/70">
                {service.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

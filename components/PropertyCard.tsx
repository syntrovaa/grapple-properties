import Image from "next/image";
import type { Property } from "@/lib/properties";

function formatPrice(price: number) {
  return `US$${price.toLocaleString("en-US")}`;
}

function whatsappLink(property: Property) {
  const message = `Hi, I'm interested in the ${property.title} in ${property.location} (${formatPrice(
    property.price
  )}). Is it still available?`;
  return `https://wa.me/263777251575?text=${encodeURIComponent(message)}`;
}

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <a
      href={whatsappLink(property)}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col border border-line bg-card transition-colors hover:border-green"
    >
      <div className="relative h-48 w-full bg-green-soft">
        {property.image ? (
          <Image
            src={property.image}
            alt={property.location}
            fill
            sizes="(min-width: 1024px) 380px, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-display text-sm italic text-green/70">
              {property.city}
            </span>
          </div>
        )}
        <span className="absolute left-0 top-0 bg-green px-3 py-1 text-xs font-medium tracking-wide text-white">
          {property.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-xl text-ink group-hover:text-green">
            {property.title}
          </h3>
          <p className="text-sm text-ink/60">{property.location}</p>
        </div>

        <p className="font-display text-2xl text-gold">
          {formatPrice(property.price)}
        </p>

        <p className="text-sm text-ink/70">{property.size}</p>

        <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-1 border-t border-line pt-3 text-xs text-ink/60">
          {property.bedrooms && <li>{property.bedrooms} bed</li>}
          {property.bathrooms && <li>{property.bathrooms} bath</li>}
          {property.features.slice(0, 3).map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <p className="text-xs font-medium text-green opacity-0 transition-opacity group-hover:opacity-100">
          Enquire on WhatsApp →
        </p>
      </div>
    </a>
  );
}

"use client";

import { useMemo, useState } from "react";
import { properties } from "@/lib/properties";
import PropertyCard from "./PropertyCard";

const cities = ["All towns", "Harare", "Bulawayo"] as const;
const types = ["All types", "House", "Stand", "Industrial", "Commercial"] as const;
const MAX_BUDGET = 1400000;

export default function PropertiesSection() {
  const [city, setCity] = useState<(typeof cities)[number]>("All towns");
  const [type, setType] = useState<(typeof types)[number]>("All types");
  const [maxPrice, setMaxPrice] = useState(MAX_BUDGET);

  const filtered = useMemo(() => {
    return properties.filter((property) => {
      const matchesCity = city === "All towns" || property.city === city;
      const matchesType = type === "All types" || property.type === type;
      const matchesPrice = property.price <= maxPrice;
      return matchesCity && matchesType && matchesPrice;
    });
  }, [city, type, maxPrice]);

  return (
    <section id="properties" className="border-b border-line bg-sand">
      <div className="mx-auto max-w-content px-6 py-16">
        <div className="max-w-lg">
          <h2 className="font-display text-3xl text-ink">Current listings</h2>
          <p className="mt-3 text-ink/70">
            A sample of properties on our books right now. Filter by town,
            type or budget.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-end gap-6 border border-line bg-card p-5">
          <label className="flex flex-col gap-1 text-sm">
            <span className="text-ink/60">Town</span>
            <select
              value={city}
              onChange={(event) => setCity(event.target.value as typeof city)}
              className="border border-line bg-card px-3 py-2 text-ink"
            >
              {cities.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1 text-sm">
            <span className="text-ink/60">Property type</span>
            <select
              value={type}
              onChange={(event) => setType(event.target.value as typeof type)}
              className="border border-line bg-card px-3 py-2 text-ink"
            >
              {types.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-1 min-w-[220px] flex-col gap-1 text-sm">
            <span className="text-ink/60">
              Up to US${maxPrice.toLocaleString("en-US")}
            </span>
            <input
              type="range"
              min={50000}
              max={MAX_BUDGET}
              step={10000}
              value={maxPrice}
              onChange={(event) => setMaxPrice(Number(event.target.value))}
              className="accent-green"
            />
          </label>
        </div>

        {filtered.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="mt-8 border border-line bg-card p-10 text-center">
            <p className="text-ink/70">
              Nothing in this range yet. Widen the budget or try another
              town — or WhatsApp us and we&apos;ll match you directly.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

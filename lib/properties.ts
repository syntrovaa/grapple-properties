export type Property = {
  id: string;
  title: string;
  location: string;
  city: "Harare" | "Bulawayo";
  type: "House" | "Stand" | "Industrial" | "Commercial";
  status: "For Sale" | "For Rent";
  price: number;
  size: string;
  bedrooms?: number;
  bathrooms?: number;
  features: string[];
  image?: string;
};

export const properties: Property[] = [
  {
    id: "pomona-city",
    title: "2 Bedroom Cottage",
    location: "Pomona City, Harare",
    city: "Harare",
    type: "House",
    status: "For Sale",
    price: 130000,
    size: "588 m² stand",
    bedrooms: 2,
    features: ["Solar powered", "Solar geyser", "Borehole", "Water tank", "Cession"],
    image: "/images/property-aerial-1.jpg",
  },
  {
    id: "arlington-estate",
    title: "4 Bedroom Home",
    location: "Arlington Estate, Harare",
    city: "Harare",
    type: "House",
    status: "For Sale",
    price: 365000,
    size: "2,000 m² stand",
    bedrooms: 4,
    bathrooms: 3,
    features: ["3 en-suite bedrooms", "Borehole"],
    image: "/images/property-aerial-2.jpg",
  },
  {
    id: "graniteside-industrial",
    title: "Industrial Property",
    location: "Graniteside, Harare",
    city: "Harare",
    type: "Industrial",
    status: "For Sale",
    price: 1350000,
    size: "3,347 m² land",
    features: ["700 m² warehouse", "5 offices", "Workshop", "Overhead crane", "Borehole", "6 x 10,000L water tanks"],
  },
  {
    id: "westgate-sandton",
    title: "4 Bedroom Home (80% Complete)",
    location: "Westgate / Sandton Park, Harare",
    city: "Harare",
    type: "House",
    status: "For Sale",
    price: 80000,
    size: "900 m² stand",
    bedrooms: 4,
    features: ["Approx. 80% complete build"],
  },
  {
    id: "khumalo-bulawayo",
    title: "3 Bedroom Home",
    location: "Khumalo, Bulawayo",
    city: "Bulawayo",
    type: "House",
    status: "For Sale",
    price: 125000,
    size: "1,390 m² stand",
    bedrooms: 3,
    features: ["Borehole", "2 JoJo tanks", "5KVA solar system", "Solar geyser", "Electric fence & gate", "Clean title deeds"],
  },
];

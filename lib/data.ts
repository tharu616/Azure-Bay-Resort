export type Room = {
  id: string;
  name: string;
  category: "Deluxe" | "Suite" | "Villa";
  price: number;
  size: string;
  guests: number;
  image: string;
  short: string;
  description: string;
  amenities: string[];
};

export const formatLKR = (n: number) => `LKR ${n.toLocaleString("en-US")}`;

export const rooms: Room[] = [
  {
    id: "ocean-deluxe",
    name: "Ocean Deluxe",
    category: "Deluxe",
    price: 55000,
    size: "38 m²",
    guests: 2,
    image: "/images/room-1.jpg",
    short: "Private balcony with sea views.",
    description:
      "A calm, light-filled room with a king bed, rain shower and a private balcony facing the Indian Ocean. Ideal for couples seeking a quiet escape.",
    amenities: ["Free Wi-Fi", "Air conditioning", "Sea view balcony", "Breakfast included"],
  },
  {
    id: "garden-deluxe",
    name: "Garden Deluxe",
    category: "Deluxe",
    price: 45000,
    size: "35 m²",
    guests: 2,
    image: "/images/room-2.jpg",
    short: "Tropical garden outlook.",
    description:
      "Surrounded by palms and frangipani, this room offers a peaceful retreat with a cosy reading nook and a private terrace.",
    amenities: ["Free Wi-Fi", "Air conditioning", "Garden terrace", "Breakfast included"],
  },
  {
    id: "bay-suite",
    name: "Bay Suite",
    category: "Suite",
    price: 78000,
    size: "58 m²",
    guests: 3,
    image: "/images/room-2.jpg",
    short: "Spacious suite with lounge.",
    description:
      "A separate living area, a deep soaking tub and floor-to-ceiling windows frame the bay. Perfect for longer stays.",
    amenities: ["Free Wi-Fi", "Lounge area", "Soaking tub", "Mini bar", "Breakfast included"],
  },
  {
    id: "royal-suite",
    name: "Royal Suite",
    category: "Suite",
    price: 96000,
    size: "72 m²",
    guests: 4,
    image: "/images/room-3.jpg",
    short: "Two bedrooms, panoramic views.",
    description:
      "Our largest suite features two bedrooms, a dining area and a wraparound balcony with sunset views over the bay.",
    amenities: ["Free Wi-Fi", "Two bedrooms", "Wraparound balcony", "Butler service", "Mini bar"],
  },
  {
    id: "royal-villa",
    name: "Royal Villa",
    category: "Villa",
    price: 125000,
    size: "110 m²",
    guests: 4,
    image: "/images/room-3.jpg",
    short: "Plunge pool and private garden.",
    description:
      "A private villa with its own plunge pool, outdoor shower and tropical garden, steps from the beach.",
    amenities: ["Private pool", "Outdoor shower", "Butler service", "Free Wi-Fi", "Breakfast included"],
  },
];

export const categories = ["All", "Deluxe", "Suite", "Villa"] as const;
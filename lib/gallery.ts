export type GalleryItem = {
  src: string;
  alt: string;
  category: "Resort" | "Dining" | "Beach" | "Wellness";
  ratio: "aspect-[3/4]" | "aspect-[4/3]" | "aspect-square";
};

export const galleryItems: GalleryItem[] = [
  { src: "/images/gallery/g1.jpg", alt: "Resort pool at sunset", category: "Resort", ratio: "aspect-[3/4]" },
  { src: "/images/gallery/g2.jpg", alt: "Beachfront dining table", category: "Dining", ratio: "aspect-[4/3]" },
  { src: "/images/gallery/g3.jpg", alt: "Golden Mirissa beach", category: "Beach", ratio: "aspect-square" },
  { src: "/images/gallery/g4.jpg", alt: "Ocean view suite", category: "Resort", ratio: "aspect-[4/3]" },
  { src: "/images/gallery/g5.jpg", alt: "Seafood platter", category: "Dining", ratio: "aspect-[3/4]" },
  { src: "/images/gallery/g6.jpg", alt: "Spa treatment room", category: "Wellness", ratio: "aspect-[4/3]" },
  { src: "/images/gallery/g7.jpg", alt: "Palm trees at dawn", category: "Beach", ratio: "aspect-[3/4]" },
  { src: "/images/gallery/g8.jpg", alt: "Poolside yoga", category: "Wellness", ratio: "aspect-square" },
];

export const galleryCategories = ["All", "Resort", "Dining", "Beach", "Wellness"] as const;
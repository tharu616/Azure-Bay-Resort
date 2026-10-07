import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import GalleryGrid from "@/components/sections/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Azure Bay Resort",
  description: "A glimpse of life at Azure Bay: rooms, dining, beach and wellness in Mirissa.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader eyebrow="Gallery" title="Moments at Azure Bay" image="/images/Hero.jpg" />
      <GalleryGrid />
    </>
  );
}
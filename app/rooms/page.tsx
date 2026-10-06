import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import RoomsExplorer from "@/components/sections/RoomsExplorer";

export const metadata: Metadata = {
  title: "Rooms & Suites | Azure Bay Resort",
  description: "Explore our ocean-view deluxe rooms, bay suites and private villas in Mirissa.",
};

export default function RoomsPage() {
  return (
    <>
      <PageHeader eyebrow="Accommodation" title="Rooms & Suites" image="/images/room-1.jpg" />
      <RoomsExplorer />
    </>
  );
}
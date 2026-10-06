import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import MenuTabs from "@/components/sections/MenuTabs";
import Specials from "@/components/sections/Specials";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui-custom/SectionHeading";

export const metadata: Metadata = {
  title: "Dining | Azure Bay Resort",
  description: "Fresh seafood and island flavours served beside the Indian Ocean in Mirissa.",
};

export default function DiningPage() {
  return (
    <>
      <PageHeader eyebrow="Restaurant" title="Taste the Coast" image="/images/dining.jpg" />

      <section className="px-6 pt-24">
        <SectionHeading eyebrow="Our Menu" title="Fresh from Sea & Garden" />
      </section>
      <MenuTabs />
      <Specials />

      <section className="bg-secondary px-6 py-24 text-center">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-5xl">Reserve Your Table</h2>
          <p className="mx-auto mt-4 max-w-md text-navy/70">
            Open daily, 7:00 AM to 10:30 PM. Sunset tables book fast.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-navy px-8 py-3 text-sm uppercase tracking-widest text-cream transition-colors hover:bg-gold hover:text-navy"
          >
            Reserve Now
          </Link>
        </Reveal>
      </section>
    </>
  );
}
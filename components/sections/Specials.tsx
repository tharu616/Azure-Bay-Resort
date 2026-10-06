import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui-custom/SectionHeading";
import { specials } from "@/lib/menu";
import { formatLKR } from "@/lib/data";

export default function Specials() {
  return (
    <section className="bg-navy py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Chef's Selection" title="Signature Experiences" light />
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {specials.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.15}>
              <div className="group relative h-96 overflow-hidden rounded-2xl">
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                <div className="absolute bottom-0 p-8">
                  <h3 className="font-serif text-3xl text-cream">{s.name}</h3>
                  <p className="mt-2 max-w-sm text-sm text-cream/70">{s.desc}</p>
                  <p className="mt-4 text-gold">{formatLKR(s.price)} per person</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui-custom/SectionHeading";

const rooms = [
  { img: "/images/room-1.jpg", name: "Ocean Deluxe", price: "LKR 55,000", desc: "Private balcony with sea views." },
  { img: "/images/room-2.jpg", name: "Bay Suite", price: "LKR 78,000", desc: "Spacious suite with a lounge area." },
  { img: "/images/room-3.jpg", name: "Royal Villa", price: "LKR 125,000", desc: "Plunge pool and private garden." },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Welcome</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">A Sanctuary by the Sea</h2>
          <p className="mt-6 leading-relaxed text-navy/70">
            Nestled on the golden shores of Mirissa, Azure Bay blends Sri Lankan warmth with
            refined modern comfort. Wake to the sound of waves, dine on the freshest catch,
            and unwind in spaces designed for stillness.
          </p>
          <Link
            href="/rooms"
            className="mt-8 inline-block border-b border-gold pb-1 text-sm uppercase tracking-widest text-navy transition-colors hover:text-gold"
          >
            Discover Our Rooms
          </Link>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/about.jpg"
              alt="Resort pool at sunset"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </Reveal>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Accommodation" title="Rooms & Suites" />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {rooms.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.15}>
                <Link href="/rooms" className="group block overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={r.img}
                      alt={r.name}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl">{r.name}</h3>
                    <p className="mt-2 text-sm text-navy/70">{r.desc}</p>
                    <p className="mt-4 text-gold">From {r.price} / night</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/dining.jpg"
          alt="Fine dining at Azure Bay"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <Reveal className="relative z-10 px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Dining</p>
          <h2 className="mt-4 font-serif text-4xl text-cream md:text-6xl">Taste the Coast</h2>
          <p className="mx-auto mt-6 max-w-xl text-cream/80">
            Fresh seafood, island spices and a chef&apos;s tasting menu, served beside the sea.
          </p>
          <Link
            href="/dining"
            className="mt-8 inline-block rounded-full bg-gold px-8 py-3 text-sm uppercase tracking-widest text-navy transition-all hover:bg-cream"
          >
            View Menu
          </Link>
        </Reveal>
      </section>
    </>
  );
}
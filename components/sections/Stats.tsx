import Counter from "@/components/motion/Counter";
import Reveal from "@/components/motion/Reveal";

const stats = [
  { value: 48, suffix: "", label: "Luxury Rooms" },
  { value: 12000, suffix: "+", label: "Happy Guests" },
  { value: 15, suffix: "", label: "Years of Hospitality" },
  { value: 4, suffix: "", label: "Dining Experiences" },
];

export default function Stats() {
  return (
    <section className="bg-navy py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 text-center md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1}>
            <p className="font-serif text-5xl text-gold md:text-6xl">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-cream/70">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
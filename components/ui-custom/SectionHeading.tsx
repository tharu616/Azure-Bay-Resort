import Reveal from "@/components/motion/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      <h2 className={`mt-4 font-serif text-4xl md:text-5xl ${light ? "text-cream" : "text-navy"}`}>
        {title}
      </h2>
      <div className="mx-auto mt-6 h-px w-20 bg-gold" />
    </Reveal>
  );
}
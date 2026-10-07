"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui-custom/SectionHeading";

const reviews = [
  { name: "Amaya Perera", from: "Colombo", text: "The sea-view suite and the sunset dinner made our anniversary unforgettable. Service was warm and effortless." },
  { name: "James Whitaker", from: "London", text: "Easily the best stay on the south coast. The seafood at the restaurant was outstanding." },
  { name: "Nimali Fernando", from: "Kandy", text: "Calm, beautiful and spotless. The villa pool at dawn is something I will never forget." },
];

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  const r = reviews[i];

  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <SectionHeading eyebrow="Guest Stories" title="Loved by Our Guests" />
      <div className="relative mt-14 min-h-[220px]">
        <Quote className="mx-auto text-gold" size={36} />
        <AnimatePresence mode="wait">
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mt-6 font-serif text-2xl leading-relaxed md:text-3xl">&ldquo;{r.text}&rdquo;</p>
            <p className="mt-6 text-sm uppercase tracking-widest text-gold">
              {r.name} · {r.from}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-8 flex justify-center gap-3">
        {reviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Show review ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${idx === i ? "w-8 bg-gold" : "w-2 bg-navy/20"}`}
          />
        ))}
      </div>
    </section>
  );
}
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const words = "Where the Ocean Meets Elegance".split(" ");

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
      >
        <Image src="/images/Hero.jpg" alt="Azure Bay Resort beachfront" fill priority className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/40 to-navy/80" />

      <div className="relative z-10 px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-sm uppercase tracking-[0.4em] text-gold"
        >
          Mirissa · Sri Lanka
        </motion.p>

        <h1 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-tight text-cream md:text-7xl lg:text-8xl">
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block pr-3"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="rounded-full bg-gold px-8 py-3 text-sm uppercase tracking-widest text-navy transition-all duration-300 hover:bg-cream hover:shadow-xl"
          >
            Book Your Stay
          </Link>
          <Link
            href="/dining"
            className="rounded-full border border-cream/60 px-8 py-3 text-sm uppercase tracking-widest text-cream transition-all duration-300 hover:border-gold hover:text-gold"
          >
            Explore Dining
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 h-12 w-px -translate-x-1/2 bg-gold/70"
        animate={{ scaleY: [0, 1, 0], originY: 0 }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
    </section>
  );
}
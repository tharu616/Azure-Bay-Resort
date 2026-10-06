"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PageHeader({
  eyebrow,
  title,
  image,
}: {
  eyebrow: string;
  title: string;
  image: string;
}) {
  return (
    <section className="relative flex h-[55vh] min-h-[380px] items-end overflow-hidden">
      <Image src={image} alt="" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/60" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-sm uppercase tracking-[0.3em] text-gold"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-3 font-serif text-5xl text-cream md:text-7xl"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
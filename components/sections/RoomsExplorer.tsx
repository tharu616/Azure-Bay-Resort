"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import RoomCard from "./RoomCard";
import { rooms, categories, formatLKR, type Room } from "@/lib/data";

export default function RoomsExplorer() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [selected, setSelected] = useState<Room | null>(null);

  const filtered = active === "All" ? rooms : rooms.filter((r) => r.category === active);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-6 py-2 text-sm uppercase tracking-widest transition-all duration-300 ${
              active === c
                ? "border-gold bg-gold text-navy"
                : "border-navy/20 text-navy hover:border-gold hover:text-gold"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((room) => (
            <motion.div
              key={room.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <RoomCard room={room} onOpen={() => setSelected(room)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-3xl overflow-hidden bg-cream p-0 sm:max-w-3xl">
          {selected && (
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-64">
                <Image src={selected.image} alt={selected.name} fill className="object-cover" />
              </div>
              <div className="p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-gold">{selected.category}</p>
                <DialogTitle className="mt-2 font-serif text-3xl text-navy">{selected.name}</DialogTitle>
                <DialogDescription className="mt-4 text-sm leading-relaxed text-navy/70">
                  {selected.description}
                </DialogDescription>
                <ul className="mt-6 space-y-2 text-sm">
                  {selected.amenities.map((a) => (
                    <li key={a} className="flex items-center gap-2">
                      <Check size={16} className="text-gold" /> {a}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center justify-between">
                  <p className="font-serif text-2xl text-navy">
                    {formatLKR(selected.price)}
                    <span className="text-sm text-navy/50"> / night</span>
                  </p>
                  <Link
                    href="/contact"
                    className="rounded-full bg-navy px-6 py-2 text-sm uppercase tracking-widest text-cream transition-colors hover:bg-gold hover:text-navy"
                  >
                    Book
                  </Link>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
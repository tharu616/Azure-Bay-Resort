"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { galleryItems, galleryCategories } from "@/lib/gallery";

export default function GalleryGrid() {
  const [active, setActive] = useState<(typeof galleryCategories)[number]>("All");
  const [index, setIndex] = useState<number | null>(null);

  const items = active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);

  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length]
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, next, prev]);

  const current = index !== null ? items[index] : null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-wrap justify-center gap-3">
        {galleryCategories.map((c) => (
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

      <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <motion.button
              key={item.src}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIndex(i)}
              className={`group relative mb-5 block w-full overflow-hidden rounded-2xl ${item.ratio} focus-visible:ring-2 focus-visible:ring-gold`}
              aria-label={`Open ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-navy/80 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="text-left text-sm text-cream">{item.alt}</span>
                <ZoomIn className="text-gold" size={20} />
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <Dialog open={index !== null} onOpenChange={(o) => !o && setIndex(null)}>
        <DialogContent className="max-w-5xl border-0 bg-navy p-0 sm:max-w-5xl">
          <DialogTitle className="sr-only">{current?.alt ?? "Gallery image"}</DialogTitle>
          <DialogDescription className="sr-only">Gallery lightbox</DialogDescription>
          {current && (
            <div className="relative h-[75vh] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0"
                >
                  <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
                </motion.div>
              </AnimatePresence>

              <button
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-navy/70 p-3 text-cream transition-colors hover:bg-gold hover:text-navy"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={next}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-navy/70 p-3 text-cream transition-colors hover:bg-gold hover:text-navy"
              >
                <ChevronRight size={22} />
              </button>

              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-navy/70 px-4 py-1 text-xs tracking-widest text-cream">
                {current.alt} · {index! + 1}/{items.length}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
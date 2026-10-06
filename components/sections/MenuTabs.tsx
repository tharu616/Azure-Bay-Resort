"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { menu } from "@/lib/menu";
import { formatLKR } from "@/lib/data";

const tabs = Object.keys(menu);

export default function MenuTabs() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <div className="flex justify-center gap-8 border-b border-navy/10">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className="relative pb-4 text-sm uppercase tracking-[0.25em] transition-colors hover:text-gold"
          >
            <span className={active === t ? "text-gold" : "text-navy/60"}>{t}</span>
            {active === t && (
              <motion.span
                layoutId="menu-underline"
                className="absolute -bottom-px left-0 h-0.5 w-full bg-gold"
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.ul
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="mt-12 space-y-8"
        >
          {menu[active].map((item) => (
            <li key={item.name} className="group">
              <div className="flex items-baseline gap-3">
                <h3 className="font-serif text-2xl transition-colors group-hover:text-gold">
                  {item.name}
                </h3>
                {item.tag && (
                  <span className="rounded-full border border-gold/50 px-2 py-0.5 text-[10px] uppercase tracking-widest text-gold">
                    {item.tag}
                  </span>
                )}
                <span className="mb-1 flex-1 border-b border-dotted border-navy/25" />
                <span className="text-gold">{formatLKR(item.price)}</span>
              </div>
              <p className="mt-1 text-sm text-navy/60">{item.desc}</p>
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </section>
  );
}
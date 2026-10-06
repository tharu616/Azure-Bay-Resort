"use client";
import Image from "next/image";
import { Users, Maximize } from "lucide-react";
import { formatLKR, type Room } from "@/lib/data";

export default function RoomCard({ room, onOpen }: { room: Room; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="group w-full overflow-hidden rounded-2xl bg-card text-left shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-gold"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-navy/80 px-3 py-1 text-xs uppercase tracking-widest text-gold backdrop-blur">
          {room.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl">{room.name}</h3>
        <p className="mt-2 text-sm text-navy/70">{room.short}</p>
        <div className="mt-4 flex items-center gap-4 text-xs text-navy/60">
          <span className="flex items-center gap-1"><Users size={14} /> {room.guests} guests</span>
          <span className="flex items-center gap-1"><Maximize size={14} /> {room.size}</span>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <p className="text-gold">
            {formatLKR(room.price)} <span className="text-xs text-navy/50">/ night</span>
          </p>
          <span className="relative text-sm uppercase tracking-widest">
            View
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
          </span>
        </div>
      </div>
    </button>
  );
}
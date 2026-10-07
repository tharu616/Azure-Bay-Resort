import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import BookingForm from "@/components/sections/BookingForm";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Contact & Booking | Azure Bay Resort",
  description: "Reserve your stay or table at Azure Bay Resort, Mirissa, Sri Lanka.",
};

const info = [
  { icon: MapPin, title: "Address", text: "12 Beach Road, Mirissa, Southern Province" },
  { icon: Phone, title: "Phone / WhatsApp", text: "+94 76 153 5759" },
  { icon: Mail, title: "Email", text: "stay@azurebay.lk" },
  { icon: Clock, title: "Reception", text: "Open 24 hours · Restaurant 7:00 AM – 10:30 PM" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Reservations" title="Plan Your Escape" image="/images/contact.jpg" />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-2">
          {info.map((i, idx) => (
            <Reveal key={i.title} delay={idx * 0.1}>
              <div className="flex gap-4 rounded-xl border border-navy/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg">
                <i.icon className="mt-1 shrink-0 text-gold" size={22} />
                <div>
                  <h4 className="font-serif text-lg">{i.title}</h4>
                  <p className="text-sm text-navy/70">{i.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="lg:col-span-3">
          <BookingForm />
        </Reveal>
      </section>

      <section className="px-6 pb-24">
        <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-2xl shadow-xl">
          <iframe
            title="Azure Bay Resort location map"
            src="https://www.google.com/maps?q=Mirissa+Beach+Sri+Lanka&output=embed"
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </section>
    </>
  );
}
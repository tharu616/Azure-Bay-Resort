"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { rooms } from "@/lib/data";

type Form = {
  name: string;
  email: string;
  phone: string;
  room: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  message: string;
};
type Errors = Partial<Record<keyof Form, string>>;

const initial: Form = {
  name: "",
  email: "",
  phone: "",
  room: rooms[0].name,
  checkIn: "",
  checkOut: "",
  guests: "2",
  message: "",
};

const today = () => new Date().toISOString().split("T")[0];

function validate(f: Form): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = "Enter a valid email address.";
  if (!/^\+?[0-9\s-]{9,15}$/.test(f.phone)) e.phone = "Enter a valid phone number.";
  if (!f.checkIn) e.checkIn = "Select a check-in date.";
  else if (f.checkIn < today()) e.checkIn = "Check-in cannot be in the past.";
  if (!f.checkOut) e.checkOut = "Select a check-out date.";
  else if (f.checkIn && f.checkOut <= f.checkIn) e.checkOut = "Check-out must be after check-in.";
  const g = Number(f.guests);
  if (!g || g < 1 || g > 6) e.guests = "Guests must be between 1 and 6.";
  return e;
}

const field =
  "w-full rounded-lg border border-navy/15 bg-card px-4 py-3 text-sm text-navy outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/30";

export default function BookingForm() {
  const [form, setForm] = useState<Form>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (k: keyof Form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((p) => ({ ...p, [k]: e.target.value }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  const Err = ({ k }: { k: keyof Form }) =>
    errors[k] ? <p className="mt-1 text-xs text-red-600">{errors[k]}</p> : null;

  return (
    <div className="rounded-2xl bg-card p-8 shadow-xl md:p-10">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex min-h-[420px] flex-col items-center justify-center text-center"
          >
            <CheckCircle2 size={64} className="text-gold" />
            <h3 className="mt-6 font-serif text-3xl">Request Received</h3>
            <p className="mt-3 max-w-sm text-sm text-navy/70">
              Thank you, {form.name.split(" ")[0]}. Our team will confirm your {form.room} booking by
              email within 24 hours.
            </p>
            <button
              onClick={() => {
                setForm(initial);
                setSent(false);
              }}
              className="mt-8 text-sm uppercase tracking-widest text-gold underline-offset-4 hover:underline"
            >
              Make another booking
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} noValidate exit={{ opacity: 0 }} className="space-y-5">
            <h3 className="font-serif text-3xl">Book Your Stay</h3>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <input className={field} placeholder="Full name" value={form.name} onChange={set("name")} />
                <Err k="name" />
              </div>
              <div>
                <input className={field} type="email" placeholder="Email" value={form.email} onChange={set("email")} />
                <Err k="email" />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <input className={field} placeholder="Phone (+94 77 123 4567)" value={form.phone} onChange={set("phone")} />
                <Err k="phone" />
              </div>
              <select className={field} value={form.room} onChange={set("room")}>
                {rooms.map((r) => (
                  <option key={r.id}>{r.name}</option>
                ))}
              </select>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              <div>
                <label className="mb-1 block text-xs uppercase tracking-widest text-navy/50">Check-in</label>
                <input className={field} type="date" min={today()} value={form.checkIn} onChange={set("checkIn")} />
                <Err k="checkIn" />
              </div>
              <div>
                <label className="mb-1 block text-xs uppercase tracking-widest text-navy/50">Check-out</label>
                <input className={field} type="date" min={form.checkIn || today()} value={form.checkOut} onChange={set("checkOut")} />
                <Err k="checkOut" />
              </div>
              <div>
                <label className="mb-1 block text-xs uppercase tracking-widest text-navy/50">Guests</label>
                <input className={field} type="number" min={1} max={6} value={form.guests} onChange={set("guests")} />
                <Err k="guests" />
              </div>
            </div>

            <textarea
              className={field}
              rows={4}
              placeholder="Special requests (optional)"
              value={form.message}
              onChange={set("message")}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-navy py-3 text-sm uppercase tracking-widest text-cream transition-all duration-300 hover:bg-gold hover:text-navy disabled:opacity-60"
            >
              {loading ? "Sending..." : "Request Booking"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
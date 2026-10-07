import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-navy px-6 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-gold">Error 404</p>
      <h1 className="mt-4 font-serif text-5xl text-cream md:text-7xl">Lost at Sea</h1>
      <p className="mt-4 max-w-md text-cream/70">The page you are looking for has drifted away.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-gold px-8 py-3 text-sm uppercase tracking-widest text-navy transition-colors hover:bg-cream"
      >
        Back to Home
      </Link>
    </section>
  );
}
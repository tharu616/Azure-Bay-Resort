import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-3xl text-cream">
            Azure<span className="text-gold"> Bay</span>
          </h3>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            A beachfront sanctuary on Sri Lanka&apos;s southern coast, where
            ocean calm meets fine dining.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {["rooms", "dining", "gallery", "contact"].map((p) => (
              <li key={p}>
                <Link href={`/${p}`} className="capitalize transition-colors hover:text-gold">
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold">Visit Us</h4>
          <p className="mt-4 text-sm leading-relaxed">
            12 Beach Road, Mirissa
            <br />
            Southern Province, Sri Lanka
            <br />
            +94 77 123 4567
            <br />
            stay@azurebay.lk
          </p>
        </div>
      </div>
      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Azure Bay Resort. All rights reserved.
      </div>
    </footer>
  );
}
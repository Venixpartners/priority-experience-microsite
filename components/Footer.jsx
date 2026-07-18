import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-mist">
      <div className="wrap py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand text-xs font-bold text-white">
                P
              </span>
              <span className="text-sm font-semibold">Priority Experience</span>
            </div>
            <p className="mt-3 text-sm text-slate2">
              A clearer, more dependable food delivery experience for frequent
              city customers.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-col gap-2 text-sm md:flex-row md:gap-6">
              <li><Link className="text-slate2 hover:text-ink" href="/">Home</Link></li>
              <li><Link className="text-slate2 hover:text-ink" href="/offering">Offering</Link></li>
              <li><Link className="text-slate2 hover:text-ink" href="/pricing">Pricing</Link></li>
              <li><Link className="text-slate2 hover:text-ink" href="/trust">Trust</Link></li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-line pt-6">
          <p className="text-xs text-slate2">
            Academic prototype only. Not affiliated with Uber Technologies, Inc.
            All product names and trademarks are the property of their respective
            owners. Pricing and plan details shown on this site are prototype
            concepts and require validation.
          </p>
        </div>
      </div>
    </footer>
  );
}

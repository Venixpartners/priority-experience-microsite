import Link from "next/link";

export default function CtaBlock({
  title = "Join the Priority Experience",
  text = "Be first in line when early access opens in your city.",
  id,
}) {
  return (
    <section id={id} className="section bg-ink text-white">
      <div className="wrap text-center">
        <h2 className="h2">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/70">
          {text}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/trust#cta" className="btn-primary">
            Get Early Access
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            See plans
          </Link>
        </div>
      </div>
    </section>
  );
}

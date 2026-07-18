import Link from "next/link";
import CtaBlock from "../components/CtaBlock";

const outcomes = [
  {
    title: "Know your total before you commit",
    text: "Every fee is itemized before checkout. No surprises after you place the order, and no digging through fine print to understand what you paid for.",
  },
  {
    title: "Delivery updates you can plan around",
    text: "Arrival estimates that reflect real conditions, with honest notice when timing changes. You will know where your order is and when it will arrive.",
  },
  {
    title: "Issues resolved fast, not filed away",
    text: "When something goes wrong, priority routing gets you to a resolution quickly. Refund decisions are clear, tracked, and communicated to you directly.",
  },
];

const preview = [
  {
    title: "Fee Clarity",
    text: "A full fee breakdown shown before checkout, in plain language.",
  },
  {
    title: "Smarter Delivery Updates",
    text: "Live status and honest arrival estimates from order to doorstep.",
  },
  {
    title: "Faster Support Resolution",
    text: "Priority routing for order issues, with clear refund timelines.",
  },
  {
    title: "Stronger Subscription Value",
    text: "Membership benefits built for people who order every week.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="section border-b border-line">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Built for frequent city customers</p>
            <h1 className="h1 mt-4">
              Food delivery with clearer fees, better updates, and faster
              support.
            </h1>
            <p className="lead mt-5">
              For frequent city customers who want convenience without checkout
              surprises, unclear delivery updates, or slow issue resolution.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/trust#cta" className="btn-primary">
                Join the Priority Experience
              </Link>
              <Link href="/offering" className="btn-secondary">
                See what is included
              </Link>
            </div>
          </div>

          <div className="card mx-auto w-full max-w-sm shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Your order</p>
              <span className="rounded-full bg-brand-soft px-2.5 py-1 text-xs font-semibold text-brand-dark">
                Fees shown upfront
              </span>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between text-slate2">
                <span>Food subtotal</span>
                <span>Shown first</span>
              </div>
              <div className="flex justify-between text-slate2">
                <span>Delivery fee</span>
                <span>Itemized</span>
              </div>
              <div className="flex justify-between text-slate2">
                <span>Service fee</span>
                <span>Itemized</span>
              </div>
              <div className="flex justify-between text-slate2">
                <span>Taxes</span>
                <span>Itemized</span>
              </div>
              <div className="mt-2 flex justify-between border-t border-line pt-3 font-semibold text-ink">
                <span>Total before checkout</span>
                <span>No surprises</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate2">
              Illustration of the pre-checkout fee view. Every line is explained
              before you pay.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">What you get</p>
          <h2 className="h2 mt-3">Three outcomes that matter every order</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {outcomes.map((item) => (
              <div key={item.title} className="card">
                <h3 className="h3">{item.title}</h3>
                <p className="body-text mt-3">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">The improved experience</p>
            <h2 className="h2 mt-3">
              Delivery that respects your time and your money
            </h2>
            <p className="body-text mt-4">
              Ordering food should be simple. You choose a restaurant, you see
              exactly what you will pay, and your order arrives when the app
              says it will. If anything goes wrong, someone fixes it quickly.
            </p>
            <p className="body-text mt-4">
              That is the standard this experience is built around. Fees are
              explained before checkout instead of after. Arrival estimates are
              honest instead of optimistic. Support conversations end with a
              resolution instead of a ticket number.
            </p>
            <div className="mt-6 flex gap-4 text-sm font-semibold">
              <Link href="/pricing" className="text-brand hover:text-brand-dark">
                View pricing
              </Link>
              <Link href="/trust" className="text-brand hover:text-brand-dark">
                Why you can trust it
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {preview.map((item) => (
              <Link
                key={item.title}
                href="/offering"
                className="card transition-colors hover:border-brand"
              >
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate2">
                  {item.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}

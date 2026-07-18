import Link from "next/link";
import CtaBlock from "../../components/CtaBlock";

export const metadata = {
  title: "Offering",
  description:
    "What the Priority Experience includes: fee clarity, smarter delivery updates, faster support resolution, and stronger subscription value.",
};

const sections = [
  {
    id: "fee-clarity",
    eyebrow: "01",
    title: "Fee Clarity",
    intro:
      "You see the full cost of your order before you pay, with every fee itemized and explained in plain language.",
    improves: [
      "Delivery, service, and small order fees are shown as separate lines before checkout, not bundled into a single figure.",
      "Each fee includes a short explanation of what it covers, available in one tap.",
      "Price changes between menu and checkout are flagged clearly before you confirm.",
    ],
    simplified:
      "One screen shows the complete cost picture. No expanding hidden sections, no post-checkout adjustments, no fine print hunting.",
  },
  {
    id: "delivery-updates",
    eyebrow: "02",
    title: "Smarter Delivery Updates",
    intro:
      "Arrival estimates reflect real conditions, and you are told promptly when timing changes instead of watching an estimate quietly slide.",
    improves: [
      "Estimates account for restaurant preparation time and courier availability, not just distance.",
      "If your order is delayed, you receive a clear notification with the reason and a revised arrival time.",
      "Order status stages are specific: confirmed, being prepared, picked up, nearby, delivered.",
    ],
    simplified:
      "One live timeline replaces vague progress bars. You always know which stage your order is in and what happens next.",
  },
  {
    id: "support",
    eyebrow: "03",
    title: "Faster Support Resolution",
    intro:
      "When an order is wrong, late, or missing items, you reach a resolution quickly instead of waiting in a general queue.",
    improves: [
      "Order issues from Priority customers are routed to a dedicated resolution track.",
      "Refund and credit decisions come with a clear timeline, so you know when to expect the outcome.",
      "Issue history stays attached to your account, so you never repeat yourself.",
    ],
    simplified:
      "Report an issue in a few taps from the order screen. Common problems have straightforward resolution paths instead of open-ended chat loops.",
  },
  {
    id: "subscription",
    eyebrow: "04",
    title: "Stronger Subscription Value",
    intro:
      "Membership is built for people who order every week, so the benefits show up on every order rather than occasionally.",
    improves: [
      "Reduced delivery fees on eligible orders, applied automatically.",
      "Priority support routing included as a core membership benefit.",
      "Clear monthly summary showing what your membership saved you.",
    ],
    simplified:
      "One membership, benefits applied without promo codes or opt-ins, and a cancellation process that takes minutes, not persuasion screens.",
  },
];

export default function OfferingPage() {
  return (
    <>
      <section className="section border-b border-line">
        <div className="wrap max-w-3xl">
          <p className="eyebrow">The offering</p>
          <h1 className="h1 mt-4">
            A delivery experience built on clarity and follow-through
          </h1>
          <p className="lead mt-5">
            Four improvements, all focused on the moments that frustrate
            frequent customers most: unclear fees, uncertain arrival times, slow
            issue resolution, and membership benefits that are hard to feel.
          </p>
          <div className="mt-8">
            <Link href="/trust#cta" className="btn-primary">
              Join the Priority Experience
            </Link>
          </div>
        </div>
      </section>

      {sections.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className={`section ${i % 2 === 1 ? "bg-mist" : ""}`}
        >
          <div className="wrap grid gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <p className="eyebrow">{section.eyebrow}</p>
              <h2 className="h2 mt-3">{section.title}</h2>
              <p className="body-text mt-4">{section.intro}</p>
            </div>
            <div className="lg:col-span-3">
              <div className="card">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate2">
                  What improves for you
                </h3>
                <ul className="mt-4 space-y-3">
                  {section.improves.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate2">
                  What has been simplified
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate2">
                  {section.simplified}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CtaBlock
        title="Ready for delivery that keeps its word?"
        text="See the plans, then request early access in your city."
      />
    </>
  );
}

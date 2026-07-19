import Link from "next/link";
import CtaBlock from "../../components/CtaBlock";

export const metadata = {
  title: "Pricing",
  description:
    "Three simple options: Standard pay-per-order delivery, Priority for enhanced clarity and support, and Uber One Priority membership for frequent users.",
};

const plans = [
  {
    name: "Standard",
    price: "Pay per order",
    priceNote: "Delivery fee typically $3 to $5 per order, plus service fee and taxes",
    description:
      "Normal pay-per-order delivery. Order when you want, pay standard fees each time.",
    features: [
      "Standard delivery and service fees per order",
      "Standard order tracking",
      "Standard support queue",
    ],
    cta: "Order as usual",
    highlight: false,
  },
  {
    name: "Priority",
    price: "$1.99",
    priceNote: "per order add-on (proposed, pending validation)",
    description:
      "Enhanced fee visibility, delivery confidence updates, and faster support routing on the orders that matter.",
    features: [
      "Full itemized fee breakdown before checkout",
      "Delivery confidence updates with honest revised ETAs",
      "Faster support routing for order issues",
      "Clear refund decision timelines",
    ],
    cta: "Get Early Access",
    highlight: true,
  },
  {
    name: "Uber One Priority",
    price: "$9.99",
    priceNote: "per month, or $96 per year",
    description:
      "A membership built for frequent users. Priority benefits on every order, plus reduced delivery fees.",
    features: [
      "All Priority benefits on every order",
      "Reduced delivery fees on eligible orders",
      "Dedicated resolution track for support issues",
      "Monthly savings summary",
      "Cancel anytime in a few taps",
    ],
    cta: "Get Early Access",
    highlight: false,
  },
];

const comparison = [
  ["Itemized fees before checkout", "Basic", "Full", "Full"],
  ["Delivery confidence updates", "Standard", "Included", "Included"],
  ["Support routing", "Standard queue", "Faster routing", "Dedicated track"],
  ["Refund decision timeline", "Standard", "Clear timeline", "Clear timeline"],
  ["Reduced delivery fees", "No", "No", "Yes, eligible orders"],
  ["Monthly savings summary", "No", "No", "Yes"],
  ["Billing", "Per order", "Per order add-on", "Monthly membership"],
];

export default function PricingPage() {
  return (
    <>
      <section className="section border-b border-line">
        <div className="wrap max-w-3xl">
          <p className="eyebrow">Pricing</p>
          <h1 className="h1 mt-4">Simple options, priced for how you order</h1>
          <p className="lead mt-5">
            Keep ordering the way you do today, add Priority to individual
            orders, or move to a membership if you order every week. The
            structure is simple by design.
          </p>
          <div className="placeholder-note mt-6">
            Pricing shown for academic prototype only. Final pricing should be
            validated against live market pricing and customer research.
            Membership pricing matches the current published Uber One rate. The
            Priority add-on price is a proposed figure.
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`card flex flex-col ${
                  plan.highlight ? "border-brand ring-1 ring-brand" : ""
                }`}
              >
                {plan.highlight && (
                  <span className="mb-4 self-start rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-dark">
                    Most relevant for frequent users
                  </span>
                )}
                <h2 className="h3">{plan.name}</h2>
                <p className="mt-3 text-xl font-semibold">{plan.price}</p>
                <p className="text-sm text-slate2">{plan.priceNote}</p>
                <p className="body-text mt-4 text-sm">{plan.description}</p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-sm text-slate2">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 10.5l4 4 8-9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/trust#cta"
                  className={`mt-6 ${plan.highlight ? "btn-primary" : "btn-secondary"}`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap">
          <h2 className="h2">Compare the plans</h2>
          <p className="body-text mt-3 max-w-2xl">
            The differences at a glance. Priority upgrades individual orders.
            Uber One Priority applies the full experience to everything you
            order.
          </p>
          <div className="mt-8 overflow-x-auto rounded-xl border border-line bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th className="px-5 py-4 font-semibold">Feature</th>
                  <th className="px-5 py-4 font-semibold">Standard</th>
                  <th className="px-5 py-4 font-semibold text-brand-dark">Priority</th>
                  <th className="px-5 py-4 font-semibold">Uber One Priority</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row[0]} className="border-b border-line last:border-0">
                    <td className="px-5 py-3.5 font-medium">{row[0]}</td>
                    <td className="px-5 py-3.5 text-slate2">{row[1]}</td>
                    <td className="px-5 py-3.5 text-slate2">{row[2]}</td>
                    <td className="px-5 py-3.5 text-slate2">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-slate2">
            Plan details are prototype concepts. Standard fee ranges reflect
            typical published delivery fees, and membership pricing matches the
            current published Uber One rate. Benefit eligibility and terms
            require validation before any commercial launch. Full source
            documentation is maintained in the research appendix.
          </p>
        </div>
      </section>

      <CtaBlock
        title="Join the Priority Experience"
        text="Request early access and be notified when Priority plans open in your city."
      />
    </>
  );
}

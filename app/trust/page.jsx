import CtaBlock from "../../components/CtaBlock";

export const metadata = {
  title: "Trust",
  description:
    "What you can expect from the Priority Experience: clear policies, dependable delivery, and support that resolves issues.",
};

const proofPoints = [
  {
    title: "What customers say",
    placeholder:
      "An independent analysis of 90,000+ Uber Eats app reviews found customers consistently praise convenience and ease of use, while the most requested improvement is faster, more effective support. This experience is built to close that gap.",
    note: "Source: LearnData review analysis of 90,000+ Google Play reviews, 2025.",
  },
  {
    title: "Support policy",
    placeholder:
      "Refunds for wrong or missing items follow a published policy: report within 48 hours, and fully incorrect orders are refunded in full including tax and the delivery fee.",
    note: "Source: Uber Help Centre, help.uber.com, Wrong or missing items and Managing refunds articles.",
  },
  {
    title: "Delivery reliability",
    placeholder:
      "Uber One includes an arrival promise: members receive $5 in Uber Cash on eligible deliveries if the Latest Arrival estimate is missed. Uber states members save around $25 per month on average.",
    note: "Sources: Uber One launch announcement (Uber Technologies) and Uber One membership terms.",
  },
  {
    title: "App store evidence",
    placeholder:
      "Uber Eats holds a rating of about 4.6 out of 5 across more than 7.5 million app store reviews, with convenience and ease of use the most cited strengths.",
    note: "Source: App Store and Google Play listings for Uber Eats. Confirm the live rating on the store page before relying on this figure.",
  },
];

const expectations = [
  {
    title: "You will see every fee before you pay",
    text: "The total at checkout is the total you are charged. Any fee on your receipt was visible before you confirmed the order.",
  },
  {
    title: "You will know where your order is",
    text: "Order status updates at every stage, and prompt notice with a revised arrival time if anything changes.",
  },
  {
    title: "Issues get resolved, not parked",
    text: "When you report a problem, you get a clear resolution path and a stated timeline for refund or credit decisions.",
  },
  {
    title: "You can leave whenever you want",
    text: "Membership cancellation takes a few taps in the app. No calls, no retention screens designed to wear you down.",
  },
  {
    title: "Your history works for you",
    text: "Past issues stay on your account record, so repeat problems are recognized and you never have to explain twice.",
  },
  {
    title: "Estimates are honest",
    text: "Arrival times reflect real kitchen and courier conditions. When we are not sure, the estimate says so.",
  },
];

const policies = [
  {
    title: "Refunds",
    text: "Eligible order issues follow a published refund policy with a stated decision timeline. The policy is written in plain language and available before you order.",
  },
  {
    title: "Cancellation",
    text: "Membership can be cancelled at any time from account settings. Benefits continue to the end of the paid period, and the process takes minutes.",
  },
  {
    title: "Fees",
    text: "Fee definitions are published and consistent. If a fee changes, it changes before checkout, never after.",
  },
];

export default function TrustPage() {
  return (
    <>
      <section className="section border-b border-line">
        <div className="wrap max-w-3xl">
          <p className="eyebrow">Trust</p>
          <h1 className="h1 mt-4">
            Confidence you can check, not just claims
          </h1>
          <p className="lead mt-5">
            Trust in food delivery comes down to three things: knowing what you
            will pay, knowing when your food will arrive, and knowing that
            problems get fixed. Here is how each one is backed up.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h2">Proof points</h2>
          <p className="body-text mt-3 max-w-2xl">
            Evidence for the claims on this site. Each item below links to a
            verifiable source.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {proofPoints.map((item) => (
              <div key={item.title} className="card">
                <h3 className="h3">{item.title}</h3>
                <div className="placeholder-note mt-4">{item.placeholder}</div>
                <p className="mt-3 text-xs text-slate2">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap">
          <h2 className="h2">What you can expect</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {expectations.map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate2">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="h2">Policies in plain language</h2>
            <p className="body-text mt-4">
              The rules that protect you are written to be read, not to protect
              the company. Each policy is short, specific, and available before
              you commit to anything.
            </p>
          </div>
          <div className="space-y-4 lg:col-span-3">
            {policies.map((item) => (
              <div key={item.title} className="card">
                <h3 className="h3">{item.title}</h3>
                <p className="body-text mt-2 text-sm">{item.text}</p>
              </div>
            ))}
            <p className="text-xs text-slate2">
              Refund and support standards reference Uber&apos;s published Help
              Centre policies at help.uber.com, including the 48 hour reporting
              window for wrong or missing items and full refunds for fully
              incorrect orders. Membership pricing and cancellation terms
              reference Uber One&apos;s published terms.
            </p>
          </div>
        </div>
      </section>

      <CtaBlock
        id="cta"
        title="Join the Priority Experience"
        text="Early access opens city by city. Request access and you will be notified when Priority plans are available where you live. No commitment, cancel anytime."
      />
    </>
  );
}

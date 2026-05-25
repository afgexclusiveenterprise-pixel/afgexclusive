import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Case Studies — AFG Exclusive Enterprise" },
      { name: "description", content: "Explore real client success stories and projects delivered by AFG Exclusive Enterprise across digital marketing, lead generation, content creation, and business registration." },
      { property: "og:title", content: "Portfolio & Case Studies — AFG Exclusive Enterprise" },
      { property: "og:description", content: "Real results from real clients — see how AFG drives measurable growth." },
    ],
  }),
  component: PortfolioPage,
});

const caseStudies = [
  {
    client: "GreenLeaf Agro Ltd.",
    industry: "Agriculture",
    service: "Lead Generation & Digital Marketing",
    challenge: "Low awareness and inconsistent lead flow for a new export product line.",
    solution: "Launched a multi-channel campaign on Facebook & Google with targeted lead funnels and WhatsApp follow-ups.",
    results: ["320% increase in qualified leads", "₦18M in new revenue in 90 days", "4.2x return on ad spend"],
  },
  {
    client: "Bella Couture",
    industry: "Fashion & Retail",
    service: "Content Creation & Affiliate Marketing",
    challenge: "Stagnant Instagram growth and weak online sales conversion.",
    solution: "Produced weekly reels, lifestyle photography, and onboarded 25 micro-influencer affiliates.",
    results: ["+48K Instagram followers in 6 months", "210% increase in online orders", "12 active affiliate partners"],
  },
  {
    client: "Sterling Logistics",
    industry: "Logistics",
    service: "Business Registration & Branding",
    challenge: "Operating informally without legal structure, limiting B2B contracts.",
    solution: "Completed CAC incorporation, tax registration, and full brand identity rollout.",
    results: ["Registered Ltd. in 14 days", "Closed 3 enterprise contracts", "Bank corporate account opened"],
  },
  {
    client: "Skillforge Academy",
    industry: "Education",
    service: "Freelancing & Lead Generation",
    challenge: "Needed to scale enrollment with limited internal team capacity.",
    solution: "Embedded a remote freelance team and built automated enrollment funnels.",
    results: ["1,400+ new student enrollments", "65% reduction in cost per lead", "Scaled to 3 new cities"],
  },
  {
    client: "Pure Wellness NG",
    industry: "Health & Wellness",
    service: "Digital Marketing & Content",
    challenge: "Low trust signals and poor product education online.",
    solution: "Built educational content series, customer testimonial videos, and retargeting funnels.",
    results: ["5x increase in repeat customers", "Average order value up 38%", "₦9M monthly recurring sales"],
  },
  {
    client: "Crestpoint Realty",
    industry: "Real Estate",
    service: "Lead Generation & Affiliate Marketing",
    challenge: "Long sales cycles and unqualified walk-in inquiries.",
    solution: "Built a qualified inspection booking system with WhatsApp + email automation.",
    results: ["260+ qualified inspections", "₦420M in closed property sales", "7-day average lead-to-tour time"],
  },
];

function PortfolioPage() {
  return (
    <main className="section-padding">
      <div className="container-narrow px-4 md:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Portfolio</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Case Studies & Client Success
          </h1>
          <p className="mt-4 text-muted-foreground">
            Real businesses. Real strategies. Real measurable results delivered by the AFG team.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((cs) => (
            <article key={cs.client} className="rounded-xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{cs.industry}</span>
                <span className="text-xs text-muted-foreground">{cs.service}</span>
              </div>
              <h2 className="mb-3 text-xl font-bold text-card-foreground">{cs.client}</h2>
              <div className="mb-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Challenge</h3>
                <p className="mt-1 text-sm text-foreground">{cs.challenge}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Solution</h3>
                <p className="mt-1 text-sm text-foreground">{cs.solution}</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Results</h3>
                <ul className="mt-2 space-y-1.5">
                  {cs.results.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm font-medium text-foreground">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

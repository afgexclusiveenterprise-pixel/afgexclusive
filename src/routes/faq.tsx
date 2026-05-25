import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — AFG Exclusive Enterprise" },
      { name: "description", content: "Answers to common questions about AFG Exclusive Enterprise services, pricing, timelines, and processes." },
      { property: "og:title", content: "FAQ — AFG Exclusive Enterprise" },
      { property: "og:description", content: "Find answers to common questions about our services and process." },
    ],
  }),
  component: FAQPage,
});

const faqs = [
  {
    q: "What services does AFG Exclusive Enterprise offer?",
    a: "We offer freelancing, digital & affiliate marketing, business registration, content creation, and lead generation — full-stack support for businesses ready to scale.",
  },
  {
    q: "How long does business registration take?",
    a: "Standard CAC registration typically takes 7–14 working days, depending on name availability and documentation. We handle the paperwork end-to-end.",
  },
  {
    q: "Do you work with clients outside Nigeria?",
    a: "Yes. We serve clients across Africa and globally. All our services can be delivered remotely with regular video calls and reporting.",
  },
  {
    q: "How much do your services cost?",
    a: "Pricing depends on scope and goals. We offer custom proposals after a free discovery call. Contact us to get a tailored quote.",
  },
  {
    q: "How quickly can you start a project?",
    a: "Most projects kick off within 3–5 business days of contract signing. Urgent timelines can be accommodated — just let us know.",
  },
  {
    q: "Do you provide reporting and analytics?",
    a: "Absolutely. Every client gets transparent weekly or monthly performance reports with clear KPIs and actionable insights.",
  },
  {
    q: "Can you handle our social media end-to-end?",
    a: "Yes — strategy, content production, posting, community management, paid ads, and analytics are all covered under our content & marketing services.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bank transfers (NGN & USD), and major card payments. Payment terms are clearly outlined in every contract.",
  },
];

function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="section-padding">
      <div className="container-narrow max-w-3xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">FAQ</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-muted-foreground">
            Everything you need to know about working with AFG Exclusive Enterprise.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="rounded-lg border border-border bg-card">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-card-foreground">{faq.q}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-primary transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.a}</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl bg-section-alt p-8 text-center">
          <h2 className="text-xl font-bold text-foreground">Still have questions?</h2>
          <p className="mt-2 text-sm text-muted-foreground">Our team is happy to help you get started.</p>
          <Link to="/contact" className="mt-5 inline-flex rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-accent">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}

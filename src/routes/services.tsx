import { createFileRoute } from "@tanstack/react-router";
import ServiceCard from "@/components/ServiceCard";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AFG Exclusive Enterprise" },
      { name: "description", content: "Explore our professional services: Freelancing, Digital Marketing, Business Registration, Content Creation, and Lead Generation." },
      { property: "og:title", content: "Our Services — AFG Exclusive Enterprise" },
      { property: "og:description", content: "Comprehensive digital and business solutions tailored for growth." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Freelancing",
    description: "We connect businesses with vetted, skilled freelancers who deliver exceptional work across web development, graphic design, writing, virtual assistance, and more. Our rigorous selection process ensures you get top talent every time.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
  {
    title: "Digital & Affiliate Marketing",
    description: "From SEO and PPC to social media advertising and affiliate partnerships, we craft data-driven marketing strategies that increase your brand visibility, drive targeted traffic, and maximize conversion rates across all channels.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
  },
  {
    title: "Business Registration",
    description: "Streamline your company formation with our end-to-end registration services. We handle CAC registration, tax identification, permits, and compliance documentation — ensuring your business starts on the right legal foundation.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  },
  {
    title: "Content Creation",
    description: "Our creative team produces compelling content that resonates with your audience — including social media posts, blog articles, video scripts, brand photography, reels, and full-scale video production for all platforms.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>,
  },
  {
    title: "Lead Generation",
    description: "We build and execute targeted lead generation campaigns using landing pages, email funnels, paid ads, and strategic outreach — filling your sales pipeline with high-quality, ready-to-convert prospects.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>,
  },
];

function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-primary section-padding">
        <div className="container-narrow text-center">
          <h1 className="text-4xl font-extrabold text-primary-foreground md:text-5xl">Our Services</h1>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Comprehensive business solutions designed to help you grow, scale, and dominate your market.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Our Process</p>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">How We Work</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { step: "01", title: "Consultation", desc: "We learn about your goals, challenges, and vision." },
              { step: "02", title: "Strategy", desc: "Our team crafts a tailored plan for maximum impact." },
              { step: "03", title: "Execution", desc: "We implement with precision, keeping you informed at every step." },
              { step: "04", title: "Results", desc: "We measure, optimize, and deliver measurable outcomes." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

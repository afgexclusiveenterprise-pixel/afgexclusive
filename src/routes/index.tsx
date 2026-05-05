import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import ServiceCard from "@/components/ServiceCard";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const services = [
  {
    title: "Freelancing",
    description: "Access top-tier freelance talent for your projects. We connect businesses with skilled professionals across various domains.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Digital & Affiliate Marketing",
    description: "Strategic digital marketing campaigns and affiliate partnerships that drive measurable results and maximize your ROI.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Business Registration",
    description: "Seamless company registration and incorporation services. We handle the paperwork so you can focus on building your business.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Content Creation",
    description: "Compelling content that tells your brand story. From social media graphics to video production and copywriting.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    title: "Lead Generation",
    description: "Targeted lead generation strategies that fill your pipeline with qualified prospects ready to convert into loyal customers.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "200+", label: "Clients Served" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Team Members" },
];

function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="container-narrow relative z-10 px-4 md:px-8">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
              AFG Exclusive Enterprise
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground md:text-6xl">
              Powered by Innovation, Committed to{" "}
              <span className="text-accent">Excellence</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/80">
              We deliver comprehensive digital solutions — from freelancing and marketing to business registration and content creation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-accent hover:shadow-xl"
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="rounded-lg border border-primary-foreground/30 px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-section-alt">
        <div className="container-narrow grid grid-cols-2 gap-6 px-4 py-12 md:grid-cols-4 md:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-primary md:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">What We Do</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Our Core Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              Comprehensive solutions designed to accelerate your business growth and digital presence.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-accent"
            >
              View All Services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Why Choose Us</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Built on Trust, Driven by Results
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Innovation First", desc: "We leverage cutting-edge tools and strategies to keep your business ahead of the competition.", icon: "💡" },
              { title: "Reliable Partnership", desc: "Count on us for consistent, timely delivery and transparent communication at every step.", icon: "🤝" },
              { title: "Proven Excellence", desc: "Our track record speaks for itself — hundreds of satisfied clients across multiple industries.", icon: "🏆" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-card p-8 text-center shadow-sm">
                <div className="mb-4 text-4xl">{item.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-card-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-extrabold text-primary-foreground md:text-4xl">
            Ready to Grow Your Business?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80">
            Let's discuss how AFG Exclusive Enterprise can help you achieve your business goals. Get in touch today.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-lg bg-background px-8 py-3 text-sm font-semibold text-primary transition hover:bg-background/90"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </main>
  );
}

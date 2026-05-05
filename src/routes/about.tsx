import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — AFG Exclusive Enterprise" },
      { name: "description", content: "Learn about AFG Exclusive Enterprise — our mission, values, and the team behind our digital solutions." },
      { property: "og:title", content: "About — AFG Exclusive Enterprise" },
      { property: "og:description", content: "Powered by Innovation, Strengthened by Reliability, Committed to Excellence." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-primary section-padding">
        <div className="container-narrow text-center">
          <h1 className="text-4xl font-extrabold text-primary-foreground md:text-5xl">About Us</h1>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Get to know the team and vision behind AFG Exclusive Enterprise.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-narrow grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Our Story</p>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Who We Are</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              AFG Exclusive Enterprise is a forward-thinking business solutions company dedicated to helping brands, entrepreneurs, and organizations thrive in the digital age. From our beginnings as a small team of passionate innovators, we've grown into a full-service agency delivering results across freelancing, digital marketing, business registration, content creation, and lead generation.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our motto — <strong className="text-foreground">"Powered by Innovation, Strengthened by Reliability and Committed to Excellence"</strong> — isn't just words. It's the foundation of everything we do. Every project we take on reflects our unwavering commitment to quality, transparency, and client success.
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">Our Mission</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                To empower businesses of all sizes with innovative digital solutions and reliable support, enabling them to achieve sustainable growth and lasting success in a competitive marketplace.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-2 text-lg font-bold text-primary">Our Vision</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                To be the most trusted and results-driven digital enterprise in Africa, setting the standard for excellence in business solutions, marketing innovation, and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">What Drives Us</p>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Our Core Values</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "🚀", title: "Innovation", desc: "We embrace new ideas and technologies to stay ahead." },
              { icon: "🛡️", title: "Reliability", desc: "Our clients count on us to deliver — consistently and on time." },
              { icon: "⭐", title: "Excellence", desc: "We set high standards and exceed them in everything we do." },
              { icon: "🤝", title: "Integrity", desc: "Transparency and honesty are non-negotiable in our business." },
            ].map((value) => (
              <div key={value.title} className="rounded-xl bg-card p-6 text-center shadow-sm">
                <div className="mb-3 text-3xl">{value.icon}</div>
                <h3 className="mb-2 font-bold text-card-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

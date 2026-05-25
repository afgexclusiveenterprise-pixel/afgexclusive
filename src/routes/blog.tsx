import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Insights — AFG Exclusive Enterprise" },
      { name: "description", content: "Insights, guides, and strategies on digital marketing, lead generation, content creation, and business growth from the AFG team." },
      { property: "og:title", content: "Blog & Insights — AFG Exclusive Enterprise" },
      { property: "og:description", content: "Latest articles on marketing, business registration, and growth." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    title: "5 Lead Generation Strategies That Actually Work in 2026",
    excerpt: "Stop wasting ad spend on cold audiences. Here's the framework we use to deliver consistent qualified leads for our clients.",
    category: "Lead Generation",
    date: "May 18, 2026",
    readTime: "6 min read",
  },
  {
    title: "How to Register Your Business in Nigeria: A Complete CAC Guide",
    excerpt: "Step-by-step walkthrough of registering a Limited Liability Company in Nigeria — costs, timelines, and common pitfalls.",
    category: "Business Registration",
    date: "May 10, 2026",
    readTime: "8 min read",
  },
  {
    title: "Why Most Affiliate Marketing Programs Fail (And How to Fix Yours)",
    excerpt: "The 3 structural mistakes that kill affiliate programs before they scale — and the playbook our top performers follow.",
    category: "Affiliate Marketing",
    date: "May 2, 2026",
    readTime: "5 min read",
  },
  {
    title: "Content That Converts: A Framework for Small Businesses",
    excerpt: "Forget vanity metrics. Here's how to build a content engine that drives real revenue without a huge production budget.",
    category: "Content Creation",
    date: "April 24, 2026",
    readTime: "7 min read",
  },
  {
    title: "Hiring Freelancers vs. Building In-House: When to Choose What",
    excerpt: "A practical decision framework for founders trying to scale operations without burning runway on the wrong hires.",
    category: "Freelancing",
    date: "April 15, 2026",
    readTime: "5 min read",
  },
  {
    title: "The 2026 Digital Marketing Trends Every Nigerian Business Must Know",
    excerpt: "AI-driven personalization, short-form video dominance, and the rise of community commerce — what's changing this year.",
    category: "Digital Marketing",
    date: "April 5, 2026",
    readTime: "9 min read",
  },
];

function BlogPage() {
  return (
    <main className="section-padding">
      <div className="container-narrow px-4 md:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Insights</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Blog & Resources
          </h1>
          <p className="mt-4 text-muted-foreground">
            Practical strategies and insights to help your business grow smarter.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-semibold text-primary">{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="mb-3 text-lg font-bold leading-snug text-card-foreground group-hover:text-primary">
                {post.title}
              </h2>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
              <div className="flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                <span>{post.date}</span>
                <span className="font-semibold text-primary">Read more →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

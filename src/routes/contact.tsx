import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — AFG Exclusive Enterprise" },
      { name: "description", content: "Get in touch with AFG Exclusive Enterprise. Reach us via email, phone, or our contact form." },
      { property: "og:title", content: "Contact — AFG Exclusive Enterprise" },
      { property: "og:description", content: "Let's discuss how we can help your business grow." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      {/* Hero */}
      <section className="bg-primary section-padding">
        <div className="container-narrow text-center">
          <h1 className="text-4xl font-extrabold text-primary-foreground md:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Have a question or ready to start a project? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow grid gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Get In Touch</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Whether you need help with digital marketing, business registration, or any of our services, our team is ready to assist you. Reach out through any of the channels below.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-light text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:afgexclusiveenterprise@gmail.com" className="text-sm text-primary hover:underline">afgexclusiveenterprise@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-light text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:+2347031592779" className="text-sm text-primary hover:underline">+234 703 159 2779</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-light text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
                </div>
                <div>
                  <h3 className="font-semibold">Social Media</h3>
                  <p className="text-sm text-muted-foreground">@afgexclusivedigital</p>
                  <div className="mt-2 flex gap-3">
                    <a href="https://facebook.com/afgexclusivedigital" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">Facebook</a>
                    <a href="https://instagram.com/afgexclusivedigital" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">Instagram</a>
                    <a href="https://tiktok.com/@afgexclusivedigital" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">TikTok</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-light text-3xl">✅</div>
                <h3 className="text-xl font-bold">Message Sent!</h3>
                <p className="mt-2 text-sm text-muted-foreground">Thank you for reaching out. We'll get back to you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-sm font-medium text-primary hover:underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <h3 className="text-xl font-bold">Send Us a Message</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium">Full Name</label>
                    <input id="name" type="text" required placeholder="John Doe" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
                    <input id="email" type="email" required placeholder="john@example.com" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1 block text-sm font-medium">Subject</label>
                  <input id="subject" type="text" required placeholder="How can we help?" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label htmlFor="service" className="mb-1 block text-sm font-medium">Service of Interest</label>
                  <select id="service" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring">
                    <option value="">Select a service</option>
                    <option>Freelancing</option>
                    <option>Digital & Affiliate Marketing</option>
                    <option>Business Registration</option>
                    <option>Content Creation</option>
                    <option>Lead Generation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium">Message</label>
                  <textarea id="message" rows={4} required placeholder="Tell us about your project..." className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring" />
                </div>
                <button type="submit" className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition hover:bg-accent">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

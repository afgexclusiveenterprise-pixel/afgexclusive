import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AFG Exclusive Enterprise — Digital Marketing & Business Solutions" },
      { name: "description", content: "Powered by Innovation, Strengthened by Reliability and Committed to Excellence. Freelancing, Digital Marketing, Business Registration, Content Creation & Lead Generation." },
      { property: "og:title", content: "AFG Exclusive Enterprise — Digital Marketing & Business Solutions" },
      { property: "og:description", content: "Powered by Innovation, Strengthened by Reliability and Committed to Excellence. Freelancing, Digital Marketing, Business Registration, Content Creation & Lead Generation." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "AFG Exclusive Enterprise — Digital Marketing & Business Solutions" },
      { name: "twitter:description", content: "Powered by Innovation, Strengthened by Reliability and Committed to Excellence. Freelancing, Digital Marketing, Business Registration, Content Creation & Lead Generation." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/F2wMAcw45NZb1w2zvmSiqud7O7F3/social-images/social-1778011299653-IMG_20251014_151341_787.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/F2wMAcw45NZb1w2zvmSiqud7O7F3/social-images/social-1778011299653-IMG_20251014_151341_787.webp" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

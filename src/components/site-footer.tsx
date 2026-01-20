import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 text-sm text-muted-foreground sm:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-base font-semibold text-foreground">
              Let&apos;s build something meaningful.
            </p>
            <p>Reach me at viv@dluvs.com for collaborations or research.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="mailto:viv@dluvs.com"
              className="transition hover:text-foreground"
            >
              Email
            </Link>
            <Link
              href="https://github.com/relectrik"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-foreground"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/vivdhingra"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-foreground"
            >
              LinkedIn
            </Link>
          </div>
        </div>
        <p>© 2026 Vivek Dhingra. Built with Next.js, Tailwind, and shadcn/ui.</p>
      </div>
    </footer>
  );
}


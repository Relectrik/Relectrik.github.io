import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-start justify-center gap-4 py-20">
      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
        404 — Not Found
      </p>
      <h1 className="text-3xl font-semibold">This page doesn&apos;t exist.</h1>
      <Button asChild variant="outline">
        <Link href="/">Return home</Link>
      </Button>
    </div>
  );
}


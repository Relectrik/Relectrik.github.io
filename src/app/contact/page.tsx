import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ContactPage() {
  return (
    <div className="space-y-12 pb-20 pt-12">
      <div className="space-y-4">
        <Badge variant="primary">Contact</Badge>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s talk about AI, systems, and products.
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          I&apos;m open to research collaborations, product leadership, and
          high-impact engineering roles.
        </p>
      </div>

      <Card className="p-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="text-lg font-semibold">viv@dluvs.com</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Location</p>
            <p className="text-lg font-semibold">Los Angeles, CA</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Education</p>
            <p className="text-lg font-semibold">M.S. CS · 2026 Expected</p>
          </div>
        </div>
      </Card>

      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <Link href="mailto:viv@dluvs.com">
            <Mail className="h-4 w-4" />
            Email
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="https://github.com/relectrik" target="_blank" rel="noreferrer">
            <Github className="h-4 w-4" />
            GitHub
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link
            href="https://linkedin.com/in/vivdhingra"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </Link>
        </Button>
      </div>
    </div>
  );
}


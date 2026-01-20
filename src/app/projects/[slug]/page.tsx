import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: `${project.title} | Vivek Dhingra`,
    description: project.summary
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-12 pb-20 pt-12">
      <Button asChild variant="ghost" className="px-0">
        <Link href="/#projects">
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>
      </Button>

      <div className="space-y-6">
        <Badge variant="primary">Case Study</Badge>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="p-6 lg:col-span-2">
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="mt-3 text-sm text-muted-foreground">{project.overview}</p>
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Problem
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {project.problem}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Solution
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {project.solution}
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-semibold">Tech Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((item) => (
              <Badge key={item} variant="outline">
                {item}
              </Badge>
            ))}
          </div>
          <div className="mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Links
            </h3>
            <div className="mt-3 space-y-2">
              {project.links.length ? (
                project.links.map((link) => (
                  <Button key={link.href} asChild variant="link" className="px-0">
                    <Link href={link.href} target="_blank" rel="noreferrer">
                      {link.label} <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">
                  Private repository or no public link.
                </p>
              )}
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold">Architecture</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          High-level system flow and core building blocks.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {project.architecture.map((item) => (
            <div
              key={item.label}
              className="relative rounded-2xl border border-border/70 bg-muted/40 p-4 text-sm"
            >
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-2 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold">What I&apos;d Improve Next</h2>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          {project.improvements.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}


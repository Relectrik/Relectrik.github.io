import Link from "next/link";
import { Download, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { awards } from "@/data/awards";
import { skillGroups } from "@/data/skills";
import { education } from "@/data/education";
import { recognition } from "@/data/recognition";
import { withBasePath } from "@/lib/base-path";

export default function ResumePage() {
  return (
    <div className="space-y-12 pb-20 pt-12">
      <div className="flex flex-col gap-4">
        <Badge variant="primary">Resume</Badge>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Vivek Dhingra
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          AI / Systems Engineer with leadership across product, research, and
          community initiatives.
        </p>
        <Button asChild className="w-fit">
          <a href={withBasePath("/resume.pdf")} download>
            Download Resume (PDF) <Download className="h-4 w-4" />
          </a>
        </Button>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold">Education</h2>
        <div className="mt-4 space-y-4">
          {education.map((item) => (
            <div key={item.degree} className="space-y-2 text-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-medium">{item.school}</p>
                  <p className="text-muted-foreground">
                    {item.degree} · GPA {item.gpa}
                  </p>
                </div>
                <Badge>{item.period}</Badge>
              </div>
              <p className="text-muted-foreground">{item.location}</p>
              <div className="flex flex-wrap gap-2">
                {item.courses.map((course) => (
                  <Badge key={course} variant="outline">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold">Experience</h2>
        <div className="mt-4 space-y-6">
          {experiences.map((experience) => (
            <div key={experience.company} className="space-y-3 text-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-medium">{experience.role}</p>
                  <p className="text-muted-foreground">
                    {experience.company} · {experience.location}
                  </p>
                </div>
                <Badge>{experience.period}</Badge>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                {experience.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold">Projects</h2>
        <div className="mt-4 space-y-4 text-sm">
          {projects.map((project) => (
            <div key={project.slug} className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-medium">{project.title}</p>
                <Button asChild variant="link" className="px-0">
                  <Link href={`/projects/${project.slug}`}>View case study</Link>
                </Button>
              </div>
              <p className="text-muted-foreground">{project.summary}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold">Competitions & Awards</h2>
        <div className="mt-4 space-y-3 text-sm text-muted-foreground">
          {awards.map((award) => (
            <p key={award.title}>
              <span className="font-medium text-foreground">{award.title}:</span>{" "}
              {award.detail}
            </p>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold">Recognition</h2>
        <div className="mt-4 space-y-3 text-sm text-muted-foreground">
          {recognition.map((item) => (
            <Button key={item.href} asChild variant="link" className="px-0">
              <Link href={item.href} target="_blank" rel="noreferrer">
                {item.title} <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="space-y-2 text-sm">
              <p className="font-medium">{group.title}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="text-sm text-muted-foreground">
        <p>
          Email:{" "}
          <Link href="mailto:viv@dluvs.com" className="text-foreground">
            viv@dluvs.com
          </Link>{" "}
          · GitHub:{" "}
          <Link href="https://github.com/relectrik" className="text-foreground">
            relectrik
          </Link>{" "}
          · LinkedIn:{" "}
          <Link
            href="https://linkedin.com/in/vivdhingra"
            className="text-foreground"
          >
            vivdhingra
          </Link>
        </p>
      </div>
    </div>
  );
}


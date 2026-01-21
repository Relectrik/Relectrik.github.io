import Link from "next/link";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail
} from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { credibility } from "@/data/credibility";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { awards } from "@/data/awards";
import { researchHighlight } from "@/data/research";
import { skillGroups } from "@/data/skills";
import { education } from "@/data/education";
import { withBasePath } from "@/lib/base-path";
import { getGithubRepos } from "@/lib/github";

export default async function HomePage() {
  const repos = await getGithubRepos();

  return (
    <div className="space-y-20 pb-20 pt-16">
      <AnimatedSection>
        <section className="relative overflow-hidden rounded-[32px] border border-border/60 bg-card/40 p-10 shadow-sm backdrop-blur sm:p-14">
          <div className="absolute right-[-20%] top-[-30%] h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-[-30%] left-[-10%] h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative z-10 space-y-6">
            <Badge variant="primary">M.S. Computer Science · 2026</Badge>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Vivek Dhingra
            </h1>
            <p className="text-xl text-muted-foreground">
              AI / Systems Engineer blending causal reasoning, multi-agent RL, and
              high-velocity product shipping.
            </p>
            <p className="max-w-2xl text-base text-muted-foreground">
              I design systems that turn research-grade AI into shipped products,
              lead teams through ambiguity, and obsess over measurable outcomes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/#projects">
                  View Projects <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <a href={withBasePath("/resume.pdf")} download>
                  Download Resume <Download className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link
                  href="https://github.com/relectrik"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link
                  href="https://linkedin.com/in/vivdhingra"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                viv@dluvs.com
              </span>
              <span className="inline-flex items-center gap-2">
                Los Angeles, CA
              </span>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="flex flex-wrap gap-3" aria-label="Credibility">
          {credibility.map((item) => (
            <Badge key={item} variant="outline">
              {item}
            </Badge>
          ))}
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section id="about" className="section-padding">
          <SectionHeading
            eyebrow="Story"
            title="Product engineer with research depth and leadership range."
            description="I specialize in building systems where AI meets real users — from multimodal product features to causal RL research — while leading teams that ship."
          />
          <div className="mt-8 grid gap-6 text-muted-foreground md:grid-cols-2">
            <Card className="p-6">
              <p>
                As CTO at Pantry, I guided a Swift + Firebase stack to deliver a
                TikTok-style food platform, integrating GPT-4o-powered pantry
                scanning that reduced food waste by 30% in beta feedback.
              </p>
            </Card>
            <Card className="p-6">
              <p>
                In research, I build causal model-based reinforcement learning
                systems to enable intervention and counterfactual reasoning in
                multi-agent environments — bridging theory with deployable systems.
              </p>
            </Card>
            <Card className="p-6">
              <p>
                At LMU, I mentor 100+ students as an Algorithms/AI TA and co-lead
                the ACM community, scaling hackathons and holding events across campus.
              </p>
            </Card>
            <Card className="p-6">
              <p>
                I translate ambiguous goals into clear product roadmaps, balancing
                research rigor with high-velocity execution in early-stage teams.
              </p>
            </Card>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section id="experience" className="section-padding">
          <SectionHeading
            eyebrow="Experience"
            title="Leadership + engineering across products, teaching, and community."
          />
          <div className="mt-10 space-y-8">
            {experiences.map((experience) => (
              <div
                key={experience.company}
                className="relative border-l border-border/70 pl-8"
              >
                <span className="absolute left-[-7px] top-2 h-3 w-3 rounded-full bg-primary shadow-glow" />
                <Card className="transition hover:border-primary/40 hover:shadow-glow">
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <CardTitle>{experience.role}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {experience.company} · {experience.location}
                        </p>
                      </div>
                      <Badge>{experience.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {experience.highlights.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {experience.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section id="education" className="section-padding">
          <SectionHeading
            eyebrow="Education"
            title="CS foundation with applied AI focus."
            description="Graduate and undergraduate training grounded in systems, AI, and data."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {education.map((item) => (
              <Card key={item.degree} className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{item.school}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.degree} · GPA {item.gpa}
                    </p>
                    <p className="text-sm text-muted-foreground">{item.location}</p>
                  </div>
                  <Badge>{item.period}</Badge>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.courses.map((course) => (
                    <Badge key={course} variant="outline">
                      {course}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section id="research" className="section-padding">
          <SectionHeading
            eyebrow="Research"
            title="Causal model-based RL in multi-agent systems."
            description="Manuscript under review exploring interventions, counterfactuals, and policy coupling."
          />
          <Card className="mt-8">
            <CardHeader>
              <Badge variant="primary">{researchHighlight.subtitle}</Badge>
              <CardTitle className="text-2xl">{researchHighlight.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Advisor: {researchHighlight.advisor}
              </p>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>{researchHighlight.summary}</p>
              <div className="rounded-xl border border-border/70 bg-muted/40 p-4 text-sm">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  Problem
                </p>
                <p className="mt-2">{researchHighlight.problem}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  Key techniques
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {researchHighlight.techniques.map((item) => (
                    <Badge key={item} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                {researchHighlight.focusAreas.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="link" className="px-0">
                <Link href={researchHighlight.link} target="_blank" rel="noreferrer">
                  LMU Research Spotlight <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section id="projects" className="section-padding">
          <SectionHeading
            eyebrow="Projects"
            title="Featured Projects"
            description="Systems, AI, and data visualization projects with measurable outcomes."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.slug} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {project.summary}
                  </p>
                </CardHeader>
                <CardContent className="mt-auto space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="link" className="px-0">
                    <Link href={`/projects/${project.slug}`}>
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {repos.length ? (
        <AnimatedSection>
          <section className="section-padding">
            <SectionHeading
              eyebrow="Open Source"
              title="GitHub activity snapshot"
              description="Live repo metadata."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {repos.map((repo) => (
                <Card key={repo.name} className="p-6">
                  <p className="text-sm text-muted-foreground">Repository</p>
                  <h3 className="text-lg font-semibold">{repo.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm text-muted-foreground">
                    {repo.stars !== undefined ? (
                      <span>{repo.stars} ★</span>
                    ) : (
                      <span>Stars: —</span>
                    )}
                    {repo.updatedAt ? (
                      <span>
                        Updated{" "}
                        {new Date(repo.updatedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric"
                        })}
                      </span>
                    ) : (
                      <span>Updated: —</span>
                    )}
                  </div>
                  <Button asChild variant="link" className="px-0">
                    <Link href={repo.href} target="_blank" rel="noreferrer">
                      View on GitHub <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>
          </section>
        </AnimatedSection>
      ) : null}

      <AnimatedSection>
        <section id="awards" className="section-padding">
          <SectionHeading
            eyebrow="Competitions & Awards"
            title="Recognized for leadership and technical excellence."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((award) => {
              const Icon = award.icon;
              return (
                <Card key={award.title} className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-medium">{award.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {award.detail}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section id="skills" className="section-padding">
          <SectionHeading
            eyebrow="Skills"
            title="Stack that spans AI research to production systems."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <Card key={group.title} className="p-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} variant="outline">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section id="contact" className="section-padding">
          <Card className="p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold">Let&apos;s connect</h3>
                <p className="text-muted-foreground">
                  Open to AI engineering, systems roles, and research
                  collaborations.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="mailto:viv@dluvs.com">
                    Email Me <Mail className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">
                    Contact Page <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </AnimatedSection>

      <Separator />
    </div>
  );
}


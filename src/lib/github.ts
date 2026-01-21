import { projects } from "@/data/projects";

export type RepoMeta = {
  slug: string;
  name: string;
  href: string;
  stars?: number;
  updatedAt?: string;
};

const curatedRepos = ["Relectrik/Projects", "lmu-act-lab/AIarchy"];

const repoEntries = new Map(
  projects
    .filter((project) => project.repo)
    .map((project) => [
      project.repo as string,
      {
        repo: project.repo as string,
        slug: project.slug,
        href: project.links[0]?.href ?? "https://github.com/relectrik"
      }
    ])
);

curatedRepos.forEach((repo) => {
  if (repoEntries.has(repo)) return;
  repoEntries.set(repo, {
    repo,
    slug: repo.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    href: `https://github.com/${repo}`
  });
});

const fallbackRepos: RepoMeta[] = Array.from(repoEntries.values()).map((item) => ({
  slug: item.slug,
  name: item.repo,
  href: item.href,
  stars: undefined,
  updatedAt: undefined
}));

export async function getGithubRepos(): Promise<RepoMeta[]> {
  const repos = Array.from(repoEntries.values());
  if (!repos.length) return [];

  try {
    const results = await Promise.all(
      repos.map(async (project) => {
        const response = await fetch(
          `https://api.github.com/repos/${project.repo}`,
          { cache: "force-cache" }
        );
        if (!response.ok) {
          throw new Error("GitHub API response not OK :(");
        }
        const data = (await response.json()) as {
          full_name: string;
          html_url: string;
          stargazers_count: number;
          updated_at: string;
        };

        return {
          slug: project.slug,
          name: data.full_name,
          href: data.html_url ?? project.href,
          stars: data.stargazers_count,
          updatedAt: data.updated_at
        };
      })
    );

    return results;
  } catch {
    return fallbackRepos;
  }
}


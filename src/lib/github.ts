import { projects } from "@/data/projects";

export type RepoMeta = {
  slug: string;
  name: string;
  href: string;
  stars?: number;
  updatedAt?: string;
};

const fallbackRepos: RepoMeta[] = projects
  .filter((project) => project.repo)
  .map((project) => ({
    slug: project.slug,
    name: project.repo as string,
    href: project.links[0]?.href ?? "https://github.com/relectrik",
    stars: undefined,
    updatedAt: undefined
  }));

export async function getGithubRepos(): Promise<RepoMeta[]> {
  const repos = projects.filter((project) => project.repo);
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
          href: data.html_url,
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


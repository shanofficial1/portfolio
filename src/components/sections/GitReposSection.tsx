import { useQuery } from "@tanstack/react-query";
import { siteConfig } from "@/config/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
}

export function GitReposSection() {
  const { data, isLoading, isError } = useQuery<Repo[]>({
    queryKey: ["repos", siteConfig.githubUsername],
    queryFn: async () => {
      const res = await fetch(
        `https://api.github.com/users/${siteConfig.githubUsername}/repos?per_page=6&sort=updated`
      );
      if (!res.ok) throw new Error("Failed to fetch repos");
      return res.json();
    },
  });

  return (
    <section id="repos" className="scroll-mt-24 py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl font-semibold tracking-tight">Git Repository</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {isLoading &&
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-40 animate-pulse rounded-lg border bg-muted/30" />
            ))}
          {isError && <p className="text-muted-foreground">Could not load repositories.</p>}
          {data?.map((r, idx) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{r.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="min-h-12 text-sm text-muted-foreground">
                    {r.description ?? "No description provided."}
                  </p>
                  <a
                    href={r.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="story-link mt-3 inline-block"
                  >
                    View on GitHub
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

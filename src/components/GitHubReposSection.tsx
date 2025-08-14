import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics: string[];
}

const GitHubReposSection = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Replace with actual GitHub username
  const githubUsername = "octocat"; // Change this to your GitHub username

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [githubUsername]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      JavaScript: '#f1e05a',
      TypeScript: '#2b7489',
      Python: '#3572A5',
      Java: '#b07219',
      React: '#61dafb',
      Vue: '#4FC08D',
      CSS: '#1572B6',
      HTML: '#e34c26',
      Go: '#00ADD8',
      Rust: '#dea584',
    };
    return colors[language] || '#8b5cf6';
  };

  if (loading) {
    return (
      <section id="repositories" className="py-20 px-4 bg-gradient-to-b from-card/20 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">GitHub Repositories</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="portfolio-card animate-pulse">
                <CardHeader>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-3 bg-muted rounded w-full"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded"></div>
                    <div className="h-3 bg-muted rounded w-2/3"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="repositories" className="py-20 px-4 bg-gradient-to-b from-card/20 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">GitHub Repositories</span>
            </h2>
            <p className="text-portfolio-text-light">
              Unable to load repositories: {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="repositories" className="py-20 px-4 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">GitHub Repositories</span>
          </h2>
          <p className="text-portfolio-text-light text-lg max-w-2xl mx-auto">
            Latest public repositories showcasing my coding projects and contributions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="portfolio-card h-full flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <Github className="w-5 h-5 text-primary flex-shrink-0" />
                      <h3 className="font-bold text-foreground truncate">
                        {repo.name}
                      </h3>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="flex-shrink-0 ml-2"
                    >
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                  <p className="text-portfolio-text-light text-sm line-clamp-3 flex-1">
                    {repo.description || "No description available"}
                  </p>
                </CardHeader>

                <CardContent className="pt-0 mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                    {repo.topics.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{repo.topics.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-portfolio-text-light">
                    <div className="flex items-center gap-4">
                      {repo.language && (
                        <div className="flex items-center gap-1">
                          <div 
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: getLanguageColor(repo.language) }}
                          />
                          <span className="text-xs">{repo.language}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        <span className="text-xs">{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" />
                        <span className="text-xs">{repo.forks_count}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span className="text-xs">{formatDate(repo.updated_at)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button asChild variant="outline" size="lg">
            <a 
              href={`https://github.com/${githubUsername}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Github className="w-5 h-5" />
              View All Repositories
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubReposSection;
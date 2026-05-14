import { ArrowUpRight, Github, Star, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/types/project";

export function ProjectsSection({ projects }: { projects: Project[] }) {
    return (
        projects && (
            <section id="projects" className="py-24 px-6 bg-card/50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-sm text-primary font-medium tracking-wide uppercase mb-4">
                            Our Work
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                            Featured Projects
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            A selection of collaborative projects from our
                            GitHub organization. All source code is open and
                            available for exploration.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <a
                                key={project._id}
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Github className="w-5 h-5 text-primary" />
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>

                                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project?.tags?.slice(0, 4).map((tag) => (
                                        <span
                                            key={tag._id}
                                            className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
                                        >
                                            {tag.title}
                                        </span>
                                    ))}
                                </div>
                                {/* Git Stats */}
                                {/* <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  {project.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-4 h-4" />
                  {project.forks}
                </span>
              </div> */}
                            </a>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="gap-2"
                        >
                            <a
                                href="https://github.com/orgs/shumisoft/repositories"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="w-4 h-4" />
                                View all repositories
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
        )
    );
}

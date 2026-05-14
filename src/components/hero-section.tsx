import { Button } from "@/components/ui/button";
import { Hero } from "@/types/landing";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection({ hero }: { hero: Hero }) {
    const dummyData = {
        tagline: "Solutions born from passion",
        excerpt: `"Shumi" means hobby. We're two full-stack developers who love exploring new technologies through collaborative side projects. From web apps to distributed systems, this is where our experiments come to life.`,
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm mb-8">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    {hero.tagline || dummyData.tagline}
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance">
                    Shumi<span className="text-primary">soft</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
                    {hero.excerpt || dummyData.excerpt}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button asChild size="lg" className="gap-2">
                        <Link href="#projects">
                            View our projects
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <a href="#contact">Get in touch</a>
                    </Button>
                </div>
            </div>
        </section>
    );
}

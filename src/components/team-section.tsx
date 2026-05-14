import { Button } from "@/components/ui/button";
import { getInitials } from "@/lib/utils";
import { Member } from "@/types/team";
import { Github, Globe, Linkedin } from "lucide-react";
import Image from "next/image";
import { LinkConfig } from "./theme-provider";

export function TeamSection({ team }: { team: Member[] }) {
    const LINK_CONFIG: Record<string, LinkConfig> = {
        portfolio: {
            icon: Globe,
            label: "Portfolio",
            variant: "default",
        },
        github: {
            icon: Github,
            label: "GitHub",
            variant: "outline",
        },
        linkedin: {
            icon: Linkedin,
            label: "LinkedIn",
            variant: "ghost",
            iconOnly: true,
        },
    };

    return (
        <section id="team" className="py-24 px-6 bg-card/50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-sm text-primary font-medium tracking-wide uppercase mb-4">
                        The Team
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                        Meet the developers
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Two full-stack developers united by curiosity and a
                        shared love for building things.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {team.map((member) => (
                        <div
                            key={member.name}
                            className="p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
                        >
                            <div className="flex items-start gap-6 mb-6">
                                <div className="shrink-0 w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                                    {member.avatar?.url ? (
                                        <Image
                                            src={member.avatar.url}
                                            alt={
                                                member.avatar.alt ?? member.name
                                            }
                                            width={80}
                                            height={80}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-2xl font-bold text-primary">
                                            {getInitials(member.name)}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-primary text-sm font-medium">
                                        {member.role}
                                    </p>
                                </div>
                            </div>

                            {member.bio && (
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {member.bio}
                                </p>
                            )}

                            {member.links?.length && (
                                <div className="flex items-center gap-3">
                                    {member.links.map((link) => {
                                        const config = LINK_CONFIG[link.type];

                                        if (!config) return null;

                                        const Icon = config.icon;

                                        return (
                                            <Button
                                                key={link.type}
                                                asChild
                                                variant={config.variant}
                                                size="sm"
                                                className="gap-2"
                                            >
                                                <a
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Icon className="w-4 h-4" />
                                                    {!config.iconOnly &&
                                                        config.label}
                                                </a>
                                            </Button>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

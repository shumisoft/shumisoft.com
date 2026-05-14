import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { TeamSection } from "@/components/team-section";
import { getLanding } from "@/sanity/queries/landing";
import { getProjects } from "@/sanity/queries/project";
import { getTeam } from "@/sanity/queries/team";

export default async function Home() {
    const { hero } = await getLanding();

    const projects = await getProjects();

    const team = await getTeam();

    return (
        <main className="min-h-screen bg-background">
            <Header />
            <HeroSection hero={hero} />
            <AboutSection />
            <TeamSection team={team} />
            <ProjectsSection projects={projects} />
            <ContactSection />
            <Footer />
        </main>
    );
}

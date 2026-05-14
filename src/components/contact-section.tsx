import { Github, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm text-primary font-medium tracking-wide uppercase mb-4">
          Explore Our Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
          Check out our projects
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          All our collaborative projects are open source and available on GitHub. 
          Feel free to explore, fork, or contribute.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="gap-2">
            <a href="https://github.com/shumisoft" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              Visit Shumisoft on GitHub
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </Button>
        </div>

        <div className="mt-16 p-8 rounded-xl bg-card border border-border">
          <p className="text-muted-foreground text-sm mb-4">
            Looking to hire? We&apos;re both actively seeking opportunities.
          </p>
          <p className="text-foreground font-medium">
            Visit our individual portfolios above to learn more about each of us 
            and get in touch directly.
          </p>
        </div>
      </div>
    </section>
  )
}

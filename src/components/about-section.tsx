import { Code2, Layers, Server, Rocket } from "lucide-react"

const skills = [
  {
    icon: Code2,
    title: "Web Technologies",
    description: "Modern frontend and backend frameworks for building responsive, performant web applications."
  },
  {
    icon: Server,
    title: "Distributed Systems",
    description: "Designing scalable architectures and high-throughput applications that handle real-world demands."
  },
  {
    icon: Layers,
    title: "Full Stack Development",
    description: "End-to-end development from database design to polished user interfaces."
  },
  {
    icon: Rocket,
    title: "Continuous Learning",
    description: "Every project is an opportunity to explore new technologies and sharpen our skills."
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm text-primary font-medium tracking-wide uppercase mb-4">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Learning by building
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Shumisoft is our playground for exploration. As full-stack developers, 
                we use this space to collaborate on hobby projects that push our 
                boundaries and help us master new technologies.
              </p>
              <p>
                While we each maintain our own individual portfolio websites showcasing 
                our personal work, this GitHub organization houses all our collaborative 
                experiments, from proof-of-concepts to fully-fledged applications.
              </p>
              <p>
                We specialize in web technologies and have a particular interest in 
                designing scalable, distributed, high-throughput systems. Every project 
                here represents our shared curiosity and drive to keep growing.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div 
                key={skill.title}
                className="flex flex-col col-span-2 sm:col-span-1  gap-3 p-5 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <skill.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{skill.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

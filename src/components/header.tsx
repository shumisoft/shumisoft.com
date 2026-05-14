"use client"

import Link from "next/link"
import { Github } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight text-foreground">
          Shumisoft
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="#about" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link 
            href="#team" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Team
          </Link>
          <Link 
            href="#projects" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </Link>
        </nav>
        <a
          href="https://github.com/shumisoft"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="w-5 h-5" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </div>
    </header>
  )
}

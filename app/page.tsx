import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { ContentCreator } from '@/components/content-creator'
import { Education } from '@/components/education'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <ContentCreator />
      <Skills />
      <Education />
      <Contact />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
            <p>© 2026 Vivek Bhatt. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://linkedin.com/in/vivekbhatt-data" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/bhattviv" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                GitHub
              </a>
              <a href="mailto:26bhattvivek@gmail.com" className="hover:text-accent transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

'use client'

import { useInView } from 'react-intersection-observer'

export function Education() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section ref={ref} className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm">
            <span className="text-sm text-accent font-medium">Academic Background</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-accent">Education</span>
          </h2>
        </div>

        <div className={`transition-all duration-1000 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="premium-card space-y-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Bachelor of Technology (B.Tech)</h3>
                <p className="text-lg text-accent font-semibold">Computer Science & Engineering</p>
                <p className="text-lg text-foreground font-semibold mt-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Birla Institute of Applied Sciences, Bhimtal
                </p>
              </div>
              <div className="text-right space-y-2">
                <p className="text-lg font-semibold text-foreground">Graduated 2026</p>
                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-sm text-accent font-medium">Ongoing</div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
              <p className="text-muted-foreground/90 leading-relaxed">
                Completed rigorous coursework in computer science fundamentals, algorithms, data structures, machine learning, artificial intelligence, and software engineering. Actively involved in campus technical communities and competitive programming.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-accent/10">
              {[
                { label: 'GPA', value: '7.9' },
                { label: 'Focus Areas', value: 'AI/ML' },
                { label: 'Activities', value: 'Tech Lead' },
                { label: 'Recognition', value: 'Top 20 GFG' },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-lg bg-gradient-to-br from-accent/10 to-blue-500/5 border border-accent/20 hover:border-accent/40 transition-all duration-300">
                  <div className="text-xs text-muted-foreground/70 uppercase tracking-widest font-semibold mb-2">{item.label}</div>
                  <div className="text-lg font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useInView } from 'react-intersection-observer'

export function Education() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section ref={ref} className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-accent">Education</span>
        </h2>

        <div className={`transition-all duration-1000 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="p-8 bg-card border border-border rounded-lg hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-foreground">Bachelor of Technology (B.Tech)</h3>
                <p className="text-lg text-accent font-semibold mt-2">Computer Science & Engineering</p>
              </div>
              <div className="text-muted-foreground mt-4 md:mt-0 text-right">
                <p className="font-semibold">Graduated 2026</p>
              </div>
            </div>

            <p className="text-lg text-foreground font-semibold mb-2">
              Birla Institute of Applied Sciences, Bhimtal
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Completed rigorous coursework in computer science fundamentals, algorithms, data structures, machine learning, artificial intelligence, and software engineering. Actively involved in campus technical communities and competitive programming.
            </p>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'GPA', value: '3.8+' },
                { label: 'Focus Areas', value: 'AI/ML' },
                { label: 'Activities', value: 'Tech Lead' },
                { label: 'Recognition', value: 'Top 20 GFG' },
              ].map((item, i) => (
                <div key={i} className="p-3 bg-secondary/50 rounded border border-border">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="text-sm font-semibold text-accent">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

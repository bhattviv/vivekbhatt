'use client'

import { useInView } from 'react-intersection-observer'

export function PersonalProjects() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const projects = [
    {
      title: 'AI Voice Hiring Bot',
      description: 'Built and scaled an AI voice screening platform from a single Sales Hiring Agent into a multi-role hiring framework (5+ roles), integrating Vapi, Twilio, and Django REST backends for real-time candidate evaluation and automated call routing with 90%+ call reliability, cutting manual recruiter screening effort by ~55%.',
      tags: ['Vapi', 'Twilio', 'Django', 'Voice AI', 'Automation'],
      github: 'https://github.com/bhattviv/Voice_Agent',
      type: 'internship',
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm">
            <span className="text-sm text-accent font-medium">Personal & Internship Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Personal <span className="text-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">In-depth projects from internships and personal initiatives showcasing full-stack solutions.</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 transform ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="premium-card group">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Left side - Badge and Icon */}
                  <div className="flex items-start gap-4 lg:w-1/4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                    <div>
                      {project.type === 'internship' && (
                        <span className="inline-block px-2 py-1 text-xs font-semibold bg-accent/20 text-accent rounded-full border border-accent/30 mb-2">
                          Darwix AI Internship
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right side - Content */}
                  <div className="flex-1 lg:w-3/4">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-base text-muted-foreground/80 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-4 pt-4 border-t border-accent/10">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-accent/20 to-accent/10 text-accent border border-accent/30 rounded-full hover:border-accent/60 hover:bg-accent/30 transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent/80 hover:text-accent font-semibold transition-colors duration-300 group/link"
                      >
                        View on GitHub
                        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

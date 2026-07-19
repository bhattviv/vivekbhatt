'use client'

import { useRef, useEffect, useState } from 'react'

export function ContentCreator() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const contentStats = [
    { number: '200+', label: 'Videos Generated' },
    { number: '4', label: 'AI Tools Used' },
  ]

  const tools = ['Kling AI', 'CapCut', 'OpenRouter', 'Gemini']

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full border border-accent-warm/30 bg-accent-warm/5 backdrop-blur-sm">
            <span className="text-sm text-accent-warm font-medium">Creative Side</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            YouTube Shorts & Reels AI <span className="text-accent-warm">Pipeline</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">Building an AI-powered content pipeline that automates video creation from concept to publication.</p>
          <div className="inline-flex items-center gap-3 mt-4 flex-wrap">
            <a
              href="https://youtube.com/@universe_truth_2026?si=qcUKpq_FwXl1jg0X"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-warm hover:text-accent-warm/80 transition-colors font-semibold"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Visit Channel
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="https://github.com/bhattviv/Youtube-Agent"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-semibold"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Repository
            </a>
          </div>
        </div>

        {/* Featured Project */}
        <div className={`transition-all duration-1000 mb-16 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="premium-card overflow-hidden hover-lift">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-accent-warm/10 border border-accent-warm/30 text-sm text-accent-warm font-medium mb-4">
                  Youtube-Agent Project
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  YouTube Shorts & Reels AI Pipeline
                </h3>
                <p className="text-muted-foreground/90 mb-6 leading-relaxed">
                  Automated an end-to-end n8n AI pipeline for script writing, text-to-speech, caption generation, and video/image production via OpenRouter, Gemini, and Hugging Face APIs. The pipeline transforms a single prompt into production-ready YouTube Shorts and Instagram Reels.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['n8n', 'OpenRouter', 'Gemini', 'HuggingFace', 'Kling AI', 'CapCut'].map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-accent-warm/10 text-accent-warm text-xs font-medium border border-accent-warm/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/bhattviv" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-warm transition-colors">
                    View Code →
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                {contentStats.map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 bg-secondary/50 border border-border rounded-lg"
                    style={{ animation: `slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards`, animationDelay: `${0.2 + i * 0.1}s` }}
                  >
                    <div className="text-3xl font-bold text-accent-warm">{stat.number}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Channels */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tools */}
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            <div className="premium-card h-full">
              <h3 className="text-xl font-bold mb-6 text-accent-warm">Tools & Technologies</h3>
              <div className="space-y-3">
                {tools.map((tool, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/60 transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-accent-warm"></div>
                    <span className="text-foreground font-medium">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Stats */}
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
            <div className="premium-card h-full">
              <h3 className="text-xl font-bold mb-6 text-accent-warm">Production Stats</h3>
              <div className="space-y-4">
                <div className="border-b border-border pb-4">
                  <p className="text-sm text-muted-foreground mb-2">Videos Published</p>
                  <p className="text-3xl font-bold text-accent-warm">200+</p>
                </div>
                <div className="border-b border-border pb-4">
                  <p className="text-sm text-muted-foreground mb-2">Pipeline Runs</p>
                  <p className="text-3xl font-bold text-accent-warm">500+</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Platforms</p>
                  <p className="text-3xl font-bold text-accent-warm">Multiple</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

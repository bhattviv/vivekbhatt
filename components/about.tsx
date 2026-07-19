'use client'

import { useInView } from 'react-intersection-observer'

export function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section ref={ref} className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="mb-12 space-y-4">
            <div className="inline-block px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm">
              <span className="text-sm text-accent font-medium">Who am I</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-accent">About</span> Me
            </h2>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground/90 leading-relaxed">
            <p className="animate-fade-in-up fade-in-0">
              I hold a <span className="text-foreground font-semibold">Bachelor of Technology in Computer Science from Birla Institute of Applied Sciences, Bhimtal</span> (GPA: 7.9). I&apos;m an AI/ML Engineer with a passion for building production-grade AI systems and GenAI products that solve real-world problems.
            </p>

            <p className="animate-fade-in-up fade-in-1">
              I worked as an <span className="text-foreground font-semibold">AI Engineer Intern at Darwix AI</span>, building outbound voice agents and GenAI-powered automation systems. My previous experience includes:
            </p>

            <ul className="space-y-3 ml-6 list-disc animate-fade-in-up fade-in-2">
              <li><span className="text-foreground font-semibold">GlobalLogic</span> (A Hitachi Group Company) - Built RAG-based Q&A systems with vector embeddings and LangChain</li>
              <li><span className="text-foreground font-semibold">Infosys Springboard</span> - Developed AI voice assistants for healthcare applications</li>
              <li><span className="text-foreground font-semibold">AICTE</span> - Created ML models for disease prediction with up to 95% accuracy</li>
            </ul>

            <p className="animate-fade-in-up fade-in-3">
              I&apos;ve solved 900+ DSA problems and hold a <span className="text-accent font-semibold">Google Cloud Professional ML Engineer</span> certification. I&apos;m driven by the challenge of optimizing AI systems for performance and reliability at scale.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { number: '900+', label: 'DSA Problems Solved' },
              { number: '200+', label: 'Students Engaged' },
              { number: '1+', label: 'Years Experience' },
            ].map((stat, i) => (
              <div
                key={i}
                className="premium-card text-center"
                style={{ animation: `fade-in-scale 0.6s cubic-bezier(0.23, 1, 0.320, 1) forwards`, animationDelay: `${0.4 + i * 0.1}s` }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

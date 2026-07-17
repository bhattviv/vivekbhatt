'use client'

import { useInView } from 'react-intersection-observer'

export function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section ref={ref} className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-accent">About</span> Me
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I&apos;m an AI/ML Engineer with a passion for building production-grade AI systems and GenAI products that solve real-world problems. Graduated with a Bachelor of Technology in Computer Science from <span className="text-foreground font-semibold">Birla Institute of Applied Sciences, Bhimtal</span>.
            </p>

            <p>
              Currently working as an <span className="text-foreground font-semibold">AI Engineer Intern at Darwix AI</span>, where I build outbound voice agents and GenAI-powered automation systems. My previous experience includes:
            </p>

            <ul className="space-y-3 ml-6 list-disc">
              <li><span className="text-foreground font-semibold">GlobalLogic</span> - Built RAG-based Q&A systems with vector embeddings and LangChain</li>
              <li><span className="text-foreground font-semibold">Infosys Springboard</span> - Developed AI voice assistants for healthcare applications</li>
              <li><span className="text-foreground font-semibold">AICTE</span> - Created ML models for disease prediction with up to 95% accuracy</li>
            </ul>

            <p>
              I&apos;ve solved 900+ DSA problems and hold a <span className="text-accent">Google Cloud Professional ML Engineer</span> certification. I&apos;m driven by the challenge of optimizing AI systems for performance and reliability at scale.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { number: '900+', label: 'DSA Problems Solved' },
              { number: '200+', label: 'Students Engaged' },
              { number: '5+', label: 'Years Experience' },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-6 bg-card border border-border rounded-lg text-center hover:border-accent/50 transition-colors duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

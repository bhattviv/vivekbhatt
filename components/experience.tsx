'use client'

import { useInView } from 'react-intersection-observer'

export function Experience() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const experiences = [
    {
      company: 'Darwix AI',
      position: 'AI Engineer Intern',
      period: 'Mar 2026 – May 2026',
      type: 'Onsite',
      achievements: [
        'Created an AI-powered outbound voice agent for loan pre-qualification with real-time multilingual support (EN/HI/Hinglish)',
        'Reduced manual calling effort by ~60%, improved accuracy by ~30%, cut decision time by ~40%, and reduced costs by ~25%',
      ],
    },
    {
      company: 'Infosys Springboard',
      position: 'AI Intern',
      period: 'Feb 2025 – Apr 2025',
      type: 'Remote',
      achievements: [
        'Built an AI-intelligent voice assistant using Azure OpenAI and NLP, integrated with a React/React Native mobile app for patient-nurse communication',
        'Designed to improve request prioritization and boost response efficiency by an estimated 20-30% in healthcare settings',
      ],
    },
    {
      company: 'AICTE',
      position: 'ML Intern',
      period: 'Nov 2024 – Apr 2025',
      type: 'Remote',
      achievements: [
        'Created ML models for Heart Disease, Parkinson\'s, and Diabetes prediction achieving up to 95% accuracy on 1,000+ patient records',
        'Designed end-to-end ML pipeline with data preprocessing, model training, and evaluation',
      ],
    },
    {
      company: 'GlobalLogic (A Hitachi Group Company)',
      position: 'AI/ML Intern',
      period: 'Jul 2024 – Sept 2024',
      type: 'Hybrid',
      achievements: [
        'Implemented a RAG pipeline integrating vector embeddings and LangChain, improving domain-specific knowledge retrieval efficiency by 20%',
        'Combined GPT4All with LangChain to improve conversational interface, resulting in 15% improvement in model response accuracy',
      ],
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm">
            <span className="text-sm text-accent font-medium">Professional Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-accent">Experience</span>
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="group relative">
                {/* Timeline dot with glow */}
                <div className="absolute -left-5 top-2 w-10 h-10 bg-gradient-to-r from-accent to-blue-500 border-2 border-accent/50 rounded-full flex items-center justify-center shadow-lg shadow-accent/30 group-hover:shadow-accent/60 transition-all duration-300 animate-glow-border">
                  <div className="w-3 h-3 bg-background rounded-full"></div>
                </div>

                {/* Timeline connector line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute -left-0 top-12 w-0.5 h-20 bg-gradient-to-b from-accent/30 to-accent/0"></div>
                )}

                {/* Content Card */}
                <div className="premium-card ml-12 group-hover:translate-x-2 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 pb-4 border-b border-accent/10">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">{exp.position}</h3>
                      <p className="text-accent/80 font-semibold text-lg">{exp.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-3 md:mt-0 md:text-right space-y-1">
                      <p className="font-medium">{exp.period}</p>
                      <p className="text-xs bg-accent/10 text-accent rounded-full px-3 py-1 inline-block">{exp.type}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 text-muted-foreground/90">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed group/item">
                        <span className="text-accent mt-1 group-hover/item:text-blue-400 transition-colors duration-300">➔</span>
                        <span className="group-hover/item:text-muted-foreground transition-colors duration-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

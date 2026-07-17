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
        'Built an AI-powered outbound voice agent for loan pre-qualification with real-time multilingual (EN/HI/Hinglish) support and <2s latency',
        'Reduced manual calling effort by ~60%, improved accuracy by ~30%, cut decision time by ~40%, reduced costs by ~25%',
        'Designed prompt templates and conversation flows for multilingual intent handling',
      ],
    },
    {
      company: 'Infosys Springboard',
      position: 'AI Intern',
      period: 'Feb 2025 – Apr 2025',
      type: 'Remote',
      achievements: [
        'Built an AI voice assistant (Azure OpenAI, NLP) integrated with a React Native mobile app for patient-nurse communication',
        'Improved response efficiency by 30-40% in a healthcare setting',
      ],
    },
    {
      company: 'AICTE',
      position: 'ML Intern',
      period: 'Nov 2024 – Apr 2025',
      type: 'Remote',
      achievements: [
        'Built ML models for Heart Disease, Parkinson\'s, and Diabetes prediction achieving up to 95% accuracy on 1,000+ patient records',
        'Improved model reliability by 15% through preprocessing',
      ],
    },
    {
      company: 'GlobalLogic (A Hitachi Group Company)',
      position: 'AI/ML Intern',
      period: 'Jul 2024 – Sept 2024',
      type: 'Hybrid',
      achievements: [
        'Built a RAG-based intelligent Q&A system integrating vector embeddings and LangChain',
        'Improved domain-specific retrieval efficiency by 20% and response accuracy by 15% using GPT4All',
      ],
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-accent">Experience</span>
        </h2>

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
                <div className="absolute -left-4 top-0 w-8 h-8 bg-accent/20 border-2 border-accent rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                </div>

                <div className="ml-8 p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                      <p className="text-accent font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2 md:mt-0 text-right">
                      <p>{exp.period}</p>
                      <p className="text-xs text-accent/60">{exp.type}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 text-muted-foreground">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed">
                        <span className="text-accent mt-1">▸</span>
                        <span>{achievement}</span>
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

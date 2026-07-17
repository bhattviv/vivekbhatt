'use client'

import { useInView } from 'react-intersection-observer'

export function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const projects = [
    {
      title: 'Outbound Voice Agent',
      description: 'AI-powered multilingual (EN/HI/Hinglish) voice agent for loan pre-qualification with sub-2s latency, cutting manual calling effort by 60%.',
      tags: ['LangChain', 'GenAI APIs', 'NLU', 'Prompt Engineering'],
      github: '#',
    },
    {
      title: 'Voice-Based Patient Call System',
      description: 'AI voice assistant with mobile app integration for patient-nurse communication in healthcare.',
      tags: ['Azure OpenAI', 'NLP', 'React Native'],
      github: '#',
    },
    {
      title: 'Intelligent RAG Q&A System',
      description: 'Retrieval-Augmented Generation pipeline with vector embeddings for domain-specific knowledge retrieval.',
      tags: ['LangChain', 'GPT4All', 'Vector Embeddings'],
      github: '#',
    },
    {
      title: 'Disease Outbreak Prediction',
      description: 'ML models for Heart Disease, Parkinson\'s, and Diabetes prediction with up to 95% accuracy on 1,000+ records.',
      tags: ['Scikit-learn', 'Python', 'Preprocessing'],
      github: '#',
    },
    {
      title: 'AI-Based Attendance Management',
      description: 'Automated attendance system using facial recognition for real-time student verification, targeting 95%+ accuracy.',
      tags: ['Computer Vision', 'APIs', 'Web App'],
      github: '#',
    },
    {
      title: 'Resume Tracer',
      description: 'AI-driven resume parsing and analytics app extracting key details from 100+ resumes using NLP and regex, cutting manual screening time by 60%.',
      tags: ['Python', 'Streamlit', 'NLP', 'Regex'],
      github: '#',
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Featured <span className="text-accent">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 transform ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-full p-6 bg-card border border-border rounded-lg hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group flex flex-col">
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground flex-grow mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-semibold bg-accent/10 text-accent border border-accent/30 rounded-full hover:bg-accent/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold text-sm transition-colors"
                  >
                    View on GitHub
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

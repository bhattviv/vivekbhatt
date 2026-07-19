'use client'

import { useInView } from 'react-intersection-observer'

export function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const projects = [
    {
      title: 'Disease Outbreak Prediction',
      description: 'Built ML models for Heart Disease, Parkinson\'s, and Diabetes prediction achieving up to 95% accuracy on 1,000+ patient records, enabling early diagnosis and reducing manual assessment time by 40%.',
      tags: ['Scikit-learn', 'Python', 'ML Model Training'],
      github: 'https://github.com/bhattviv',
    },
    {
      title: 'Resume Tracer',
      description: 'AI-driven resume parsing and analytics web app that extracts key details (skills, experience, keywords) from 100+ resumes using NLP and regex, reducing manual screening time by over 60%.',
      tags: ['Python', 'Streamlit', 'NLP', 'Regex'],
      github: 'https://github.com/bhattviv',
    },
    {
      title: 'Demand Forecasting for E-Commerce',
      description: 'Developed a sales forecasting model leveraging historical sales data and advanced analytics, leading to 25% improvement in overall inventory accuracy levels company-wide.',
      tags: ['Data Analytics', 'Python', 'Time Series'],
      github: 'https://github.com/bhattviv',
    },
    {
      title: 'Intelligent RAG Q&A System',
      description: 'Implemented a RAG pipeline integrating vector embeddings and LangChain for domain-specific knowledge retrieval, improving efficiency by 20%. Combined GPT4All with LangChain for 15% improvement in model response accuracy.',
      tags: ['LangChain', 'GPT4All', 'Vector Embeddings', 'GenAI'],
      github: 'https://github.com/bhattviv',
    },
    {
      title: 'Voice-Based Patient Call System',
      description: 'Built an AI-intelligent voice assistant using Azure OpenAI and NLP, integrated with a mobile app (React/React Native) for patient-nurse communication, designed to improve request prioritization and boost response efficiency by 20-30% in healthcare.',
      tags: ['Azure OpenAI', 'NLP', 'React Native', 'Healthcare'],
      github: 'https://github.com/bhattviv',
    },
    {
      title: 'Outbound Voice Agent',
      description: 'Created an AI-powered outbound voice agent for loan pre-qualification with real-time multilingual support (EN/HI/Hinglish), reducing manual calling effort by 60%, improving accuracy by 30%, reducing decision time by 40%, and cutting costs by 25%.',
      tags: ['Voice AI', 'LLM', 'GenAI', 'NLU'],
      github: 'https://github.com/bhattviv',
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm">
            <span className="text-sm text-accent font-medium">My Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">Showcase of AI/ML projects I&apos;ve built, spanning GenAI, voice AI, and automation pipelines.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 transform ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="premium-card h-full flex flex-col group">
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground/80 flex-grow mb-4 leading-relaxed">
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
                    className="inline-flex items-center gap-2 text-accent/80 hover:text-accent font-semibold text-sm transition-colors duration-300 group/link"
                  >
                    View on GitHub
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

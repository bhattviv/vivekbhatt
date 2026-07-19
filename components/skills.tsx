'use client'

import { useInView } from 'react-intersection-observer'

export function Skills() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'SQL', 'HTML/CSS', 'JavaScript', 'Linux'],
    },
    {
      category: 'Data Analysis & Visualization',
      skills: ['Power BI', 'Tableau', 'Advanced MS Excel', 'Pandas', 'NumPy', 'Matplotlib'],
    },
    {
      category: 'Relational/NoSQL Databases',
      skills: ['MySQL', 'MongoDB', 'Supabase', 'SQLite', 'Vector Databases'],
    },
    {
      category: 'Web Technologies & Backend',
      skills: ['React.js', 'Django', 'FastAPI', 'RESTful APIs', 'WebSockets', 'Docker', 'Unit Testing'],
    },
    {
      category: 'AI/ML & GenAI',
      skills: ['LangChain', 'LangGraph', 'GEN-AI', 'LLM', 'Scikit-learn', 'PyTorch', 'NLP', 'Hugging Face', 'Prompt Engineering', 'OpenCV', 'n8n', 'Probability', 'Statistics', 'Calculus'],
    },
    {
      category: 'Cloud & Infrastructure',
      skills: ['GCP', 'Vertex AI', 'BigQuery', 'Pub/Sub', 'MLflow'],
    },
  ]

  const certifications = [
    { title: 'Machine Learning and AI', issuer: 'Google Cloud Training Online' },
    { title: 'Data Analysis Using Python', issuer: 'IBM' },
    { title: 'Foundations of Prompt Engineering', issuer: 'Amazon' },
  ]

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm">
            <span className="text-sm text-accent font-medium">Tech Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-accent">Skills</span> & Technologies
          </h2>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className={`transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              <h3 className="text-xl font-bold text-accent mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-blue-400"></span>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="group premium-card px-4 py-2 text-sm font-medium text-foreground transition-all duration-300"
                    style={{ transitionDelay: `${i * 30}ms` }}
                  >
                    <div className="relative z-10 group-hover:text-accent transition-colors duration-300">{skill}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 premium-card">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-accent to-blue-400"></span>
            <h3 className="text-xl font-bold text-accent">Certifications</h3>
          </div>
          <ul className="space-y-4 text-muted-foreground">
            {certifications.map((cert, idx) => (
              <li key={idx} className="flex items-start gap-4 group/item p-3 rounded-lg hover:bg-accent/5 transition-all duration-300">
                <span className="text-accent mt-1 text-lg group-hover/item:scale-125 transition-transform duration-300">📜</span>
                <div>
                  <span className="text-foreground font-semibold group-hover/item:text-accent transition-colors duration-300">{cert.title}</span>
                  <p className="text-sm text-muted-foreground/70 mt-1">— {cert.issuer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

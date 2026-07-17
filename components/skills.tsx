'use client'

import { useInView } from 'react-intersection-observer'

export function Skills() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'SQL', 'HTML/CSS', 'JavaScript'],
    },
    {
      category: 'AI/ML',
      skills: ['Scikit-learn', 'PyTorch', 'NLP', 'OpenCV', 'LangChain', 'LlamaIndex', 'Hugging Face', 'Prompt Engineering', 'RLHF', 'Diffusion Models', 'n8n', 'Probability', 'Statistics', 'Calculus', 'LLM', 'GEN-AI'],
    },
    {
      category: 'Data & Visualization',
      skills: ['Power BI', 'Tableau', 'Pandas', 'NumPy', 'Matplotlib', 'Advanced MS Excel'],
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'MongoDB', 'Redis', 'SQLite', 'Pinecone', 'FAISS'],
    },
    {
      category: 'Web & Cloud',
      skills: ['React.js', 'Django', 'FastAPI', 'RESTful APIs', 'WebSockets', 'Docker', 'Unit Testing', 'GCP', 'Vertex AI', 'BigQuery', 'Pub/Sub', 'MLflow'],
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-accent">Skills</span> & Technologies
        </h2>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className={`transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              <h3 className="text-xl font-bold text-accent mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-accent hover:bg-accent/5 transition-all duration-300 hover:scale-105"
                    style={{ transitionDelay: `${i * 30}ms` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 p-8 bg-card border border-border rounded-lg">
          <h3 className="text-xl font-bold text-accent mb-6">Certifications & Achievements</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">✓</span>
              <span><span className="text-foreground font-semibold">Google Cloud Professional Machine Learning Engineer</span> - Completed 25+ hands-on labs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">✓</span>
              <span><span className="text-foreground font-semibold">900+ DSA Problems Solved</span> across LeetCode, GFG, and CodeChef</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">✓</span>
              <span><span className="text-foreground font-semibold">Top 20 on GeeksforGeeks</span> in college</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">✓</span>
              <span><span className="text-foreground font-semibold">Google Student Ambassador & Campus Mantri</span> - Engaged 200+ students</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">✓</span>
              <span><span className="text-foreground font-semibold">Innovative Coordinator</span> - Selected from a batch of 180 peers</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

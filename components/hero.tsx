'use client'

export function Hero() {
  const handleDownloadResume = () => {
    // Create a resume link - you can replace this with your actual resume URL from a storage service
    const resumeUrl = 'https://drive.google.com/file/d/YOUR_RESUME_FILE_ID/view?usp=sharing'
    window.open(resumeUrl, '_blank')
  }

  const handleGetInTouch = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden relative">
      {/* Premium background gradient elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm mb-4 animate-fade-in-scale fade-in-0">
            <span className="text-sm text-accent font-medium">Welcome to my portfolio</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
            <span className="bg-gradient-to-r from-accent via-accent to-blue-400 bg-clip-text text-transparent animate-shimmer">
              Vivek Bhatt
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
            AI/ML Engineer <span className="text-accent/70">|</span> Building GenAI products, voice agents <span className="text-accent/70">&</span> automation pipelines
          </p>
        </div>

        <p className="text-base md:text-lg text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up fade-in-1">
          Specializing in building production-grade AI systems with expertise in large language models, voice AI, retrieval-augmented generation, and ML model optimization.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up fade-in-2">
          <button
            onClick={handleDownloadResume}
            className="premium-btn px-8 py-4 bg-gradient-to-r from-accent to-blue-500 text-accent-foreground rounded-xl font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Download Resume</span>
          </button>
          <button
            onClick={handleGetInTouch}
            className="premium-btn px-8 py-4 border-2 border-accent/50 text-accent rounded-xl font-semibold hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm"
          >
            <span className="relative z-10">Get in Touch</span>
          </button>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-3 gap-4 pt-12 max-w-xl mx-auto animate-fade-in-up fade-in-3">
          {[
            { number: '1+', label: 'Years Exp.' },
            { number: '900+', label: 'Problems Solved' },
            { number: '200+', label: 'Students Helped' },
          ].map((stat, i) => (
            <div
              key={i}
              className="premium-card py-4"
              style={{ animation: `fade-in-scale 0.6s cubic-bezier(0.23, 1, 0.320, 1) forwards`, animationDelay: `${0.4 + i * 0.1}s` }}
            >
              <div className="text-2xl md:text-3xl font-bold text-accent">{stat.number}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator with animation */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in-up fade-in-4">
        <div className="flex flex-col items-center gap-2 text-muted-foreground/70 hover:text-accent transition-colors duration-300">
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

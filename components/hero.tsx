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
      {/* Background gradient elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
            <span className="bg-gradient-to-r from-accent via-accent to-accent/60 bg-clip-text text-transparent">
              Vivek Bhatt
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            AI/ML Engineer <span className="text-accent">|</span> Building GenAI products, voice agents <span className="text-accent">&</span> automation pipelines
          </p>
        </div>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up fade-in-1">
          Specializing in building production-grade AI systems with expertise in large language models, voice AI, retrieval-augmented generation, and ML model optimization.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up fade-in-2">
          <button
            onClick={handleDownloadResume}
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:scale-105"
          >
            Download Resume
          </button>
          <button
            onClick={handleGetInTouch}
            className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in-up fade-in-3">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm">Scroll to explore</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

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
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden relative animated-gradient-mesh">
      {/* Advanced animated background with morphing blobs and effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Blob 1 - Morphing with gradient */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-accent/25 via-accent/10 to-blue-500/10 rounded-full blur-3xl animate-morph animate-float" style={{}}></div>
        
        {/* Blob 2 - Morphing with delay */}
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-accent/15 via-accent/8 to-transparent rounded-full blur-3xl animate-morph animate-float" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
        
        {/* Blob 3 - Pulse scale */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-br from-primary/12 via-accent/8 to-transparent rounded-full blur-3xl animate-pulse-scale" style={{ animationDelay: '1s' }}></div>

        {/* Grid background overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="space-y-8">
          {/* Profile Photo */}
          <div className="flex justify-center mb-6 animate-blur-in delay-0">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-accent/30 shadow-lg shadow-accent/20 hover-glow">
              <img
                src="/profile.jpg"
                alt="Vivek Bhatt"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Welcome badge with blur-in animation */}
          <div className="inline-block px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm mb-4 animate-blur-in delay-0 hover-glow">
            <span className="text-sm text-accent font-medium">Welcome to my portfolio</span>
          </div>
          
          {/* Main heading with gradient text animation */}
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
              <span className="gradient-text-animated animate-text-reveal delay-1">
                Vivek Bhatt
              </span>
            </h1>
          </div>
          
          {/* Subtitle with blur animation */}
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide animate-blur-in delay-2">
            AI/ML Engineer <span className="text-accent/70">|</span> Building GenAI products, voice agents <span className="text-accent/70">&</span> automation pipelines
          </p>
        </div>

        {/* Description with slide-up animation */}
        <p className="text-base md:text-lg text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed animate-slide-up delay-3">
          Specializing in building production-grade AI systems with expertise in large language models, voice AI, retrieval-augmented generation, and ML model optimization.
        </p>

        {/* CTA buttons with hover-lift effect */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-slide-up delay-4">
          <button
            onClick={handleDownloadResume}
            className="hover-lift premium-btn px-8 py-4 bg-gradient-to-r from-accent to-blue-500 text-accent-foreground rounded-xl font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/50 transition-all duration-300 active:scale-95 group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <span className="relative z-10">Download Resume</span>
          </button>
          <button
            onClick={handleGetInTouch}
            className="hover-lift premium-btn px-8 py-4 border-2 border-accent/50 text-accent rounded-xl font-semibold hover:border-accent hover:bg-accent/10 transition-all duration-300 active:scale-95 backdrop-blur-sm group"
          >
            <span className="relative z-10">Get in Touch</span>
          </button>
        </div>

        {/* Animated stats with bounce-in effect */}
        <div className="grid grid-cols-3 gap-4 pt-12 max-w-xl mx-auto">
          {[
            { number: '1+', label: 'Years Exp.' },
            { number: '900+', label: 'Problems Solved' },
            { number: '200+', label: 'Students Helped' },
          ].map((stat, i) => (
            <div
              key={i}
              className="premium-card py-4 hover-lift group cursor-default"
              style={{ animation: `bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards`, animationDelay: `${0.6 + i * 0.15}s` }}
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent group-hover:animate-pulse">{stat.number}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-slide-up delay-5 group cursor-pointer">
        <div className="flex flex-col items-center gap-2 text-muted-foreground/70 hover:text-accent transition-colors duration-300">
          <span className="text-sm font-medium group-hover:animate-pulse">Scroll to explore</span>
          <svg className="w-6 h-6 animate-bounce group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

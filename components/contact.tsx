'use client'

import { useInView } from 'react-intersection-observer'

export function Contact() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const contactMethods = [
    {
      icon: '✉',
      label: 'Email',
      value: '26bhattvivek@gmail.com',
      href: 'mailto:26bhattvivek@gmail.com',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/vivekbhatt-data',
      href: 'https://linkedin.com/in/vivekbhatt-data',
    },
    {
      icon: '🔗',
      label: 'GitHub',
      value: 'github.com/bhattviv',
      href: 'https://github.com/bhattviv',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 9315309508',
      href: 'tel:+919315309508',
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="mb-16 space-y-4">
            <div className="inline-block px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm">
              <span className="text-sm text-accent font-medium">Get in Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Let&apos;s <span className="text-accent">Connect</span>
            </h2>
          </div>

          <p className="text-lg text-muted-foreground/90 text-center mb-16 max-w-2xl mx-auto leading-relaxed">
            I&apos;m always open to exploring new opportunities, collaborating on interesting projects, or discussing AI and machine learning. Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {contactMethods.map((method, i) => (
              <a
                key={i}
                href={method.href}
                target={method.href.startsWith('mailto:') || method.href.startsWith('tel:') ? undefined : '_blank'}
                rel={method.href.startsWith('mailto:') || method.href.startsWith('tel:') ? undefined : 'noopener noreferrer'}
                className="premium-card group"
                style={{ animation: `fade-in-scale 0.6s cubic-bezier(0.23, 1, 0.320, 1) forwards`, animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent/20 to-blue-500/20 border border-accent/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-2xl">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                      {method.label}
                    </h3>
                    <p className="text-sm text-muted-foreground/80 mt-2 break-all group-hover:text-accent/70 transition-colors duration-300">
                      {method.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              href="mailto:26bhattvivek@gmail.com"
              className="premium-btn inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-blue-500 text-accent-foreground rounded-xl font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Send me an email</span>
              <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

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
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Let&apos;s <span className="text-accent">Connect</span>
          </h2>

          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            I&apos;m always open to exploring new opportunities, collaborating on interesting projects, or discussing AI and machine learning. Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, i) => (
              <a
                key={i}
                href={method.href}
                target={method.href.startsWith('mailto:') || method.href.startsWith('tel:') ? undefined : '_blank'}
                rel={method.href.startsWith('mailto:') || method.href.startsWith('tel:') ? undefined : 'noopener noreferrer'}
                className={`p-6 bg-card border border-border rounded-lg hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{method.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground group-hover:text-accent transition-colors">
                      {method.label}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 break-all group-hover:text-accent/80 transition-colors">
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:scale-105"
            >
              Send me an email
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

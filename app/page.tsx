'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import OrbitalSkills from '../components/OrbitalSkills'
import Project from '../components/Project'
import { projects, skills } from '../content/data'

const container = { hidden:{opacity:0,y:20}, show:{opacity:1,y:0,transition:{duration:.6}} }
export default function Page(){
  return (
    <main>
      <header className="sticky top-0 z-50 backdrop-blur border-b border-border/60 bg-base/60">
        <div className="container-fluid flex items-center justify-between py-4">
          <Link href="#" className="font-grotesk text-lg font-bold tracking-wide">N<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">PR</span></Link>
          <nav className="hidden md:flex gap-6 text-muted font-semibold">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#education" className="hover:text-white">Education</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>
      <section className="section">
        <div className="container-fluid grid md:grid-cols-2 gap-10 items-center relative">
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-5">
            <p className="kicker">Hello, I’m</p>
            <h1 className="font-grotesk text-4xl sm:text-5xl lg:text-6xl leading-tight">Nishchal PR</h1>
            <p className="text-lg text-muted max-w-prose">ECE undergrad & software developer focused on AI/ML and full‑stack systems.</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a className="btn btn-primary" href="/resume.pdf" download>Download Resume</a>
              <a className="btn" href="mailto:nishhcalpr4@gmail.com">Email</a>
              <a className="btn" href="https://github.com/Nishchalpr4" target="_blank">GitHub</a>
            </div>
            <ul className="mt-4 text-sm text-muted flex flex-wrap gap-4">
              <li>📍 Mysore, KA</li><li>✉️ nishhcalpr4@gmail.com</li><li>📞 9686509038</li>
            </ul>
          </motion.div>
          <motion.div
  initial={{ opacity: 0, scale: 0.96 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="relative flex items-center justify-center"
>
  {/* Orb background */}
  <div className="orb animate-float"></div>

  {/* Memoji image in the center */}
  <Image
    src="/images/memoji.png"
    alt="Nishchal PR Memoji"
    width={150}   // adjust size as needed
    height={120}
    className="absolute"
    priority
  />
</motion.div>

        </div>
      </section>
      <section id="skills" className="section">
        <div className="container-fluid">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="kicker">Toolkit</p>
              <h2 className="text-3xl md:text-4xl font-grotesk mb-4">I’m comfortable across the stack.</h2>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map(s => (<span key={s} className="badge">{s}</span>))}
              </div>
            </div>
            <OrbitalSkills />
          </div>
        </div>
      </section>
      <section id="projects" className="section">
        <div className="container-fluid space-y-14">
          <div><p className="kicker">Featured Projects</p><h2 className="text-3xl md:text-4xl font-grotesk">What I’ve been building</h2></div>
          {projects.map((p, idx) => (<Project key={p.title} data={p} reversed={idx % 2 === 1} />))}
        </div>
      </section>
      <section id="education" className="section">
        <div className="container-fluid">
          <div className="card">
            <p className="kicker">Education</p>
            <div className="mt-4 grid gap-4">
              <div><h3 className="font-bold">B.E. in Electronics & Communication Engineering</h3><p className="text-muted">The National Institute of Engineering, Mysore • 2022–2026</p></div>
              <div className="grid sm:grid-cols-2 gap-3 text-muted"><div>Senior Secondary • Class XII (2022)</div><div>Secondary • Class X (2020)</div></div>
              <div className="pt-2"><p className="font-semibold">Certificates</p><div className="mt-2 flex flex-wrap gap-2">{['C++ DSA','AI for Everyone','AWS ML Foundations','ML & AI Fundamentals','CS50x (edX)','Overleaf: Write Smarter'].map(c => (<span key={c} className="badge">{c}</span>))}</div></div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="section">
        <div className="container-fluid grid md:grid-cols-2 gap-10 items-center">
          <div><p className="kicker">Contact</p><h2 className="text-3xl md:text-4xl font-grotesk mb-4">Let’s build something great.</h2><p className="text-muted max-w-prose">Open to developer roles & internships.</p></div>
          <div className="card">
            <form action="mailto:nishhcalpr4@gmail.com" method="post" encType="text/plain" className="grid gap-3">
              <label className="text-sm font-semibold">Your name<input className="mt-1 w-full rounded-xl border border-border bg-transparent px-3 py-2 outline-none focus:border-white" type="text" name="name" required /></label>
              <label className="text-sm font-semibold">Your email<input className="mt-1 w-full rounded-xl border border-border bg-transparent px-3 py-2 outline-none focus:border-white" type="email" name="email" required /></label>
              <label className="text-sm font-semibold">Message<textarea className="mt-1 w-full rounded-xl border border-border bg-transparent px-3 py-2 outline-none focus:border-white" name="message" rows={5} required /></label>
              <button className="btn btn-primary" type="submit">Send</button>
            </form>
          </div>
        </div>
      </section>
      <footer className="py-10 border-t border-border/60 bg-base/60"><div className="container-fluid text-center text-muted">© {new Date().getFullYear()} Nishchal PR</div></footer>
    </main>
  )
}

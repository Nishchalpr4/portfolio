'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

type ProjectData = {
  title: string
  summary: string
  stack: string[]
  bullets: string[]
  image: string
  link?: string
}

export default function Project({
  data,
  reversed = false,
}: {
  data: ProjectData
  reversed?: boolean
}) {
  return (
    <div
      className={`grid items-center gap-8 md:gap-12 ${
        reversed ? 'md:grid-cols-[1.15fr,1fr]' : 'md:grid-cols-[1fr,1.15fr]'
      }`}
    >
      {/* Text column */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`${reversed ? 'md:order-2' : ''}`}
      >
        <p className="kicker">Featured Project</p>
        <h3 className="text-2xl md:text-3xl font-grotesk">{data.title}</h3>
        <p className="text-muted mt-2 max-w-prose">{data.summary}</p>

        <ul className="list-disc list-inside mt-3 text-muted space-y-1">
          {data.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-3">
          {data.stack.map((s) => (
            <span key={s} className="badge">
              {s}
            </span>
          ))}
        </div>

        {data.link && (
          <a className="btn mt-4" href={data.link} target="_blank" rel="noreferrer">
            View details
          </a>
        )}
      </motion.div>

      {/* Image column */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={`${reversed ? 'md:order-1' : ''} relative`}
      >
        <div className="group relative">
          {/* Media wrapper clips everything so corners are perfect */}
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src={data.image}
              alt={data.title}
              width={1100}
              height={700}
              className="block w-full h-auto rounded-3xl"
              priority={false}
            />

            {/* Soft vignette, same radius */}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl"
              style={{ boxShadow: 'inset 0 0 120px rgba(0,0,0,.45)' }}
            />

            {/* Hairline border on its own layer */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
          </div>

          {/* Outer glow outside the box */}
          <div
            className="absolute -z-10 -inset-6 rounded-[28px] blur-3xl"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(124,58,237,.35), transparent 60%)',
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}

'use client'
import { motion } from 'framer-motion'
export default function OrbitalSkills(){
  const ring = Array.from({length:12})
  return (
    <div className="relative flex items-center justify-center h-[380px]">
      <motion.div className="absolute rounded-full border border-border/60 w-72 h-72 animate-spinSlow" />
      <motion.div className="absolute rounded-full border border-border/60 w-56 h-56 animate-spinSlow" style={{animationDuration:'20s'}}/>
      <motion.div className="absolute rounded-full border border-border/60 w-40 h-40 animate-spinSlow" style={{animationDuration:'14s'}}/>
      {ring.map((_,i)=>{
        const angle=(i/ring.length)*Math.PI*2; const r=150; const x=Math.cos(angle)*r; const y=Math.sin(angle)*r;
        return <motion.span key={i} style={{transform:`translate(${x}px, ${y}px)`}} className="absolute inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-border text-xs text-muted shadow-card">✦</motion.span>
      })}
      <div className="relative flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-primary to-accent text-white font-grotesk text-3xl shadow-glow">NP</div>
    </div>
  )
}

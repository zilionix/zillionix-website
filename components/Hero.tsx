"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap, Shield, Brain, DollarSign } from 'lucide-react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Orb = dynamic(() => import('./Orb'), { ssr: false })

const stats = [
  { label: "Workflows Automated", value: "500K+" },
  { label: "Cost Reduction", value: "70%" },
  { label: "LLM Providers", value: "12+" },
  { label: "Enterprise Ready", value: "99.9%" },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Test Orb directly */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <div className="absolute top-10 left-10" style={{ width: '600px', height: '600px' }}>
          <Orb hue={280} hoverIntensity={0.5} rotateOnHover={true} />
        </div>
        <div className="absolute top-20 right-10" style={{ width: '500px', height: '500px' }}>
          <Orb hue={220} hoverIntensity={0.3} rotateOnHover={true} />
        </div>
        <div className="absolute bottom-10 left-1/3" style={{ width: '400px', height: '400px' }}>
          <Orb hue={140} hoverIntensity={0.4} rotateOnHover={true} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-400"
          >
            <Zap className="mr-2 h-3 w-3" />
            Multi-Agent Orchestration Platform
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            Build AI Agents That
            <span className="block gradient-text">Transform Your Business</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto"
          >
            Deploy autonomous AI agents that automate complex workflows, integrate with any system, 
            and scale across your entire organization with enterprise-grade security.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex items-center justify-center gap-x-4"
          >
            <Link
              href="/signup"
              className="group rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-all flex items-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/demo"
              className="rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors flex items-center"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex items-center justify-center gap-x-6 text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-x-2">
              <Shield className="h-4 w-4 text-green-500" />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-x-2">
              <Brain className="h-4 w-4 text-purple-500" />
              <span>12+ LLM Providers</span>
            </div>
            <div className="flex items-center gap-x-2">
              <DollarSign className="h-4 w-4 text-blue-500" />
              <span>Cost Control Built-in</span>
            </div>
          </motion.div>
        </div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-effect rounded-lg p-6 text-center"
            >
              <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Interactive demo preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20"
        >
          <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-2">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 mb-4">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <p className="text-muted-foreground">Interactive Demo</p>
                <p className="text-sm text-muted-foreground/60 mt-2">See AI agents in action</p>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 rounded-lg bg-green-500/10 border border-green-500/20 px-3 py-1 text-xs text-green-400">
              Live Demo
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-lg bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs text-blue-400">
              No Credit Card Required
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
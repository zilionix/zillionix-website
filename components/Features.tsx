"use client"

import { motion } from 'framer-motion'
import {
  Users, Shield, Brain, DollarSign, Zap, BarChart3,
  Cloud, Code, Lock, Workflow, Eye, Sparkles
} from 'lucide-react'

const features = [
  {
    name: 'Multi-Agent Orchestration',
    description: 'Deploy teams of specialized AI agents that collaborate on complex workflows with intelligent task distribution and coordination.',
    icon: Users,
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    name: 'Enterprise Security',
    description: 'Bank-grade AES-256 encryption, comprehensive RBAC, and full audit trails for complete compliance and data protection.',
    icon: Shield,
    gradient: 'from-green-600 to-emerald-600',
  },
  {
    name: '12+ LLM Providers',
    description: 'Never depend on a single AI. Automatic failover between OpenAI, Anthropic, AWS Bedrock, Google, and more.',
    icon: Brain,
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    name: 'Cost Management',
    description: 'Real-time usage tracking, budget alerts, and cost optimization recommendations prevent runaway AI costs.',
    icon: DollarSign,
    gradient: 'from-yellow-600 to-orange-600',
  },
  {
    name: 'Universal Integration',
    description: 'Connect to any API, database, or enterprise system with pre-built connectors and custom integration support.',
    icon: Cloud,
    gradient: 'from-indigo-600 to-purple-600',
  },
  {
    name: 'Full Observability',
    description: 'Trace every decision, monitor performance, and debug issues with comprehensive logging and analytics.',
    icon: Eye,
    gradient: 'from-red-600 to-pink-600',
  },
]

const capabilities = [
  { icon: Workflow, label: 'Visual Workflow Builder' },
  { icon: Code, label: 'API-First Architecture' },
  { icon: Lock, label: 'SOC 2 Compliant' },
  { icon: Zap, label: 'Real-time Execution' },
  { icon: BarChart3, label: 'Performance Analytics' },
  { icon: Sparkles, label: 'AI-Powered Insights' },
]

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary">
              Enterprise-Ready Platform
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need to deploy AI agents in production
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Built from the ground up for enterprise automation with security, 
              scalability, and intelligent orchestration at its core.
            </p>
          </motion.div>
        </div>

        {/* Main features grid */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <div className={`absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${feature.gradient} group-hover:scale-110 transition-transform`}>
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="ml-16">{feature.name}</span>
                </dt>
                <dd className="mt-2 ml-16 text-base leading-7 text-muted-foreground">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        {/* Capabilities bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8"
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {capabilities.map((capability) => (
              <div key={capability.label} className="flex flex-col items-center text-center">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <capability.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">{capability.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Feature comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground">Why teams choose Zilionix</h3>
            <p className="mt-4 text-muted-foreground">See how we compare to alternatives</p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-lg border border-border p-6">
              <h4 className="font-semibold text-foreground mb-4">vs. Building In-House</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>6 months faster deployment</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>80% lower development cost</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Enterprise features included</span>
                </li>
              </ul>
            </div>
            
            <div className="rounded-lg border border-border p-6">
              <h4 className="font-semibold text-foreground mb-4">vs. Other AI Platforms</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Multi-agent orchestration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>12+ LLM providers built-in</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Enterprise-ready from day one</span>
                </li>
              </ul>
            </div>
            
            <div className="rounded-lg border border-border p-6">
              <h4 className="font-semibold text-foreground mb-4">vs. Point Solutions</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Unified platform approach</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Single vendor relationship</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Consistent security model</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
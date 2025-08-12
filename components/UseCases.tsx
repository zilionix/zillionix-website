"use client"

import { motion } from 'framer-motion'
import { 
  TrendingUp, Users, FileText, Brain, 
  ShoppingCart, HeartPulse, Building2, Briefcase,
  ArrowRight, CheckCircle
} from 'lucide-react'

const useCases = [
  {
    title: 'Sales & Marketing',
    icon: TrendingUp,
    description: 'Automate lead generation, customer outreach, and campaign optimization',
    features: [
      'Lead scoring and qualification',
      'Personalized email campaigns',
      'Content generation and optimization',
      'Market research and analysis',
    ],
    metrics: '3x higher conversion rates',
    gradient: 'from-orange-600 to-yellow-600',
  },
  {
    title: 'Customer Service',
    icon: Users,
    description: 'Deploy AI agents for 24/7 support and customer engagement',
    features: [
      'Intelligent ticket routing',
      'Multi-channel support automation',
      'Sentiment analysis and escalation',
      'Knowledge base management',
    ],
    metrics: '80% first-contact resolution',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Finance & Operations',
    icon: Briefcase,
    description: 'Streamline financial processes and operational workflows',
    features: [
      'Invoice processing and reconciliation',
      'Expense management automation',
      'Financial reporting and analysis',
      'Compliance monitoring',
    ],
    metrics: '60% faster processing',
    gradient: 'from-green-600 to-emerald-600',
  },
  {
    title: 'Human Resources',
    icon: Building2,
    description: 'Transform HR operations with intelligent automation',
    features: [
      'Resume screening and matching',
      'Employee onboarding workflows',
      'Performance review automation',
      'Policy Q&A and documentation',
    ],
    metrics: '75% time savings',
    gradient: 'from-purple-600 to-pink-600',
  },
]

const industries = [
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Inventory management, pricing optimization, customer insights',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    description: 'Patient scheduling, medical records, clinical documentation',
  },
  {
    icon: FileText,
    title: 'Legal',
    description: 'Contract analysis, document review, compliance tracking',
  },
  {
    icon: Brain,
    title: 'Education',
    description: 'Personalized learning, grading automation, student support',
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-12 sm:py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary">
              Use Cases
            </h2>
            <p className="mt-1 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              AI Agents for Every Department
            </p>
            <p className="mt-3 text-lg leading-8 text-muted-foreground">
              Deploy specialized AI agents across your organization to automate 
              complex workflows and drive efficiency in every department.
            </p>
          </motion.div>
        </div>

        {/* Use cases grid */}
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${useCase.gradient}`}>
                  <useCase.icon className="h-6 w-6 text-white" />
                </div>
                <span className="inline-flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-500">
                  {useCase.metrics}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {useCase.description}
              </p>

              <ul className="space-y-2">
                {useCase.features.map((feature) => (
                  <li key={feature} className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Industry examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <h3 className="text-center text-2xl font-bold text-foreground mb-6">
            Trusted Across Industries
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="rounded-lg border border-border bg-card p-4 text-center hover:border-primary/50 transition-colors"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <industry.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{industry.title}</h4>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            See Your Use Case in Action
          </h3>
          <p className="text-white/90 mb-4 max-w-2xl mx-auto">
            Schedule a personalized demo to see how Zilionix can transform your specific workflows
          </p>
          <button className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors">
            Request Custom Demo
          </button>
        </motion.div>
      </div>
    </section>
  )
}
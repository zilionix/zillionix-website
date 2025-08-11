"use client"

import { motion } from 'framer-motion'
import { Check, X, ArrowRight, Zap, Building2, Rocket } from 'lucide-react'
import Link from 'next/link'

const tiers = [
  {
    name: 'Starter',
    id: 'starter',
    icon: Zap,
    price: '$299',
    description: 'Perfect for small teams getting started with AI automation',
    features: [
      '5 AI Agents',
      '100K tokens/month',
      '3 LLM providers',
      'Basic integrations',
      'Email support',
      'Standard security',
      'Usage analytics',
    ],
    notIncluded: [
      'Custom models',
      'On-premise deployment',
      'SLA guarantee',
      'Advanced RBAC',
    ],
    cta: 'Start Free Trial',
    featured: false,
  },
  {
    name: 'Professional',
    id: 'professional',
    icon: Rocket,
    price: '$999',
    description: 'For growing teams that need advanced features and support',
    features: [
      'Unlimited AI Agents',
      '1M tokens/month',
      '12+ LLM providers',
      '100+ integrations',
      'Priority support',
      'Advanced security & RBAC',
      'Custom workflows',
      'Performance analytics',
      'Budget alerts',
      'API access',
    ],
    notIncluded: [
      'On-premise deployment',
      'Custom SLA',
    ],
    cta: 'Start Free Trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    id: 'enterprise',
    icon: Building2,
    price: 'Custom',
    description: 'For large organizations with specific requirements',
    features: [
      'Everything in Professional',
      'Unlimited tokens',
      'Dedicated support team',
      'Custom SLA (99.9%)',
      'On-premise deployment',
      'Custom integrations',
      'Advanced compliance',
      'Training & onboarding',
      'Custom AI models',
      'White-label options',
    ],
    notIncluded: [],
    cta: 'Contact Sales',
    featured: false,
  },
]

const comparisonFeatures = [
  { feature: 'AI Agents', starter: '5', professional: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Monthly Tokens', starter: '100K', professional: '1M', enterprise: 'Unlimited' },
  { feature: 'LLM Providers', starter: '3', professional: '12+', enterprise: 'All + Custom' },
  { feature: 'Integrations', starter: 'Basic', professional: '100+', enterprise: 'Custom' },
  { feature: 'Support', starter: 'Email', professional: 'Priority', enterprise: 'Dedicated' },
  { feature: 'Deployment', starter: 'Cloud', professional: 'Cloud', enterprise: 'Hybrid/On-Premise' },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary">
              Pricing
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Choose the right plan for your team
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Start with a 14-day free trial. No credit card required.
            </p>
          </motion.div>
        </div>

        {/* Pricing cards */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl ${
                tier.featured
                  ? 'ring-2 ring-primary shadow-xl scale-105'
                  : 'ring-1 ring-border'
              } bg-card p-8`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${
                      tier.featured ? 'bg-primary' : 'bg-primary/10'
                    }`}>
                      <tier.icon className={`h-5 w-5 ${
                        tier.featured ? 'text-white' : 'text-primary'
                      }`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{tier.name}</h3>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="flex items-baseline">
                  <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                  {tier.price !== 'Custom' && <span className="ml-1 text-muted-foreground">/month</span>}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <ul className="mb-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
                {tier.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-start opacity-50">
                    <X className="h-5 w-5 text-muted-foreground/50 mr-3 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground line-through">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.id === 'enterprise' ? '/contact' : '/signup'}
                className={`block w-full rounded-lg px-4 py-3 text-center text-sm font-semibold transition-all ${
                  tier.featured
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90'
                    : 'bg-primary/10 text-primary hover:bg-primary/20'
                }`}
              >
                {tier.cta}
                <ArrowRight className="inline ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-center text-2xl font-bold text-foreground mb-12">
            Detailed Feature Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-medium text-foreground">Feature</th>
                  <th className="text-center py-4 px-4 font-medium text-foreground">Starter</th>
                  <th className="text-center py-4 px-4 font-medium text-foreground">Professional</th>
                  <th className="text-center py-4 px-4 font-medium text-foreground">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr key={row.feature} className="border-b border-border/50">
                    <td className="py-4 px-4 text-sm text-muted-foreground">{row.feature}</td>
                    <td className="text-center py-4 px-4 text-sm text-muted-foreground">{row.starter}</td>
                    <td className="text-center py-4 px-4 text-sm text-muted-foreground">{row.professional}</td>
                    <td className="text-center py-4 px-4 text-sm text-muted-foreground">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Questions about pricing?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our team is here to help you find the perfect plan
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/docs/pricing"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View pricing FAQ →
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Contact sales →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
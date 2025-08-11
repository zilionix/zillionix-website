"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Clock, CreditCard } from 'lucide-react'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/10" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
            <Sparkles className="mr-2 h-3 w-3" />
            Limited Time: 30% off first 3 months
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to Transform Your
            <span className="block mt-2">Business with AI?</span>
          </h2>
          
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90">
            Join hundreds of organizations automating their workflows with Zilionix. 
            Start your free trial today and see results in minutes.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/signup"
              className="group rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 transition-all flex items-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/demo"
              className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-x-8 text-sm text-white/80">
            <div className="flex items-center gap-x-2">
              <Clock className="h-4 w-4" />
              <span>Setup in 5 minutes</span>
            </div>
            <div className="flex items-center gap-x-2">
              <CreditCard className="h-4 w-4" />
              <span>No credit card required</span>
            </div>
          </div>
        </motion.div>

        {/* Success metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 sm:max-w-xl sm:grid-cols-3 sm:gap-6 lg:max-w-4xl"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-white">500K+</div>
            <div className="mt-2 text-sm text-white/80">Workflows Automated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white">70%</div>
            <div className="mt-2 text-sm text-white/80">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white">24/7</div>
            <div className="mt-2 text-sm text-white/80">Autonomous Operations</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
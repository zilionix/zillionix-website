import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://zilionix.com'),
  title: 'Zilionix - Enterprise AI Agent Orchestration Platform',
  description: 'Build and deploy autonomous AI agents that automate complex workflows across your organization with enterprise security and multi-LLM support.',
  keywords: 'AI agent orchestration, autonomous AI agents, workflow automation, multi-agent systems, LLM orchestration, enterprise AI, AI automation platform, intelligent automation',
  openGraph: {
    title: 'Zilionix - AI Agents That Transform Your Business',
    description: 'Deploy autonomous AI agents with enterprise-grade security, multi-LLM support, and complete workflow orchestration.',
    url: '/',
    siteName: 'Zilionix',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zilionix - AI Agent Orchestration Platform',
    description: 'Build and deploy autonomous AI agents for any workflow',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
import Link from 'next/link'
import Image from 'next/image'
import { FaXTwitter, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa6'
import logo from '@/assets/logo.svg'

const navigation = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Pricing', href: '#pricing' },
    // { name: 'Changelog', href: '/changelog' },
    // { name: 'Roadmap', href: '/roadmap' },
  ],
  resources: [
    { name: 'Documentation', href: '/' },
    { name: 'API Reference', href: '/' },
    // { name: 'Guides', href: '/guides' },
    // { name: 'Blog', href: '/blog' },
    { name: 'Community', href: '/' },
  ],
  company: [
    { name: 'About', href: '/' },
    { name: 'Careers', href: '/' },
    { name: 'Partners', href: '/' },
    // { name: 'Contact', href: '/contact' },
    // { name: 'Press Kit', href: '/press' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/' },
    { name: 'Terms of Service', href: '/' },
    { name: 'Security', href: '/' },
    // { name: 'Compliance', href: '/compliance' },
    // { name: 'SLA', href: '/sla' },
  ],
}

const social = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/zilionix', icon: FaLinkedin },
  { name: 'GitHub', href: 'https://github.com/zilionix', icon: FaGithub },
  { name: 'X', href: 'https://x.com/zilionix', icon: FaXTwitter },
  { name: 'YouTube', href: 'https://youtube.com/@zilionix', icon: FaYoutube },
]

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-12 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6">
            <div className="flex items-center">
              <Image 
                src={logo} 
                alt="Zilionix Logo" 
                width={180} 
                height={54} 
                className="h-10 w-auto sm:h-12 md:h-14"
              />
            </div>
            <p className="text-sm leading-6 text-muted-foreground max-w-xs">
              The enterprise AI agent orchestration platform. Build and deploy autonomous 
              AI agents that transform your business workflows.
            </p>
            <div className="flex space-x-6">
              {social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-6">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Product</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Resources</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-6">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Legal</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 border-t border-border pt-6 sm:mt-12 lg:mt-16">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs leading-5 text-muted-foreground">
              &copy; {new Date().getFullYear()} Zilionix, Inc. All rights reserved.
            </p>
            <div className="mt-3 sm:mt-0 flex space-x-4 text-xs text-muted-foreground">
              <span>SOC 2 Type II Certified</span>
              <span>•</span>
              <span>GDPR Compliant</span>
              <span>•</span>
              <span>ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
# Zilionix Marketing Website

A modern, professional landing page for Zilionix - Enterprise AI Agent Orchestration Platform.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by Linear/Vercel
- **Dark Mode**: Beautiful dark theme by default
- **Animations**: Smooth Framer Motion animations throughout
- **Responsive**: Fully responsive across all devices
- **SEO Optimized**: Complete meta tags and OpenGraph support
- **Performance**: Optimized for Core Web Vitals

## 📦 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
zilionix-website/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Features.tsx     # Features grid
│   ├── UseCases.tsx     # Use cases section
│   ├── Pricing.tsx      # Pricing tiers
│   ├── CTA.tsx          # Call-to-action
│   └── Footer.tsx       # Footer with links
├── lib/
│   └── utils.ts         # Utility functions
└── public/              # Static assets
```

## 🎨 Design System

### Colors
- **Primary**: Purple to Blue gradient (#6B46C1 → #3B82F6)
- **Background**: Dark theme with subtle gradients
- **Accents**: Green for success, Blue for info

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, tracking-tight
- **Body**: Regular weight, optimized line-height

## 📱 Page Sections

1. **Navigation**: Fixed header with smooth scroll
2. **Hero**: Main value proposition with CTAs
3. **Features**: 6 key platform capabilities
4. **Use Cases**: 4 main IT automation scenarios
5. **Pricing**: 3-tier pricing structure
6. **CTA**: Final conversion section
7. **Footer**: Complete sitemap and legal links

## 🚢 Deployment

### Vercel (Recommended)
```bash
npx vercel
```

### Docker
```bash
docker build -t zilionix-website .
docker run -p 3000:3000 zilionix-website
```

### Static Export
```bash
npm run build
npm run export
```

## 📊 Key Messaging

- **Main Value Prop**: "Build AI Agents That Transform Your Business"
- **Target Audience**: Enterprise teams, Department heads, CTOs, Business leaders
- **Differentiators**: 
  - Enterprise-ready security
  - Multi-LLM support (12+ providers)
  - Universal workflow automation
  - Built-in cost controls

## 🔧 Environment Variables

Create a `.env.local` file for any API keys or configuration:

```env
NEXT_PUBLIC_API_URL=https://api.zilionix.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📈 Analytics

The site is prepared for analytics integration:
- Google Analytics 4
- Plausible Analytics
- PostHog

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

Copyright © 2025 Zilionix, Inc. All rights reserved.
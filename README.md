# MaPa Consulting Website

Professional multilingual consulting website built with Nuxt 4, featuring operational excellence services, AI implementation, and interim management solutions.

🔗 **Live Site**: [https://mapa-unternehmensberatung.de](https://mapa-unternehmensberatung.de)

## Features

### Core Functionality

- 🌍 **Multi-language Support** - Full i18n implementation with German, English, and Polish
- 🔗 **SEO-Friendly Routing** - Custom localized URLs (e.g., `/de/impressum`, `/en/imprint`, `/pl/informacje-prawne`)
- 📧 **Contact Form** - Server-side handling with Formspree integration and Valibot validation
- ⚖️ **GDPR Compliance** - Legal pages (Impressum, Privacy Policy) with mandatory privacy acceptance
- 🎨 **Modern UI** - Built with Nuxt UI components and Tailwind CSS 4
- 📱 **Fully Responsive** - Mobile-first design approach
- 🎠 **Interactive Carousel** - Services showcase with smooth animations
- 🚨 **Custom Error Pages** - Localized 404 and error handling
- ♿ **Accessibility-Focused** - Semantic HTML and ARIA labels

### Technical Highlights

- **SSR (Server-Side Rendering)** - Optimized for performance and SEO
- **Prefix-Based i18n Strategy** - Language prefixes in all routes for better SEO
- **Serverless Functions** - API routes via Netlify Functions
- **Type Safety** - Full TypeScript implementation with strict mode
- **Component Architecture** - Reusable components with prop validation
- **Form Validation** - Client and server-side validation with detailed error messages
- **HTML in Translations** - Formatted legal content with safe v-html rendering

## Tech Stack

- **Framework**: Nuxt 4.2.1 (SSR)
- **UI Library**: Nuxt UI 4.2.1
- **Styling**: Tailwind CSS 4
- **Icons**: Heroicons, Circle Flags
- **Internationalization**: @nuxtjs/i18n 10.2.1
- **Validation**: Valibot
- **Form Backend**: Formspree
- **SEO**: @nuxtjs/sitemap
- **Performance**: nuxt-vitalizer 2.0.0
- **TypeScript**: Full type safety
- **Deployment**: Netlify (Continuous Deployment, SSL, Serverless Functions)

## Setup

### Prerequisites

- Node.js 18+ or 20+
- npm or pnpm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd MaPaConsulting
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

```bash
cp .env.example .env
```

Edit `.env` and add your Formspree endpoint:

```env
NUXT_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

The server will be accessible on your local network at `0.0.0.0:3000`.

### Production

Build the application for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## Deployment

The site is deployed on **Netlify** with:

- ✅ Automatic deployments from main branch
- ✅ SSL certificate (Let's Encrypt)
- ✅ Serverless functions for API routes
- ✅ Environment variables configuration
- ✅ Custom domain with DNS configuration

### Netlify Configuration

The project includes serverless API routes in `server/api/` that are automatically deployed as Netlify Functions.

## Project Structure

```
app/
├── assets/css/          # Global styles and CSS variables
├── components/
│   ├── about/          # About section components
│   ├── contact/        # Contact form and info cards
│   ├── home/           # Hero and home components
│   ├── CtaButton.vue   # Reusable CTA button component
│   └── ScrollToTop.vue # Scroll-to-top button
├── composables/
│   ├── useContactForm.ts    # Form state and validation
│   ├── useScrollTo.ts       # Smooth scroll navigation
│   ├── usePageSeo.ts        # Page-level SEO meta tags
│   └── useSchemaOrg.ts      # Schema.org structured data
├── layouts/
│   └── default.vue     # Main layout with header/footer
└── pages/
    ├── index.vue       # Home page
    ├── impressum.vue   # Legal information (Impressum)
    ├── datenschutz.vue # Privacy policy (GDPR)
    └── error.vue       # Custom 404 and error pages
server/
└── api/
    └── contact.post.ts # Contact form API endpoint
i18n/
└── locales/
    ├── de.json         # German translations
    ├── en.json         # English translations
    └── pl.json         # Polish translations
public/
└── assets/img/         # Static images and assets
```

## Key Features Implementation

### Internationalization (i18n)

The site uses **prefix-based routing strategy** for SEO optimization:

```typescript
// nuxt.config.ts
i18n: {
  strategy: 'prefix',
  defaultLocale: 'de',
  customRoutes: 'config',
  pages: {
    'impressum': {
      de: '/impressum',
      en: '/imprint',
      pl: '/informacje-prawne'
    }
  }
}
```

**URL Examples:**

- German: `https://mapa-unternehmensberatung.de/de/`
- English: `https://mapa-unternehmensberatung.de/en/imprint`
- Polish: `https://mapa-unternehmensberatung.de/pl/polityka-prywatnosci`

### GDPR Compliance

Implements EU data protection requirements:

- ✅ Comprehensive privacy policy (Datenschutzerklärung)
- ✅ Legal information page (Impressum)
- ✅ Mandatory privacy acceptance checkbox in contact form
- ✅ Formatted legal content with HTML rendering
- ✅ Links to privacy policy open in new tab

### Contact Form

Server-side validation and submission:

```typescript
// app/composables/useContactForm.ts
- Valibot schema validation
- Privacy acceptance required
- Client-side error messages
- Toast notifications

// server/api/contact.ts
- Server-side validation
- Formspree integration
- Error handling
```

### Component Architecture

**CtaButton.vue** - Reusable call-to-action button:

- Customizable size (xs, sm, md, lg, xl)
- Optional icons (Heroicons)
- Link or button mode
- Hover animations and shadows
- White text override for brand consistency

## Configuration

- `nuxt.config.ts` - Nuxt configuration with i18n routes, modules, and runtime config
- `app.config.ts` - App-specific configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `eslint.config.mjs` - ESLint rules
- `.env.example` - Environment variables template

## Design System

### Color Scheme

- **Primary**: `#1a4b84` (Professional blue)
- **Background**: `#f0f0f0`
- **Text**: `#4a4a4a`
- **Title**: `#2b2b2b`
- **Border**: `#e0e0e0`

### CSS Variables

Custom properties defined in `assets/css/main.css` for theming consistency.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## Performance Optimizations

- Server-Side Rendering (SSR)
- Code splitting and lazy loading
- **nuxt-vitalizer** — eliminates render-blocking entry.css (Nuxt UI v4 known issue)
- **features.inlineStyles** — inlines component CSS to reduce critical request chain
- **@nuxt/fonts** with `preload: true` — self-hosted fonts preloaded from HTML
- **@nuxt/image** — WebP conversion, quality control, responsive `sizes` and `densities`
- Minimal JavaScript bundle
- CSS purging with Tailwind

## Contributing

This is a production website for MaPa Consulting. For inquiries, please contact the repository owner.

## License

© 2026 MaPa Consulting. All rights reserved.

---

**Built with** ❤️ **using Nuxt 4 and modern web technologies**

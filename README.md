# MaPa Consulting Website

Professional consulting website built with Nuxt 4, featuring operational excellence services, AI implementation, and interim management solutions.

## Features

- 🌍 Multi-language support (German, English, Polish)
- 🎨 Modern UI with Nuxt UI components
- 📱 Fully responsive design
- ♿ Accessibility-focused
- 🚀 Optimized performance
- 🎯 SEO-ready with meta tags
- 📧 Contact form with validation
- 🎠 Interactive carousel for services showcase

## Tech Stack

- **Framework**: Nuxt 4.2.1
- **UI Library**: Nuxt UI 4.2.1
- **Styling**: Tailwind CSS 4
- **Icons**: Heroicons, Circle Flags
- **i18n**: @nuxtjs/i18n 10.2.1
- **Validation**: Valibot
- **TypeScript**: Full type safety

## Setup

Install dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## Project Structure

```
app/
├── assets/css/          # Global styles and CSS variables
├── components/          # Vue components
│   ├── about/          # About section components
│   ├── contact/        # Contact section components
│   └── home/           # Home section components
├── composables/        # Reusable composition functions
├── layouts/            # Application layouts
└── pages/              # Route pages
i18n/locales/           # Translation files (de, en, pl)
public/                 # Static assets
```

## Configuration

- `nuxt.config.ts` - Nuxt configuration
- `app.config.ts` - App-specific configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `eslint.config.mjs` - ESLint rules

## Color Scheme

- Primary: `#1a4b84` (Professional blue)
- Background: `#f0f0f0`
- Text: `#4a4a4a`
- Title: `#2b2b2b`

## License

© 2025 MaPa Consulting. All rights reserved.

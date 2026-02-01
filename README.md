# Hernan Leon - Professional Portfolio

A modern, performant personal website built with Astro and TypeScript, showcasing 18+ years of international experience in data engineering, product management, and business intelligence across Colombia, China, Mexico, and Germany.

## 🌐 Live Site

**Production**: [hernanleon.com](https://hernanleon.com)

## 🚀 Tech Stack

- **Framework**: [Astro 5.0](https://astro.build) - Static site generator with zero JavaScript by default
- **Language**: TypeScript (strict mode)
- **Styling**: Modern CSS with design tokens (no framework)
- **Hosting**: Cloudflare Pages
- **CI/CD**: GitHub Actions
- **Content**: Single `cv.json` data source

## ✨ Features

- 🌍 **International Experience**: Highlighting career across 4 countries
- ⚡ **Static Site Generation**: Optimal performance with pre-rendered HTML
- 📱 **Responsive Design**: Mobile-first approach
- 🎨 **Clean Design**: Minimal, professional aesthetic
- 🔍 **SEO Optimized**: Meta tags, OpenGraph, Twitter Cards
- 🌙 **Dark Mode**: Automatic system preference detection
- 🚀 **Auto-Deploy**: GitHub push → live site in ~2 minutes

## 📁 Project Structure

```
professional-portfolio/
├── .github/workflows/
│   └── deploy.yml                 # Auto-deploy to Cloudflare Pages
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── profile-photo.jpg          # Your professional photo
│   └── og-image.jpg               # Social sharing image
├── src/
│   ├── components/
│   │   ├── layout/                # Header, Footer, BaseLayout
│   │   ├── home/                  # Homepage components
│   │   ├── cv/                    # CV section components
│   │   ├── projects/              # Project cards
│   │   └── contact/               # Contact components
│   ├── content/
│   │   └── cv.json                # ⭐ Single source of truth for all data
│   ├── layouts/
│   │   └── Page.astro             # SEO wrapper layout
│   ├── lib/
│   │   ├── types.ts               # TypeScript interfaces
│   │   └── cv.ts                  # Data utilities
│   ├── pages/
│   │   ├── index.astro            # Home (/)
│   │   ├── cv.astro               # CV (/cv)
│   │   ├── projects.astro         # Projects (/projects)
│   │   └── contact.astro          # Contact (/contact)
│   └── styles/
│       ├── variables.css          # Design tokens
│       └── global.css             # Global styles
├── astro.config.mjs               # Astro configuration
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ Local Development

### Prerequisites

- Node.js 20+ (LTS)
- npm 9+
- Git

### Setup

1. **Navigate to project directory**:
   ```bash
   cd /Users/hl102126-ios/github/professional-portfolio
   ```

2. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open browser**:
   ```
   http://localhost:4321
   ```

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at localhost:4321 |
| `npm run build` | Build production site to ./dist |
| `npm run preview` | Preview production build locally |
| `npm run astro check` | Run TypeScript type checking |

## 📝 Updating Content

All content is managed in **one file**: `src/content/cv.json`

### How to Update Your CV

1. **Edit** `src/content/cv.json`:
   - Update personal information
   - Add/modify work experience
   - Update skills, projects, certifications
   - Change language proficiencies

2. **Test locally**:
   ```bash
   npm run dev
   ```

3. **Commit and push**:
   ```bash
   git add src/content/cv.json
   git commit -m "Update CV: [describe changes]"
   git push origin main
   ```

4. **Auto-deploy**: Site rebuilds and deploys automatically in ~2 minutes

### CV Data Structure

```json
{
  "personal": {
    "name": "Hernan Leon",
    "title": "Product Owner | Data Engineer | BI Leader",
    "email": "hernanleon@gmail.com",
    ...
  },
  "international": {
    "countries": [...]  // Your career across countries
  },
  "highlights": [...],   // Key achievements
  "experience": [...],   // Work history
  "education": [...],    // Education background
  "skills": {...},       // Skills by category
  "projects": [...],     // Portfolio projects
  "certifications": [...],
  "languages": [...]
}
```

## 🚀 Deployment

### Automatic Deployment (Configured)

The site auto-deploys via GitHub Actions when you push to `main`:

1. Push changes to GitHub
2. GitHub Actions runs build
3. Deploys to Cloudflare Pages
4. Live at hernanleon.com

### Manual Deployment (If Needed)

```bash
npm run build
npx wrangler pages deploy dist --project-name=professional-portfolio
```

## 🔧 Cloudflare Pages Setup

### Initial Setup (One-Time)

1. **Create Cloudflare Pages Project**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Workers & Pages** → **Create application** → **Pages**
   - Choose **Direct Upload** method
   - Name: `professional-portfolio`

2. **Configure GitHub Secrets**:
   - Go to your GitHub repo → **Settings** → **Secrets and variables** → **Actions**
   - Add these secrets:
     - `CLOUDFLARE_API_TOKEN`: Get from Cloudflare → My Profile → API Tokens
     - `CLOUDFLARE_ACCOUNT_ID`: Found on Cloudflare Dashboard homepage

3. **Configure Custom Domain**:
   - Cloudflare Pages project → **Custom domains**
   - Add `hernanleon.com`
   - DNS records auto-configured (if domain on Cloudflare)
   - SSL certificate provisioned automatically

### Verifying Deployment

After pushing to GitHub:
1. Go to **Actions** tab in GitHub repo
2. Watch the "Deploy to Cloudflare Pages" workflow
3. Build typically completes in 2-3 minutes
4. Check [hernanleon.com](https://hernanleon.com)

## 🎨 Adding Photos

### Profile Photo

1. Add your professional headshot to `/public/profile-photo.jpg`
2. Recommended size: 800x800px (square)
3. Format: JPG or PNG
4. Keep file size < 500KB for performance

### OG Image (Social Sharing)

1. Add social sharing image to `/public/og-image.jpg`
2. Recommended size: 1200x630px
3. Include your name and title
4. Format: JPG or PNG

### Project Images (Optional)

1. Add project screenshots to `/public/images/`
2. Update project URLs in `cv.json`

## 🔍 SEO Optimization

### Current Implementation
- ✅ Unique titles and descriptions per page
- ✅ OpenGraph tags for social sharing
- ✅ Twitter Card tags
- ✅ Semantic HTML structure
- ✅ Responsive meta viewport
- ✅ Clean URLs (e.g., `/cv` not `/cv.html`)

### Future Enhancements
- Add `sitemap.xml` (Astro plugin: `@astrojs/sitemap`)
- Add `robots.txt`
- Implement structured data (JSON-LD)
- Generate page-specific OG images

## 📊 Performance

### Current Targets
- **Lighthouse Score**: 95+ across all metrics
- **Load Time**: < 2 seconds
- **Bundle Size**: < 50KB (CSS only, zero JS)
- **Core Web Vitals**: All green

### Optimizations
- Static HTML (pre-rendered at build time)
- Zero JavaScript by default
- Cloudflare CDN (global distribution)
- Compressed HTML and assets

## 🌙 Dark Mode

Dark mode is automatically enabled based on user's system preference.

To test:
- **macOS**: System Preferences → Appearance → Dark
- **Browser DevTools**: Toggle "Emulate CSS prefers-color-scheme"

## 🛡️ Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## 📞 Support

For issues or questions about the website:
1. Check the build logs in GitHub Actions
2. Review Cloudflare Pages deployment logs
3. Test locally with `npm run dev`

For content updates:
- Simply edit `cv.json` and push to GitHub

## 📄 License

This is a personal portfolio site. Feel free to use as inspiration, but please don't copy verbatim.

---

**Built with** ❤️ **using [Astro](https://astro.build)**

Last Updated: February 2026

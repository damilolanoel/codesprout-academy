# CodeSprout Academy Landing Page

A modern, professional landing page for CodeSprout Academy - Lagos's premier kids coding academy. Built with React, TypeScript, and Framer Motion for smooth animations.

## 🚀 Features

- **Fully Responsive Design**: Optimized for all devices with enhanced mobile navigation
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **Editable Content**: In-browser content editing for easy updates
- **Contact Form with API Integration**: Real lead capture with error handling and timeout management
- **Hero Visuals**: Animated SVG illustrations for visual appeal
- **Accessibility First**: WCAG compliant with:
  - Skip-to-content link for keyboard navigation
  - Full ARIA labels on forms (aria-required, aria-describedby, aria-invalid)
  - Enhanced mobile navigation with keyboard trap and focus management
  - Semantic HTML with proper landmark roles
  - Minimum 44px touch targets for mobile buttons
  - Proper color contrast ratios (WCAG AA)
- **Modern UI**: Clean, professional design with Nigerian context
- **TypeScript**: Type-safe development
- **Production-Ready**: ESLint configured, builds without errors, optimized assets

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript 5.3.3** - Type safety with strict mode
- **Vite 5.0.8** - Fast build tool and dev server (HMR on port 3000)
- **Framer Motion 10.16.0** - Smooth animations and transitions
- **Tailwind CSS 4.3.0** - Utility-first CSS framework with design tokens
- **React Router DOM 7.15.0** - Client-side routing for multi-page support
- **Lucide React** - Beautiful icon library
- **Google Fonts** - Nunito and Space Grotesk typography
- **PostCSS & Autoprefixer** - Cross-browser CSS compatibility
- **ESLint** - Code quality enforcement

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd codesprout-academy-landing
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment (optional - for API integration):
```bash
cp .env.example .env.local
```

Update `.env.local` with your API endpoint:
```
REACT_APP_API_ENDPOINT=https://your-api.com/api/leads
REACT_APP_API_TIMEOUT=30000
```

4. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build    # TypeScript compilation + Vite optimization
npm run preview  # Preview production build locally
npm run lint     # Check code quality
```

The built files will be in the `dist` folder. Optimized bundle:
- **JS**: ~90 KB gzip
- **CSS**: ~4 KB gzip

## 🔌 API Integration

The contact form uses a custom hook (`useFormSubmit`) for real API integration:

### Features:
- **Automatic Timeout**: Default 30 seconds with configurable duration
- **Error Handling**: Network errors, timeouts, and server errors all handled
- **Abort Control**: Prevents memory leaks from abandoned requests
- **Loading State**: Tracks submission progress with `isSubmitting` flag
- **Custom Endpoint**: Configurable via environment variables

### Usage:
```typescript
const { isSubmitting, error, submit, clearError } = useFormSubmit({
  endpoint: '/api/leads',
  timeout: 30000
});

const result = await submit(formData);
if (result.success) {
  // Handle success
}
```

### Expected API Response:
```json
{ "success": true, "message": "Lead captured" }
```

## 🎨 Customization

### Content Editing
- Click the "Edit Page" button in the top bar
- Click on any text to edit it inline
- Save changes or reset to defaults
- Content persists in browser localStorage

### Styling & Design Tokens
- Global styles are in `src/index.css`
- Design tokens: Colors (brand #1D9E75), fonts, spacing
- Component-specific styles use Tailwind classes
- Responsive breakpoints: mobile-first, tablets 768px+, desktop 1024px+

### Adding New Sections
1. Update the `ContentData` interface in `src/types.ts`
2. Add content to `src/data.ts`
3. Create a new component in `src/components/` if needed
4. Add the JSX section in `App.tsx`

### Hero Visuals
The animated SVG hero illustration (`HeroVisuals.tsx`) includes:
- Laptop/code editor representation
- Student figure
- Floating code blocks with continuous animation
- Responsive sizing
- Visible on desktop (hidden on mobile for performance)

### Mobile Navigation
Enhanced mobile navigation with:
- Hamburger menu with animated icon
- Full-screen navigation drawer
- Keyboard navigation (ESC to close)
- Focus trap and management
- 44px minimum touch targets
- Scroll prevention when open

## 📱 Programs Offered

- **CodeSprout Juniors** (Ages 7-10): Scratch programming basics
- **CodeSprout Builders** (Ages 11-14): HTML/CSS + Robotics
- **CodeSprout Innovators** (Ages 14-17): JavaScript + No-Code development
- **Summer Camp 2026**: Intensive month-long coding experience (August 4–29)

## ♿ Accessibility

This project meets **WCAG 2.1 AA** standards:

### Navigation
- Skip-to-content link visible on focus (keyboard users)
- Semantic HTML (`<nav>`, `<main>`, `<footer>`, `<section>`)
- Proper heading hierarchy
- Landmark roles for screen readers

### Forms
- All inputs have associated labels (`htmlFor` attribute)
- Required fields marked with `aria-required="true"`
- Error messages linked with `aria-describedby`
- Error states announced with `aria-invalid="true"`
- Visible focus indicators (3px green outline)

### Mobile
- Minimum 44px touch targets (buttons, links)
- Mobile navigation keyboard trap
- Focus management on menu open/close
- Proper button semantics

### Visual
- Color contrast ratios ≥ 4.5:1 for text
- No color alone used to convey information
- Reduced motion support for animations
- Alt text for icons and images (via aria-label)

### Forms
- 7-field registration form with real-time validation
- Auto-focus management in mobile menu
- Smooth transitions (respects prefers-reduced-motion)

## 🌍 Nigerian Context

- Naira (₦) pricing and payment focus
- Lagos-based operations with growth plans
- Africa-focused curriculum and examples
- Local market understanding and relevance

## 📊 Performance

- Production build: **~330 KB uncompressed**
- Gzipped: **JS 92 KB + CSS 4 KB**
- Lighthouse: Mobile 90+, Desktop 95+
- First Contentful Paint: <1.5s
- Fully Interactive: <3s

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run `npm run lint` and `npm run build` to verify
5. Commit with clear messages
6. Push to the branch
7. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 📞 Contact & Support

- **Email**: hello@codesproutacademy.com
- **Phone**: 0800 000 0000
- **Address**: Lagos, Nigeria
- **Website**: https://codesproutacademy.com

## 🔄 Release History

### v2.0.0 (Current)
- ✨ API integration with useFormSubmit hook
- ✨ Hero visuals SVG component with animations
- ✨ Enhanced accessibility (WCAG 2.1 AA)
- ✨ Improved mobile navigation with keyboard support
- 📱 Better mobile UX and touch targets
- 🐛 TypeScript strict mode compatibility fixed

### v1.0.0
- Initial professional landing page release
- Editable content system
- Contact form with validation
- Multi-page routing
- SEO optimization
- Production build setup

---

Built with ❤️ for Nigeria's future tech leaders.
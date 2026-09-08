# SSV LIFECARE Website - Getting Started Guide

## 🚀 Quick Start

### Installation

```bash
# Clone repository
git clone https://github.com/Vachas007/ssv-lifecare-website.git
cd ssv-lifecare-website

# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the website.

## 📋 Configuration

Edit `.env.local` to customize:

```env
NEXT_PUBLIC_SITE_NAME=SSV LIFECARE
NEXT_PUBLIC_WHATSAPP_NUMBER=+919876543210
NEXT_PUBLIC_BUSINESS_EMAIL=business@ssvlifeccare.com
NEXT_PUBLIC_SUPPORT_EMAIL=support@ssvlifeccare.com
NEXT_PUBLIC_PHONE=+91-XXXX-XXXX-XX
```

## 🏗️ Project Structure

```
├── app/                    # Next.js pages
├── components/             # React components
├── lib/                    # Utilities and data
├── public/                 # Static assets
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## 🔧 Development

### Adding New Products

1. **Via Admin Dashboard** (`/admin`)
   - Click "Add Product"
   - Fill in product details
   - Save

2. **Via Code** (edit `lib/products.ts`)
   ```typescript
   {
     id: 'product-id',
     name: 'Product Name',
     composition: 'Active ingredients',
     category: 'Pain Management',
     therapeuticSegment: 'Anti-inflammatory',
     dosageForm: 'Tablet',
     packSize: 'Strip of 10',
     featured: false,
     active: true,
   }
   ```

### Customizing Styles

Edit `tailwind.config.ts` to modify colors:

```typescript
colors: {
  primary: { // Teal/Green colors
    50: '#f0f9f8',
    600: '#1f7a83',
    // ...
  },
  secondary: { // Bright green
    600: '#0ce892',
    // ...
  },
}
```

### Adding Pages

1. Create new file in `app/[pagename]/page.tsx`
2. Import Navbar, Footer, WhatsAppButton
3. Use Tailwind classes for styling

```typescript
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function PageName() {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        {/* Your content */}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
```

## 📱 Mobile Optimization

- Mobile-first design
- Responsive breakpoints at 640px, 1024px
- Hamburger menu on mobile
- Sticky WhatsApp button
- Touch-friendly buttons (min 44px height)

## 🔍 SEO

- Dynamic meta tags per page
- Open Graph tags
- Structured data ready
- Mobile-friendly
- Fast load times

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod
```

### Docker

```bash
docker build -t ssv-lifecare .
docker run -p 3000:3000 ssv-lifecare
```

## 📞 Support

- Email: info@ssvlifeccare.com
- WhatsApp: +919876543210
- Business: business@ssvlifeccare.com

## ✅ Pre-Launch Checklist

- [ ] Update company details (.env.local)
- [ ] Add company logo
- [ ] Replace placeholder images
- [ ] Update all products
- [ ] Configure email notifications
- [ ] Setup analytics
- [ ] Test all forms
- [ ] Mobile testing
- [ ] Performance check
- [ ] SSL certificate
- [ ] Domain setup
- [ ] Deploy to production

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [React](https://react.dev)

---

**Happy coding! 🚀**

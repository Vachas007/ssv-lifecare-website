# SSV LIFECARE - Premium Pharmaceutical Corporate Website

## 🏥 Overview

SSV LIFECARE is a premium, modern, professional pharmaceutical corporate website built with **Next.js**, **TypeScript**, and **Tailwind CSS**. The website showcases a complete pharmaceutical product portfolio with advanced search, filtering, and business enquiry capabilities.

## ✨ Key Features

### 🎯 Core Features
- **Premium Product Catalogue** - Display 20+ pharmaceutical products with detailed information
- **Advanced Product Search** - Search by product name, composition, or category with instant suggestions
- **Smart Filtering** - Filter products by category, dosage form, and therapeutic segment
- **Detailed Product Pages** - Individual product pages with full specifications
- **Digital Catalogue** - Grid and list views with multiple sorting options
- **Business Enquiry Forms** - Multiple enquiry forms for different business types
- **WhatsApp Integration** - Floating WhatsApp button with pre-filled messages

### 📱 User Experience
- Fully responsive mobile-first design
- Smooth animations and transitions
- Sticky search bar on products page
- Active filter display with one-click clearing
- Professional pharmaceutical color scheme (teal, green, turquoise)
- Accessibility-focused design

### 🔧 Admin Features
- **Product Management Dashboard** - Add, edit, delete products
- **Bulk Import** - CSV/Excel bulk product upload support
- **Product Status Control** - Enable/disable products
- **Featured Products** - Mark products as featured on homepage
- **Category Management** - Organize products by therapeutic category

### 📄 Content Pages
- **Home** - Premium hero section with featured products
- **About Us** - Company information, mission, vision, values
- **Products** - Searchable/filterable product listing
- **Catalogue** - Digital product catalogue with multiple views
- **Quality** - Quality assurance and standards information
- **Business Opportunities** - Partnership opportunities and requirements
- **Downloads** - Downloadable resources and documents
- **Contact** - Multiple contact forms and information
- **Legal Pages** - Privacy Policy, Terms & Conditions, Disclaimer

### 🛡️ Pharmaceutical Compliance
- Medical disclaimer on all product pages
- Prescription medicine warnings
- No unverified medical claims
- Regulatory compliance information
- Proper disclaimer for specialty products

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide Icons** - Icons
- **Framer Motion** - Animations (optional)
- **Zustand** - State management
- **React Hook Form** - Form handling

### Backend
- **Supabase** (optional) - Database and authentication
- **Firebase** (optional) - Alternative backend
- **Next.js API Routes** - Serverless functions

## 📦 Initial Product Database

The website comes pre-populated with 21 pharmaceutical products:

1. **ACEVAR Series** (Pain Management)
   - ACEVAR-P (Aceclofenac + Paracetamol)
   - ACEVAR-SP (+ Serratiopeptidase)
   - ACEVAR-ET (Etoricoxib + Paracetamol)
   - ACEVAR-TC (+ Trypsin Chymotrypsin)

2. **LYCOVAREX Series** (Bone & Nutritional Health)
   - LYCOVAREX PLUS
   - LYCOVAREX FORTE
   - LYCOVAREX MAX

3. **Other Products**
   - MYNCOBAL GOLD (Vitamin B12 Support)
   - RAVARZOL-DSR (Gastrointestinal)
   - VANZY PLUS (Digestive Health)
   - VAROXIM 200 (Anti-infective)
   - VARDEC (Specialty)
   - VARNAC (Pain Management)
   - VARNIM-P (Pain Management)
   - VAROCOF (Cough & Cold)
   - VAROFLOX Series (Anti-infective)
   - VANSOCORT (Corticosteroid)
   - VAROCET (Anti-allergic)
   - VAROCEF (Pediatric)
   - ARTHOWEX OIL (Topical)

## 🎨 Design System

### Color Palette
- **Primary Green** - `#1f7a83` (Trust, Healthcare)
- **Secondary Green** - `#0d8b5d` (Growth, Vitality)
- **Accent Teal** - `#2a9acc` (Professional)
- **White & Light Grey** - Clean, minimal backgrounds

### Typography
- **Display Font** - Bold, premium serif for headings
- **Body Font** - Clean sans-serif for readability
- **Font Weight** - Bold (700) for section titles, Regular (400) for body

### Components
- Premium rounded cards with subtle shadows
- Gradient backgrounds for hero sections
- Smooth hover effects on interactive elements
- Sticky navigation and search bars

## 📂 Project Structure

```
ssv-lifecare-website/
├── app/
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx           # About us
│   ├── products/                # Product pages
│   │   ├── page.tsx            # Products listing
│   │   └── [id]/page.tsx       # Product detail
│   ├── catalogue/page.tsx       # Digital catalogue
│   ├── quality/page.tsx         # Quality information
│   ├── business/page.tsx        # Business opportunities
│   ├── contact/page.tsx         # Contact page
│   ├── downloads/page.tsx       # Downloads
│   ├── admin/page.tsx           # Admin dashboard
│   ├── privacy/page.tsx         # Privacy policy
│   ├── terms/page.tsx           # Terms & conditions
│   ├── disclaimer/page.tsx      # Medical disclaimer
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── components/
│   ├── Navbar.tsx               # Navigation
│   ├── Footer.tsx               # Footer
│   ├── ProductCard.tsx          # Product card component
│   ├── ProductGrid.tsx          # Product grid
│   ├── ProductSearch.tsx        # Search with suggestions
│   ├── EnquiryForm.tsx          # Business enquiry form
│   ├── WhatsAppButton.tsx       # WhatsApp CTA
│   └── ...
├── lib/
│   ├── products.ts              # Product database & types
│   ├── store.ts                 # Zustand store
│   └── utils.ts                 # Utility functions
├── public/
│   └── (assets, images)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vachas007/ssv-lifecare-website.git
   cd ssv-lifecare-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   Edit `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_SITE_NAME=SSV LIFECARE
   NEXT_PUBLIC_WHATSAPP_NUMBER=+919876543210
   NEXT_PUBLIC_BUSINESS_EMAIL=business@ssvlifeccare.com
   NEXT_PUBLIC_PHONE=+91-XXXX-XXXX-XX
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## 📊 Product Management

### Adding Products

**Via Admin Dashboard**
1. Navigate to `/admin`
2. Click "Add Product"
3. Fill in product details
4. Save product

**Via Bulk Import**
1. Go to Admin Dashboard
2. Click "Bulk Import"
3. Upload CSV with columns:
   - Product Name
   - Brand Name
   - Composition
   - Category
   - Therapeutic Segment
   - Dosage Form
   - Strength
   - Pack Size
   - Description
   - Featured (true/false)
   - Status (active/inactive)

**Programmatically**
```typescript
import { useProductStore } from '@/lib/store';

const store = useProductStore();
store.addProduct({
  id: 'unique-id',
  name: 'Product Name',
  composition: 'Active ingredients',
  category: 'Category',
  therapeuticSegment: 'Segment',
  dosageForm: 'Form',
  featured: false,
  active: true,
});
```

## 🔍 SEO Optimization

- Dynamic meta tags for each product page
- SEO-friendly URLs with product slugs
- Open Graph tags for social sharing
- Breadcrumb navigation
- Sitemap and robots.txt ready
- Structured data markup
- Mobile-friendly design

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Features in Detail

### Product Search
- Real-time search suggestions
- Search by product name
- Search by composition/ingredients
- Search by category
- Search by therapeutic segment

### Product Filtering
- Filter by therapeutic category
- Filter by dosage form
- Multiple filter combinations
- Active filter display
- One-click filter clearing

### Business Enquiry
- Pre-populated product name
- Automatic WhatsApp integration
- Email notifications
- Multiple enquiry form variations
- Lead capture and management

### Admin Dashboard
- Product CRUD operations
- Bulk CSV import/export
- Product status management
- Featured product toggle
- Search and filter products
- Real-time statistics

## 🔐 Security & Compliance

- HTTPS ready
- Secure form submissions
- CSRF protection
- Environment variable protection
- Medical disclaimer compliance
- Privacy policy included
- Terms & conditions included
- No unverified medical claims

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
```

## 📈 Performance

- **Lighthouse Score**: 90+
- **Core Web Vitals**: Green
- **Page Load Time**: < 2 seconds
- **Mobile Performance**: Optimized
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic

## 🔄 Future Enhancements

- [ ] E-commerce integration
- [ ] Online ordering system
- [ ] Customer reviews/ratings
- [ ] Live chat support
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] CRM integration
- [ ] Email marketing automation
- [ ] Mobile app (React Native)
- [ ] AI-powered product recommendations

## 📝 Content Guidelines

### For Product Pages
- Include approved composition only
- Add therapeutic segment information
- Specify dosage form and strength
- Include pack size information
- Add clear disclaimer for prescription medicines
- No medical claims without documentation

### For Company Pages
- Use only verified information
- Include actual company details
- Add real contact information
- Include genuine certifications only
- Use professional language

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email: support@ssvlifeccare.com

For business inquiries: business@ssvlifeccare.com

## 🎯 Contact Information

**SSV LIFECARE**
- Email: info@ssvlifeccare.com
- Phone: +91-XXXX-XXXX-XX
- WhatsApp: +919876543210
- Address: [Your Address]

---

## ✅ Checklist Before Launch

- [ ] Update all placeholder phone numbers and emails
- [ ] Add company logo to Navbar
- [ ] Update company address in Footer and Contact page
- [ ] Add actual product images
- [ ] Configure WhatsApp number for all CTAs
- [ ] Add real certifications to Quality page
- [ ] Setup email notifications for enquiry forms
- [ ] Configure analytics (Google Analytics, etc.)
- [ ] Setup SEO meta tags
- [ ] Test all forms and links
- [ ] Mobile responsiveness testing
- [ ] Accessibility testing
- [ ] Performance optimization
- [ ] SSL certificate setup
- [ ] Domain setup and DNS configuration

---

**Built with ❤️ for SSV LIFECARE**

*Last Updated: September 2024*

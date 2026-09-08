# Content Management Guide

## 📝 Managing Products

### Product Information Required

```typescript
interface Product {
  id: string;                    // Unique identifier (slug format)
  name: string;                  // Product brand name
  composition: string;           // Active ingredients
  category: string;              // Therapeutic category
  therapeuticSegment: string;    // Therapeutic segment
  dosageForm: string;            // Tablet, Capsule, Injection, etc.
  strength?: string;             // e.g., "500 mg"
  packSize?: string;             // e.g., "Strip of 10"
  image?: string;                // Product image URL
  description?: string;          // Brief description
  featured?: boolean;            // Show on homepage
  active?: boolean;              // Active/Inactive status
}
```

### Adding Products

#### Method 1: Admin Dashboard

1. Navigate to `/admin`
2. Click "Add Product"
3. Fill in all fields
4. Click "Save Product"

#### Method 2: Code

Edit `lib/products.ts`:

```typescript
export const initialProducts: Product[] = [
  {
    id: 'acevar-p',
    name: 'ACEVAR-P',
    composition: 'Aceclofenac 100 mg + Paracetamol 325 mg',
    category: 'Pain Management',
    therapeuticSegment: 'Anti-inflammatory',
    dosageForm: 'Tablet',
    packSize: 'Strip of 10',
    featured: true,
    active: true,
  },
  // Add more products...
];
```

#### Method 3: Bulk Import

CSV format:
```csv
Product Name,Brand Name,Composition,Category,Therapeutic Segment,Dosage Form,Strength,Pack Size,Description,Featured,Status
ACEVAR-P,SSV LIFECARE,Aceclofenac 100 mg + Paracetamol 325 mg,Pain Management,Anti-inflammatory,Tablet,100mg,Strip of 10,Pain relief product,true,active
```

Steps:
1. Go to Admin Dashboard
2. Click "Bulk Import"
3. Select CSV file
4. Verify data
5. Import

## 🗂️ Product Categories

Available categories in system:

- Pain Management
- Anti-inflammatory
- Bone & Nutritional Health
- Digestive Health
- Neuro / Vitamin Support
- Anti-infective
- Cough & Cold
- Anti-allergic
- Prescription / Specialty Products
- Topical Products

To add new category, edit `lib/products.ts`:

```typescript
export const PRODUCT_CATEGORIES = [
  'Pain Management',
  'Anti-inflammatory',
  // Add new category here
  'Your New Category',
];
```

## 💊 Dosage Forms

Supported dosage forms:

- Tablet
- Capsule
- Injection
- Dry Syrup
- Oil
- Suspension
- Solution

Add custom form in `lib/products.ts`:

```typescript
export const DOSAGE_FORMS = [
  'Tablet',
  'Capsule',
  // Your custom form
  'Your Custom Form',
];
```

## 📄 Managing Pages

### Homepage
- Featured products section
- Search bar
- Trust section
- CTA section

Edit: `app/page.tsx`

### About Us
- Company story
- Mission & Vision
- Core values
- Commitment

Edit: `app/about/page.tsx`

### Products
- Product listing with filters
- Search functionality
- Category/dosage form filters

Edit: `app/products/page.tsx`

### Product Detail
- Full product information
- Composition details
- Enquiry form
- Related products

Edit: `app/products/[id]/page.tsx`

### Catalogue
- Digital product catalogue
- Grid/List views
- Category navigation
- PDF download

Edit: `app/catalogue/page.tsx`

### Quality
- Quality standards
- Quality practices
- Certifications section

Edit: `app/quality/page.tsx`

### Business
- Partnership opportunities
- Distributor/Stockist info
- Requirements
- Enquiry form

Edit: `app/business/page.tsx`

### Contact
- Contact forms
- Company information
- Maps integration

Edit: `app/contact/page.tsx`

### Downloads
- Downloadable resources
- Catalogue PDF
- Company profile

Edit: `app/downloads/page.tsx`

## 🎨 Customizing Company Information

### Logo
1. Replace logo in `components/Navbar.tsx`
2. Update size and styling

### Company Name
1. Edit in `next.config.js`
2. Update `.env.local`

### Contact Information
1. Edit in `components/Footer.tsx`
2. Update `app/contact/page.tsx`
3. Update `.env.local`

### Colors & Branding
1. Edit `tailwind.config.ts`
2. Modify primary, secondary, accent colors
3. Update `app/globals.css`

## 📞 Contact Forms

### Enquiry Form Component

Location: `components/EnquiryForm.tsx`

Fields included:
- Full Name
- Company Name
- Mobile Number
- WhatsApp Number
- Email
- City
- State
- Business Type
- Message

Customize fields:

```typescript
const [formData, setFormData] = useState({
  fullName: '',
  companyName: '',
  mobile: '',
  whatsapp: '',
  email: '',
  city: '',
  state: '',
  businessType: '',
  customField: '', // Add your field
  message: '',
});
```

## 🔗 WhatsApp Integration

Edit WhatsApp number in `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=+919876543210
```

Customize message in `components/WhatsAppButton.tsx`:

```typescript
const message = 'Hello SSV LIFECARE, I would like to know more...';
```

## 📊 Analytics Integration

### Google Analytics

1. Create account at google.com/analytics
2. Get tracking ID
3. Add to environment variables
4. Implement tracking in app

## ✅ Content Guidelines

### Product Information
- Use only approved/verified information
- Include composition exactly as approved
- Add therapeutic category
- Specify dosage form and strength
- Include pack size information

### Medical Claims
❌ DO NOT claim without documentation:
- "100% safe"
- "Guaranteed cure"
- "No side effects"
- "Best medicine"
- "Clinically proven" (without studies)
- FDA/GMP approval (without certificates)

### Disclaimer Language

For prescription products:
> "Prescription medicine. Use only under the supervision of a qualified healthcare professional."

For medical info pages:
> "The information provided on this website is for general informational purposes only and should not be considered medical advice. Please consult a qualified healthcare professional."

## 🔄 Regular Updates

### Weekly
- Check featured products
- Verify product availability
- Monitor enquiry forms

### Monthly
- Update product listings
- Check product prices
- Verify certifications
- Review analytics

### Quarterly
- Update company information
- Review and update policies
- Add new products
- Performance review

---

**Keep your content fresh and accurate! 📝**

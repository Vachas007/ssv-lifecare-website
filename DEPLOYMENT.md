# Deployment Instructions

## 🌐 Vercel Deployment (Recommended)

### Prerequisites
- Vercel account (free at vercel.com)
- GitHub account
- Project pushed to GitHub

### Steps

1. **Connect GitHub Repository**
   - Go to https://vercel.com/new
   - Select "Import Git Repository"
   - Choose your GitHub account
   - Select `ssv-lifecare-website`

2. **Configure Project**
   - Framework: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Environment Variables**
   - Add all variables from `.env.local.example`
   - NEXT_PUBLIC_SITE_NAME
   - NEXT_PUBLIC_WHATSAPP_NUMBER
   - NEXT_PUBLIC_BUSINESS_EMAIL
   - etc.

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Visit your Vercel URL

5. **Connect Custom Domain**
   - Go to Project Settings → Domains
   - Add your domain
   - Update DNS records

## 🔒 Environment Variables

Create `.env.production` for production deployment:

```env
NEXT_PUBLIC_SITE_NAME=SSV LIFECARE
NEXT_PUBLIC_WHATSAPP_NUMBER=+919876543210
NEXT_PUBLIC_BUSINESS_EMAIL=business@ssvlifeccare.com
NEXT_PUBLIC_SUPPORT_EMAIL=support@ssvlifeccare.com
NEXT_PUBLIC_PHONE=+91-XXXX-XXXX-XX
```

## 📊 Performance Optimization

### Before Going Live

1. **Image Optimization**
   ```typescript
   import Image from 'next/image';
   
   <Image
     src="/product.jpg"
     alt="Product"
     width={400}
     height={400}
     priority
   />
   ```

2. **Code Splitting**
   - Already handled by Next.js
   - Use dynamic imports for large components

3. **Caching**
   ```typescript
   // In next.config.js
   headers: [
     {
       source: '/public/:path*',
       headers: [
         { key: 'Cache-Control', value: 'public, max-age=31536000' },
       ],
     },
   ]
   ```

## 🧪 Testing Before Deployment

```bash
# Build for production
npm run build

# Test production build locally
npm run start

# Run linting
npm run lint

# Check TypeScript
npx tsc --noEmit
```

## 📈 Monitoring

### Vercel Analytics
- Automatic performance monitoring
- Real user monitoring (RUM)
- Core Web Vitals tracking

### Google Analytics Setup

1. Create Google Analytics account
2. Add tracking ID to app
3. Install analytics library:
   ```bash
   npm install @react-google-analytics/core
   ```

## 🔒 Security Checklist

- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] CORS properly set
- [ ] Environment variables protected
- [ ] No sensitive data in code
- [ ] Forms have CSRF protection
- [ ] Input validation implemented
- [ ] SQL injection prevention (if using DB)

## 🚨 Troubleshooting

### Build Fails
```bash
# Clear cache
npm run build -- --no-cache

# Check for TypeScript errors
npx tsc --noEmit

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Slow Performance
- Check Lighthouse score
- Optimize images
- Enable code splitting
- Check for large dependencies
- Use CDN for static assets

### Form Not Submitting
- Check network tab
- Verify API endpoint
- Check CORS settings
- Validate form data

## 📞 Support

- Vercel Docs: https://vercel.com/docs
- Next.js Support: https://github.com/vercel/next.js/discussions
- Email: support@ssvlifeccare.com

---

**Ready to go live! 🚀**

# Production Checklist - Root & Reflect

## ✅ Pre-Deployment Checks

### Code Quality
- [x] TypeScript compilation successful
- [x] No TypeScript errors
- [x] Production build successful
- [x] All pages render without errors

### Environment Variables
- [ ] `NEXT_PUBLIC_SUPABASE_URL` set in Vercel
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` set in Vercel
- [ ] `SUPABASE_SERVICE_ROLE_KEY` set in Vercel (keep secret!)
- [ ] `RESEND_API_KEY` set in Vercel (keep secret!)

### Database (Supabase)
- [ ] Migration SQL executed successfully
- [ ] All tables created (appointments, contact_submissions, admin_users)
- [ ] RLS policies configured
- [ ] Admin user created in Authentication
- [ ] Admin user added to admin_users table
- [ ] Test query from admin panel works

### Email (Resend)
- [ ] Domain `rootandreflect.ca` verified
- [ ] DNS records configured
- [ ] API key active
- [ ] Sender email: `noreply@rootandreflect.ca`
- [ ] Recipient email: `rootandreflects@gmail.com`

---

## 🧪 Functional Testing

### Public Pages
- [ ] `/` (Homepage) loads correctly
- [ ] `/about` loads correctly
- [ ] `/services` loads correctly  
- [ ] `/appointment` loads correctly
- [ ] `/contact` loads correctly
- [ ] `/privacy` loads correctly
- [ ] `/terms` loads correctly

### Forms
- [ ] Appointment form submits successfully
- [ ] Contact form submits successfully
- [ ] Error messages display for invalid input
- [ ] Success messages display after submission
- [ ] Form validation works (required fields, email format)

### Email System
- [ ] Appointment submission → Admin receives email
- [ ] Appointment submission → User receives acknowledgement
- [ ] Contact submission → Admin receives email
- [ ] Contact submission → User receives acknowledgement
- [ ] Status change to confirmed → User receives confirmation
- [ ] Status change to cancelled → User receives cancellation

### Admin Panel
- [ ] `/admin/login` loads correctly
- [ ] Login works with correct credentials
- [ ] Login fails with incorrect credentials
- [ ] Dashboard shows correct statistics
- [ ] Appointment list displays all appointments
- [ ] Contact list displays all messages
- [ ] Status changes work
- [ ] Delete functions work
- [ ] Logout works

### Security
- [ ] `/admin/*` routes require authentication
- [ ] Unauthenticated users redirected to login
- [ ] Service role key never exposed to client
- [ ] RLS policies prevent unauthorized access
- [ ] Admin authorization checked (admin_users table)

---

## 📱 Cross-Browser Testing

### Desktop
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest, if Mac available)

### Mobile
- [ ] iOS Safari
- [ ] Android Chrome
- [ ] Responsive design works on all screen sizes

---

## 🎨 UI/UX

### General
- [ ] All images load correctly
- [ ] Icons display properly
- [ ] Fonts load correctly
- [ ] Colors match design
- [ ] Animations work smoothly

### Cookie Consent
- [ ] Banner appears on first visit
- [ ] Banner stays at bottom (visible without scrolling)
- [ ] Accept/Decline buttons work
- [ ] Preferences saved correctly
- [ ] Analytics respect user choice

### Forms
- [ ] Multi-step appointment form works
- [ ] Progress indicators accurate
- [ ] Back/Next navigation works
- [ ] Form remembers entered data
- [ ] Loading states display during submission

---

## 🔍 SEO & Performance

### Meta Tags
- [ ] All pages have proper title tags
- [ ] All pages have meta descriptions
- [ ] Open Graph tags present
- [ ] Twitter Card tags present
- [ ] Canonical URLs set correctly

### Sitemap & Robots
- [ ] `/sitemap.xml` accessible
- [ ] `/robots.txt` accessible
- [ ] Sitemap includes all public pages
- [ ] Robots.txt blocks admin/api routes

### Performance
- [ ] Lighthouse score > 90 (Performance)
- [ ] Lighthouse score > 90 (Accessibility)
- [ ] Lighthouse score > 90 (Best Practices)
- [ ] Lighthouse score > 90 (SEO)
- [ ] Core Web Vitals pass
- [ ] Images optimized
- [ ] No console errors in production

---

## 🌐 Google Search Console

### Setup
- [ ] Property added to GSC
- [ ] Domain verified (DNS TXT record)
- [ ] Sitemap submitted
- [ ] No crawl errors

### Monitoring
- [ ] Manual indexing requested for key pages
- [ ] Coverage report shows no errors
- [ ] Mobile usability verified
- [ ] Core Web Vitals monitored

---

## 🚨 Error Handling

### Test Error Scenarios
- [ ] Network error during form submission
- [ ] Invalid email format
- [ ] Missing required fields
- [ ] Database connection failure (simulated)
- [ ] Email service failure (simulated)
- [ ] 404 pages show helpful message
- [ ] 500 errors handled gracefully

---

## 📊 Analytics

### Google Analytics (if configured)
- [ ] Tracking code installed
- [ ] Events firing correctly
- [ ] Form submissions tracked
- [ ] Page views tracked
- [ ] Bounce rate reasonable

---

## 🔐 Security Audit

### Headers
- [ ] HTTPS enforced
- [ ] Security headers configured
- [ ] CSP (Content Security Policy) configured
- [ ] HSTS enabled

### Data Protection
- [ ] Environment variables never exposed
- [ ] API keys never in client code
- [ ] Passwords hashed
- [ ] Sessions secure
- [ ] CORS configured correctly

---

## 📝 Documentation

### Internal Docs
- [x] SETUP.md - Setup instructions
- [x] EMAIL-SYSTEM.md - Email event documentation
- [x] GOOGLE-SEARCH-CONSOLE.md - GSC setup guide
- [x] PRODUCTION-CHECKLIST.md - This file

### Code Comments
- [ ] Complex logic explained
- [ ] Server actions documented
- [ ] Email templates documented

---

## 🎯 Post-Launch

### Week 1
- [ ] Monitor error logs daily
- [ ] Check email deliverability
- [ ] Verify form submissions
- [ ] Review GSC for crawl errors
- [ ] Monitor performance metrics

### Week 2-4
- [ ] Analyze user behavior
- [ ] Check conversion rates
- [ ] Review contact/appointment volumes
- [ ] Monitor page speed
- [ ] Check for broken links

### Monthly
- [ ] Review analytics
- [ ] Check search rankings
- [ ] Update content if needed
- [ ] Review security logs
- [ ] Backup database

---

## 🆘 Emergency Contacts

### Critical Issues
- **Hosting:** Vercel Dashboard
- **Database:** Supabase Dashboard
- **Email:** Resend Dashboard
- **Domain:** DNS Provider

### Rollback Plan
1. Revert to previous Vercel deployment
2. Check environment variables
3. Verify database connection
4. Test email delivery
5. Clear Vercel cache if needed

---

## ✅ Final Sign-Off

Before marking production-ready:

- [ ] All critical items checked
- [ ] No blocking bugs
- [ ] Performance acceptable
- [ ] Security verified
- [ ] Backup plan in place
- [ ] Team notified of launch

**Signed off by:** _________________  
**Date:** _________________

---

## 🎉 Launch Day

- [ ] Announce to stakeholders
- [ ] Monitor for 24 hours
- [ ] Be ready to rollback if needed
- [ ] Celebrate! 🎊

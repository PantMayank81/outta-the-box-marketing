const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Outta The Box Marketing CMS...\n');

// Create necessary directories
const directories = [
    'data',
    'uploads',
    'backups',
    'logs'
];

directories.forEach(dir => {
    const dirPath = path.join(__dirname, dir);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`✅ Created directory: ${dir}`);
    } else {
        console.log(`📁 Directory already exists: ${dir}`);
    }
});

// Create initial data file
const dataFile = path.join(__dirname, 'data', 'cms-data.json');
if (!fs.existsSync(dataFile)) {
    const initialData = {
        blogPosts: [
            {
                id: 1,
                title: "Best AI Marketing Consultant India vs Traditional Agency: Complete Comparison 2025",
                slug: "best-ai-marketing-consultant-india",
                status: "published",
                publishedAt: "2024-01-15",
                views: 1247,
                content: "This comprehensive guide compares AI-powered marketing consultants with traditional agencies...",
                metaDescription: "Compare AI marketing consultants vs traditional agencies in India. Get insights on pricing, results, and ROI for D2C brands.",
                keywords: "AI marketing consultant India, digital marketing agency, marketing automation",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            },
            {
                id: 2,
                title: "Marketing Automation Setup Cost vs ROI: Complete Analysis for D2C Brands",
                slug: "marketing-automation-setup-cost",
                status: "published",
                publishedAt: "2024-01-10",
                views: 892,
                content: "This detailed analysis breaks down the true cost of marketing automation...",
                metaDescription: "Complete cost analysis of marketing automation for D2C brands. ROI projections, implementation costs, and success stories.",
                keywords: "marketing automation cost, D2C marketing, automation ROI",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            },
            {
                id: 3,
                title: "Hire Digital Marketing Strategist vs Build In-House Team: 2025 Complete Guide",
                slug: "hire-digital-marketing-strategist",
                status: "published",
                publishedAt: "2024-01-05",
                views: 1156,
                content: "This comprehensive guide helps you decide between hiring a consultant or building an in-house team...",
                metaDescription: "Complete guide to hiring digital marketing strategist vs building in-house team. Cost analysis, pros/cons, decision framework.",
                keywords: "hire digital marketing strategist, in-house vs consultant, marketing team",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            },
            {
                id: 4,
                title: "Performance Marketing Audit: 15 Critical Issues Killing Your D2C ROI (+ Solutions)",
                slug: "performance-marketing-audit",
                status: "published",
                publishedAt: "2024-01-01",
                views: 743,
                content: "This audit guide reveals the 15 most common issues that kill D2C marketing ROI...",
                metaDescription: "Complete performance marketing audit guide. 15 critical issues and solutions for D2C brands to improve ROI.",
                keywords: "performance marketing audit, D2C marketing, marketing ROI",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            },
            {
                id: 5,
                title: "AI Marketing Agency Pricing: What You Should Pay for Real Results in 2025",
                slug: "ai-marketing-agency-pricing",
                status: "published",
                publishedAt: "2023-12-28",
                views: 1034,
                content: "This pricing guide provides complete transparency on AI marketing agency costs...",
                metaDescription: "Complete AI marketing agency pricing guide. Transparent cost breakdown, value justification, and ROI expectations.",
                keywords: "AI marketing agency pricing, marketing consultant cost, digital marketing pricing",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            }
        ],
        caseStudies: [
            {
                id: 1,
                title: "LuxeSneakers",
                category: "Fashion & Beauty",
                duration: "6 months",
                result: "48h Sellout",
                description: "Sold out our entire collection in 48 hours after implementing their AI-driven campaign strategy.",
                client: "Sarah Chen, Founder of LuxeSneakers",
                metrics: {
                    revenue: "₹2.5Cr",
                    growth: "400%",
                    roi: "1200%"
                },
                image: "LuxeSneakers.png",
                status: "published",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            },
            {
                id: 2,
                title: "EcoGlow Skincare",
                category: "Health & Wellness",
                duration: "4 months",
                result: "3x Engagement",
                description: "Tripled our social media engagement and doubled our conversion rates with their content strategy.",
                client: "Dr. Priya Sharma, CEO of EcoGlow",
                metrics: {
                    engagement: "300%",
                    conversion: "200%",
                    revenue: "₹1.8Cr"
                },
                image: "EcoGlow Skincare.png",
                status: "published",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            },
            {
                id: 3,
                title: "Artisan Coffee Co",
                category: "Food & Beverage",
                duration: "8 months",
                result: "2x Sales Growth",
                description: "Doubled our online sales and established a strong brand presence in the competitive coffee market.",
                client: "Rajesh Kumar, Founder of Artisan Coffee Co",
                metrics: {
                    sales: "200%",
                    brand: "150%",
                    revenue: "₹3.2Cr"
                },
                image: "Artisan Coffee Co.png",
                status: "published",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            },
            {
                id: 4,
                title: "TechFlow Solutions",
                category: "Technology & SaaS",
                duration: "12 months",
                result: "5x Lead Generation",
                description: "Increased our lead generation by 500% and reduced customer acquisition cost by 60%.",
                client: "Amit Patel, CMO of TechFlow Solutions",
                metrics: {
                    leads: "500%",
                    cac: "-60%",
                    revenue: "₹4.1Cr"
                },
                image: "TechFlow Solutions.png",
                status: "published",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            }
        ],
        services: [
            {
                id: 1,
                name: "Digital Marketing Strategy & Consulting",
                description: "Data-driven marketing strategies tailored to your business goals",
                pricing: "Starting from ₹50K",
                features: ["Strategic Planning", "Market Analysis", "Competitive Research", "ROI Optimization"],
                image: "Digital Marketing Strategy & Consulting.png",
                status: "active",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            },
            {
                id: 2,
                name: "AI-Powered Marketing Automation",
                description: "Intelligent automation systems that scale your marketing efforts",
                pricing: "Starting from ₹75K",
                features: ["Workflow Automation", "Lead Nurturing", "Email Marketing", "CRM Integration"],
                image: "AI-Powered Marketing Automation.png",
                status: "active",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            },
            {
                id: 3,
                name: "SEO & Content Marketing",
                description: "Compelling brand storytelling that drives organic traffic",
                pricing: "Starting from ₹40K",
                features: ["Content Strategy", "SEO Optimization", "Blog Management", "Link Building"],
                image: "SEO & Content Marketing.png",
                status: "active",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            },
            {
                id: 4,
                name: "PPC & Paid Media Management",
                description: "Performance-driven advertising across all digital channels",
                pricing: "Starting from ₹60K",
                features: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Campaign Optimization"],
                image: "PPC & Paid Media Management.png",
                status: "active",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            },
            {
                id: 5,
                name: "Marketing Technology Integration",
                description: "Seamless tech stack integration for maximum efficiency",
                pricing: "Starting from ₹80K",
                features: ["MarTech Stack", "API Integration", "Data Analytics", "Tool Optimization"],
                image: "Marketing Technology Integration.png",
                status: "active",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            },
            {
                id: 6,
                name: "Growth Hacking & Conversion Optimization",
                description: "ROI measurement and optimization for sustainable growth",
                pricing: "Starting from ₹70K",
                features: ["A/B Testing", "Conversion Optimization", "Growth Experiments", "Performance Analysis"],
                image: "Growth Hacking & Conversion Optimization.png",
                status: "active",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            }
        ],
        testimonials: [
            {
                id: 1,
                name: "Sarah Chen",
                company: "Founder of LuxeSneakers",
                quote: "Sold out our entire collection in 48 hours after implementing their AI-driven campaign strategy.",
                result: "48h Sellout",
                image: "LuxeSneakers.png",
                status: "published",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            },
            {
                id: 2,
                name: "Dr. Priya Sharma",
                company: "CEO of EcoGlow",
                quote: "Tripled our social media engagement and doubled our conversion rates with their content strategy.",
                result: "3x Engagement",
                image: "EcoGlow Skincare.png",
                status: "published",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            },
            {
                id: 3,
                name: "Rajesh Kumar",
                company: "Founder of Artisan Coffee Co",
                quote: "Doubled our online sales and established a strong brand presence in the competitive coffee market.",
                result: "2x Sales Growth",
                image: "Artisan Coffee Co.png",
                status: "published",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            }
        ],
        seoSettings: {
            siteTitle: "Outta The Box Marketing",
            siteDescription: "AI-Powered Digital Marketing Solutions for D2C Brands",
            siteKeywords: "digital marketing, AI marketing, D2C marketing, marketing automation",
            gaId: "",
            gscVerification: "",
            fbPixel: "",
            updatedAt: new Date().toISOString()
        },
        settings: {
            websiteUrl: "https://otbmarketing.in/",
            adminEmail: "pant.mayank@gmail.com",
            autosaveInterval: 5,
            updatedAt: new Date().toISOString()
        },
        lastModified: new Date().toISOString()
    };

    fs.writeFileSync(dataFile, JSON.stringify(initialData, null, 2));
    console.log('✅ Created initial data file');
} else {
    console.log('📄 Data file already exists');
}

// Create README for admin
const readmeContent = `# Outta The Box Marketing CMS

## 🚀 Quick Start

1. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Start the CMS server:**
   \`\`\`bash
   npm start
   \`\`\`

3. **Access the admin panel:**
   Open http://localhost:3001/admin/ in your browser

## 📁 File Structure

- \`server.js\` - Main server file
- \`index.html\` - Admin panel interface
- \`cms.js\` - Frontend CMS functionality
- \`data/cms-data.json\` - Content data storage
- \`api/\` - API endpoints

## 🔧 Features

- **Blog Post Management** - Create, edit, delete blog posts
- **Case Study Management** - Manage client case studies
- **Service Management** - Update service offerings
- **Testimonial Management** - Manage client testimonials
- **SEO Settings** - Configure SEO metadata
- **Real-time Updates** - Changes reflect immediately on website
- **Data Export/Import** - Backup and restore content
- **Auto-save** - Automatic content saving

## 🌐 API Endpoints

- \`GET /api/blog-posts\` - Get all blog posts
- \`POST /api/blog-posts\` - Create new blog post
- \`PUT /api/blog-posts/:id\` - Update blog post
- \`DELETE /api/blog-posts/:id\` - Delete blog post
- Similar endpoints for case-studies, services, testimonials

## 📊 Data Storage

All content is stored in \`data/cms-data.json\` as JSON format.
The file is automatically backed up and versioned.

## 🔒 Security

- CORS enabled for cross-origin requests
- Input validation on all endpoints
- File system protection
- Data sanitization

## 🚀 Deployment

The CMS can be deployed to any Node.js hosting service:
- Heroku
- Vercel
- Netlify Functions
- DigitalOcean
- AWS

## 📞 Support

For support, contact: pant.mayank@gmail.com
`;

fs.writeFileSync(path.join(__dirname, 'README.md'), readmeContent);
console.log('✅ Created admin README');

console.log('\n🎉 CMS setup complete!');
console.log('\n📋 Next steps:');
console.log('1. Run: npm install');
console.log('2. Run: npm start');
console.log('3. Open: http://localhost:3001/admin/');
console.log('\n🚀 Your CMS is ready to use!');

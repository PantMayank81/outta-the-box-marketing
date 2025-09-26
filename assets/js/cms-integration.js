// CMS Integration - Connects the main website with CMS data
class CMSIntegration {
    constructor() {
        this.cmsData = null;
        this.init();
    }

    async init() {
        await this.loadCMSData();
        this.updateWebsiteContent();
        this.setupAutoRefresh();
    }

    async loadCMSData() {
        try {
            // Try to load from localStorage first (if admin has been used)
            const localData = localStorage.getItem('outtaTheBoxCMS');
            if (localData) {
                this.cmsData = JSON.parse(localData);
                return;
            }

            // Fallback: Load from default data structure
            this.cmsData = await this.loadDefaultData();
        } catch (error) {
            console.error('Error loading CMS data:', error);
            this.cmsData = await this.loadDefaultData();
        }
    }

    async loadDefaultData() {
        // This would typically load from a JSON file or API
        // For now, we'll use the same structure as the CMS
        return {
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
                    keywords: "AI marketing consultant India, digital marketing agency, marketing automation"
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
                    keywords: "marketing automation cost, D2C marketing, automation ROI"
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
                    keywords: "hire digital marketing strategist, in-house vs consultant, marketing team"
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
                    keywords: "performance marketing audit, D2C marketing, marketing ROI"
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
                    keywords: "AI marketing agency pricing, marketing consultant cost, digital marketing pricing"
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
                    status: "published"
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
                    status: "published"
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
                    status: "published"
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
                    status: "published"
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
                    status: "active"
                },
                {
                    id: 2,
                    name: "AI-Powered Marketing Automation",
                    description: "Intelligent automation systems that scale your marketing efforts",
                    pricing: "Starting from ₹75K",
                    features: ["Workflow Automation", "Lead Nurturing", "Email Marketing", "CRM Integration"],
                    image: "AI-Powered Marketing Automation.png",
                    status: "active"
                },
                {
                    id: 3,
                    name: "SEO & Content Marketing",
                    description: "Compelling brand storytelling that drives organic traffic",
                    pricing: "Starting from ₹40K",
                    features: ["Content Strategy", "SEO Optimization", "Blog Management", "Link Building"],
                    image: "SEO & Content Marketing.png",
                    status: "active"
                },
                {
                    id: 4,
                    name: "PPC & Paid Media Management",
                    description: "Performance-driven advertising across all digital channels",
                    pricing: "Starting from ₹60K",
                    features: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Campaign Optimization"],
                    image: "PPC & Paid Media Management.png",
                    status: "active"
                },
                {
                    id: 5,
                    name: "Marketing Technology Integration",
                    description: "Seamless tech stack integration for maximum efficiency",
                    pricing: "Starting from ₹80K",
                    features: ["MarTech Stack", "API Integration", "Data Analytics", "Tool Optimization"],
                    image: "Marketing Technology Integration.png",
                    status: "active"
                },
                {
                    id: 6,
                    name: "Growth Hacking & Conversion Optimization",
                    description: "ROI measurement and optimization for sustainable growth",
                    pricing: "Starting from ₹70K",
                    features: ["A/B Testing", "Conversion Optimization", "Growth Experiments", "Performance Analysis"],
                    image: "Growth Hacking & Conversion Optimization.png",
                    status: "active"
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
                    status: "published"
                },
                {
                    id: 2,
                    name: "Dr. Priya Sharma",
                    company: "CEO of EcoGlow",
                    quote: "Tripled our social media engagement and doubled our conversion rates with their content strategy.",
                    result: "3x Engagement",
                    image: "EcoGlow Skincare.png",
                    status: "published"
                },
                {
                    id: 3,
                    name: "Rajesh Kumar",
                    company: "Founder of Artisan Coffee Co",
                    quote: "Doubled our online sales and established a strong brand presence in the competitive coffee market.",
                    result: "2x Sales Growth",
                    image: "Artisan Coffee Co.png",
                    status: "published"
                }
            ],
            seoSettings: {
                siteTitle: "Outta The Box Marketing",
                siteDescription: "AI-Powered Digital Marketing Solutions for D2C Brands",
                siteKeywords: "digital marketing, AI marketing, D2C marketing, marketing automation",
                gaId: "",
                gscVerification: "",
                fbPixel: ""
            }
        };
    }

    updateWebsiteContent() {
        this.updateBlogPosts();
        this.updateCaseStudies();
        this.updateServices();
        this.updateTestimonials();
        this.updateSEOSettings();
    }

    updateBlogPosts() {
        // Update blog index page with latest posts
        const blogContainer = document.getElementById('blog-posts-container');
        if (blogContainer && this.cmsData.blogPosts) {
            const publishedPosts = this.cmsData.blogPosts.filter(post => post.status === 'published');
            blogContainer.innerHTML = publishedPosts.map(post => `
                <div class="blog-card bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in">
                    <div class="flex items-center justify-between mb-4">
                        <span class="text-sm text-gray-500 dark:text-gray-400">${new Date(post.publishedAt).toLocaleDateString()}</span>
                        <span class="text-sm text-teal font-medium">${post.views.toLocaleString()} views</span>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">${post.title}</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-6">${post.metaDescription}</p>
                    <div class="flex items-center justify-between">
                        <a href="blog-${post.slug}.html" class="text-teal hover:text-coral font-semibold transition-colors duration-300">
                            Read More →
                        </a>
                        <div class="flex space-x-2">
                            <span class="px-3 py-1 bg-teal/10 text-teal text-sm rounded-full">${post.keywords.split(',')[0]}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    updateCaseStudies() {
        // Update case studies on homepage and case studies page
        const caseStudiesContainer = document.getElementById('case-studies-container');
        if (caseStudiesContainer && this.cmsData.caseStudies) {
            const publishedCases = this.cmsData.caseStudies.filter(caseStudy => caseStudy.status === 'published');
            caseStudiesContainer.innerHTML = publishedCases.map(caseStudy => `
                <div class="case-study-card bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in">
                    <div class="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                        <img src="assets/images/${caseStudy.image}" alt="${caseStudy.title} Case Study" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
                            ${caseStudy.category}
                        </div>
                        <div class="absolute bottom-4 right-4 text-2xl font-bold text-white">${caseStudy.result}</div>
                    </div>
                    <h4 class="font-bold text-gray-900 dark:text-white mb-2">${caseStudy.client}</h4>
                    <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">"${caseStudy.description}"</p>
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold text-coral">${caseStudy.result}</span>
                        <button onclick="openCaseStudyModal('${caseStudy.title}')" class="text-teal hover:text-coral font-semibold transition-colors duration-300">
                            View Full Case Study
                        </button>
                    </div>
                </div>
            `).join('');
        }
    }

    updateServices() {
        // Update services on homepage and services page
        const servicesContainer = document.getElementById('services-container');
        if (servicesContainer && this.cmsData.services) {
            const activeServices = this.cmsData.services.filter(service => service.status === 'active');
            servicesContainer.innerHTML = activeServices.map(service => `
                <div class="service-card bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in">
                    <div class="pricing-badge">${service.pricing}</div>
                    <div class="service-image-container mb-6">
                        <img src="assets/images/${service.image}" alt="${service.name}" loading="lazy" class="service-icon">
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">${service.name}</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-6">${service.description}</p>
                    <ul class="space-y-2 mb-6">
                        ${service.features.map(feature => `<li class="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <span class="w-2 h-2 bg-teal rounded-full mr-3"></span>${feature}
                        </li>`).join('')}
                    </ul>
                    <button class="w-full bg-gradient-to-r from-teal to-coral text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 transform">
                        Get Started
                    </button>
                </div>
            `).join('');
        }
    }

    updateTestimonials() {
        // Update testimonials on homepage
        const testimonialsContainer = document.getElementById('testimonials-container');
        if (testimonialsContainer && this.cmsData.testimonials) {
            const publishedTestimonials = this.cmsData.testimonials.filter(testimonial => testimonial.status === 'published');
            testimonialsContainer.innerHTML = publishedTestimonials.map(testimonial => `
                <a href="case-studies.html#${testimonial.name.toLowerCase().replace(/\s+/g, '-')}" class="testimonial-video bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <div class="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                        <img src="assets/images/${testimonial.image}" alt="${testimonial.name} Testimonial" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div class="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-teal group-hover:text-white transition-all duration-300">
                            <span class="text-2xl text-gray-800 group-hover:text-white">▶️</span>
                        </div>
                    </div>
                    <h4 class="font-bold text-gray-900 dark:text-white mb-2">${testimonial.name}, ${testimonial.company}</h4>
                    <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">"${testimonial.quote}"</p>
                    <div class="text-2xl font-bold text-coral">${testimonial.result}</div>
                </a>
            `).join('');
        }
    }

    updateSEOSettings() {
        // Update meta tags and SEO settings
        if (this.cmsData.seoSettings) {
            const settings = this.cmsData.seoSettings;
            
            // Update page title
            document.title = settings.siteTitle + (document.title.includes('|') ? ' | ' + document.title.split('|')[1] : '');
            
            // Update meta description
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) metaDesc.content = settings.siteDescription;
            
            // Update meta keywords
            const metaKeywords = document.querySelector('meta[name="keywords"]');
            if (metaKeywords) metaKeywords.content = settings.siteKeywords;
            
            // Update Open Graph tags
            const ogTitle = document.querySelector('meta[property="og:title"]');
            if (ogTitle) ogTitle.content = settings.siteTitle;
            
            const ogDesc = document.querySelector('meta[property="og:description"]');
            if (ogDesc) ogDesc.content = settings.siteDescription;
        }
    }

    setupAutoRefresh() {
        // Check for CMS updates every 30 seconds
        setInterval(() => {
            this.loadCMSData().then(() => {
                this.updateWebsiteContent();
            });
        }, 30000);
    }

    // Public methods for external use
    getBlogPosts() {
        return this.cmsData ? this.cmsData.blogPosts.filter(post => post.status === 'published') : [];
    }

    getCaseStudies() {
        return this.cmsData ? this.cmsData.caseStudies.filter(caseStudy => caseStudy.status === 'published') : [];
    }

    getServices() {
        return this.cmsData ? this.cmsData.services.filter(service => service.status === 'active') : [];
    }

    getTestimonials() {
        return this.cmsData ? this.cmsData.testimonials.filter(testimonial => testimonial.status === 'published') : [];
    }

    // Method to refresh content manually
    refreshContent() {
        this.loadCMSData().then(() => {
            this.updateWebsiteContent();
        });
    }
}

// Initialize CMS Integration
let cmsIntegration;
document.addEventListener('DOMContentLoaded', () => {
    cmsIntegration = new CMSIntegration();
});

// Global function for external access
window.refreshCMSContent = () => cmsIntegration.refreshContent();

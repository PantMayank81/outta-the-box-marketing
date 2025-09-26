// CMS JavaScript Functionality
class OuttaTheBoxCMS {
    constructor() {
        this.data = this.loadData();
        this.currentSection = 'dashboard';
        this.autoSaveInterval = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadContent();
        this.startAutoSave();
        this.updateLastSaved();
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('[data-section]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.showSection(link.dataset.section);
            });
        });

        // Save functionality
        document.getElementById('saveAll').addEventListener('click', () => {
            this.saveAll();
        });

        // Add buttons
        document.getElementById('add-blog-post').addEventListener('click', () => {
            this.showBlogPostForm();
        });

        document.getElementById('add-case-study').addEventListener('click', () => {
            this.showCaseStudyForm();
        });

        document.getElementById('add-service').addEventListener('click', () => {
            this.showServiceForm();
        });

        document.getElementById('add-testimonial').addEventListener('click', () => {
            this.showTestimonialForm();
        });

        // Export/Import
        document.getElementById('exportData').addEventListener('click', () => {
            this.exportData();
        });

        document.getElementById('importData').addEventListener('click', () => {
            document.getElementById('import-file').click();
        });

        document.getElementById('import-file').addEventListener('change', (e) => {
            this.importData(e.target.files[0]);
        });

        // Preview modal
        document.getElementById('close-preview').addEventListener('click', () => {
            this.closePreview();
        });

        // Auto-save settings
        document.getElementById('autosave-interval').addEventListener('change', (e) => {
            this.setAutoSaveInterval(parseInt(e.target.value));
        });
    }

    loadData() {
        const defaultData = {
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
            },
            settings: {
                websiteUrl: "https://otbmarketing.in/",
                adminEmail: "pant.mayank@gmail.com",
                autosaveInterval: 5
            }
        };

        const savedData = localStorage.getItem('outtaTheBoxCMS');
        return savedData ? { ...defaultData, ...JSON.parse(savedData) } : defaultData;
    }

    saveData() {
        localStorage.setItem('outtaTheBoxCMS', JSON.stringify(this.data));
        this.updateLastSaved();
    }

    updateLastSaved() {
        const now = new Date();
        document.getElementById('last-saved').textContent = now.toLocaleTimeString();
    }

    showSection(section) {
        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.add('hidden');
        });

        // Show selected section
        document.getElementById(`${section}-section`).classList.remove('hidden');

        // Update navigation
        document.querySelectorAll('[data-section]').forEach(link => {
            link.classList.remove('active-nav', 'bg-white/10');
        });
        document.querySelector(`[data-section="${section}"]`).classList.add('active-nav', 'bg-white/10');

        // Update page title
        const titles = {
            dashboard: 'Dashboard',
            'blog-posts': 'Blog Posts',
            'case-studies': 'Case Studies',
            services: 'Services',
            testimonials: 'Testimonials',
            seo: 'SEO Settings',
            settings: 'Settings'
        };
        document.getElementById('page-title').textContent = titles[section];

        this.currentSection = section;
        this.loadContent();
    }

    loadContent() {
        switch (this.currentSection) {
            case 'dashboard':
                this.loadDashboard();
                break;
            case 'blog-posts':
                this.loadBlogPosts();
                break;
            case 'case-studies':
                this.loadCaseStudies();
                break;
            case 'services':
                this.loadServices();
                break;
            case 'testimonials':
                this.loadTestimonials();
                break;
            case 'seo':
                this.loadSEOSettings();
                break;
            case 'settings':
                this.loadSettings();
                break;
        }
    }

    loadDashboard() {
        // Update statistics
        document.getElementById('total-blogs').textContent = this.data.blogPosts.length;
        document.getElementById('total-cases').textContent = this.data.caseStudies.length;
        
        // Update recent activity
        const recentActivity = document.getElementById('recent-activity');
        recentActivity.innerHTML = this.data.blogPosts
            .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
            .slice(0, 3)
            .map(post => `
                <div class="flex items-center space-x-3">
                    <span class="status-indicator status-${post.status}"></span>
                    <span class="text-sm text-gray-600">${post.status === 'published' ? 'Published' : 'Updated'} "${post.title}"</span>
                    <span class="text-xs text-gray-400 ml-auto">${this.getTimeAgo(post.publishedAt)}</span>
                </div>
            `).join('');
    }

    loadBlogPosts() {
        const tableBody = document.getElementById('blog-posts-table');
        tableBody.innerHTML = this.data.blogPosts.map(post => `
            <tr class="border-b border-gray-100 hover:bg-gray-50">
                <td class="py-4 px-4">
                    <div class="font-medium text-gray-900">${post.title}</div>
                    <div class="text-sm text-gray-500">${post.slug}</div>
                </td>
                <td class="py-4 px-4">
                    <span class="status-indicator status-${post.status}"></span>
                    <span class="text-sm capitalize">${post.status}</span>
                </td>
                <td class="py-4 px-4 text-sm text-gray-600">${new Date(post.publishedAt).toLocaleDateString()}</td>
                <td class="py-4 px-4 text-sm text-gray-600">${post.views.toLocaleString()}</td>
                <td class="py-4 px-4">
                    <div class="flex space-x-2">
                        <button class="text-blue-600 hover:text-blue-800 text-sm" onclick="cms.editBlogPost(${post.id})">Edit</button>
                        <button class="text-green-600 hover:text-green-800 text-sm" onclick="cms.previewContent('blog', ${post.id})">Preview</button>
                        <button class="text-red-600 hover:text-red-800 text-sm" onclick="cms.deleteBlogPost(${post.id})">Delete</button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    loadCaseStudies() {
        const grid = document.getElementById('case-studies-grid');
        grid.innerHTML = this.data.caseStudies.map(caseStudy => `
            <div class="content-card p-6">
                <div class="flex items-center space-x-4 mb-4">
                    <img src="../assets/images/${caseStudy.image}" alt="${caseStudy.title}" class="w-16 h-16 rounded-lg object-cover">
                    <div>
                        <h4 class="font-semibold text-gray-900">${caseStudy.title}</h4>
                        <p class="text-sm text-gray-600">${caseStudy.category}</p>
                    </div>
                </div>
                <p class="text-sm text-gray-600 mb-4">${caseStudy.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-lg font-bold text-teal">${caseStudy.result}</span>
                    <div class="flex space-x-2">
                        <button class="text-blue-600 hover:text-blue-800 text-sm" onclick="cms.editCaseStudy(${caseStudy.id})">Edit</button>
                        <button class="text-green-600 hover:text-green-800 text-sm" onclick="cms.previewContent('case', ${caseStudy.id})">Preview</button>
                        <button class="text-red-600 hover:text-red-800 text-sm" onclick="cms.deleteCaseStudy(${caseStudy.id})">Delete</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    loadServices() {
        const grid = document.getElementById('services-grid');
        grid.innerHTML = this.data.services.map(service => `
            <div class="content-card p-6">
                <div class="flex items-center space-x-4 mb-4">
                    <img src="../assets/images/${service.image}" alt="${service.name}" class="w-16 h-16 rounded-lg object-cover">
                    <div>
                        <h4 class="font-semibold text-gray-900">${service.name}</h4>
                        <p class="text-sm text-gray-600">${service.pricing}</p>
                    </div>
                </div>
                <p class="text-sm text-gray-600 mb-4">${service.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-500">${service.features.length} features</span>
                    <div class="flex space-x-2">
                        <button class="text-blue-600 hover:text-blue-800 text-sm" onclick="cms.editService(${service.id})">Edit</button>
                        <button class="text-red-600 hover:text-red-800 text-sm" onclick="cms.deleteService(${service.id})">Delete</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    loadTestimonials() {
        const grid = document.getElementById('testimonials-grid');
        grid.innerHTML = this.data.testimonials.map(testimonial => `
            <div class="content-card p-6">
                <div class="flex items-center space-x-4 mb-4">
                    <img src="../assets/images/${testimonial.image}" alt="${testimonial.name}" class="w-16 h-16 rounded-lg object-cover">
                    <div>
                        <h4 class="font-semibold text-gray-900">${testimonial.name}</h4>
                        <p class="text-sm text-gray-600">${testimonial.company}</p>
                    </div>
                </div>
                <p class="text-sm text-gray-600 mb-4 italic">"${testimonial.quote}"</p>
                <div class="flex justify-between items-center">
                    <span class="text-lg font-bold text-teal">${testimonial.result}</span>
                    <div class="flex space-x-2">
                        <button class="text-blue-600 hover:text-blue-800 text-sm" onclick="cms.editTestimonial(${testimonial.id})">Edit</button>
                        <button class="text-red-600 hover:text-red-800 text-sm" onclick="cms.deleteTestimonial(${testimonial.id})">Delete</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    loadSEOSettings() {
        document.getElementById('site-title').value = this.data.seoSettings.siteTitle;
        document.getElementById('site-description').value = this.data.seoSettings.siteDescription;
        document.getElementById('site-keywords').value = this.data.seoSettings.siteKeywords;
        document.getElementById('ga-id').value = this.data.seoSettings.gaId;
        document.getElementById('gsc-verification').value = this.data.seoSettings.gscVerification;
        document.getElementById('fb-pixel').value = this.data.seoSettings.fbPixel;
    }

    loadSettings() {
        document.getElementById('website-url').value = this.data.settings.websiteUrl;
        document.getElementById('admin-email').value = this.data.settings.adminEmail;
        document.getElementById('autosave-interval').value = this.data.settings.autosaveInterval;
    }

    // Form methods
    showBlogPostForm(postId = null) {
        const post = postId ? this.data.blogPosts.find(p => p.id === postId) : null;
        const formHtml = `
            <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div class="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-xl font-bold">${postId ? 'Edit' : 'Add'} Blog Post</h3>
                        <button onclick="cms.closeForm()" class="text-gray-500 hover:text-gray-700">✕</button>
                    </div>
                    <form id="blog-post-form">
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
                                <input type="text" class="form-input" id="blog-title" value="${post ? post.title : ''}" required>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Slug</label>
                                <input type="text" class="form-input" id="blog-slug" value="${post ? post.slug : ''}" required>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Status</label>
                                <select class="form-input" id="blog-status">
                                    <option value="draft" ${post && post.status === 'draft' ? 'selected' : ''}>Draft</option>
                                    <option value="published" ${post && post.status === 'published' ? 'selected' : ''}>Published</option>
                                    <option value="scheduled" ${post && post.status === 'scheduled' ? 'selected' : ''}>Scheduled</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Content</label>
                                <textarea class="form-textarea" id="blog-content" rows="10">${post ? post.content : ''}</textarea>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
                                <textarea class="form-textarea" id="blog-meta" rows="3">${post ? post.metaDescription : ''}</textarea>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Keywords</label>
                                <input type="text" class="form-input" id="blog-keywords" value="${post ? post.keywords : ''}">
                            </div>
                        </div>
                        <div class="flex justify-end space-x-4 mt-6">
                            <button type="button" class="btn-secondary" onclick="cms.closeForm()">Cancel</button>
                            <button type="submit" class="btn-primary">${postId ? 'Update' : 'Create'} Post</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', formHtml);
        
        document.getElementById('blog-post-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveBlogPost(postId);
        });
    }

    saveBlogPost(postId) {
        const formData = {
            title: document.getElementById('blog-title').value,
            slug: document.getElementById('blog-slug').value,
            status: document.getElementById('blog-status').value,
            content: document.getElementById('blog-content').value,
            metaDescription: document.getElementById('blog-meta').value,
            keywords: document.getElementById('blog-keywords').value,
            publishedAt: postId ? this.data.blogPosts.find(p => p.id === postId).publishedAt : new Date().toISOString().split('T')[0],
            views: postId ? this.data.blogPosts.find(p => p.id === postId).views : 0
        };

        if (postId) {
            const index = this.data.blogPosts.findIndex(p => p.id === postId);
            this.data.blogPosts[index] = { ...this.data.blogPosts[index], ...formData };
        } else {
            formData.id = Math.max(...this.data.blogPosts.map(p => p.id)) + 1;
            this.data.blogPosts.push(formData);
        }

        this.saveData();
        this.closeForm();
        this.loadContent();
    }

    // Utility methods
    getTimeAgo(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
        
        if (diffInHours < 1) return 'Just now';
        if (diffInHours < 24) return `${diffInHours} hours ago`;
        if (diffInHours < 48) return 'Yesterday';
        return `${Math.floor(diffInHours / 24)} days ago`;
    }

    closeForm() {
        const form = document.querySelector('.fixed.inset-0');
        if (form) form.remove();
    }

    closePreview() {
        document.getElementById('preview-modal').style.display = 'none';
    }

    previewContent(type, id) {
        // Implementation for content preview
        document.getElementById('preview-modal').style.display = 'flex';
        document.getElementById('preview-content').innerHTML = '<p>Preview functionality coming soon...</p>';
    }

    startAutoSave() {
        const interval = this.data.settings.autosaveInterval * 60 * 1000; // Convert minutes to milliseconds
        this.autoSaveInterval = setInterval(() => {
            this.saveData();
        }, interval);
    }

    setAutoSaveInterval(minutes) {
        if (this.autoSaveInterval) {
            clearInterval(this.autoSaveInterval);
        }
        this.data.settings.autosaveInterval = minutes;
        this.startAutoSave();
        this.saveData();
    }

    saveAll() {
        // Save all form data
        if (this.currentSection === 'seo') {
            this.data.seoSettings = {
                siteTitle: document.getElementById('site-title').value,
                siteDescription: document.getElementById('site-description').value,
                siteKeywords: document.getElementById('site-keywords').value,
                gaId: document.getElementById('ga-id').value,
                gscVerification: document.getElementById('gsc-verification').value,
                fbPixel: document.getElementById('fb-pixel').value
            };
        }
        
        if (this.currentSection === 'settings') {
            this.data.settings = {
                websiteUrl: document.getElementById('website-url').value,
                adminEmail: document.getElementById('admin-email').value,
                autosaveInterval: parseInt(document.getElementById('autosave-interval').value)
            };
        }

        this.saveData();
        alert('All changes saved successfully!');
    }

    exportData() {
        const dataStr = JSON.stringify(this.data, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'outta-the-box-cms-data.json';
        link.click();
        URL.revokeObjectURL(url);
    }

    importData(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);
                this.data = { ...this.data, ...importedData };
                this.saveData();
                this.loadContent();
                alert('Data imported successfully!');
            } catch (error) {
                alert('Error importing data. Please check the file format.');
            }
        };
        reader.readAsText(file);
    }

    // CRUD operations for different content types
    editBlogPost(id) { this.showBlogPostForm(id); }
    deleteBlogPost(id) { 
        if (confirm('Are you sure you want to delete this blog post?')) {
            this.data.blogPosts = this.data.blogPosts.filter(p => p.id !== id);
            this.saveData();
            this.loadContent();
        }
    }

    editCaseStudy(id) { /* Implementation */ }
    deleteCaseStudy(id) { 
        if (confirm('Are you sure you want to delete this case study?')) {
            this.data.caseStudies = this.data.caseStudies.filter(c => c.id !== id);
            this.saveData();
            this.loadContent();
        }
    }

    editService(id) { /* Implementation */ }
    deleteService(id) { 
        if (confirm('Are you sure you want to delete this service?')) {
            this.data.services = this.data.services.filter(s => s.id !== id);
            this.saveData();
            this.loadContent();
        }
    }

    editTestimonial(id) { /* Implementation */ }
    deleteTestimonial(id) { 
        if (confirm('Are you sure you want to delete this testimonial?')) {
            this.data.testimonials = this.data.testimonials.filter(t => t.id !== id);
            this.saveData();
            this.loadContent();
        }
    }
}

// Initialize CMS when page loads
let cms;
document.addEventListener('DOMContentLoaded', () => {
    cms = new OuttaTheBoxCMS();
});

// Global functions for inline event handlers
window.showSection = (section) => cms.showSection(section);

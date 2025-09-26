// Comprehensive SEO Analytics and Tracking System for Outta The Box Marketing
class SEOAnalyticsSystem {
    constructor() {
        this.gaId = 'GA_MEASUREMENT_ID'; // Replace with actual GA4 ID
        this.fbPixelId = 'FB_PIXEL_ID'; // Replace with actual Facebook Pixel ID
        this.conversionGoals = this.initializeConversionGoals();
        this.keywordTargets = this.initializeKeywordTargets();
        this.performanceMetrics = this.initializePerformanceMetrics();
        
        this.init();
    }
    
    init() {
        this.loadGoogleAnalytics();
        this.loadFacebookPixel();
        this.setupEventTracking();
        this.setupConversionTracking();
        this.setupPerformanceMonitoring();
    }
    
    // Google Analytics 4 Setup
    loadGoogleAnalytics() {
        // Load GA4 script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${this.gaId}`;
        document.head.appendChild(script);
        
        // Initialize GA4
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        
        gtag('config', this.gaId, {
            // Enhanced e-commerce for service bookings
            custom_map: {
                'custom_parameter_1': 'service_type',
                'custom_parameter_2': 'consultation_type',
                'custom_parameter_3': 'lead_source',
                'custom_parameter_4': 'industry_type'
            },
            // Enhanced measurement
            send_page_view: true,
            allow_google_signals: true,
            allow_ad_personalization_signals: true
        });
        
        window.gtag = gtag;
    }
    
    // Facebook Pixel Setup
    loadFacebookPixel() {
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        
        fbq('init', this.fbPixelId);
        fbq('track', 'PageView');
    }
    
    // Conversion Goals Setup
    initializeConversionGoals() {
        return {
            consultation_bookings: {
                target: 50,
                current: 0,
                value: 5000, // ₹5000 per booking
                events: ['consultation_booking', 'strategy_call_booking']
            },
            lead_magnet_downloads: {
                target: 200,
                current: 0,
                value: 100, // ₹100 per lead
                events: ['lead_magnet_download', 'guide_download']
            },
            blog_engagement: {
                target: 0.65, // 65% engagement rate
                current: 0,
                value: 50, // ₹50 per engagement
                events: ['blog_read', 'content_engagement']
            },
            organic_traffic_growth: {
                target: 1.5, // 150% growth
                current: 0,
                value: 1000, // ₹1000 per visitor
                events: ['organic_visit', 'search_visit']
            }
        };
    }
    
    // Keyword Targets Setup
    initializeKeywordTargets() {
        return [
            { 
                keyword: "AI marketing consultant India", 
                target_position: 3, 
                current_position: null,
                monthly_searches: 1900,
                difficulty: 65
            },
            { 
                keyword: "digital marketing strategist", 
                target_position: 5, 
                current_position: null,
                monthly_searches: 1200,
                difficulty: 55
            },
            { 
                keyword: "marketing automation services", 
                target_position: 3, 
                current_position: null,
                monthly_searches: 2100,
                difficulty: 60
            },
            { 
                keyword: "performance marketing audit", 
                target_position: 5, 
                current_position: null,
                monthly_searches: 1100,
                difficulty: 50
            },
            { 
                keyword: "AI marketing agency pricing", 
                target_position: 5, 
                current_position: null,
                monthly_searches: 760,
                difficulty: 45
            }
        ];
    }
    
    // Performance Metrics Setup
    initializePerformanceMetrics() {
        return {
            core_web_vitals: {
                lcp: { target: 2.5, current: null }, // Largest Contentful Paint
                fid: { target: 100, current: null }, // First Input Delay
                cls: { target: 0.1, current: null }  // Cumulative Layout Shift
            },
            seo_metrics: {
                organic_traffic: { target: 2500, current: 0 },
                keyword_rankings: { target: 25, current: 0 },
                domain_authority: { target: 40, current: 0 },
                backlinks: { target: 100, current: 0 }
            },
            conversion_metrics: {
                conversion_rate: { target: 0.08, current: 0 },
                lead_quality_score: { target: 0.75, current: 0 },
                cost_per_lead: { target: 500, current: 0 },
                lifetime_value: { target: 50000, current: 0 }
            }
        };
    }
    
    // Event Tracking Setup
    setupEventTracking() {
        // Track consultation bookings
        this.trackConsultationBookings();
        
        // Track content engagement
        this.trackContentEngagement();
        
        // Track lead magnet downloads
        this.trackLeadMagnetDownloads();
        
        // Track form submissions
        this.trackFormSubmissions();
        
        // Track scroll depth
        this.trackScrollDepth();
        
        // Track time on page
        this.trackTimeOnPage();
    }
    
    // Consultation Booking Tracking
    trackConsultationBookings() {
        const bookingButtons = document.querySelectorAll('[data-tracking="consultation-booking"]');
        bookingButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const serviceType = e.target.getAttribute('data-service-type') || 'general';
                const consultationType = e.target.getAttribute('data-consultation-type') || 'strategy-call';
                
                this.trackEvent('consultation_booking', {
                    service_type: serviceType,
                    consultation_type: consultationType,
                    value: this.conversionGoals.consultation_bookings.value,
                    currency: 'INR'
                });
                
                this.updateConversionGoal('consultation_bookings', 1);
            });
        });
    }
    
    // Content Engagement Tracking
    trackContentEngagement() {
        const contentElements = document.querySelectorAll('article, .blog-post, .case-study');
        contentElements.forEach(element => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const contentType = entry.target.tagName === 'ARTICLE' ? 'blog_post' : 'case_study';
                        const contentTitle = entry.target.querySelector('h1, h2, h3')?.textContent || 'Unknown';
                        
                        this.trackEvent('content_engagement', {
                            content_type: contentType,
                            content_title: contentTitle,
                            engagement_time_msec: Date.now()
                        });
                        
                        this.updateConversionGoal('blog_engagement', 1);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(element);
        });
    }
    
    // Lead Magnet Download Tracking
    trackLeadMagnetDownloads() {
        const downloadLinks = document.querySelectorAll('[data-tracking="lead-magnet-download"]');
        downloadLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const magnetType = e.target.getAttribute('data-magnet-type') || 'guide';
                const magnetName = e.target.getAttribute('data-magnet-name') || 'Unknown';
                
                this.trackEvent('lead_magnet_download', {
                    magnet_type: magnetType,
                    magnet_name: magnetName,
                    value: this.conversionGoals.lead_magnet_downloads.value,
                    currency: 'INR'
                });
                
                this.updateConversionGoal('lead_magnet_downloads', 1);
            });
        });
    }
    
    // Form Submission Tracking
    trackFormSubmissions() {
        const forms = document.querySelectorAll('form[data-tracking="form-submission"]');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                const formType = e.target.getAttribute('data-form-type') || 'contact';
                const formLocation = e.target.getAttribute('data-form-location') || 'unknown';
                
                this.trackEvent('form_submission', {
                    form_type: formType,
                    form_location: formLocation,
                    value: 100,
                    currency: 'INR'
                });
            });
        });
    }
    
    // Scroll Depth Tracking
    trackScrollDepth() {
        let maxScroll = 0;
        const scrollThresholds = [25, 50, 75, 90, 100];
        const trackedThresholds = new Set();
        
        window.addEventListener('scroll', () => {
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                
                scrollThresholds.forEach(threshold => {
                    if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
                        trackedThresholds.add(threshold);
                        this.trackEvent('scroll_depth', {
                            scroll_percentage: threshold,
                            page_url: window.location.pathname
                        });
                    }
                });
            }
        });
    }
    
    // Time on Page Tracking
    trackTimeOnPage() {
        const startTime = Date.now();
        
        window.addEventListener('beforeunload', () => {
            const timeOnPage = Math.round((Date.now() - startTime) / 1000);
            
            this.trackEvent('time_on_page', {
                time_seconds: timeOnPage,
                page_url: window.location.pathname
            });
        });
    }
    
    // Conversion Tracking Setup
    setupConversionTracking() {
        // Track page views
        this.trackEvent('page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname
        });
        
        // Track search queries (if available)
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('q');
        if (searchQuery) {
            this.trackEvent('search', {
                search_term: searchQuery,
                page_location: window.location.href
            });
        }
    }
    
    // Performance Monitoring Setup
    setupPerformanceMonitoring() {
        // Monitor Core Web Vitals
        this.monitorCoreWebVitals();
        
        // Monitor page load performance
        this.monitorPageLoadPerformance();
        
        // Monitor user interactions
        this.monitorUserInteractions();
    }
    
    // Core Web Vitals Monitoring
    monitorCoreWebVitals() {
        // Largest Contentful Paint (LCP)
        new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            this.performanceMetrics.core_web_vitals.lcp.current = lastEntry.startTime;
            
            this.trackEvent('core_web_vital', {
                metric_name: 'lcp',
                metric_value: lastEntry.startTime,
                rating: lastEntry.startTime <= 2500 ? 'good' : lastEntry.startTime <= 4000 ? 'needs_improvement' : 'poor'
            });
        }).observe({ entryTypes: ['largest-contentful-paint'] });
        
        // First Input Delay (FID)
        new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach(entry => {
                this.performanceMetrics.core_web_vitals.fid.current = entry.processingStart - entry.startTime;
                
                this.trackEvent('core_web_vital', {
                    metric_name: 'fid',
                    metric_value: entry.processingStart - entry.startTime,
                    rating: entry.processingStart - entry.startTime <= 100 ? 'good' : entry.processingStart - entry.startTime <= 300 ? 'needs_improvement' : 'poor'
                });
            });
        }).observe({ entryTypes: ['first-input'] });
        
        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach(entry => {
                if (!entry.hadRecentInput) {
                    clsValue += entry.value;
                }
            });
            
            this.performanceMetrics.core_web_vitals.cls.current = clsValue;
            
            this.trackEvent('core_web_vital', {
                metric_name: 'cls',
                metric_value: clsValue,
                rating: clsValue <= 0.1 ? 'good' : clsValue <= 0.25 ? 'needs_improvement' : 'poor'
            });
        }).observe({ entryTypes: ['layout-shift'] });
    }
    
    // Page Load Performance Monitoring
    monitorPageLoadPerformance() {
        window.addEventListener('load', () => {
            const navigation = performance.getEntriesByType('navigation')[0];
            
            this.trackEvent('page_load_performance', {
                dom_content_loaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
                load_complete: navigation.loadEventEnd - navigation.loadEventStart,
                total_load_time: navigation.loadEventEnd - navigation.fetchStart,
                page_url: window.location.pathname
            });
        });
    }
    
    // User Interactions Monitoring
    monitorUserInteractions() {
        // Track clicks on important elements
        document.addEventListener('click', (e) => {
            const element = e.target;
            const trackingData = element.getAttribute('data-tracking');
            
            if (trackingData) {
                this.trackEvent('element_click', {
                    element_type: element.tagName.toLowerCase(),
                    tracking_data: trackingData,
                    element_text: element.textContent?.substring(0, 100) || '',
                    page_url: window.location.pathname
                });
            }
        });
        
        // Track form field interactions
        const formFields = document.querySelectorAll('input, textarea, select');
        formFields.forEach(field => {
            field.addEventListener('focus', () => {
                this.trackEvent('form_field_focus', {
                    field_type: field.type || field.tagName.toLowerCase(),
                    field_name: field.name || 'unknown',
                    form_id: field.form?.id || 'unknown'
                });
            });
        });
    }
    
    // Event Tracking Method
    trackEvent(eventName, parameters = {}) {
        // Google Analytics 4
        if (window.gtag) {
            gtag('event', eventName, parameters);
        }
        
        // Facebook Pixel
        if (window.fbq) {
            fbq('track', eventName, parameters);
        }
        
        // Console logging for debugging
        console.log('Event tracked:', eventName, parameters);
    }
    
    // Update Conversion Goals
    updateConversionGoal(goalName, increment = 1) {
        if (this.conversionGoals[goalName]) {
            this.conversionGoals[goalName].current += increment;
            
            // Check if goal is achieved
            if (this.conversionGoals[goalName].current >= this.conversionGoals[goalName].target) {
                this.trackEvent('conversion_goal_achieved', {
                    goal_name: goalName,
                    current_value: this.conversionGoals[goalName].current,
                    target_value: this.conversionGoals[goalName].target
                });
            }
        }
    }
    
    // Generate Performance Report
    generatePerformanceReport() {
        const report = {
            timestamp: new Date().toISOString(),
            conversion_goals: this.conversionGoals,
            keyword_targets: this.keywordTargets,
            performance_metrics: this.performanceMetrics,
            recommendations: this.generateRecommendations()
        };
        
        console.log('SEO Performance Report:', report);
        return report;
    }
    
    // Generate Recommendations
    generateRecommendations() {
        const recommendations = [];
        
        // Check conversion goals
        Object.entries(this.conversionGoals).forEach(([goalName, goal]) => {
            const achievementRate = (goal.current / goal.target) * 100;
            
            if (achievementRate < 50) {
                recommendations.push({
                    type: 'conversion_optimization',
                    priority: 'high',
                    message: `${goalName} is only ${achievementRate.toFixed(1)}% of target. Consider optimizing conversion funnel.`
                });
            }
        });
        
        // Check Core Web Vitals
        Object.entries(this.performanceMetrics.core_web_vitals).forEach(([metric, data]) => {
            if (data.current && data.current > data.target) {
                recommendations.push({
                    type: 'performance_optimization',
                    priority: 'high',
                    message: `${metric.toUpperCase()} is ${data.current}ms, above target of ${data.target}ms. Consider optimizing.`
                });
            }
        });
        
        return recommendations;
    }
}

// Initialize SEO Analytics System when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.seoAnalytics = new SEOAnalyticsSystem();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SEOAnalyticsSystem;
}




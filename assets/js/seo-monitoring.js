// SEO Performance Monitoring Dashboard
class SEOMonitoringDashboard {
    constructor() {
        this.keywordTargets = this.initializeKeywordTargets();
        this.performanceMetrics = this.initializePerformanceMetrics();
        this.conversionGoals = this.initializeConversionGoals();
        this.monitoringInterval = null;
        
        this.init();
    }
    
    init() {
        this.setupMonitoring();
        this.startPerformanceTracking();
        this.setupReporting();
    }
    
    // Initialize Keyword Targets
    initializeKeywordTargets() {
        return [
            { 
                keyword: "AI marketing consultant India", 
                target_position: 3, 
                current_position: null,
                monthly_searches: 1900,
                difficulty: 65,
                cpc: 45.50,
                competition: "high"
            },
            { 
                keyword: "digital marketing strategist", 
                target_position: 5, 
                current_position: null,
                monthly_searches: 1200,
                difficulty: 55,
                cpc: 38.75,
                competition: "medium"
            },
            { 
                keyword: "marketing automation services", 
                target_position: 3, 
                current_position: null,
                monthly_searches: 2100,
                difficulty: 60,
                cpc: 42.25,
                competition: "high"
            },
            { 
                keyword: "performance marketing audit", 
                target_position: 5, 
                current_position: null,
                monthly_searches: 1100,
                difficulty: 50,
                cpc: 35.80,
                competition: "medium"
            },
            { 
                keyword: "AI marketing agency pricing", 
                target_position: 5, 
                current_position: null,
                monthly_searches: 760,
                difficulty: 45,
                cpc: 28.90,
                competition: "low"
            }
        ];
    }
    
    // Initialize Performance Metrics
    initializePerformanceMetrics() {
        return {
            core_web_vitals: {
                lcp: { target: 2.5, current: null, status: 'unknown' },
                fid: { target: 100, current: null, status: 'unknown' },
                cls: { target: 0.1, current: null, status: 'unknown' }
            },
            seo_metrics: {
                organic_traffic: { target: 2500, current: 0, growth_rate: 0 },
                keyword_rankings: { target: 25, current: 0, improvement_rate: 0 },
                domain_authority: { target: 40, current: 0, growth_rate: 0 },
                backlinks: { target: 100, current: 0, growth_rate: 0 },
                featured_snippets: { target: 15, current: 0, growth_rate: 0 }
            },
            conversion_metrics: {
                conversion_rate: { target: 0.08, current: 0, improvement_rate: 0 },
                lead_quality_score: { target: 0.75, current: 0, improvement_rate: 0 },
                cost_per_lead: { target: 500, current: 0, improvement_rate: 0 },
                lifetime_value: { target: 50000, current: 0, improvement_rate: 0 }
            }
        };
    }
    
    // Initialize Conversion Goals
    initializeConversionGoals() {
        return {
            consultation_bookings: {
                target: 50,
                current: 0,
                value: 5000,
                achievement_rate: 0
            },
            lead_magnet_downloads: {
                target: 200,
                current: 0,
                value: 100,
                achievement_rate: 0
            },
            blog_engagement: {
                target: 0.65,
                current: 0,
                value: 50,
                achievement_rate: 0
            },
            organic_traffic_growth: {
                target: 1.5,
                current: 0,
                value: 1000,
                achievement_rate: 0
            }
        };
    }
    
    // Setup Monitoring
    setupMonitoring() {
        this.monitorKeywordPositions();
        this.monitorCoreWebVitals();
        this.monitorConversionMetrics();
        this.monitorTechnicalSEO();
    }
    
    // Monitor Keyword Positions
    async monitorKeywordPositions() {
        // In a real implementation, this would integrate with rank tracking APIs
        // For now, we'll simulate the monitoring
        this.keywordTargets.forEach(async (keyword) => {
            try {
                const position = await this.getRankingPosition(keyword.keyword);
                keyword.current_position = position;
                
                // Update status based on position
                if (position <= keyword.target_position) {
                    keyword.status = 'achieved';
                    this.logSuccess(`Target achieved for "${keyword.keyword}" - Position ${position}`);
                } else if (position <= keyword.target_position + 3) {
                    keyword.status = 'close';
                    this.logWarning(`Close to target for "${keyword.keyword}" - Position ${position}`);
                } else {
                    keyword.status = 'needs_work';
                    this.scheduleOptimization(keyword);
                }
                
                this.updateKeywordMetrics();
            } catch (error) {
                console.error(`Error monitoring keyword "${keyword.keyword}":`, error);
            }
        });
    }
    
    // Get Ranking Position (Simulated)
    async getRankingPosition(keyword) {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Simulate position data (in real implementation, this would come from API)
        const basePosition = Math.floor(Math.random() * 20) + 1;
        return basePosition;
    }
    
    // Monitor Core Web Vitals
    monitorCoreWebVitals() {
        // LCP Monitoring
        new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            const lcp = lastEntry.startTime;
            
            this.performanceMetrics.core_web_vitals.lcp.current = lcp;
            this.performanceMetrics.core_web_vitals.lcp.status = this.getVitalStatus(lcp, 2.5, 4.0);
            
            this.trackEvent('core_web_vital', {
                metric_name: 'lcp',
                metric_value: lcp,
                status: this.performanceMetrics.core_web_vitals.lcp.status
            });
        }).observe({ entryTypes: ['largest-contentful-paint'] });
        
        // FID Monitoring
        new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach(entry => {
                const fid = entry.processingStart - entry.startTime;
                
                this.performanceMetrics.core_web_vitals.fid.current = fid;
                this.performanceMetrics.core_web_vitals.fid.status = this.getVitalStatus(fid, 100, 300);
                
                this.trackEvent('core_web_vital', {
                    metric_name: 'fid',
                    metric_value: fid,
                    status: this.performanceMetrics.core_web_vitals.fid.status
                });
            });
        }).observe({ entryTypes: ['first-input'] });
        
        // CLS Monitoring
        let clsValue = 0;
        new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach(entry => {
                if (!entry.hadRecentInput) {
                    clsValue += entry.value;
                }
            });
            
            this.performanceMetrics.core_web_vitals.cls.current = clsValue;
            this.performanceMetrics.core_web_vitals.cls.status = this.getVitalStatus(clsValue, 0.1, 0.25);
            
            this.trackEvent('core_web_vital', {
                metric_name: 'cls',
                metric_value: clsValue,
                status: this.performanceMetrics.core_web_vitals.cls.status
            });
        }).observe({ entryTypes: ['layout-shift'] });
    }
    
    // Monitor Conversion Metrics
    monitorConversionMetrics() {
        // Track consultation bookings
        this.trackConversionGoal('consultation_bookings');
        
        // Track lead magnet downloads
        this.trackConversionGoal('lead_magnet_downloads');
        
        // Track blog engagement
        this.trackConversionGoal('blog_engagement');
        
        // Track organic traffic growth
        this.trackConversionGoal('organic_traffic_growth');
    }
    
    // Track Conversion Goal
    trackConversionGoal(goalName) {
        const goal = this.conversionGoals[goalName];
        if (goal) {
            // Calculate achievement rate
            goal.achievement_rate = (goal.current / goal.target) * 100;
            
            // Track goal progress
            this.trackEvent('conversion_goal_progress', {
                goal_name: goalName,
                current_value: goal.current,
                target_value: goal.target,
                achievement_rate: goal.achievement_rate
            });
        }
    }
    
    // Monitor Technical SEO
    monitorTechnicalSEO() {
        this.checkPageSpeed();
        this.checkMobileFriendliness();
        this.checkSSLStatus();
        this.checkStructuredData();
        this.checkInternalLinking();
    }
    
    // Check Page Speed
    async checkPageSpeed() {
        try {
            const navigation = performance.getEntriesByType('navigation')[0];
            const loadTime = navigation.loadEventEnd - navigation.fetchStart;
            
            this.trackEvent('page_speed_check', {
                load_time: loadTime,
                status: loadTime < 3000 ? 'good' : loadTime < 5000 ? 'needs_improvement' : 'poor'
            });
        } catch (error) {
            console.error('Error checking page speed:', error);
        }
    }
    
    // Check Mobile Friendliness
    checkMobileFriendliness() {
        const viewport = document.querySelector('meta[name="viewport"]');
        const isMobileFriendly = viewport && viewport.content.includes('width=device-width');
        
        this.trackEvent('mobile_friendliness_check', {
            is_mobile_friendly: isMobileFriendly,
            viewport_meta: viewport ? viewport.content : 'missing'
        });
    }
    
    // Check SSL Status
    checkSSLStatus() {
        const isSecure = window.location.protocol === 'https:';
        
        this.trackEvent('ssl_status_check', {
            is_secure: isSecure,
            protocol: window.location.protocol
        });
    }
    
    // Check Structured Data
    checkStructuredData() {
        const structuredData = document.querySelectorAll('script[type="application/ld+json"]');
        const hasStructuredData = structuredData.length > 0;
        
        this.trackEvent('structured_data_check', {
            has_structured_data: hasStructuredData,
            count: structuredData.length
        });
    }
    
    // Check Internal Linking
    checkInternalLinking() {
        const internalLinks = document.querySelectorAll('a[href^="/"], a[href*="otbmarketing.in"]');
        const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="otbmarketing.in"])');
        
        const internalLinkRatio = internalLinks.length / (internalLinks.length + externalLinks.length);
        
        this.trackEvent('internal_linking_check', {
            internal_links: internalLinks.length,
            external_links: externalLinks.length,
            internal_link_ratio: internalLinkRatio
        });
    }
    
    // Start Performance Tracking
    startPerformanceTracking() {
        this.monitoringInterval = setInterval(() => {
            this.updateAllMetrics();
            this.generatePerformanceReport();
        }, 300000); // Every 5 minutes
    }
    
    // Update All Metrics
    updateAllMetrics() {
        this.updateKeywordMetrics();
        this.updateSEOMetrics();
        this.updateConversionMetrics();
    }
    
    // Update Keyword Metrics
    updateKeywordMetrics() {
        const totalKeywords = this.keywordTargets.length;
        const achievedKeywords = this.keywordTargets.filter(k => k.status === 'achieved').length;
        const closeKeywords = this.keywordTargets.filter(k => k.status === 'close').length;
        
        this.performanceMetrics.seo_metrics.keyword_rankings.current = achievedKeywords;
        this.performanceMetrics.seo_metrics.keyword_rankings.improvement_rate = 
            (achievedKeywords / totalKeywords) * 100;
    }
    
    // Update SEO Metrics
    updateSEOMetrics() {
        // Simulate organic traffic growth
        const currentTraffic = this.performanceMetrics.seo_metrics.organic_traffic.current;
        const growthRate = 0.15; // 15% monthly growth
        this.performanceMetrics.seo_metrics.organic_traffic.current = 
            Math.round(currentTraffic * (1 + growthRate));
        this.performanceMetrics.seo_metrics.organic_traffic.growth_rate = growthRate;
        
        // Simulate domain authority growth
        const currentDA = this.performanceMetrics.seo_metrics.domain_authority.current;
        const daGrowthRate = 0.05; // 5% monthly growth
        this.performanceMetrics.seo_metrics.domain_authority.current = 
            Math.round(currentDA * (1 + daGrowthRate));
        this.performanceMetrics.seo_metrics.domain_authority.growth_rate = daGrowthRate;
    }
    
    // Update Conversion Metrics
    updateConversionMetrics() {
        // Calculate overall conversion rate
        const totalConversions = Object.values(this.conversionGoals).reduce((sum, goal) => sum + goal.current, 0);
        const totalVisitors = this.performanceMetrics.seo_metrics.organic_traffic.current;
        
        if (totalVisitors > 0) {
            this.performanceMetrics.conversion_metrics.conversion_rate.current = totalConversions / totalVisitors;
        }
    }
    
    // Get Vital Status
    getVitalStatus(value, goodThreshold, poorThreshold) {
        if (value <= goodThreshold) return 'good';
        if (value <= poorThreshold) return 'needs_improvement';
        return 'poor';
    }
    
    // Schedule Optimization
    scheduleOptimization(keyword) {
        console.log(`Scheduling optimization for keyword: ${keyword.keyword}`);
        
        // In a real implementation, this would trigger optimization workflows
        this.trackEvent('optimization_scheduled', {
            keyword: keyword.keyword,
            current_position: keyword.current_position,
            target_position: keyword.target_position
        });
    }
    
    // Log Success
    logSuccess(message) {
        console.log(`✅ SUCCESS: ${message}`);
        this.trackEvent('success_achieved', { message });
    }
    
    // Log Warning
    logWarning(message) {
        console.warn(`⚠️ WARNING: ${message}`);
        this.trackEvent('warning_triggered', { message });
    }
    
    // Track Event
    trackEvent(eventName, parameters = {}) {
        if (window.gtag) {
            gtag('event', eventName, parameters);
        }
        
        console.log('Event tracked:', eventName, parameters);
    }
    
    // Setup Reporting
    setupReporting() {
        this.setupWeeklyReports();
        this.setupMonthlyReports();
        this.setupRealTimeDashboard();
    }
    
    // Setup Weekly Reports
    setupWeeklyReports() {
        // Generate weekly report every Monday
        const now = new Date();
        const nextMonday = new Date(now);
        nextMonday.setDate(now.getDate() + (1 + 7 - now.getDay()) % 7);
        nextMonday.setHours(9, 0, 0, 0);
        
        const timeUntilMonday = nextMonday.getTime() - now.getTime();
        
        setTimeout(() => {
            this.generateWeeklyReport();
            // Set up recurring weekly reports
            setInterval(() => this.generateWeeklyReport(), 7 * 24 * 60 * 60 * 1000);
        }, timeUntilMonday);
    }
    
    // Setup Monthly Reports
    setupMonthlyReports() {
        // Generate monthly report on the 1st of each month
        const now = new Date();
        const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1, 9, 0, 0);
        
        const timeUntilNextMonth = nextMonth.getTime() - now.getTime();
        
        setTimeout(() => {
            this.generateMonthlyReport();
            // Set up recurring monthly reports
            setInterval(() => this.generateMonthlyReport(), 30 * 24 * 60 * 60 * 1000);
        }, timeUntilNextMonth);
    }
    
    // Setup Real-Time Dashboard
    setupRealTimeDashboard() {
        this.createDashboardElement();
        this.updateDashboard();
        
        // Update dashboard every minute
        setInterval(() => this.updateDashboard(), 60000);
    }
    
    // Create Dashboard Element
    createDashboardElement() {
        const dashboard = document.createElement('div');
        dashboard.id = 'seo-monitoring-dashboard';
        dashboard.innerHTML = `
            <div class="dashboard-container">
                <div class="dashboard-header">
                    <span class="dashboard-title">SEO Dashboard</span>
                    <span class="dashboard-toggle">▼</span>
                </div>
                <div class="dashboard-content">
                    <div class="metrics-grid">
                        <div class="metric-card">
                            <h3>Keywords</h3>
                            <div class="metric-value" id="keyword-rankings">0</div>
                            <div class="metric-target">/25</div>
                        </div>
                        <div class="metric-card">
                            <h3>Traffic</h3>
                            <div class="metric-value" id="organic-traffic">0</div>
                            <div class="metric-target">/2.5K</div>
                        </div>
                        <div class="metric-card">
                            <h3>Conversion</h3>
                            <div class="metric-value" id="conversion-rate">0%</div>
                            <div class="metric-target">/8%</div>
                        </div>
                        <div class="metric-card">
                            <h3>Vitals</h3>
                            <div class="metric-value" id="core-web-vitals">Unknown</div>
                            <div class="metric-target">Good</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Add styles
        const styles = `
            <style>
                #seo-monitoring-dashboard {
                    position: fixed;
                    top: 120px;
                    right: 20px;
                    background: white;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                    z-index: 100;
                    font-family: Arial, sans-serif;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    overflow: hidden;
                }
                
                .dashboard-container {
                    min-width: 200px;
                }
                
                .dashboard-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 12px 16px;
                    background: linear-gradient(135deg, #008080, #FF6F3C);
                    color: white;
                    font-weight: bold;
                    font-size: 14px;
                }
                
                .dashboard-toggle {
                    transition: transform 0.3s ease;
                    font-size: 12px;
                }
                
                .dashboard-content {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease;
                }
                
                #seo-monitoring-dashboard.expanded .dashboard-content {
                    max-height: 200px;
                }
                
                #seo-monitoring-dashboard.expanded .dashboard-toggle {
                    transform: rotate(180deg);
                }
                
                .metrics-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 8px;
                    padding: 12px;
                }
                
                .metric-card {
                    background: #f8f9fa;
                    padding: 8px;
                    border-radius: 4px;
                    text-align: center;
                    border: 1px solid #e9ecef;
                }
                
                .metric-card h3 {
                    margin: 0 0 4px 0;
                    font-size: 10px;
                    color: #666;
                    font-weight: 600;
                }
                
                .metric-value {
                    font-size: 16px;
                    font-weight: bold;
                    color: #333;
                    margin-bottom: 2px;
                }
                
                .metric-target {
                    font-size: 9px;
                    color: #999;
                }
                
                /* Hover effects */
                #seo-monitoring-dashboard:hover {
                    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
                    transform: translateY(-2px);
                }
                
                .metric-card:hover {
                    background: #e9ecef;
                    transform: scale(1.02);
                }
                
                /* Mobile responsiveness */
                @media (max-width: 768px) {
                    #seo-monitoring-dashboard {
                        top: 10px;
                        right: 10px;
                        min-width: 180px;
                    }
                    
                    .dashboard-header {
                        padding: 10px 12px;
                        font-size: 12px;
                    }
                    
                    .metrics-grid {
                        padding: 8px;
                        gap: 6px;
                    }
                    
                    .metric-card {
                        padding: 6px;
                    }
                    
                    .metric-value {
                        font-size: 14px;
                    }
                }
            </style>
        `;
        
        document.head.insertAdjacentHTML('beforeend', styles);
        document.body.appendChild(dashboard);
        
        // Add click and hover functionality
        this.setupDashboardInteractions();
    }
    
    // Setup Dashboard Interactions
    setupDashboardInteractions() {
        const dashboard = document.getElementById('seo-monitoring-dashboard');
        let hoverTimeout;
        let isExpanded = false;
        
        // Click to toggle
        dashboard.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            isExpanded = !isExpanded;
            dashboard.classList.toggle('expanded', isExpanded);
        });
        
        // Hover to expand
        dashboard.addEventListener('mouseenter', () => {
            clearTimeout(hoverTimeout);
            if (!isExpanded) {
                dashboard.classList.add('expanded');
            }
        });
        
        // Hover to collapse (with delay)
        dashboard.addEventListener('mouseleave', () => {
            if (!isExpanded) {
                hoverTimeout = setTimeout(() => {
                    dashboard.classList.remove('expanded');
                }, 1000); // 1 second delay before collapsing
            }
        });
        
        // Click outside to close
        document.addEventListener('click', (e) => {
            if (!dashboard.contains(e.target) && isExpanded) {
                isExpanded = false;
                dashboard.classList.remove('expanded');
            }
        });
    }
    
    // Update Dashboard
    updateDashboard() {
        const dashboard = document.getElementById('seo-monitoring-dashboard');
        if (!dashboard) return;
        
        // Update keyword rankings
        const achievedKeywords = this.keywordTargets.filter(k => k.status === 'achieved').length;
        document.getElementById('keyword-rankings').textContent = achievedKeywords;
        
        // Update organic traffic
        const traffic = this.performanceMetrics.seo_metrics.organic_traffic.current;
        document.getElementById('organic-traffic').textContent = traffic.toLocaleString();
        
        // Update conversion rate
        const conversionRate = this.performanceMetrics.conversion_metrics.conversion_rate.current;
        document.getElementById('conversion-rate').textContent = `${(conversionRate * 100).toFixed(1)}%`;
        
        // Update Core Web Vitals
        const vitals = this.performanceMetrics.core_web_vitals;
        const allGood = Object.values(vitals).every(v => v.status === 'good');
        document.getElementById('core-web-vitals').textContent = allGood ? 'Good' : 'Needs Work';
    }
    
    // Generate Weekly Report
    generateWeeklyReport() {
        const report = {
            period: 'weekly',
            date: new Date().toISOString(),
            keyword_performance: this.keywordTargets,
            seo_metrics: this.performanceMetrics.seo_metrics,
            conversion_goals: this.conversionGoals,
            core_web_vitals: this.performanceMetrics.core_web_vitals,
            recommendations: this.generateRecommendations()
        };
        
        console.log('Weekly SEO Report:', report);
        this.sendReportEmail(report, 'weekly');
    }
    
    // Generate Monthly Report
    generateMonthlyReport() {
        const report = {
            period: 'monthly',
            date: new Date().toISOString(),
            keyword_performance: this.keywordTargets,
            seo_metrics: this.performanceMetrics.seo_metrics,
            conversion_goals: this.conversionGoals,
            core_web_vitals: this.performanceMetrics.core_web_vitals,
            trends: this.analyzeTrends(),
            recommendations: this.generateRecommendations()
        };
        
        console.log('Monthly SEO Report:', report);
        this.sendReportEmail(report, 'monthly');
    }
    
    // Generate Performance Report
    generatePerformanceReport() {
        const report = {
            timestamp: new Date().toISOString(),
            keyword_targets: this.keywordTargets,
            performance_metrics: this.performanceMetrics,
            conversion_goals: this.conversionGoals,
            recommendations: this.generateRecommendations()
        };
        
        return report;
    }
    
    // Analyze Trends
    analyzeTrends() {
        return {
            traffic_growth: this.performanceMetrics.seo_metrics.organic_traffic.growth_rate,
            keyword_improvement: this.performanceMetrics.seo_metrics.keyword_rankings.improvement_rate,
            conversion_improvement: this.performanceMetrics.conversion_metrics.conversion_rate.improvement_rate,
            domain_authority_growth: this.performanceMetrics.seo_metrics.domain_authority.growth_rate
        };
    }
    
    // Generate Recommendations
    generateRecommendations() {
        const recommendations = [];
        
        // Check keyword performance
        const underperformingKeywords = this.keywordTargets.filter(k => k.status === 'needs_work');
        if (underperformingKeywords.length > 0) {
            recommendations.push({
                type: 'keyword_optimization',
                priority: 'high',
                message: `${underperformingKeywords.length} keywords need optimization. Focus on content quality and backlink building.`
            });
        }
        
        // Check Core Web Vitals
        const poorVitals = Object.entries(this.performanceMetrics.core_web_vitals)
            .filter(([_, vital]) => vital.status === 'poor');
        if (poorVitals.length > 0) {
            recommendations.push({
                type: 'performance_optimization',
                priority: 'high',
                message: `${poorVitals.length} Core Web Vitals need improvement. Focus on page speed and user experience.`
            });
        }
        
        // Check conversion goals
        const lowAchievementGoals = Object.entries(this.conversionGoals)
            .filter(([_, goal]) => goal.achievement_rate < 50);
        if (lowAchievementGoals.length > 0) {
            recommendations.push({
                type: 'conversion_optimization',
                priority: 'medium',
                message: `${lowAchievementGoals.length} conversion goals are below 50% achievement. Review and optimize conversion funnels.`
            });
        }
        
        return recommendations;
    }
    
    // Send Report Email (placeholder)
    sendReportEmail(report, type) {
        // In a real implementation, this would send actual emails
        console.log(`Sending ${type} report email:`, report);
    }
}

// Initialize SEO Monitoring Dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.seoMonitoring = new SEOMonitoringDashboard();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SEOMonitoringDashboard;
}

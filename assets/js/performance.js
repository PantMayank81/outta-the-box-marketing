// Performance Optimization Script - NO IMAGE MODIFICATIONS
// WARNING: DO NOT CHANGE ANY EXISTING IMAGE PATHS OR FILES
(function() {
    'use strict';
    
    // Critical CSS for immediate above-the-fold rendering
    const criticalCSS = `
        /* Hero section optimization */
        .hero { 
            background: linear-gradient(135deg, #0A2540 0%, #1a3a5c 100%); 
            color: white; 
            padding: 4rem 2rem; 
            min-height: 70vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
        
        .hero h1 { 
            font-size: clamp(2.5rem, 5vw, 4.5rem); 
            line-height: 1.1; 
            margin: 0 0 1.5rem; 
            font-weight: 700;
            background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .hero h2 { 
            font-size: clamp(1.3rem, 3vw, 2rem); 
            opacity: 0.95; 
            margin: 0 0 2.5rem; 
            font-weight: 400;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }
        
        /* CTA button optimization for better conversion */
        .cta-primary, button[type="submit"], .btn-primary { 
            background: linear-gradient(135deg, #FF6F3C 0%, #e55a2b 100%);
            color: white; 
            padding: 1.2rem 2.5rem; 
            border: none; 
            border-radius: 12px; 
            font-size: 1.1rem; 
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            text-decoration: none;
            display: inline-block;
            box-shadow: 0 4px 15px rgba(255, 111, 60, 0.3);
        }
        
        .cta-primary:hover, button[type="submit"]:hover, .btn-primary:hover {
            background: linear-gradient(135deg, #e55a2b 0%, #d44a1f 100%);
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(255, 111, 60, 0.4);
        }
        
        .cta-primary:active, button[type="submit"]:active, .btn-primary:active {
            transform: translateY(-1px);
        }
        
        /* Navigation optimization for better UX */
        nav, header, .navbar {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 20px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
            transition: all 0.3s ease;
        }
        
        /* Form optimization for better conversion */
        form {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        input, textarea, select {
            width: 100%;
            padding: 1rem;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            font-size: 1rem;
            transition: all 0.3s ease;
            margin-bottom: 1rem;
        }
        
        input:focus, textarea:focus, select:focus {
            border-color: #FF6F3C;
            outline: none;
            box-shadow: 0 0 0 3px rgba(255, 111, 60, 0.1);
        }
        
        /* Metrics and statistics styling */
        .metric-card, .stats-card {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.08);
            text-align: center;
            transition: all 0.3s ease;
        }
        
        .metric-card:hover, .stats-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }
        
        .metric-number {
            font-size: 3rem;
            font-weight: 700;
            color: #FF6F3C;
            display: block;
            line-height: 1;
        }
        
        .metric-label {
            font-size: 1rem;
            color: #666;
            margin-top: 0.5rem;
        }
    `;
    
    // Inject critical CSS immediately for faster rendering
    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.insertBefore(style, document.head.firstChild);
    
    // Preload critical resources for better performance
    const preloadResources = [
        { href: '/assets/css/main.css', as: 'style' },
        { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', as: 'style', crossorigin: 'anonymous' }
    ];
    
    preloadResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        Object.assign(link, resource);
        document.head.appendChild(link);
    });
    
    // Enhanced form optimization for better conversion rates
    function optimizeForms() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            // Add loading state for form submission
            form.addEventListener('submit', function(e) {
                const submitBtn = form.querySelector('button[type="submit"], .cta-primary, .btn-primary');
                if (submitBtn) {
                    const originalText = submitBtn.textContent;
                    submitBtn.textContent = 'Processing...';
                    submitBtn.disabled = true;
                    submitBtn.style.opacity = '0.7';
                    
                    // Re-enable button after 3 seconds if form doesn't redirect
                    setTimeout(() => {
                        if (submitBtn) {
                            submitBtn.textContent = originalText;
                            submitBtn.disabled = false;
                            submitBtn.style.opacity = '1';
                        }
                    }, 3000);
                }
            });
            
            // Add real-time validation feedback
            const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
            inputs.forEach(input => {
                input.addEventListener('blur', function() {
                    if (this.value.trim() === '') {
                        this.style.borderColor = '#ff4444';
                    } else {
                        this.style.borderColor = '#44ff44';
                    }
                });
            });
        });
    }
    
    // Optimize page loading performance
    function optimizePageLoad() {
        // Lazy load non-critical CSS after page load
        setTimeout(() => {
            const nonCriticalCSS = document.createElement('link');
            nonCriticalCSS.rel = 'stylesheet';
            nonCriticalCSS.href = '/assets/css/non-critical.css';
            nonCriticalCSS.media = 'print';
            nonCriticalCSS.onload = function() {
                this.media = 'all';
            };
            document.head.appendChild(nonCriticalCSS);
        }, 100);
        
        // Optimize scroll performance
        let ticking = false;
        
        function updateScrollEffects() {
            // Add scroll-based animations or effects here if needed
            ticking = false;
        }
        
        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        });
    }
    
    // Enhanced analytics and conversion tracking
    function setupConversionTracking() {
        // Track CTA clicks
        document.addEventListener('click', function(e) {
            if (e.target.matches('.cta-primary, button[type="submit"], .btn-primary')) {
                // Track conversion events (integrate with your analytics)
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'click', {
                        event_category: 'conversion',
                        event_label: e.target.textContent.trim(),
                        value: 1
                    });
                }
            }
        });
        
        // Track form completions
        document.addEventListener('submit', function(e) {
            if (e.target.tagName === 'FORM') {
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'form_submit', {
                        event_category: 'lead_generation',
                        event_label: window.location.pathname,
                        value: 1
                    });
                }
            }
        });
    }
    
    // Initialize all optimizations when DOM is ready
    function initializeOptimizations() {
        optimizeForms();
        optimizePageLoad();
        setupConversionTracking();
    }
    
    // Run initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeOptimizations);
    } else {
        initializeOptimizations();
    }
    
    // Service Worker registration for caching (optional)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                    console.log('SW registered: ', registration);
                })
                .catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }
})();

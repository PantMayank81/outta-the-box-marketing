// Simple service worker for caching static assets - NO IMAGE MODIFICATIONS
const CACHE_NAME = 'otb-marketing-v1';
const urlsToCache = [
  '/',
  '/assets/css/main.css',
  '/assets/js/performance.js',
  // DO NOT cache images - they should remain as-is
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  // Only cache CSS and JS files, not images
  if (event.request.url.includes('/assets/css') || event.request.url.includes('/assets/js')) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          return response || fetch(event.request);
        }
      )
    );
  }
});



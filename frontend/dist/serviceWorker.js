const CACHE_NAME = 'family-tree-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/offline.html',
    '/static/js/main.chunk.js',
    '/static/js/0.chunk.js',
    '/static/js/bundle.js',
    '/manifest.json',
    '/logo192.png',
    '/logo512.png'
  ];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          return response || fetch(event.request).catch(() => {
            // Fallback to a default offline page or asset
            if (event.request.destination === 'document') {
              return caches.match('/offline.html');
            }
          });
        })
    );
  });
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 
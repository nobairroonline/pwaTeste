var cacheName = 'hello-pwa';
var filesToCache = [
  './',
  './index.html',
  './css/style.css',
  './js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil( // aguarda um pouquinho...
    caches.open(cacheName)
    .then(function(cache) {
      console.log('Opened cache')
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('active', e => {
  e.waitUntil(self.clients.claim())    
})

/* Serve cached content when offline */
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

const CACHE_NAME = 'text-studio-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg'
];

// ആദ്യം തുറക്കുമ്പോൾ ഫയലുകൾ കാഷെ ചെയ്യുക
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// ഓഫ്‌ലൈൻ ആകുമ്പോൾ കാഷെ ചെയ്ത ഫയലുകൾ കാണിക്കുക
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

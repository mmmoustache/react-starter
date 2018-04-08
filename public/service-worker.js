const cacheVersion = 1;
const currentCache = {
  offline: 'offline-cache' + cacheVersion
};
const OFFLINE_URL = 'offline.html';

this.addEventListener('install', event => {
  event.waitUntil( caches.open(currentCache.offline).then((cache) => cache.addAll(['./client.css', OFFLINE_URL])));
});

this.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
    event.respondWith( fetch(event.request.url).catch(() => caches.match(OFFLINE_URL)) );
  }
  else{
    event.respondWith(caches.match(event.request).then((response) => response || fetch(event.request)));
  }
});
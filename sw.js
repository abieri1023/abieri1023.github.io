self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = event.request.url || '';
  // Block Baidu Miao tracking calls with a benign 204 response
  if (url.includes('miao.baidu.com')) {
    event.respondWith(new Response('', { status: 204, statusText: 'No Content' }));
    return;
  }
  // Default: pass through
  event.respondWith(fetch(event.request));
});
const CACHE_NAME = "progresso-online-v1";
const BASE = "/progresso-online/";

const urlsToCache = [
  BASE,
  BASE + "index.html",
  BASE + "manifest.json",
  BASE + "logo.png",
  BASE + "icon-192.png",
  BASE + "icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});

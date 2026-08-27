const VERSION = "v2";
const SHELL_CACHE = `camino-shell-${VERSION}`;
const FONT_CACHE = `camino-fonts-${VERSION}`;
const KEEP = [SHELL_CACHE, FONT_CACHE];

const SHELL = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./js/course.js",
  "./js/app.js",
  "./manifest.webmanifest",
  "./icons/favicon.svg",
  "./icons/favicon-32.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
];

const FONT_HOSTS = new Set(["fonts.googleapis.com", "fonts.gstatic.com"]);

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(SHELL_CACHE);
      // One unavailable file should not fail the whole install.
      await Promise.allSettled(SHELL.map((url) => cache.add(new Request(url, { cache: "reload" }))));
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(names.filter((n) => !KEEP.includes(n)).map((n) => caches.delete(n)));
      await self.clients.claim();
    })()
  );
});

async function cachePut(cacheName, request, response) {
  if (!response || (response.status !== 200 && response.type !== "opaque")) return;
  const cache = await caches.open(cacheName);
  await cache.put(request, response.clone());
}

// Online: always take the live file, then store it for offline.
// Offline: serve the last saved copy.
async function networkFirst(request, cacheName) {
  try {
    const response = await fetch(request, { cache: "no-cache" });
    await cachePut(cacheName, request, response);
    return response;
  } catch {
    return (
      (await caches.match(request)) ||
      new Response("Offline and not cached.", { status: 504, statusText: "Offline" })
    );
  }
}

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    await cachePut(cacheName, request, response);
    return response;
  } catch {
    return new Response("", { status: 504, statusText: "Offline" });
  }
}

// The app is a single document with hash routing, so any navigation resolves to the shell.
async function documentResponse(request) {
  try {
    const response = await fetch(request, { cache: "no-cache" });
    cachePut(SHELL_CACHE, request, response);
    return response;
  } catch {
    return (
      (await caches.match(request)) ||
      (await caches.match("./index.html")) ||
      (await caches.match("./")) ||
      new Response("Offline.", { status: 504, statusText: "Offline" })
    );
  }
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.protocol !== "http:" && url.protocol !== "https:") return;

  if (request.mode === "navigate") {
    event.respondWith(documentResponse(request));
    return;
  }
  if (url.origin === self.location.origin) {
    event.respondWith(networkFirst(request, SHELL_CACHE));
    return;
  }
  if (FONT_HOSTS.has(url.hostname)) {
    event.respondWith(cacheFirst(request, FONT_CACHE));
  }
});

const filesToCache = [
	"JavaScriptMinifier.css",
	"JavaScriptMinifier.htm",
	"JavaScriptMinifier.js",
	"JavaScriptMinifier.json",
	"JavaScriptMinifier.png",
	"JavaScriptMinifierFavIcon_16x16.png",
	"JavaScriptMinifierFavIcon_192x192.png",
	"JavaScriptMinifierFavIcon_512x512.png",
	"JavaScriptMinifierShare.png"
];

const staticCacheName = "JavaScriptMinifier-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});
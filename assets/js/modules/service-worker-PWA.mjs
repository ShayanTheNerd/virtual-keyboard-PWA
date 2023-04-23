// app files to cache
const CACHE_VERSION = 1.1;
const appCacheName = `Virtual_Keyboard-v${CACHE_VERSION}`;
const appContentToCache = [
	'/',
	'../css/styles.css',
	'../favicons/android-chrome-36x36.png',
	'../favicons/android-chrome-48x48.png',
	'../favicons/android-chrome-72x72.png',
	'../favicons/android-chrome-96x96.png',
	'../favicons/android-chrome-144x144.png',
	'../favicons/android-chrome-192x192.png',
	'../favicons/android-chrome-256x256.png',
	'../favicons/apple-touch-icon.png',
	'../favicons/browserconfig.xml',
	'../favicons/favicon-16x16.png',
	'../favicons/favicon-32x32.png',
	'../favicons/mstile-144x144.png',
	'../favicons/safari-pinned-tab.svg',
	'./app.js',
	'./keyboard-keys-data.mjs',
	'./keyboard-keys-generator.mjs',
	'./theme-handler.mjs',
	'../icons.svg',
	'../../index.html',
	'../../favicon.ico',
	'../../virtual-keyboard.webmanifest',
];

// installing Service Worker
self.addEventListener('install', event => {
	const cacheAppContent = async (name, content) => {
		const cache = await caches.open(name);
		await cache.addAll(content);
	};

	event.waitUntil(cacheAppContent(appCacheName, appContentToCache));
});

// fetching content using Service Worker
self.addEventListener('fetch', event => {
	/* prettier-ignore */
	const { request, request: { url } } = event;

	if (!url.startsWith(/http(|s):/g)) return; // only cache 'http' and 'https' protocols

	const getCacehdContent = async () => {
		const cachedContent = await caches.match(request);
		if (cachedContent) return cachedContent;

		const response = await fetch(request);
		const cache = await caches.open(appCacheName);
		cache.put(request, response.clone());
		return response;
	};

	event.respondWith(getCacehdContent());
});

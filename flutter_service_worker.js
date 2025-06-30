'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e1ded5545db936d2d85ff3c7edfd0682",
"assets/AssetManifest.bin.json": "9a48b19bb577771f3a1487008dcaf805",
"assets/AssetManifest.json": "5568a3f64547c1d6d18924e33a976f3d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "bad98eaa547aa674f4476a5ca1b6c0cb",
"assets/lib/presentation/images/error.json": "b7d95ccc71daf5b2620a3973714db4da",
"assets/lib/presentation/images/leaderboard_explaination.png": "7a914834e834b7492f8e81ff5c49a941",
"assets/lib/presentation/images/loading.json": "3602f57316528e1f97155943ad8316c8",
"assets/lib/presentation/images/recycling_bin_pointer.png": "1f76b775b4e8dede0874c109e7a98393",
"assets/lib/presentation/images/recycling_bin_pointer1.png": "d8ee9da52939ff55bcfb8603047f789a",
"assets/lib/presentation/images/step1.png": "8c627e5f56d62e7b9f6aef73b5e56c33",
"assets/lib/presentation/images/step2.png": "c30efe03f5a22dd54ada79118ba5e163",
"assets/lib/presentation/images/step3.png": "f91c0be2af1a1c0f10c753a46e4d2435",
"assets/lib/presentation/images/step4.png": "7ff47d4bfc4c9c4ba2ecc46a4d113e67",
"assets/lib/presentation/images/success.json": "8058317009665fb402e56599f50bfd8e",
"assets/lib/presentation/images/testQRcode.png": "6c7d43f57f8c25dc39003d01dac16c50",
"assets/lib/presentation/images/tpLogo.png": "a04b46abfa9f6b74f5df4b6172b4b842",
"assets/lib/presentation/images/tree.riv": "1b34706b08aeeef3163be3b0bd1af28b",
"assets/lib/presentation/images/user_guide_home_1.png": "6ab3dd4e04a657c7a4f12564a19ffe67",
"assets/lib/presentation/images/user_guide_home_2.png": "cb4845d272753c4ae30a338e80b36435",
"assets/lib/presentation/images/user_guide_home_3.png": "7a90b8f144db1da45c6326588edd464c",
"assets/lib/presentation/images/user_guide_home_4.png": "24d35d76778e871eb151cb1c087a5621",
"assets/lib/presentation/images/user_guide_home_5.png": "15011cd269324513e2e7298d76a006aa",
"assets/lib/presentation/images/user_guide_home_location.png": "ea3db69878150ecc7cb4370e6b1e3127",
"assets/lib/presentation/images/user_guide_home_map.png": "51c1f71418b976fe426775c1f488d92a",
"assets/NOTICES": "00bec2bbd0c7a400d6e768119ebd6d16",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "b2f29acc326193c955741f71ba14e69f",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "6dccbbcae79dba21243b41a542e61c2e",
"icons/Icon-192.png": "d0e0f213fbc1f453e6f65bec12e7f7fa",
"icons/Icon-512.png": "eb6c2c607fd875b12487cea2049e9d4f",
"icons/Icon-maskable-192.png": "d0e0f213fbc1f453e6f65bec12e7f7fa",
"icons/Icon-maskable-512.png": "eb6c2c607fd875b12487cea2049e9d4f",
"index.html": "b421e37be50be2ac03b2c26ba5920a86",
"/": "b421e37be50be2ac03b2c26ba5920a86",
"main.dart.js": "e291af9cadeffe21df2c7ce1d1a7dfb5",
"manifest.json": "abda5ff7579897887be0363e276665f1",
"version.json": "9d877a508a8889c177538f6d3c67e673"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

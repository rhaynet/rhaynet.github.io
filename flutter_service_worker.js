'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "cf091394a7c2349e95ca0f1c40d4e4c0",
"assets/assets/font/Barlow-Black.ttf": "3259b9d5da281613ed918c9d165c20a5",
"assets/assets/font/Barlow-Regular.ttf": "9373fb661b5c2954ab84d1b7f42774fe",
"assets/assets/font/Barlow-SemiBold.ttf": "29527ab52af2334e2bcb6290c8692f70",
"assets/assets/font/Swiss%2520721%2520Black%2520Extended%2520BT.ttf": "f7d29d584916aa8856ee59d59f7f4d6c",
"assets/assets/font/VisiaPro-Regular.ttf": "e7f0574c9bc8a638add57773da196ddb",
"assets/assets/icons/instagram.svg": "ab50c94b7ccc93bef07856d85c9af868",
"assets/assets/icons/linkedin.svg": "a41a03ab4c7d665bae64374cdf46efec",
"assets/assets/icons/logo.svg": "c202bdc4ceb85ea29fd4f203483bc301",
"assets/assets/icons/twitter.svg": "2e8e2ac0226cff3fc9616d3876ee2827",
"assets/assets/images/arrow_up.PNG": "b9cb7e08192c740b1bc77448072e8e68",
"assets/assets/images/collab.PNG": "4874565d9824c9fc07684e7cb41f186e",
"assets/assets/images/interactive.png": "02047240f3f88901faab8885261cd4c4",
"assets/assets/images/moon.png": "cf89e8e6daa9dabc8174c303e4d53d3a",
"assets/assets/images/note.PNG": "2b7ff352add1f87ec2ad28c21a04c902",
"assets/assets/images/rocket.PNG": "fbf261fbe1dff2d9cf7cc5946f53fb3b",
"assets/assets/images/upload_bg.JPG": "f32415a56af73741319030d9d0472a15",
"assets/assets/images/win.PNG": "7bdf97076bd9ab43336045a0ac0df4fe",
"assets/assets/infinity_loader.gif": "74ca342cd229054eeb3d9b97feaa791d",
"assets/assets/logo.png": "4e37e276e9ded8fa11641cb2206050a5",
"assets/assets/logo_white.png": "dc46aca45f6821bd39f54c4d7fab7135",
"assets/assets/mobileLogo.png": "b82274924de9c062950b57e03478433e",
"assets/assets/p1.png": "29c273fa8797d3fec84801589af269ca",
"assets/assets/red_bg.png": "3a709fa111aa6711d895910da5d87745",
"assets/assets/web_about_us/HOME%2520PAGE-DesktopVersion%25207.png": "4925dc92093c07a17ee86f5bd691ef63",
"assets/assets/web_about_us/HOME%2520PAGE-DesktopVersion%25208.png": "c55967353be5f1297d67bdacbee2db27",
"assets/assets/web_competition/1.png": "a2d1ef3dff4bb2ace382b41edd01bb43",
"assets/assets/web_competition/10.png": "bbf0e4f22044285bea6eef989d6015e7",
"assets/assets/web_competition/11.png": "103a9ebf80dac694f966277e8eb8d422",
"assets/assets/web_competition/12.png": "4750d016420d781030964013bada82ca",
"assets/assets/web_competition/13.png": "d83d0db5a0828d28f298e313d0ed19de",
"assets/assets/web_competition/14.png": "4376fb86ade5fc5153661b3b769f23c7",
"assets/assets/web_competition/15.png": "e832bd672ba7185d77f2232ad8c8a1be",
"assets/assets/web_competition/16.png": "a4230a13c1dcb7d736affef25b7c3a42",
"assets/assets/web_competition/17.png": "5ce4e7b4d251f7120a37819687356198",
"assets/assets/web_competition/18.png": "b2f80141e740634ea5b0e6fd1d3f70f8",
"assets/assets/web_competition/19.png": "4933bdb49090f2706b495e4380f8d630",
"assets/assets/web_competition/2.png": "ec4184c74c25a121031743e1d6b0a146",
"assets/assets/web_competition/20.png": "6f1632392f994d4092e28d9a1681f8c2",
"assets/assets/web_competition/21.png": "0ab40eb86b17c9d55e7cf2a8d001d8d4",
"assets/assets/web_competition/3.png": "9fbce82de7ec933f822882c168c590b3",
"assets/assets/web_competition/4.png": "f6607cc5c8fb6ff838c92c8d932a7e2c",
"assets/assets/web_competition/5.png": "744751f87022e88127b21bc578f013c9",
"assets/assets/web_competition/6.png": "c40ee27b87158e324e53c5c7bafc3db7",
"assets/assets/web_competition/7.png": "37746747cecb3cc67dbb2248c52879c9",
"assets/assets/web_competition/8.png": "12c73fcb9a0e31d9e5ea8a4f5f501722",
"assets/assets/web_competition/9.png": "177c2bafef484c2b0caf32515bb61d21",
"assets/assets/web_competition/bg/bg1.png": "12302ec9c486552e54da0bc55b8dc5ed",
"assets/assets/web_competition/bg/bg2.png": "6f0ee7654d0d5b90cca0f80e3d737f92",
"assets/assets/web_competition/bg/bg3.png": "7d2518af8c691945af9d2501b01cc6ae",
"assets/assets/web_competition/bg/bg4.png": "d3f0fe4f594960c00a5a19d91568ab3c",
"assets/assets/web_competition/bg/bg5.png": "04d0ac7677b026aae1d2a2c021a7dfc5",
"assets/assets/web_competition/circle_ronaldo.png": "df55e88c0ac8a83b6a5a3a0fdfc24a82",
"assets/assets/web_competition/circle_tamasha.png": "5c37f777269c1a1935407462f777c69b",
"assets/assets/web_competition/circle_vd.png": "2b0edd248c7557eca0ff8db296f8d5f3",
"assets/assets/web_competition/tyj.png": "0c8b9d6222205c7de449294acdca2aa1",
"assets/assets/web_home/back.png": "e674231adec403c076473de6e14b41c3",
"assets/assets/web_home/forward.png": "a4925dc09fef63a69dd7d88d1026589d",
"assets/assets/web_home/home_1.png": "04a3ec59a9e9f4937af69e1ecd310978",
"assets/assets/web_home/home_2.png": "cab8f1c3f2393d0a72bb7e8250716f0e",
"assets/assets/web_home/home_3.png": "d1b04cb73cebb7dd75d9241e638fe9e4",
"assets/assets/web_home/home_thn_1.png": "387268306048f0b2f1ffbe4fa509c2af",
"assets/assets/web_home/home_thn_2.png": "757cbcd8b95e04532449ca14985a7921",
"assets/assets/web_home/home_thn_3.png": "105e90dd44ce4ae8be2c4ae6ca80fad2",
"assets/assets/web_home/home_thn_4.png": "83fa6ebe9c7b9bccc3d5bb0fe0baa9d6",
"assets/assets/web_home/home_thn_5.png": "446db572f249a6157a4922abcc0a7381",
"assets/assets/web_home/home_thn_6.png": "b85e07cfe4ed47c2b804463d5435845c",
"assets/assets/web_home/home_thn_7.png": "4769c9071d3dfa71c199b0f1ffe6330e",
"assets/assets/web_home/home_thn_8.png": "20eab2d5142d5c61aac23a1ef49b07ed",
"assets/assets/web_home/home_thn_9.png": "45474fc855d779750b8f8b1be75895cd",
"assets/assets/web_home/linkedin.png": "a073ecdfc08870a4b033b6869c7f48fa",
"assets/assets/web_home/logo1.png": "db5e0028116c0b7e2ad36768c36e0a12",
"assets/assets/web_home/participate.png": "858369dbd6761d1a3d7eba8deec774d4",
"assets/FontManifest.json": "1855afb08e48054a7368a4517f7eed6c",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7947ed4c2e0b54140c05d26bc9119b15",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "776c9ae131bb355de80cdd6b3668b200",
"/": "776c9ae131bb355de80cdd6b3668b200",
"main.dart.js": "e29fddc776676e419500676ded07e46b",
"manifest.json": "6f432e233be88c5d23f16adcd0e58a91",
"version.json": "6f21d3d7f9cb4d02b8915809cc1c908a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

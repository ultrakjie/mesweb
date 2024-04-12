'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3b8e49c52990a8c0a84e521fdda30666",
"index.html": "69819c111fa8daf6eedc940f319487d9",
"/": "69819c111fa8daf6eedc940f319487d9",
"main.dart.js": "e8558480bfd95eab5a6e06641456f504",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "17efeab2aa7bfc155b58c4fba0451c3c",
"assets/AssetManifest.json": "8508edc6635beef9e92ad61b55a9c0f9",
"assets/NOTICES": "7aa1d53f8edda28dac59d7a539cf8bb0",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "40e04af26ba665796daa14854c65906c",
"assets/fonts/MaterialIcons-Regular.otf": "b270b051ac43cec631f4540dbaece4a2",
"assets/assets/form/icon_form_inspection_qualified_rate.webp": "b869b6646aa19e62283209ba0c9caac4",
"assets/assets/form/icon_form_ps_settled.webp": "2df652a520cde9468d9815c94ed94659",
"assets/assets/form/bg_form_ship_summary.webp": "d2d245fd65a64d8c2ccfa0c2725c4efa",
"assets/assets/form/icon_form_prompt.webp": "84efcd4b2596ca4cc6e1336abee7edab",
"assets/assets/form/icon_form_inspection_all.webp": "ae4f6b4776faab1873f1c9faad33fda7",
"assets/assets/form/icon_form_order_search.webp": "d99558e335a3ee32e7aeda6cc51ee51b",
"assets/assets/form/bg_form_process_sluggish.webp": "a508ca2d0436ece09a38c46593560118",
"assets/assets/form/icon_form_inspection_qualified.webp": "c1d8982e2b452961e289fd062927054a",
"assets/assets/form/bg_form_task_order_trance.webp": "72bbcbf1932c39d057e4f5aff2c63607",
"assets/assets/form/bg_form_manufacture_summary.webp": "9d92f6700d7cf0bbaf1c7cf96de1b113",
"assets/assets/form/bg_form_inspection.webp": "34b1709fdd872e05ade11b63ed98208c",
"assets/assets/form/icon_form_ps_in_progress.webp": "c921d537eb5d3da4a04af57c28c2d768",
"assets/assets/form/icon_form_order_number.webp": "8845b3f676d2cbf9ccc40985441df775",
"assets/assets/form/icon_form_ps_all.webp": "aac36778c78350a408a4ae93e9d907f0",
"assets/assets/form/bg_form_steel_in_out.webp": "864a98ea6e78655cefb69246ffc5e9b7",
"assets/assets/form/icon_form_un_checked.webp": "a8f3d736375ce7749d01c86b657b3de2",
"assets/assets/form/icon_form_checked.webp": "baa8361912f9272df16cce7a00ded2e0",
"assets/assets/form/bg_form_order_detail.webp": "5bc16092be7b824680bcbaeb93a25262",
"assets/assets/form/bg_form_project_summary.webp": "4928ca2c2a32528591d4fe5244ad858f",
"assets/assets/form/bg_form_my_yield.webp": "761c5c3cbe217217e39c377fbad206c8",
"assets/assets/form/bg_form_monthly_task_trance.webp": "d68354d318f76c459e0cd6ea40ea0ae0",
"assets/assets/form/icon_form_ps_finished.webp": "996e6f1c8c87ad44c871e82c549e8c2a",
"assets/assets/images/ad_scan_device.webp": "c36b886ef38f5d3b782de2b9311b1c4c",
"assets/assets/audio/system_error.wav": "ad111032ce74041774c753b8355101b7",
"assets/assets/audio/login_success.wav": "6dd4d2dad4711dcc5b2136971e3c2375",
"assets/assets/audio/task_complete.wav": "4bb37b6cbc01263acdddab7a59cd877f",
"assets/assets/audio/task_error.wav": "66f2e492ccdda8ba5bdd926dd563b179",
"assets/assets/icons/icon_function_coating_hanging.webp": "651442ce036b9843328bf2c600942f8b",
"assets/assets/icons/icon_function_vehicle_weighing.webp": "5996f638477ab5e4f7e53d158591ce35",
"assets/assets/icons/icon_function_sub_my_file.png": "3114bb4db7cac8ba16ca44d032fa04e8",
"assets/assets/icons/icon_function_out_stock_review.webp": "76a0b06074cbe078c86093ca7cda589f",
"assets/assets/icons/icon_function_enclosure.webp": "0183b629579601769a898a6f64707981",
"assets/assets/icons/icon_function_artifact_part_receive.webp": "76cb13c7038fc86333b2158e225f5cdc",
"assets/assets/icons/icon_function_material_storage_warning.webp": "30ced25e420a47c5dfab315bab07798f",
"assets/assets/icons/icon_function_project_list.webp": "d292c70adb14a46a580c5854e44b29d1",
"assets/assets/icons/icon_function_site_qhse.webp": "3e40aef176071fd22c7925c13f378c44",
"assets/assets/icons/icon_model_bridge.webp": "5a37558a4d98d8b5370b282491a31455",
"assets/assets/icons/icon_function_machine_part.webp": "5e5683d57fef05cb0b1356d0b4c7ed21",
"assets/assets/icons/icon_function_lag_reminder.webp": "315b79f90d17066b6821f201ad562601",
"assets/assets/icons/icon_function_visa_audit.webp": "adae684bf4208ff458b815f2ba32250f",
"assets/assets/icons/icon_function_cutting_machine.webp": "cd6653b69f2294104462bd575ede471f",
"assets/assets/icons/icon_function_sub_register.png": "c42268e80781cad37e2dd17bebb2d523",
"assets/assets/icons/icon_function_image_process.webp": "fb0819ca4676ea29185e7d4f5b8ca1c8",
"assets/assets/icons/icon_function_logistics_manager.webp": "7823f567a938b7ed1f4a9f03b42ff2c6",
"assets/assets/icons/icon_function_qs_inspection.png": "cbfe81f08bed05685e7948d0226dd42a",
"assets/assets/icons/icon_function_fee_visa.webp": "2660f677bf5d42f8531ad12c5a482ddd",
"assets/assets/icons/icon_function_attendance_statistics.webp": "05485cb36f66e0ea02aab812aed551c5",
"assets/assets/icons/icon_function_inspection_chart.webp": "c9c994d604e9338ea8f07c0cd9472c50",
"assets/assets/icons/icon_function_form_warehouse_in_out.webp": "acd0d325be5cc19967f9f92f8bdcd994",
"assets/assets/icons/icon_model_building.webp": "a625852127cc51baf1e115b40a3bcee2",
"assets/assets/icons/icon_function_task_trance.webp": "20763d06e89bbe4017aff03b7a0a4385",
"assets/assets/icons/icon_function_attendance.png": "06dbd14c87c3b2e06d0de34341be2a4f",
"assets/assets/icons/icon_function_structure.webp": "f78c626594ef464c8d435c45887c8d13",
"assets/assets/icons/icon_function_drill_hole.webp": "b104827b9c5dd140fa2b3622b7420f13",
"assets/assets/icons/icon_function_installation_statistics.webp": "21de7ca68a437b68d41547d9a90b733b",
"assets/assets/icons/icon_truck.webp": "95553c8ec247b9a225e2e301816e0d5d",
"assets/assets/icons/icon_function_my_rectify.webp": "3e40aef176071fd22c7925c13f378c44",
"assets/assets/icons/icon_function_material_storage_audit.webp": "311e34f39c24bbbfd7e4b0645ea797f9",
"assets/assets/icons/icon_function_qhse.webp": "c21382dce4b6ff951d665a68c467740e",
"assets/assets/icons/icon_function_machine_inspection.png": "1461748f7facd2ef0ce734825d16c328",
"assets/assets/icons/icon_state_auditing.png": "9f00fbf6167f6e1024270e73d971789f",
"assets/assets/icons/icon_model_material.webp": "b7b05d8da2a922ff9762ca05ac86f75b",
"assets/assets/icons/icon_function_artifact_receive.webp": "ecbd52d135edc8d2ca011a538d31cd1a",
"assets/assets/icons/icon_function_receipt.webp": "7978b9f64adda0f55a2772241d3b438d",
"assets/assets/icons/icon_chum.webp": "98ecb30a9d6cc1f99ba1e213a3a3aac9",
"assets/assets/icons/icon_function_structure_tree.webp": "e1f77c59caaaa84f35ffa4ab528b91e7",
"assets/assets/icons/icon_function_form_process_sluggish.webp": "5de5bd234c8c25d64cb8997151609b8e",
"assets/assets/icons/icon_function_out_stock.webp": "63f35e6f543c5fc8344971fa405a89ec",
"assets/assets/icons/icon_function_material_storage.webp": "9292eee311a336216a4644367ea1e7e1",
"assets/assets/icons/icon_function_form_monthly_task.webp": "707388bf71632d2501226c976d3e99f8",
"assets/assets/icons/icon_model_enclosure.webp": "0183b629579601769a898a6f64707981",
"assets/assets/icons/icon_function_package.webp": "aa68502f3029bfb9109b825e3158e800",
"assets/assets/icons/icon_function_change_remider.webp": "7e471779bf13e42deb3c634f739f19a2",
"assets/assets/icons/icon_function_process_task.webp": "0a2d6c5ef37b4b9825dc50a1f1e007e8",
"assets/assets/icons/icon_function_material_allocation.png": "c58cf5d686fce0e854a1dc18a7691d50",
"assets/assets/icons/icon_function_my_task.webp": "c48955f28a97ad17677884506bd999a9",
"assets/assets/icons/icon_app_mode_sub.webp": "704a2367f7551be56d8437c4cf68c54e",
"assets/assets/icons/icon_function_cargo_load.webp": "12d111d76bbcd6c83c26a1f2b11a1854",
"assets/assets/icons/icon_app_mode_nor.webp": "f86a5c8e3faed6ad3a7d2e5d1e1bbba8",
"assets/assets/icons/icon_function_form_manufacture_summary.webp": "1d989263f991dbcf91b5048898e0e939",
"assets/assets/icons/icon_function_machine_register.png": "1b1fb70731da303ab0e50780ebec41f9",
"assets/assets/icons/icon_function_material_pool.webp": "acd9a9b1a9a4f86098a51fe235e7542d",
"assets/assets/icons/icon_function_site_scan.png": "4b0be8b9d848d439f56a45d99fa52ea4",
"assets/assets/icons/icon_function_material_stock_out.webp": "cc7f7b075ba2b6c9c80c2f4ee93fe903",
"assets/assets/icons/icon_function_form_task_order.webp": "36bb3ab29890a360f3aa71bd53bd6b83",
"assets/assets/icons/icon_function_form_ship_summary.webp": "71814564e1afb170c2c7ea1be6cbff2d",
"assets/assets/font/krona_one.zip": "e371222e62a4a6a31c3e5a2dac2c53b3",
"assets/assets/data/user_agreement.html": "cd930d0dccb8c8699b25464910bdc3df",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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

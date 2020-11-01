"use strict";

// CODELAB: Update cache names any time any of the cached files change.
const CACHE_NAME = "EduBlocks";

// CODELAB: Add list of files to cache here.
const FILES_TO_CACHE = [
  "/index.html",
  "/icons/",
  "/blockly/",
  "/assets/",
  "/css/",
  "/js/"
];

self.addEventListener("install", evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", evt => {
  evt.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.url === "https://edublocks-next.netlify.app") {
    // or whatever your app's URL is
    event.respondWith(
      fetch(event.request).catch(err =>
        self.cache.open(cache_name).then(cache => cache.match("/index.html"))
      )
    );
  } else {
    event.respondWith(
      fetch(event.request).catch(err =>
        caches.match(event.request).then(response => response)
      )
    );
  }
});

const CACHE = "azan-v2";

self.addEventListener("install",e=>{
e.waitUntil(
caches.open(CACHE).then(cache=>{
return cache.addAll([
"./",
"./index.html",
"./manifest.json",
"./favicon.ico",
"./mishary.mp3",
"./saad.mp3"
]);
})
);
});

self.addEventListener("fetch",e=>{
e.respondWith(
caches.match(e.request).then(res=>res||fetch(e.request))
);
});

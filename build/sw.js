/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/main.css",
    "revision": "3a0acac3b08fdc458ec8daa5c01cd03a"
  },
  {
    "url": "images/ZLC192.png",
    "revision": "ddf1d2360979e4bfe627bbf0bf399e8a"
  },
  {
    "url": "index.html",
    "revision": "bf39bc7077c6456ce2f53307637e738f"
  },
  {
    "url": "js/main.js",
    "revision": "c5863bfe80312249087c3b0d46c6d13a"
  },
  {
    "url": "jsonviewer.json",
    "revision": "36a6fb9015b647ddce89388b93636cad"
  },
  {
    "url": "lessons/aw/anwriter1.png",
    "revision": "14cab53eb5eed6dd1c62dea20f623049"
  },
  {
    "url": "lessons/aw/anwriter2.png",
    "revision": "3c18361b0da125a9142e86df3a3d1f1a"
  },
  {
    "url": "lessons/aw/anwriter3.png",
    "revision": "d2a3e6cca68d4b61ba39f8e04bc0aca7"
  },
  {
    "url": "lessons/aw/anwriter4.png",
    "revision": "defd6bc5325af352b3c2b8ba4f53dc04"
  },
  {
    "url": "lessons/aw/aw.html",
    "revision": "feb61de9de02c7043f9a16f097c155e0"
  },
  {
    "url": "lessons/index.html",
    "revision": "ea3acabdf37fa609d35af8c21ae510d8"
  },
  {
    "url": "lessons/lesson1/L1.png",
    "revision": "fd3b5a5fcbcaeea54b5803d05cffc540"
  },
  {
    "url": "lessons/lesson1/L1B.png",
    "revision": "dbbfd9af15766bbd16712503a386c5bc"
  },
  {
    "url": "lessons/lesson1/lesson1.html",
    "revision": "354b53a5e0e613e211ac89f8b28efe58"
  },
  {
    "url": "lessons/lesson2/lesson2.html",
    "revision": "f85af9abfe89ea934deff0e9985da5af"
  },
  {
    "url": "lessons/lesson2/pics/L2.png",
    "revision": "f3a0e03dee44fcf347024a3c4ab44c7f"
  },
  {
    "url": "lessons/lesson2/pics/ukhamba.png",
    "revision": "7a93e61030c4fb6941d01b259671b0b4"
  },
  {
    "url": "lessons/setup/myfile1.png",
    "revision": "340675b6342b078f33e8cdc6137ac8f3"
  },
  {
    "url": "lessons/setup/myfile2.png",
    "revision": "5788ea8ed7553370d912c1e4ee0e739e"
  },
  {
    "url": "lessons/setup/myfile3.png",
    "revision": "d2e843562d81cbf2d2f7fb2d63189f7d"
  },
  {
    "url": "lessons/setup/myfile4.png",
    "revision": "6f7aaa7e3c0351c272256e9d07947d26"
  },
  {
    "url": "lessons/setup/myfile5.png",
    "revision": "a9426080086bd721d3958bf121f8eb40"
  },
  {
    "url": "lessons/setup/myfile6.png",
    "revision": "e2dbeb2d4669e203cbc99bf3e1645ed4"
  },
  {
    "url": "lessons/setup/myfile7.png",
    "revision": "0368e6b85f370a320c1dee98e1f54c4e"
  },
  {
    "url": "lessons/setup/setup.html",
    "revision": "fafdce7c2be901f33b5b53e2b4c879d5"
  },
  {
    "url": "lessons/setup/setup.png",
    "revision": "3784f473b750fe9085f1591aea906915"
  },
  {
    "url": "manifest.json",
    "revision": "51c2c84c99523c55fe91bd0d89719686"
  },
  {
    "url": "new-comment.html",
    "revision": "46e9caf22cabc08514ecee1af6567db2"
  },
  {
    "url": "new-post.html",
    "revision": "edb4c043b2308c2453624902d45d9085"
  },
  {
    "url": "students/index.html",
    "revision": "04c6353199cf6b03ac5997c149108211"
  },
  {
    "url": "students/minenhle/cv.html",
    "revision": "52c297b6360b175231ffe4fa655fbeb2"
  },
  {
    "url": "students/minenhle/index.html",
    "revision": "d2af4d2089c599668e145d5ce907885b"
  },
  {
    "url": "students/minenhle/progress.html",
    "revision": "96483b49727971113d4d511b3c67719d"
  },
  {
    "url": "students/ncamsile/cv.html",
    "revision": "52c297b6360b175231ffe4fa655fbeb2"
  },
  {
    "url": "students/ncamsile/index.html",
    "revision": "d2af4d2089c599668e145d5ce907885b"
  },
  {
    "url": "students/ncamsile/progress.html",
    "revision": "9a74c7fb0e20916e24bf452ecbe3c26d"
  },
  {
    "url": "students/nokwazi/cv.html",
    "revision": "52c297b6360b175231ffe4fa655fbeb2"
  },
  {
    "url": "students/nokwazi/index.html",
    "revision": "d2af4d2089c599668e145d5ce907885b"
  },
  {
    "url": "students/nokwazi/progress.html",
    "revision": "96483b49727971113d4d511b3c67719d"
  },
  {
    "url": "students/nonhlanhla/cv.html",
    "revision": "52c297b6360b175231ffe4fa655fbeb2"
  },
  {
    "url": "students/nonhlanhla/index.html",
    "revision": "d2af4d2089c599668e145d5ce907885b"
  },
  {
    "url": "students/nonhlanhla/progress.html",
    "revision": "96483b49727971113d4d511b3c67719d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

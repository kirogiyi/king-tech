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

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b0003b6bc682e5db8c1cb975bce7a43f"
  },
  {
    "url": "arts/exercise.html",
    "revision": "5202931dd51586f1bec835b629a82848"
  },
  {
    "url": "arts/week1.html",
    "revision": "24d543993b9d13b3bae937d250de32a0"
  },
  {
    "url": "assets/css/0.styles.03cbd86d.css",
    "revision": "ca7b09558a1362d8d5c2edb7efbcde76"
  },
  {
    "url": "assets/img/iconfont.94beb593.svg",
    "revision": "94beb5933eb6d1c7b351efb6ff0809c1"
  },
  {
    "url": "assets/js/3.9b7b2394.js",
    "revision": "d0954a095446b5951fb9efa178db4011"
  },
  {
    "url": "assets/js/4.3c1a3980.js",
    "revision": "a18cd7ca36d4c2c246286543813d625c"
  },
  {
    "url": "assets/js/5.5c30a2bf.js",
    "revision": "11fdff21645c32a4a2cbf2666f406b97"
  },
  {
    "url": "assets/js/6.b45f8f15.js",
    "revision": "fb3576d6cf9281a1efcead3bd614420c"
  },
  {
    "url": "assets/js/7.14d76295.js",
    "revision": "779b459d6c378c60005316a81a10a70d"
  },
  {
    "url": "assets/js/app.5b5d5fe2.js",
    "revision": "4f43df50721b2d706fd316b24c4be7e9"
  },
  {
    "url": "assets/js/vendors~docsearch.646363fc.js",
    "revision": "49864a726c79e056380de4acfff3c6d7"
  },
  {
    "url": "img/logo.jpg",
    "revision": "da58f1881241580d162af119da345bfb"
  },
  {
    "url": "index.html",
    "revision": "16c21d9566f83aa709ab599bda9315e4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

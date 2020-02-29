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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "25f3a05ee7458c1f513f57757e10b4f9"
  },
  {
    "url": "about/index.html",
    "revision": "edfc6d2e6fcb59ef398e5ece2d30efb9"
  },
  {
    "url": "about/test.html",
    "revision": "974335f556f554752a088b096b692d15"
  },
  {
    "url": "algorithm/algorithm1.html",
    "revision": "a7f6252360073c40f0dbd4a5c159e5c8"
  },
  {
    "url": "algorithm/index.html",
    "revision": "3cc9e7e55513de55aee8e60760dbee8c"
  },
  {
    "url": "assets/css/0.styles.9cec21cc.css",
    "revision": "b8834b79df784ee505b23bdaa770b64f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.46517811.js",
    "revision": "dceea8417642f1a36a8310d65bcb3863"
  },
  {
    "url": "assets/js/11.16168e84.js",
    "revision": "3ef20d845ecfa8135bc4e68b8c30a542"
  },
  {
    "url": "assets/js/12.e846eb37.js",
    "revision": "a14a747d7a66dab1110362a3526326dd"
  },
  {
    "url": "assets/js/13.525c1db5.js",
    "revision": "714d90fa27151049e897a2bb4b5fbed8"
  },
  {
    "url": "assets/js/14.f9abd82a.js",
    "revision": "c801ed677333d9da7f9b54db5ad76d46"
  },
  {
    "url": "assets/js/15.61a70d3e.js",
    "revision": "57dd5b1725ae22d067168bee6b330dc1"
  },
  {
    "url": "assets/js/16.47d05345.js",
    "revision": "140b61d30964d1f3633642a041af334d"
  },
  {
    "url": "assets/js/17.bb2034f3.js",
    "revision": "82c891d471e067370215d88645549d92"
  },
  {
    "url": "assets/js/18.ecedba39.js",
    "revision": "608263bbb69a15a45c401d7cdb819248"
  },
  {
    "url": "assets/js/19.7d1ea5ff.js",
    "revision": "be9c7a0b8d4480b1e80dd909f11e8a92"
  },
  {
    "url": "assets/js/2.e49a44fe.js",
    "revision": "2892100ad16eda6ab401d42a053974f7"
  },
  {
    "url": "assets/js/20.c68bb97f.js",
    "revision": "eb4bcfe6eb69b3a467bbfec0edba0632"
  },
  {
    "url": "assets/js/21.8781e3cf.js",
    "revision": "d2d0a5a61222dbed1a9000348c61be2b"
  },
  {
    "url": "assets/js/22.d13b610d.js",
    "revision": "223d99cedb2c9a52935c45c384b290aa"
  },
  {
    "url": "assets/js/23.e1b9ae82.js",
    "revision": "aa3441ecc106e4a62d32d0ebdb922a88"
  },
  {
    "url": "assets/js/24.bc8e2fc2.js",
    "revision": "d72f878cf44528d0c1f527863935e854"
  },
  {
    "url": "assets/js/25.b960a2a2.js",
    "revision": "de5e4339c4b9449de6c2174c73c671c4"
  },
  {
    "url": "assets/js/26.1357212e.js",
    "revision": "dd960c0d017bc1432adace6517ccf6b9"
  },
  {
    "url": "assets/js/27.e0a7d0d2.js",
    "revision": "3f840aecfef757974341945b89f5ecbf"
  },
  {
    "url": "assets/js/28.7e6873d6.js",
    "revision": "6b8180cc65e9041af47e93a65b7aad0e"
  },
  {
    "url": "assets/js/29.5fd2f8b4.js",
    "revision": "4fa55e0d920aefefab1103bbfccb0df5"
  },
  {
    "url": "assets/js/3.3c3493ea.js",
    "revision": "07b499f72330d9a2fa4ee32401d23f64"
  },
  {
    "url": "assets/js/30.03b8a3b3.js",
    "revision": "ecaca2130b36571c6350e1c5f2fb310c"
  },
  {
    "url": "assets/js/31.7984565e.js",
    "revision": "857991e3f08cd33df8cdef24ab146bc6"
  },
  {
    "url": "assets/js/32.2fbc0eb4.js",
    "revision": "9959f9bd06c4ed08d7b2ef64f826ff69"
  },
  {
    "url": "assets/js/33.808dea4e.js",
    "revision": "1add70d53e1e86c4b2caeb89140efc19"
  },
  {
    "url": "assets/js/34.8df04440.js",
    "revision": "677f7fcedb0913ef91423121c639c59a"
  },
  {
    "url": "assets/js/35.bce321d2.js",
    "revision": "897a2aba7d06be16deeb660378626d93"
  },
  {
    "url": "assets/js/36.c9f8f55f.js",
    "revision": "26f5922c0b1539a6e859ecbb12e08035"
  },
  {
    "url": "assets/js/37.23f4d80a.js",
    "revision": "c4fd1343154d86e9c79ef1a5b2906598"
  },
  {
    "url": "assets/js/38.51f48b5f.js",
    "revision": "e30b0e0e31b39286013857aad9d492dc"
  },
  {
    "url": "assets/js/39.0673a29b.js",
    "revision": "176aa354c1ae8e8ff61e5bf3ce11f6c5"
  },
  {
    "url": "assets/js/4.e54e9c7d.js",
    "revision": "787d3fa5bd0a2cdf3e00c79bec03f933"
  },
  {
    "url": "assets/js/40.8629ef66.js",
    "revision": "40b991c4dc0a35eba190426311c06103"
  },
  {
    "url": "assets/js/41.374cfe03.js",
    "revision": "49dd3760695ac7da81089911d6804260"
  },
  {
    "url": "assets/js/42.733b34e3.js",
    "revision": "b1809ea6af92a455f59d3cb0f0d40734"
  },
  {
    "url": "assets/js/43.78d14b08.js",
    "revision": "a0322ad3dd2919e893de147645684ee8"
  },
  {
    "url": "assets/js/44.d0156fc0.js",
    "revision": "22adf83a2d180da31a5dd4bf5e784113"
  },
  {
    "url": "assets/js/5.7d496d6e.js",
    "revision": "f01aad1cb89714a427173cdca0824cfe"
  },
  {
    "url": "assets/js/6.f596ebd1.js",
    "revision": "5a13662d39787611fbf7104f577198aa"
  },
  {
    "url": "assets/js/7.d40b0467.js",
    "revision": "67dbaf2bf5947245782c899d84134f94"
  },
  {
    "url": "assets/js/8.14afb987.js",
    "revision": "6b080de04cca58aa652b389c0776367f"
  },
  {
    "url": "assets/js/9.5bdba3ea.js",
    "revision": "9015eeaedf997b4bad62f498b3329073"
  },
  {
    "url": "assets/js/app.8014f604.js",
    "revision": "000bb7b323989c7e76305325ed215dd1"
  },
  {
    "url": "css/css1.html",
    "revision": "26b71876175ae34b219c7ec1641c5d26"
  },
  {
    "url": "css/css2.html",
    "revision": "63f9bebdf961230054722357674350cb"
  },
  {
    "url": "css/index.html",
    "revision": "f96d2c3ec8c6dd6a39b5c9cdd2d26f54"
  },
  {
    "url": "database/database1.html",
    "revision": "db5fcf8a28b488917aedba3cc7f1151e"
  },
  {
    "url": "database/database2.html",
    "revision": "73361a513177fa27aabc66012f4c9bbd"
  },
  {
    "url": "database/index.html",
    "revision": "78932fdcc1d538faee2042b480e374c8"
  },
  {
    "url": "designPattern/designPattern1.html",
    "revision": "4546939e105257a1728f681aabe715ee"
  },
  {
    "url": "designPattern/designPattern2.html",
    "revision": "4966700f16f041f1c4a9a0fb920b7ca8"
  },
  {
    "url": "designPattern/index.html",
    "revision": "ccd0c32b6ab5b2ccf82d34fe9d483f5c"
  },
  {
    "url": "framework/framework1.html",
    "revision": "5a551c9e679a6237f607a344472f3cc4"
  },
  {
    "url": "framework/framework2.html",
    "revision": "a5e7bc5bb14fb9f4a6bceb775d1d3c91"
  },
  {
    "url": "framework/index.html",
    "revision": "261cdafadd45c19ab22ac34e99350f87"
  },
  {
    "url": "images/headimg01.jpeg",
    "revision": "2ea42270b28360d6409def5172acb30d"
  },
  {
    "url": "images/icon01.jpeg",
    "revision": "5701e1f0f68b81893a6a327888f3a2e0"
  },
  {
    "url": "index.html",
    "revision": "4cce99098b0b0a510b6a667d3509aefd"
  },
  {
    "url": "java/index.html",
    "revision": "b33a9065251b78392441694387e208f0"
  },
  {
    "url": "java/java1.html",
    "revision": "46d5a7df7b69a83bc9309935701071ed"
  },
  {
    "url": "java/java2.html",
    "revision": "00a1294604e7c6548999a0dd4ec7ce1c"
  },
  {
    "url": "javascript/index.html",
    "revision": "6712d16b1c2ad9467f76cdfcf0bef964"
  },
  {
    "url": "javascript/javascript1.html",
    "revision": "0268f2a1566006d2d4ef201e4b1adc5a"
  },
  {
    "url": "javascript/javascript2.html",
    "revision": "b4ba8069a527632f41c5e9bf29e1dc92"
  },
  {
    "url": "more/test/index.html",
    "revision": "c65dded220a5efe75856ec545eb54c20"
  },
  {
    "url": "more/test/test1.html",
    "revision": "26a8eab473d37b89f0daa8aeba6c3bc2"
  },
  {
    "url": "more/test/test2.html",
    "revision": "c663bd6ecfa15d460faaccc18183c764"
  },
  {
    "url": "network/index.html",
    "revision": "5e91eeab0887a8731ef7cc4f4d51661e"
  },
  {
    "url": "network/network1.html",
    "revision": "4b923c7f11783935d71542014db206e2"
  },
  {
    "url": "network/network2.html",
    "revision": "1bb35400feb20a9f164f74f9199f6f9b"
  },
  {
    "url": "other/index.html",
    "revision": "91f719f680ddf133776a5f2d5b35a643"
  },
  {
    "url": "other/javascript1.html",
    "revision": "842e61a23339c972d724e7af11321256"
  },
  {
    "url": "other/javascript2.html",
    "revision": "8b351a956e236547f06a19296013afd0"
  },
  {
    "url": "structure/index.html",
    "revision": "197bf909fbb0072f483e6d77a12c52f9"
  },
  {
    "url": "structure/structure1.html",
    "revision": "52dcdba79d511534b5109b7305fce387"
  },
  {
    "url": "structure/structure2.html",
    "revision": "04edcd69b18316b331be6d4eb8ae55a5"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "2b778ade3a48a628d717df7991ae92ea"
  }
].concat(self.__precacheManifest || []);
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

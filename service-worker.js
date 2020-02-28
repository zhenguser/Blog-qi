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
    "revision": "38ed840a7b4a58c3d4bdccbcabb4c0cf"
  },
  {
    "url": "about/index.html",
    "revision": "0bb24178ccf7b077aa3f0f1dbdd28bff"
  },
  {
    "url": "about/test.html",
    "revision": "2772781750bc37d72e8b7fffffbd8fd7"
  },
  {
    "url": "algorithm/algorithm1.html",
    "revision": "4181bd0c38eb49c8926abd6c7facf95a"
  },
  {
    "url": "algorithm/index.html",
    "revision": "6975c11cafa72db488be84dc9a8dbf9d"
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
    "url": "assets/js/10.39e85e67.js",
    "revision": "25918bf7383e782b952fd97d3e8e2762"
  },
  {
    "url": "assets/js/11.4a481e55.js",
    "revision": "c37d45b9160a5ce30df1941fc7b427d9"
  },
  {
    "url": "assets/js/12.d7fc4c46.js",
    "revision": "61773cc91634fe73942c0a2e541c25d2"
  },
  {
    "url": "assets/js/13.dad02f74.js",
    "revision": "e4d833728330e20d5d4363a2918a9271"
  },
  {
    "url": "assets/js/14.b5630eb2.js",
    "revision": "0da1c51d05dc40ebbf815fcc2189635e"
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
    "url": "assets/js/17.175936f3.js",
    "revision": "f7786b3c4309f35b8eca617595131d11"
  },
  {
    "url": "assets/js/18.85deb8b7.js",
    "revision": "accf1f478a79c04e64507bee35805bd6"
  },
  {
    "url": "assets/js/19.b8e41867.js",
    "revision": "79b7c0af969bd1842a5ad54fecfbdef1"
  },
  {
    "url": "assets/js/2.e49a44fe.js",
    "revision": "2892100ad16eda6ab401d42a053974f7"
  },
  {
    "url": "assets/js/20.8ca37887.js",
    "revision": "34808d8b01f3778d733c97834ac87468"
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
    "url": "assets/js/24.5ee413db.js",
    "revision": "e49ecb3121b0ec48ba04919b19a3c620"
  },
  {
    "url": "assets/js/25.b10376f4.js",
    "revision": "c8a297a27adbefe1c6724903d76b6c5b"
  },
  {
    "url": "assets/js/26.1d7f32b4.js",
    "revision": "f12af318daea8a4b03fdb073f7aa0533"
  },
  {
    "url": "assets/js/27.ad4e6127.js",
    "revision": "eeff8c6048727ef6de7dd1537b99f11d"
  },
  {
    "url": "assets/js/28.7e6873d6.js",
    "revision": "6b8180cc65e9041af47e93a65b7aad0e"
  },
  {
    "url": "assets/js/29.4c97869a.js",
    "revision": "578644bc28e0c5d55ed61dc2f93b53c6"
  },
  {
    "url": "assets/js/3.3c3493ea.js",
    "revision": "07b499f72330d9a2fa4ee32401d23f64"
  },
  {
    "url": "assets/js/30.10d04031.js",
    "revision": "69ab16ab318969ca8324aa5fae5bded5"
  },
  {
    "url": "assets/js/31.7984565e.js",
    "revision": "857991e3f08cd33df8cdef24ab146bc6"
  },
  {
    "url": "assets/js/32.915f37b6.js",
    "revision": "59a37f332f941ad22cc21121c004bfb5"
  },
  {
    "url": "assets/js/33.a67d237b.js",
    "revision": "a4aea411abf4af5a3a7b7b1ad600d894"
  },
  {
    "url": "assets/js/34.c22c4088.js",
    "revision": "34ac1670b1bf525f62f1379f9415a543"
  },
  {
    "url": "assets/js/35.03d021e0.js",
    "revision": "01d5cf4bdc0ec072baffa30e1efce786"
  },
  {
    "url": "assets/js/36.549dffd4.js",
    "revision": "3bbd106d252a708561c7ae4981aa9b03"
  },
  {
    "url": "assets/js/37.e51549af.js",
    "revision": "28c55d6be537bd07b9b00e66c06267d2"
  },
  {
    "url": "assets/js/38.b9dba567.js",
    "revision": "b97da1c4b4d03ed6f5cbc478ffb48ca4"
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
    "url": "assets/js/40.29c67762.js",
    "revision": "0113b4d05462ab067d8e9a6a1d675a38"
  },
  {
    "url": "assets/js/41.c9e46072.js",
    "revision": "9d3b16a30ffe1958015cbfab919d95e3"
  },
  {
    "url": "assets/js/42.1215a88f.js",
    "revision": "5c86c0fceef302ce5b551250262927ce"
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
    "url": "assets/js/app.4d605efc.js",
    "revision": "300f92359b8f6eedb2fcfa946daa0377"
  },
  {
    "url": "css/css1.html",
    "revision": "99f96a382025ad0d194d64e0daaa826b"
  },
  {
    "url": "css/css2.html",
    "revision": "277bbecea09509b27d7348815a450bbe"
  },
  {
    "url": "css/index.html",
    "revision": "5ca2b92bfd2485ead7461fd19b436ae2"
  },
  {
    "url": "database/database1.html",
    "revision": "166b8ce0b35c79b698a701867373c379"
  },
  {
    "url": "database/database2.html",
    "revision": "5aee2add5dfff04ea0a6a63a158d19bb"
  },
  {
    "url": "database/index.html",
    "revision": "346bd40e2c4e1687d9c811bbf6cc3c1a"
  },
  {
    "url": "designPattern/designPattern1.html",
    "revision": "1dfb77119b7fcec1ffd7e6021ea9f124"
  },
  {
    "url": "designPattern/designPattern2.html",
    "revision": "4966a10fc6a3b4dc5b0078291c298110"
  },
  {
    "url": "designPattern/index.html",
    "revision": "a2a9fdc44fe6e0355a38edef01c41c11"
  },
  {
    "url": "framework/framework1.html",
    "revision": "b028ac9e732a1b4e9721ced697b4dbcd"
  },
  {
    "url": "framework/framework2.html",
    "revision": "93a93113848149c923af6cc78770c208"
  },
  {
    "url": "framework/index.html",
    "revision": "ac99c91065aebeed2a632dee5006645e"
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
    "revision": "af54f20e42df3e9f5f369e0d5ea2042e"
  },
  {
    "url": "java/index.html",
    "revision": "dd1607a523b51440e107b0115626a697"
  },
  {
    "url": "java/java1.html",
    "revision": "9887a017e70231271abd1d9922626799"
  },
  {
    "url": "java/java2.html",
    "revision": "1593dc16aaf4da753e812eb8f9166f63"
  },
  {
    "url": "javascript/index.html",
    "revision": "69b709e50e6ea8c3d8d65e257434dcf9"
  },
  {
    "url": "javascript/javascript1.html",
    "revision": "8c193db68487c96d859513447f357bbe"
  },
  {
    "url": "javascript/javascript2.html",
    "revision": "f242b428cb5343bea99c6345dea66eeb"
  },
  {
    "url": "more/test/index.html",
    "revision": "c2c636d2c267dc98565ebe2c37cc1e68"
  },
  {
    "url": "more/test/test1.html",
    "revision": "514e8df8c715899c8f298cd6d1e26ed9"
  },
  {
    "url": "more/test/test2.html",
    "revision": "0856896634fc0452adc8d9baa6632356"
  },
  {
    "url": "network/index.html",
    "revision": "7c9ac563458ee274a50890aa09314a58"
  },
  {
    "url": "network/network1.html",
    "revision": "c8211d8dcb0d3f56b58dc180fcd2bd23"
  },
  {
    "url": "network/network2.html",
    "revision": "ea104ef1a3471a3a50a598c3d97e6d9b"
  },
  {
    "url": "other/index.html",
    "revision": "bfe08f9d3a6101bb0b3bff7fc73aee56"
  },
  {
    "url": "other/javascript1.html",
    "revision": "1758428cb89b6c7dfd0d7c68b0d98796"
  },
  {
    "url": "other/javascript2.html",
    "revision": "3ffd01e89d76f918e2405a182a418a7c"
  },
  {
    "url": "structure/index.html",
    "revision": "d17f5af58cf9ea4cfc3d8b6caf4e3f49"
  },
  {
    "url": "structure/structure1.html",
    "revision": "45e5436f1164823b3ab0997972569add"
  },
  {
    "url": "structure/structure2.html",
    "revision": "c391756d7859afd26e8f138b08478d8c"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "98dd17ea4103774d3092308fd96b3486"
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

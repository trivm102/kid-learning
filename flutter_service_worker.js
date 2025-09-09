'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b5dcb77f410fe80c86f4c1a6130f6eea",
"version.json": "2c2dd8e4f44afb7c21b204994c78e534",
"index.html": "15bc1b2a4d993e0dc3f0d4799ab93a89",
"/": "15bc1b2a4d993e0dc3f0d4799ab93a89",
"main.dart.js": "022c5ca2385ad97d70dc6717a4523de5",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "a9acc61aa3297627c8c4c476e1f63eca",
"icons/Icon-192.png": "a9acc61aa3297627c8c4c476e1f63eca",
"icons/Icon-maskable-192.png": "a9acc61aa3297627c8c4c476e1f63eca",
"icons/Icon-maskable-512.png": "a9acc61aa3297627c8c4c476e1f63eca",
"icons/Icon-512.png": "a9acc61aa3297627c8c4c476e1f63eca",
".github/workflows/static.yml": "6dece455dc91e6f867499fabc7ac5be9",
"manifest.json": "e91a4c2f4b7ee29bca6528d47f04d74a",
".git/ORIG_HEAD": "925845b90e5cbe6511390d39dfb743e8",
".git/config": "04a956628e27ea90e8333a9a9a84c09c",
".git/objects/59/2b3e5bfa9107e2341591597e25a65508c348ad": "117089a9fac8705978d7667ef811a0e1",
".git/objects/59/9508ff33421509a557f1b59e47f5cedb6d9172": "946d431aad78a66e2ea65a7d7f36d17f",
".git/objects/92/944a5356e224fb26537ba20dcd8d9710a83389": "2b089956f3f392c26f8a01804e4b6591",
".git/objects/92/a5386e672dede8a6e4d0a11a322081cfa0edaa": "92064a9efd9056cb43e446abff3d80d4",
".git/objects/68/a744a871903c5b898c1f1a8ae07ad0dca4b582": "411847279660dd7837691998dd63863e",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/9e/431cb9604ef1b762102e382180ae75e1b170a4": "476ffed0391817bfa65c399d11bfbb33",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/69/d56621042351238744ad48c1926dfc2a87ee9e": "69838cf20bbbc00d81773d3055d2d693",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/56/84e4ff7a3046a501db6b833b8016438ff91242": "6bc38ca3cb8e1ee4dac290b5d69431b6",
".git/objects/51/bdf54f55db07807d6999ce756a39a1fa1366d9": "b2a2303ba259f6f46bcfd509a05fcfae",
".git/objects/67/764a9776ae4869d5173bbe7b389e8c24f58e38": "b163b442ff6bdbb254f0df5845714223",
".git/objects/93/c841e9174466bf4771f0a9279394224272de1f": "fa12fcf7626cf87c8c9ce134e9cd8ec2",
".git/objects/0e/8b41ca1e9c1432b2c92c48a3f1d07a55905d2f": "edf37991a682e04d2691e0c8b7d88a12",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/05/7b6dba1139327f94494a0cb0a517019dd39b93": "40eeebfb380486c335a222c8123cb1ba",
".git/objects/a4/4d5d2140f57ceff77d283caeefc37619e3cf7d": "8def360fa4a86198e8e384e2d122ae9e",
".git/objects/b2/72878d3e08a594334730243ec39cf9a4401bdd": "d7962acf97bb56f8bb51930b4d1523f1",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/bb/96852af5e4c475da53e0f3f90c2fa19cf0d642": "ef1c2ad58396ad6147dca90a6aea093e",
".git/objects/da/22a25f4aa28c99809120aff1fa0cbb9f574f18": "bb2f0388bcd702b71f1b3c7379355fd0",
".git/objects/b4/704e94c036671313f5cf7cef9f6c06f8c26791": "0cc506f03438dee006494074e5ebfb27",
".git/objects/b4/a3d83d95fa57a8d11bd1d2cdc19d263e1cf9ed": "a81b7d126f0678b96c469e3953bdf3dc",
".git/objects/a5/665725b6fb8e26fef58221e003eed32b5be2ab": "39c17e1ba46df5a2040011d6b07a84f0",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d1/b539b0c568fad704e7baef0e46fa010068ea3d": "635151630c82a18bf8863b34753e4ebf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/80bb2b5e786e0a93683e1c765a5f9ed1524e34": "eb4562c3b6e5d2c862bb6ddc8fc19a26",
".git/objects/e2/f1d7c272ddece989d19e70b10f9691cb2d34ed": "3bdaf4f8e48294ff8b4270f3a5d90d72",
".git/objects/f4/0505f5eb8440b73a60660dfd9a3bf467523ba0": "cac650fd85f0411cf092c6668fc204f1",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/d21e205f348d6388ac30a33467d3fc88bcf6a8": "d64827fa19cfebee4fbdd9f6418ddcbb",
".git/objects/c0/c29b0ad2a13b871c57e29b04822698355c4765": "c2f0ac66c9d4e10c8a1fe51c2300e1ba",
".git/objects/c9/a784264f4536603f6c8afae56dc6ef5de4d002": "fcb6d32c7204f3d3a2de7cf165a4ffc5",
".git/objects/c9/d2a30c82997c534711618514cf6f524b365447": "d251a82956d221aa24e0a2249a3f6f62",
".git/objects/fd/e221e2e73e035a0993f4d68d235933e5ea907e": "7f8cb21fcc57aaa433bd0ca594fb3a49",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c9e97c91d0ca32002d6eba53cf1981031047bb": "05d147ca28fabf58f251c18d62f64056",
".git/objects/e3/38ba33baa2656a05807be3198b70a610449651": "8fe7e4917a36e85400802b6f6e0ba0e0",
".git/objects/cf/c6dd5d0638f1b19c820364ccff953dee3c5e29": "346ed16e62efc3bbffffd11d251a117d",
".git/objects/e4/58bffdf16f6c4854ee2f057d75d0e5fc31d868": "8b042ec6a4de2781ba0dfe0580f55355",
".git/objects/fe/a4ac4749b0960a17e3313f3b280ca57c275617": "cf97369296ae48dc7f7695883e4428a1",
".git/objects/fb/ba5accc3852a82250ee9e85cc28509e3f50704": "e901fbb81581efe5bb0a7ce69c4aa8b2",
".git/objects/20/e17038d9281120c5510a8b1fd41db04580dcb4": "2530869aa3e8085bb6288ace4f0bd8af",
".git/objects/4b/411c2fa3822eca8b0029dea3d0ffd780b13f6a": "2085789308f65101dd02923d8cbd92f0",
".git/objects/7d/bca9f68d06bc3d27bd2471d07b3a102c15d77a": "b05d61269c919267eb868be26b5914bc",
".git/objects/42/b75b53899e1871b58c01610b462f2938d5de23": "1d603d11e66039e98102966bc26d9926",
".git/objects/1a/3fb44ace0ff259c9c46e766e543f9abfc1492e": "3e14e635968a619d85dfdae6f715b839",
".git/objects/1a/bf7bc031052add35a5fb309229793517f8fe3b": "62a8610520414bbae67309ec2306bc0a",
".git/objects/28/e4cb444af560a1f47ae9b9821bcc1bfab236b7": "221c7433c1a71c4ee3dece2c84c548ac",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/5836fe45f5d417637e206179c894c2be4442eb": "acb68fd8f080421488d77955b2986d7b",
".git/objects/21/792445cabee72be7a72328168a6567530cda39": "e89ec9b2044d80901f9cd70905261f93",
".git/objects/4d/2926400cd5e3586ec2be421d37f0594baca723": "dda627a037c9dd8cf6ea4cc9a7ba4849",
".git/objects/75/1e68e8a04a83e545106594fcf500d24d2a0253": "1aa0d41b3ef6cf8c70b1e1d367607d47",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9eacb837d84348cf33e30d4a72bf6b7f1075a6": "df2d40b608e45d2bfa45d3cf3bbef77f",
".git/objects/6b/7e0a7e18523a15de277a41155d88e3952ac680": "cece631f868ef1c46a9aba6a53c51f3c",
".git/objects/38/6f2d9deb17b82b0e334b18a45d05d11f7bdaf1": "413d63162590508042a1233a1b9818ff",
".git/objects/5d/16aa22be58e5c946611e8747fc87799f3c44a5": "5489caf00fda8866d35b284abd17de2a",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/96/147e10bb159429eca6cb8f1069a8da49c44a8e": "62d832eb322d5ab3ae940cd4462e55d6",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3f/b504cfeba76acdfeba541396cc617bf7180ff9": "a4a9521840d20d3b18f0e87ec83808c6",
".git/objects/30/5d5d9cf280c55ff02f0be11af9e3b1b1ab18c9": "412ab46536c3bcc8ae133054b74ac42b",
".git/objects/5e/3d81656377b888a6ae3607d99657746f88880e": "dd3d515b278d94b533719d8eb669762c",
".git/objects/5b/04d5a61009c7655274eb3c02aab4fc3c0fadc0": "cfc08497e6ba3d6a6249a42b7e8a64a2",
".git/objects/6c/7676dfcee4c47456ba50deac74a98b6da59d3f": "175dc23ccf53b6e27219c6ed276cb61a",
".git/objects/0a/53e196c670b0824cbe79fa1d8e6788a5c50d96": "f95460b6bcef471b1933cb3bf40cb8de",
".git/objects/90/700f6b6db50434b5fa0469f61cb2676b4c1a12": "fdb57275490f41722a093a3283a8c85c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/ea1e8fdea42390175a85973a333aead6bc0a51": "76f55ea500364e6d696090b7e45d57cf",
".git/objects/a7/2b40c761a9868d5c9922de1a0f06abb58d4d39": "81ef6d7c4f52d60c13a265308a2468ab",
".git/objects/b1/5fa15cefe6f6c77c7758fbb78aaa11cbddbbe7": "856d7baa9c0cc0b9c3ce04ab1123d28e",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/dc/23520f22f45037788e0dc9f8e1a77e11c81864": "b85804a7534dd1d1342cc390f23877d8",
".git/objects/d2/ee37f114c1135820e6dc0296b41494400a495c": "167cb53558677e2c0141807ba2976413",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b4632c8ef5a36a957956db7018040d58c2223e": "7dbcc72f1ae302646125df57c4ed0a0a",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/e401cb7412d39a674d9883745c00468f0e9693": "4964288bf30295205b719c2ee108d448",
".git/objects/ea/fa44a2680a082a3877a282dea563bfedce5fd2": "861a6c7071260918503e78eda7155418",
".git/objects/fa/e9a14650c64da0fc040d30d47411d25361409f": "cfa65417227b8ac26bbe8b44d8e21379",
".git/objects/c2/81192ba4c4c7fb073e64fc3e0b48c101470a52": "fa6983beae93a4fd5afd707767d52bbb",
".git/objects/c2/fcd8680e6473e6e037a8eb52b85443a3af0e02": "50be006e5b6695a3fb6e038ec7eff76d",
".git/objects/f6/ade7bc4455fb1f7caad5edf2e9086c584ee647": "de00a1dfee01a56ac11cc577f78b94a3",
".git/objects/f6/2f0b3beca7960a1d1c7afe5b3416bd3852bbba": "ffb640b84045b8f4bfe64e0af21ecfe2",
".git/objects/2d/6e8ec4d38e335b4d991f4f3df2f474ab26327c": "25c4e5465877ac4573f0e22b0cc3c6cf",
".git/objects/2d/db7a7f173f8f40ceb41c5dccf73f864d4c4eb6": "bdfd0b142acbe720a962c5c08b01ebed",
".git/objects/1b/ee8a5697e355dbd1eb2e905ee1af220ed657a2": "e34d38a900de8267757bd127be9aca58",
".git/objects/77/0e541ae919623119e854a5d8a8c2a28ff70774": "8d39169280f095cf500ebab84f6e6bf4",
".git/objects/84/5be9ac25d93296a896846bb373fefc6449a37f": "b7b16dae58f4253ad78bba070ce51602",
".git/objects/84/3b699387b0d72cf4a1551a4169bc49beb98461": "7c0c9d34ae6a22ead470d6f4f005d849",
".git/objects/24/d5a352ab18e63236050e04ea6370b87ad88afa": "97c8734341a3e56f74e6f4bca6869c8d",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/8d/2c7598f609ca0ac5e370b324e5ca7b19b5d6a4": "4876d78000043bab4bd40abc1a9aaf04",
".git/objects/15/406d3ab474671719eeacd55e99f92355b2e426": "8f94c439b7de83bbf096054698f6d16e",
".git/objects/15/6b66d142238b00065f71bff6f462fe1a5bbcc7": "8bc3236d0432feea9e8bd0a77bfe0708",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/e0937948272dc2b53a1929a094173576a08295": "80a43df84804a607af4ea313a47f7c34",
".git/objects/2e/6c2352fc8441ed3bf9798a0ef2d2f4665342f2": "2bcf8f13f35008a519f662dd13625b11",
".git/objects/2b/663cb194d5afa822268b633070aad24bbd016e": "aa7035da21f68a80e77ae8205a3d7d47",
".git/objects/7f/ecb82e30e219c4aa02a2712ef3abdc09ba3644": "adbf7b3cb868bd9cf916b3962b18ad79",
".git/objects/14/9796949c0385cc933fa4fe9ef12df744b0b1a1": "14a63a4e401d97c61cc141dfb29b9bf7",
".git/objects/8e/b2b01c3ffec5c85eb312e32adae84fd1808ff8": "1357cbfccb5e48f21b720354f4908bb7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "40b23a48511bbca7e8b84afd46c4fb6c",
".git/logs/refs/heads/main": "23c74a19e2826e83bda8cfef49844790",
".git/logs/refs/remotes/origin/main": "b6b29bcbe5612fc6e631a57c350848f1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f84351d07c9233c2c260ca5603963d79",
".git/refs/remotes/origin/main": "f84351d07c9233c2c260ca5603963d79",
".git/index": "a177b74c21f959f9dabaf4ec76f2db5a",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/FETCH_HEAD": "aecbff9ada8d2f9acf694f666263e9ac",
"assets/AssetManifest.json": "f70565673602a09daeae0e6c2e8d7534",
"assets/NOTICES": "75778571db0434fb7e4b1a7ac041b9de",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "14358fd7a0257a9dac48e29413ca3e74",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "169722a75ce951a7fa72b1eb4363a909",
"assets/fonts/MaterialIcons-Regular.otf": "678ad6d4afd4bbd568500053ff6b858d",
"assets/assets/dog.jpg": "36381a1160db36b788d092956e5f3382",
"assets/assets/horse.jpg": "2d6e96da7565e2366d0e8662f43dbb09",
"assets/assets/rabbit.jpg": "f0f9417ffd2a65ffdb088442bcf268cc",
"assets/assets/dolphin.jpg": "03fc4846453d9ea3ebc06166bbe92c49",
"assets/assets/elephant.jpg": "1a1f5764942cd2ac83d39b875aab6fcc",
"assets/assets/lion.jpg": "5907917f60ebb7314550fe303612e987",
"assets/assets/tiger.jpg": "de659b4815e17435180edf4caf88beab",
"assets/assets/bird.jpg": "e71a61e521b932f30151686c81f3bbec",
"assets/assets/panda.jpg": "49b1651ce003d616499c6549b6511f28",
"assets/assets/butterfly.jpg": "93ae9a81b0a1f7b61de3699c8ae326ce",
"assets/assets/peacock.jpg": "f9c6b9dc3d350f9d728e8ac01e03a941",
"assets/assets/frog.jpg": "212252f5c5be165c3cd02bf4961fcb80",
"assets/assets/giraffe.jpg": "1171f25dec00c2b5434b8b8bf11cb4c9",
"assets/assets/crocodile.jpg": "cb8c7de77b11274e62e745c7fb9ce5e5",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "15b6a63bfa89b734e3d0e0812b215d98",
".git/config": "7427bf0bcf87cc9119e4c0656a3e3a47",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7aa25cf5931695e3fa5cc4a88a04b8fb",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "584c33236edf9f8d06fc575b0bb17953",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d11a738e19d4eea4118e603c3115d4dd",
".git/logs/refs/heads/main": "cd8d5b9134d93a6c91ac2230d139acac",
".git/logs/refs/remotes/origin/main": "ab5edad987099524e32bd9266e88703b",
".git/objects/01/71a5b9069807a2b0d83ea775f3978ef0877ce8": "3ed80a51b683ae99918798e0a21443e7",
".git/objects/01/73047041d3d1b3b6c3817333c736f97a116bd7": "d50e3c5076ea0c84df578a87dc89faf2",
".git/objects/02/012760d3cead8ddb8c3a846e360404597d5554": "2fc005693ad698b240875782553bb25f",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/05/b815a39e21a908c783c7de205946f5c5d49ebf": "e700ccf040a50445e3f0602d2d56d776",
".git/objects/06/efe278900f5c1baac0f966f423969c9468e22d": "a407a5bb088521052ff3c973d28211bb",
".git/objects/07/8ac105a6c5568cdfa7a2cf14822513e878f1ae": "5a5ced3f045a87fdf9da5f5bed48c4e0",
".git/objects/08/2ab81739a69dad60ad26e6e4fbfc88296f64c5": "4896d912812132f590035bf18d356791",
".git/objects/09/7e2d41906a86093174303e057f455d40727683": "fd05b1ca3f28a883e3d035ebb9a78fac",
".git/objects/09/e9597e8cf14d2c0945c258f8a43d3fb6b1f012": "85c5cf6b93489f3e544e370e1881ceaa",
".git/objects/0a/d8f2d03828e5075c776c02f97a52de6dcc4332": "51ee5a8361786c0ba3df8c4f52e9d2ea",
".git/objects/0b/3ce4e2db6625f8068d0f4226d611277bea12f4": "28df000601701f303548abc6319f484a",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0c/f908559dcafa2ed76c5dd6206c84b4511730dc": "557f76aa1f94e580550b8bd341cc0065",
".git/objects/0d/d417c03f434df2890c7cc7e9dbe44e428f2ae0": "cf601e4f9debe8e40404cdc333986773",
".git/objects/0f/ce796e9316ef5d32bf9cc105e04a5c04652a4f": "43a619d0d55ffd06b7db53c388e5ca1c",
".git/objects/10/3cc85fbe50fae9e7f82386efcb24967c0a5f6a": "a473e3c9379e42bce9eec7c2f4040ae7",
".git/objects/13/a2532ac8f6c802c25857dbd0629b5f21920123": "673b160ccf60eff17bacd9279f809511",
".git/objects/14/7cdd780fa2d5b8d364f5b27e78da4ca766201a": "31ba114163623437ff178bdc04ccb6f0",
".git/objects/19/47226bbea066a6978c2dd401543e7d8f475996": "2d282934b3268c5cc65a12b4d1ca28c7",
".git/objects/19/6b828ce906f9648de64ff84dab11cf89e331eb": "fce74fdcf901a4893e51295f4d831c47",
".git/objects/19/6bac097df5a54a33c469c3a47606032b5caa08": "d11470225c3cc452eef2bef57874c353",
".git/objects/19/e43dea7d08d651ede699dfa8942b1b13c563e0": "ab843916dbde8dfb43b7c797878494b8",
".git/objects/19/faf3d6b1e4fb41fca6e21282261ffb6e5a5cfb": "f08d42d8117ff0bb426d9f539c94af8b",
".git/objects/1b/933890197ed0d160457036795dfdbfe14b1006": "a620dec84a5ecc8b190c5f4b41a036fc",
".git/objects/1c/a81e7933de32be25b143d43396be7583fca66f": "6f2efdab37e9c146393bffc7d8271312",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/0b7815d371cbc6fd8868d78433f122960e4139": "c95f720fdf94b6fa21b98005bd83910d",
".git/objects/20/941bd52e36877a445769c43c210427f916ec58": "89dafd67a5b5fa2d8b0061eafe814dfb",
".git/objects/20/b3f1fae74a02de41d71eec068b39efebf98818": "1345c1fbdfa75c67248bff9d8b5836d7",
".git/objects/22/25bf459e3c86f905fdd621c2a01b234dbabffe": "78f4a64e025a9b3da83719f32c18d735",
".git/objects/25/288df25856bb4ab5f8e580e75060eea2b5ce75": "263a60f4829095075fa64424ecb4ee1e",
".git/objects/25/e5f36b1ebb761f5206541a06f0d6d4d14f2077": "6994873f35a9171bc9f81d28298c16e8",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/27/bfbbc3aa51528b75d2443a13f669c485887cf1": "1c9f0bd4de7fac38a4a5127af4c53b88",
".git/objects/28/425b4d57ce73d3c6520b76317ab15814aeef96": "1d074715de637a667e3f39ff6cdc50bc",
".git/objects/2b/465819b34ea12174e97b29f319e7a305b193f9": "a8d062e86195a81804d240a5194a990e",
".git/objects/2b/a31c0ff76c8d230e9982ae193fd61b2bb3ed4e": "bbff4de5cb5107ca317e8e309cf4b290",
".git/objects/2c/513de7fa3585cb3c725c7554fe4061a1e96eea": "5d6d9177102b58de4e985aa50e67dd81",
".git/objects/2c/fe6623b19bb36cd6a588d1b5bb3ed830280974": "114dda88078ddcfe96c76afc8432ea42",
".git/objects/2f/44165c2d218d24a26345fbdfaca4c8c5d1a391": "9e1135c712f1371a5c2eef793b79f494",
".git/objects/2f/bfa95f595ff47bee46f4fd35e49ce726dd5642": "04438b608def8e60d142d4dff6ed5feb",
".git/objects/30/bf7fe6db6b5c18fbba54270ad1bbaa8edd812f": "e68708af856eafd96bc2c05ec33ae17e",
".git/objects/32/54c8e5dade816922fd57e4a46ac5625c3a21d9": "95da539334b538c4d4d6b43e0122f02e",
".git/objects/33/fdcd7a7aaa015146e38df3272c25d751c7fe49": "df23ec0bb3a3b003d4dcca3320d1620b",
".git/objects/35/1597d1f3a4204f758f9296a8b18327b63321d5": "225f438f17d93d75bde4c21d7ef0f90f",
".git/objects/36/5d51339a579b6cc8a9b2960b14814f0a81d5db": "6042bf9fab95cc63f0c76a8bf650e7f6",
".git/objects/36/d343eda5a8ef7596809adbd8986ac345542488": "0102e8c1970b18cb5f376d38e624a319",
".git/objects/37/0940c8012263f88c1dc1f8a55115b0b7a65f81": "ce8fc0f9b7e8547ffc370fee8c637520",
".git/objects/38/9b3f6845e4bb65bb4f2679f8f218b389afd4de": "986521991e23bd6d9c5da5649a6837b4",
".git/objects/39/7af8e59ed8ca61d2b6b1b78352dbb5915a2b48": "f1493c91f87745d22e6f93a393ae62ae",
".git/objects/3a/3b191f9ffbbabf5f42d802b95cdeeaa78e3c52": "c9a61c9799dbea9dae6436fe8db4e8d5",
".git/objects/3a/8aaefc778d9ee44866bced3bf8d2997186f6b2": "5f9853517bdfdc2269610ddbc8e04941",
".git/objects/3c/2249d24aa0f2ad6369fa89f36497caac0d137a": "e9695b74437316435869c366ef1568ea",
".git/objects/3e/284bee9a0bc316364af494c03df68e41aa5991": "ca41674128cb7203f2b4ae0d7b9f0616",
".git/objects/3f/85a406eb12e4a2ccf7915f1d2387949ebaaef3": "bf5087c0fb8712b5336142e3eb8c4a2b",
".git/objects/3f/87d183de0d53a3bab62055ce73f62fd7e53561": "681746380cd03092fc5cdfc92ca9ff40",
".git/objects/40/435be8e9256a5419b8523cb5d7879b7f3870f2": "876dd76a6b1e0c35b537dd8d9f54b074",
".git/objects/42/2f94e7f840bbbdf0d58aa46fef3a0c6959693d": "2d02354a0be0b5ec6f12c8c413052155",
".git/objects/42/80465560addc0632ffe888582943f03fcb7b05": "53230a2baf6b2dcd38ae3fdb69319a16",
".git/objects/45/508a15e00382e6e096cf8add0be347dce94d64": "4def8425e81bccc022102f7c347ced14",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/4b6e1aa4878371da1ff5e586ce0dbe54920a59": "c205afd41664b9c3adcb7c6c6c28a98a",
".git/objects/47/1e3f1f35731450422c6b110f61a21b5f966716": "2d2b68aeb2d63f2b77dccd176404dc01",
".git/objects/49/b922be293b0b0431a75fbc8a941d5f7cfef959": "4ec75f28117c6e6273ef67dc6bb07a3e",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4c/a0fbb174e36e1946a70c012c8f8685f0f0b4ed": "89f159d32707faa19820393afe19a2eb",
".git/objects/4d/ff3bc3df715f72f4b6dcf2302439267219cde3": "af80a29d5205e3fa8bfff612d135d5e2",
".git/objects/4e/8ae1563c8dd1cbc411d09bdb991fee4a3b62d5": "0c250b20fe4f2058385cdc6f811a260f",
".git/objects/4e/f3bcb08c2d6f2e22ccaf7b371e8a4c34f451fb": "7833143f235c41b90a946a2f175904a5",
".git/objects/50/eeb0cfbb7e1c74c96c2c66a42bc400a2e01663": "72cd9aea8415641c9acb8efdf315c164",
".git/objects/51/55594ee0fb2573632c631b642cc49ebbd4af7e": "0b862a95d07ebb8110179ef8c05de576",
".git/objects/52/ec4b33c5883e005c46548b3c25aee0b2c2a38f": "c574e45ced3e9283b8820244ced43bc7",
".git/objects/53/f028daf632c185b4e2be3a2e967c8f5e8dfde5": "c59af26a7e84fee27b1b3987c8e4aebb",
".git/objects/56/6c3855f330b8059d661e03ee0f918100948181": "8cce8712d24de97c482c0d48a6b6d887",
".git/objects/5a/714d027b491509bfb7f054b9c5fd1d7a196895": "a8b5863c34f3bbf404908e119f0584ec",
".git/objects/5b/3ae1e4bc04c2a61b0657378023a021139fc3b7": "680b4ecd43027157b355ca8ecdd6ef92",
".git/objects/5b/740cc763b17cfe99ee06da507d5697029f9850": "00670085a79996586e35b68adc453296",
".git/objects/5c/d8d1cd59af521da1637ebcf6c15c31e7ee1706": "3b8ea085dadcd54308f9b1669761f9c4",
".git/objects/5c/f4cf33b6bef0b7ff43f5b651696001bfe9cc68": "437a1ec14a2661650a2726b4b8c75be4",
".git/objects/5e/47ef9599edca1601a8aff40c4ecbcdcf1e2a64": "f34c7c94d95e91c4f19b04fe11b1f48f",
".git/objects/5e/ed77ed1f2b9c8ee338138b8104cc3a72629f9b": "44a22ea67a0fa17319306d61dddbd877",
".git/objects/5f/bc4c3caa7b7b1a8284278d86835be2afc09658": "292b06bedcb174c9ada381afac49ff83",
".git/objects/61/ecdb3dae1379c2dbde51eb40b095f7e970caf7": "49a124577ffeb7221fc98964d9e7e615",
".git/objects/62/1db2739c0282a8cf878fb0870b7d0191e7f3aa": "126417edea825b8a72e14f342b4d21c5",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/65/b06c984caf4dc52c00c0c4e79cce66ebfbf7cd": "b7154e24994afe89c62e601e4c058ff1",
".git/objects/66/96a31d39b55937669cec8d195f81c29fae4c08": "929c67ccb779f9fb306ac5e41b707c70",
".git/objects/68/2aa0ffb6f29d5f1c406e319b9cf56e84b90c9f": "13b43525840c6c8fbd0c6e1cbec633e5",
".git/objects/68/a19c58b746c21ab8299c5ebbd7de56eed570db": "99132af257cf539bc1ce4c4e0c98ed30",
".git/objects/6c/826673db1e6d81c496fced0ff77b7324fc1f57": "d211c7f4334c7dbbd8e4ffa23ecd6f34",
".git/objects/6c/bd902d9ff0bb1d7411e79edb27b3e5393fa096": "b3502d4aaaf80e222c7617ff19a714fe",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6f/6bc1f67f79783d6a217c4d8d5914c2799d8085": "8bb4724a9ea6ac9b645cb4a7b3d59468",
".git/objects/70/73c97b8b5b41634df01cb35d8a00cdf88ea4cf": "6969fd35a6c79515d49c4081dbc9d7d1",
".git/objects/72/a1040d2a2b9bc6045a6087484147cf39d42e98": "860fab301c070b55056e90203fea30f9",
".git/objects/72/ea1805899099a6b876fd282ae76688a89f008e": "878ee0b227fc5f91eff44c4d0959cf61",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/73/ec53e4d2167808f5a92370e182b00a706b3d5e": "4ea8c56769d063ce5f9127f2ddf85949",
".git/objects/74/4aee367e0e5c90d78cb1674faf9d969c06fdf2": "b227e3e549dac09ccb8d99c9ac7bf69a",
".git/objects/76/26d8b22ef68b22bbd1202f897e225dc701895f": "4f8c2e3e711bff39576e9dbf62e413da",
".git/objects/76/7e06299f7cfdedc15548b1455f25132841ff84": "3fedd64020468564199545011162d85c",
".git/objects/76/e879add0bbf74a81982379440c53ac86a42c5a": "8bc6c1404d9ffb500ebc58fa5c34d74c",
".git/objects/77/3274b5c81e04cb01672f23c64178b6d6c07bc1": "d90199f8327bfb98b5b467a49de90b91",
".git/objects/77/99f91cd9265071723fe7e3bad4458d20049884": "404a18e2d3c8179eb548094b77272dc6",
".git/objects/79/c3354a598a5b31301aedd4f6d7078c27662274": "4d6fff7b1be86d9592fc855c26830f22",
".git/objects/7b/8de67a80f7a9643ccf5efe4b3394ea82354df0": "10c36cc0f928ef5c8c9918ccd3941a9d",
".git/objects/7b/b869a92ae3916837b47d41cfbc0c54b2b7c369": "d84a4158f4f2bad8791606f40977762e",
".git/objects/7c/964adf7ba630bbe6da09c0e93b2cecbaeae26c": "17e0a523b8418b8242436cecc09fffab",
".git/objects/7c/a88e4a6423919113c4d09003a5495da7e3e838": "2a90bf58122fa49640f0cfa09cbf672a",
".git/objects/7c/ab090e4e4cf827b0b5fe50c4885b3d62e486e5": "c06715f90b9cd3d2f789dbc1bf7398d4",
".git/objects/7f/53f86899e40309ab367fd1e5ef3f9aca5451df": "99798c979efea891cf5e8ea39b08c135",
".git/objects/7f/bb94e4dcc8625c81a5a31792c7abf63e9cca1f": "43c0144b05b6de148a2a452cf81a67ce",
".git/objects/81/687798675c0ef22dd4f227ff7a53d8b4f44005": "97679d8becd6c6056811ba59db72f9b4",
".git/objects/81/c85b9476dc2584bb6c1a4de1547480a4c59c7f": "853ea8bcd0a0fb5c850c363e9d30a4fb",
".git/objects/84/498d8471ba45ba119f12184e128106919b6a1b": "9046e2aba47e1ec717c86d0665b031a4",
".git/objects/84/f791db775fd0dd0838587ec76eee9a954d6b33": "f0dc24b951e827ad817beaff7c81d390",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/a3812c2c4dd60147f444219410bcdbbfd9ac1b": "3f317237e4e6c5410bd8cdf1b6f9a120",
".git/objects/85/c258ffe110381b700f88226c52da8d557904c8": "74cb2936ffe2b4fdbbdc69a2096169f3",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/86/88f73227764d1c27cf77412908caea3b03d191": "70d0e0c38c4071eb6676dad507f00f63",
".git/objects/86/8aa34b4a0a5f2aa6bcc650de2e1bb3d3061109": "2fdc72eb35f63d073215610f70b00291",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8d/23969351f1ed5d72ba2afc14f8dd11c56cbc63": "dc1d624cf8b1e9b4830dbb451a515534",
".git/objects/8d/e4a52f317a505df9688226a4ff4dc17039bfd0": "ff091bea312643bd230e63c864f94f5e",
".git/objects/8e/7d041c198fdfbe0cd3dbea1e67a5b0d9dd57be": "9994f6d274fc961f4cce01fc6a199dd2",
".git/objects/90/2efc9259ea87f4c194cf52c0452fd587d3edcb": "d92aed9d4b5848ab3488a4dd7c4e9ccf",
".git/objects/90/9cf4ce62943d6ce8a94d41f0504b7c59a4b2fa": "29198159d47248c7e932acdd82ca4563",
".git/objects/91/1e5f2735c41f03a840d965433fcbb5cf416db5": "a7f9095b367729db57b71c8146769567",
".git/objects/92/7f44bb48cb80c479ffca2315a65f94251a3d82": "8a1ed86d43f739ba3ec7d790c3aca832",
".git/objects/92/d9d19db87fd0e48dc751a128db673c32061412": "289921a23aba36f66d45c844d090d488",
".git/objects/93/d330a52f0021c68965a2b72bf254d1b99f659a": "a7c12ce863c5962162639c5269ac8d89",
".git/objects/94/5a9a3af60f0172b7e0a50139ec763802343e45": "28baa9d5b9a809c54ed60c2df2ec5d69",
".git/objects/94/ee0cad80dbe67613e927cf10578335049b0ebc": "694f5ad3d0a84c4355db59d3d2840287",
".git/objects/96/5898d90be4257584f25e934fcc75753d74433f": "710baffe54a7838264dfcc768ac42178",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/97/ed92b54141bc54d90f813211b19d36f20f57b9": "c9667707d1ba8b3612e234ca9322d8bf",
".git/objects/9c/07f59f825a03a0884167d2921b14249f52ccde": "64576fb5cb3a111a019dbe1777740985",
".git/objects/9c/45fc18338019cbe5b82b747e1f45dc492d0eef": "0912973998de40178d4527fecb4f7956",
".git/objects/9c/4a31c1fbc645951194e2ef1c5d598b80d35475": "02cfd1659d33731e90819a3f4d43148b",
".git/objects/9d/b66a3fe7ff2fab7b9d25714cc02f5c0c82d4b6": "4b57b65394e93e11edfdac90769cc5a2",
".git/objects/9f/52fed4eeddc3de14e09ec3ceea9fa60d171562": "dbd9457ad306a86e7bc08042cef72e05",
".git/objects/a3/106ffa229c7732c23a2e03ea88d69615f0f389": "b79b04942cb7f16d4c5f2aec0f43a583",
".git/objects/a4/ca763b0dfceb1bd6b57ab98451fa106818da60": "cfc27644bf51398e5312a6efbae175da",
".git/objects/a4/d40df71990954d4d7119dd0801b5716d497045": "14b37061a2d4a728ab186e358822a298",
".git/objects/a6/8d8c9c80d48a05386e0d7b729d62884ff598f9": "522e48e9ed49a319925d1f9dff90a05d",
".git/objects/a7/2006f666173481f3560fe194fc42101b502ae6": "03ff58a4c08205bd36483ece0b16dbd4",
".git/objects/a7/f9775b4388b12161ba686894ea26f804d476b4": "0d09984a02450ece2c1e44ff5d865ca6",
".git/objects/aa/2aa3bcbdb5163f4d6a459ba2ad6ee400ad458a": "e7a3b9145c359201032320cd80e1b1cd",
".git/objects/ab/38a71eb964a26494798f82241054d587e3ea97": "9f9bf410e36c3d89fb46ebefd0117669",
".git/objects/ab/a61f1ba55abf37699fd4ae9caf24f19e6f1f57": "66d6725a84026a0ac20714af9ed7b6a4",
".git/objects/ad/cd5f4e923e2923f07a0bcb74381ec350b8b6c1": "639892161183ad60ab7b688c49b85848",
".git/objects/ae/dde256c4ed4cd3931f341512105fb90ea16e57": "4b56084d2cd74f638f3e626d171ddd5c",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/af/395df59f89fb5869afe7a4d36238eb4745a9cb": "9149adef9c7393b45237d27eddd69e23",
".git/objects/b1/17c412c9371315302d8b37589fbc411ea2b0bb": "15726250eb2f5d7e12740a334be42831",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b3/3a39d966f6f8d4bb23ad4b9da9bd10b8c297d1": "7815b02080a0b63c73afde2a3a31fb2b",
".git/objects/b3/a993e7ddf1731ca4fc96a8b12d2c1a8b0bd62e": "2d316a6909a894be9879cf35008ba94b",
".git/objects/b4/696178fd6207fd00e0f6cebd32ab6de334d41d": "4dc025ad80f912f2a521ffa77fefa704",
".git/objects/b4/d19c3d234b544c9accea6e3feb4cba144f60de": "25bb14951301bb4dbbc9fc47b3d244d8",
".git/objects/b7/299db22f3d2d8638b6bbbc1d1bb90f8bb1d0e5": "0770ac01539648a2c0d53e445238c0f4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/70a877687f30c47c184198bd76abf08d7fcaa7": "39117fb4eae7078987e232e44a1b879d",
".git/objects/b8/493d83cda4f0aa3248346844876230b0b7f8eb": "5cdba29bc3d8dbf43e0056d8fb54a7b5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a21e3d536be35e5f816f40db739f1391946452": "e9d35e08a878d8e14823bdc3ed44cb9b",
".git/objects/b9/a9ae45f57c84e20114a20e55931a0d207f8b61": "a22fcfa9d243c82ac7a3fdd7328d9156",
".git/objects/b9/eeb874f2a25bcd03f923c703081f62a651f9b0": "e9ef093d63d86049c1c3617587a572b7",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/e3b1536cfbca1e4a7b3e67a95b66d469d96ab1": "a993487170d3c94bd58f88cd096efd62",
".git/objects/c0/91dc43de487802122a55eb0e4210698eebd0c5": "9a9bbf2b800d3336c85dcdd9f79ca7fa",
".git/objects/c2/049e87b9df91523562320f4ac60d9c16c8a69b": "7f73e6c12b997cbf1eaf220b7000b9b6",
".git/objects/c3/ab3bc247e7334cc481566c0354f2dc0f1bc20c": "3395081b1cffc54e68f9aa5792c484ba",
".git/objects/c3/d574b1d4290ec76377d6aed5285b675789ccf1": "6f1f11f6692ae8d021b8543d0ae32353",
".git/objects/c3/d84d4316b98b3d28aa480984e3bbad2b74d4fd": "fc47935e91b00de650ad53752192cfbb",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/1815c16f7b6ac3fb8df81a12fc2c0c38b6b533": "bcde5cc031148eade586e47c200acd67",
".git/objects/c5/8d4b3b12d5fbd7c83cdaae85358d605f25dd19": "bc1cb61bc3246515519b26895cbd5d5c",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c9/7197e4c4520d9d2febd14797804c3cca487af5": "85a2ebb6952b8798b9055e388b7fb9ec",
".git/objects/c9/fb6e90cfdf172b5d9298049279a232b28a3522": "894977f2a2283bef9a57629228e94347",
".git/objects/cb/03298c5b5343dd0fe59ca694cba7ab20eb7765": "8ff300b3ea992f06efb94f011972ecc9",
".git/objects/cb/b524d7907db072d7332f0c55cc8505ac589e20": "afe2b1745c72e7e263168e5dec80323d",
".git/objects/cc/1fd1b09e3feb68aa1b78f2404ab4bb596377ce": "78b21cb7b244b64fddb10fe501483cde",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/89bb51f6324a171575037eab6363fa13cb16f1": "1530131656a3f9ef471ae6f8c1091e39",
".git/objects/d6/552a6e22ed8ee1dd843888b3c9235bc8115aa7": "453a5d42f49a393ec2b20e24ed4bc707",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/39e2bbcc381553c9ebce5215ace2c77fb5abb5": "879bcb074c3a10ba2b81de93a91cbebe",
".git/objects/dd/10def5d62e3af6bca9c2cb9748e65706baf266": "42bd96c545b24091bbb03cc733f3f466",
".git/objects/dd/2bb3cb633ae7a80200d00f458c297fb20fd227": "43dfc720329afa1bd215b03fcf3ed536",
".git/objects/dd/b8578757f73a4c1109563c2e6caab3bf60960e": "99138c6c19f58d73036a6eecd15d9844",
".git/objects/dd/bfcab0d4e7acb3d3bcd7708d85e4e5a66ca08e": "f9632cd436f3a93f44840b3dd1aaf55f",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e0/e2249a5ebfeaedf26a248c6c028048731ce6e0": "8400a89fb4009c88062a97ed7112ffff",
".git/objects/e2/3b1624f3b291bfe8d325ab2f777d1714a6da89": "d20d6e495d1396dae95b3cd763f546c8",
".git/objects/e2/a901396177b8055e1db467f1f50334f787aa23": "a842589cd93b59c1aabb4b69a37ee6a2",
".git/objects/e4/910d78294e033f9bdd2297ce234bdf70c5933c": "db3b5abe5c3eb8d30bc434439e433dcf",
".git/objects/e6/3f52cbde7a596cea65f0cb9e2192cbbaa10a59": "816650ee3dcff199affc08ea98f31ed2",
".git/objects/ea/9a9d184060a9a92754eb7353ed6219febedd68": "3e6429f567e636e526fb33d35b8487f9",
".git/objects/eb/4fc9a6c1c7cd4a4d38c476cc30f7f5922c9ab8": "9087e7cbd3226eb0b6e790a1b349a89d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ee/b63c0c7abd64ae0512f78e604dd076aec82201": "f720c1511632bf23af1091a69de5c61b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/373411ab88d1b69559f2f5bac82a07fdef33b2": "12492889f6853825f8afae139a2ced6a",
".git/objects/f3/5158f08836dc7568eaea82370dcdbe5c539d45": "e1253bc9b0104cf38002c20698aa5630",
".git/objects/f5/0477689fa832bd9b2a66ef28e87d3fd56c5048": "3dd9a50bb4a656fb19885e895049eeb9",
".git/objects/f5/7535ce087fd36299747ef2f2040b11192a3915": "9869df4eb1367d23de3bb0eba8c1cc79",
".git/objects/f6/22d9cfbbe335a3e7cbd86d8922e6644aef51db": "fd511deb74233370441ff7139063f6b4",
".git/objects/f7/cef150fd2ee5ecf9fcfa33541b9299d168a8fb": "afdcd3e0d7a6438dd610aedfb2b85dfb",
".git/objects/f8/0d888e42a4fae29005dce5b34b8bd0ace757ec": "6a3c574b5ef36209859921af17aa3aa6",
".git/objects/f9/dd5285d4978d937e31953a1e2e2bd24e4ced93": "1f5c8331816e6a6642d8d8b3820d6940",
".git/objects/fb/bb859a597d0d602064dbc52ea1d7a0ac1344a4": "bcdcb18444b338d8602f2f2d2a422972",
".git/objects/fc/74c942f5a4e7b3c3329d2faaa32989cc9a555a": "6ba6277c8ef802e9513bf30c356e4e1e",
".git/ORIG_HEAD": "939a0d31cce2a6d98c19a6b7c25ab154",
".git/refs/heads/main": "3c0f0c4afd0697d0f152cd6952881944",
".git/refs/remotes/origin/main": "3c0f0c4afd0697d0f152cd6952881944",
"assets/AssetManifest.bin": "7396be6a3061995bc44e1c33aeae94d4",
"assets/AssetManifest.bin.json": "53b61fd6f3f7251999e1c2605f4e2a90",
"assets/AssetManifest.json": "37411194ec90d757a4c09b7154b003f3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8b474a3dae218917eee8ec8ab18eeb05",
"assets/lib/presentation/images/leaderboard_explaination.png": "7a914834e834b7492f8e81ff5c49a941",
"assets/lib/presentation/images/recycling_bin_pointer.png": "1f76b775b4e8dede0874c109e7a98393",
"assets/lib/presentation/images/recycling_bin_pointer1.png": "d8ee9da52939ff55bcfb8603047f789a",
"assets/lib/presentation/images/step1.png": "8c627e5f56d62e7b9f6aef73b5e56c33",
"assets/lib/presentation/images/step2.png": "c30efe03f5a22dd54ada79118ba5e163",
"assets/lib/presentation/images/step3.png": "f91c0be2af1a1c0f10c753a46e4d2435",
"assets/lib/presentation/images/step4.png": "7ff47d4bfc4c9c4ba2ecc46a4d113e67",
"assets/lib/presentation/images/testQRcode.png": "6c7d43f57f8c25dc39003d01dac16c50",
"assets/lib/presentation/images/tpLogo.png": "a04b46abfa9f6b74f5df4b6172b4b842",
"assets/lib/presentation/images/user_guide_home_1.png": "6ab3dd4e04a657c7a4f12564a19ffe67",
"assets/lib/presentation/images/user_guide_home_2.png": "cb4845d272753c4ae30a338e80b36435",
"assets/lib/presentation/images/user_guide_home_3.png": "7a90b8f144db1da45c6326588edd464c",
"assets/lib/presentation/images/user_guide_home_4.png": "24d35d76778e871eb151cb1c087a5621",
"assets/lib/presentation/images/user_guide_home_5.png": "15011cd269324513e2e7298d76a006aa",
"assets/lib/presentation/images/user_guide_home_location.png": "ea3db69878150ecc7cb4370e6b1e3127",
"assets/lib/presentation/images/user_guide_home_map.png": "51c1f71418b976fe426775c1f488d92a",
"assets/NOTICES": "bc7acbdc6270b3f8206eb24446d1ab59",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "b2f29acc326193c955741f71ba14e69f",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "b20d6d0404c4064731eafaaed5daaa83",
"icons/Icon-192.png": "d0e0f213fbc1f453e6f65bec12e7f7fa",
"icons/Icon-512.png": "eb6c2c607fd875b12487cea2049e9d4f",
"icons/Icon-maskable-192.png": "d0e0f213fbc1f453e6f65bec12e7f7fa",
"icons/Icon-maskable-512.png": "eb6c2c607fd875b12487cea2049e9d4f",
"index.html": "b421e37be50be2ac03b2c26ba5920a86",
"/": "b421e37be50be2ac03b2c26ba5920a86",
"main.dart.js": "37f162199d880f88fe14f83d4b54cfe0",
"manifest.json": "abda5ff7579897887be0363e276665f1",
"README.md": "9423a9993c8da937a82af0260c04f605",
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

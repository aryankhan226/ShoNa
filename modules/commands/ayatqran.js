module.exports.config = {
  name: "quran",
  version: "1.0.0",
  hasPermision: 0,
  credit: "🌿💞🍫𝓐𝓑𝓪𝓫𝓾 𝓐𝓻𝔂𝓪𝓷 𝓒𝓻𝓾𝓼𝓱 𝓙𝓪𝓲𝓷 🌿💞🍫",
  description: "random quran verse",
  commandCategory: "random-img",
  cooldowns: 0,
};
module.exports.run = async function({api, event, args, utils, Users, Threads}) {
const axios = require("axios")
const request = require("request")
const fs = require("fs-extra")
var link = ["https://i.imgur.com/bi3OG5E.jpeg" ,"https://i.imgur.com/U5JNgcs.jpeg" ,"https://i.imgur.com/g0MlFyZ.jpeg"];
var 𝓐𝓑𝓪𝓫𝓾 𝓐𝓻𝔂𝓪𝓷  = [`Surat No 10 : سورة يونس - Ayat No 25

وَ اللّٰہُ یَدۡعُوۡۤا اِلٰی دَارِ السَّلٰمِ ؕ وَ یَہۡدِیۡ مَنۡ یَّشَآءُ  اِلٰی صِرَاطٍ مُّسۡتَقِیۡمٍ ﴿۲۵﴾

اور اللہ تعالٰی سلامتی کے گھر کی طرف تم کو بلاتا ہے اور جس کو چاہتا ہے راہ راست پ\n ر چلنے کی توفیق دیتا ہے ۔ (Credit :- 🌿💞🍫𝓐𝓑𝓪𝓫𝓾 𝓐𝓻𝔂𝓪𝓷 𝓒𝓻𝓾𝓼𝓱 𝓙𝓪𝓲𝓷 🌿💞🍫)` ,`Surat No 36 : سورة يس - Ayat No 50

فَلَا یَسۡتَطِیۡعُوۡنَ تَوۡصِیَۃً  وَّ لَاۤ  اِلٰۤی اَہۡلِہِمۡ   یَرۡجِعُوۡنَ ﴿۵۰﴾٪                   2

اس وقت نہ تو یہ وصیت کر سکیں گے اور نہ اپنے اہل کی طرف لوٹ سکیں گے ۔  

\n(Credit :- 🌿💞🍫𝓐𝓑𝓪𝓫𝓾 𝓐𝓻𝔂𝓪𝓷 𝓒𝓻𝓾𝓼𝓱 𝓙𝓪𝓲𝓷 🌿💞🍫 )`,`Surat No 17 : سورة بنی اسراءیل - Ayat No 52

یَوۡمَ  یَدۡعُوۡکُمۡ فَتَسۡتَجِیۡبُوۡنَ بِحَمۡدِہٖ وَ  تَظُنُّوۡنَ   اِنۡ   لَّبِثۡتُمۡ   اِلَّا   قَلِیۡلًا  ﴿۵۲﴾٪                 

جس دن وہ تمہیں  بلائے گا تم اس کی تعریف کرتے ہوئے تعمیل ارشاد کرو گے اور گمان کرو گے کہ تمہارا رہنا بہت ہی تھوڑا ہے  ۔  

\n(Credit :- 🌿💞🍫𝓐𝓑𝓪𝓫𝓾 𝓐𝓻𝔂𝓪𝓷 𝓒𝓻𝓾𝓼𝓱 𝓙𝓪𝓲𝓷 🌿💞🍫)` ,`Surat No 17 : سورة بنی اسراءیل - Ayat No 52

یَوۡمَ  یَدۡعُوۡکُمۡ فَتَسۡتَجِیۡبُوۡنَ بِحَمۡدِہٖ وَ  تَظُنُّوۡنَ   اِنۡ   لَّبِثۡتُمۡ   اِلَّا   قَلِیۡلًا  ﴿۵۲﴾٪                 

جس دن وہ تمہیں  بلائے گا تم اس کی تعریف کرتے ہوئے تعمیل ارشاد کرو گے اور گمان کرو گے کہ تمہارا رہنا بہت ہی تھوڑا ہے  ۔  

\n(Credit :- 🌿💞🍫𝓐𝓑𝓪𝓫𝓾 𝓐𝓻𝔂𝓪𝓷 𝓒𝓻𝓾𝓼𝓱 𝓙𝓪𝓲𝓷 🌿💞🍫)` ,`Surat No 28 : سورة القصص - Ayat No 81

فَخَسَفۡنَا بِہٖ وَ بِدَارِہِ  الۡاَرۡضَ ۟ فَمَا  کَانَ لَہٗ  مِنۡ فِئَۃٍ  یَّنۡصُرُوۡنَہٗ  مِنۡ دُوۡنِ اللّٰہِ ٭ وَ مَا  کَانَ مِنَ الۡمُنۡتَصِرِیۡنَ ﴿۸۱﴾

۔   ( آخرکار )  ہم نے اسے  اس کے محل سمیت زمین میں دھنسا دیا  اور اللہ کے سوا کوئی جماعت اس کی مدد کے لئے تیار نہ ہوئی نہ وہ خود اپنے بچانے والوں میں سے ہو سکا ۔  

\n(Credit :- 🌿💞🍫𝓐𝓑𝓪𝓫𝓾 𝓐𝓻𝔂𝓪𝓷 𝓒𝓻𝓾𝓼𝓱 𝓙𝓪𝓲𝓷 🌿💞🍫)` ,`Surat No 23 : سورة المؤمنون - Ayat No 97 

وَ قُلۡ رَّبِّ اَعُوۡذُ بِکَ مِنۡ ہَمَزٰتِ الشَّیٰطِیۡنِ ﴿ۙ۹۷﴾

اور دعا کریں کہ اے میرے پروردگار! میں 
شیطانوں کے وسوسوں سے تیری پناہ چاہتا ہوں ۔

\n(cradit:-🌿💞🍫𝓐𝓑𝓪𝓫𝓾 𝓐𝓻𝔂𝓪𝓷 𝓒𝓻𝓾𝓼𝓱 𝓙𝓪𝓲𝓷 🌿💞🍫)` ,`Surat No 55 : سورة الرحمن - Ayat No 23 

فَبِاَیِّ  اٰلَآءِ  رَبِّکُمَا تُکَذِّبٰنِ ﴿۲۳﴾

پھر   تم اپنےرب کی کس کس  نعمت کو جھٹلاؤ گے ۔

\n(cradit:-🌿💞🍫𝓐𝓑𝓪𝓫𝓾 𝓐𝓻𝔂𝓪𝓷 𝓒𝓻𝓾𝓼𝓱 𝓙𝓪𝓲𝓷 🌿💞🍫)`];
var juswa1 = alikoja[Math.floor(Math.random() * alikoja.length)];
var callback = () => api.sendMessage({body:`${juswa1}`,attachment: fs.createReadStream(__dirname + "/cache/zac.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/zac.jpg")); 
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/zac.jpg")).on("close",() => callback());
 };
module.exports.config = {
	name: "owner",
	version: "1.0.0",
	hasPermssion: 0,
  credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
	description: "Owner",
	commandCategory: "Others",
	cooldowns: 5
}

module.exports.run =  ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
    var callback = () => api.sendMessage(
  {body:`» Owner of ${global.config.BOTNAME} A Babu ShoNa «\n➟ ${global.config.BOTOWNER}\n⩙ Age:19 ${global.config.AGE}\n⩸Gender:Male ${global.config.GENDER}\n❂ Admin UID:100092192215832 ${global.config.ADMINBOT}\n♛ Admin FB 100092192215832 Link:\n https://www.facebook.com/profile.php?id=100092192215832${global.config.OWNERLINK}`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/${global.config.OWNERID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    
      };
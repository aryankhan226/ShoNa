module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.4",
	credits: "Mirai Team",
	description: "Bot Information",
	dependencies: {
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event, Users }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Bypass bởi Mai Huy Bảo" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`💖✨🌿Aslam O Alaikum 💖✨🌿Connected successfully! This bot was made by Aryan Babu💖✨🌿`, threadID);
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);

				if (!global.data.allUserID.includes(id)) {
					await Users.createData(id, { name: userName, data: {} });
					global.data.userName.set(id, userName);
					global.data.allUserID.push(id);
				}
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "Welcome To The Family Group {name}.\n 𝑾𝑬𝑳𝒄𝒐𝒎𝒆 𝑵𝒆𝒘 𝑴𝒆𝒎𝒃𝒆𝒓 𝑫𝒊𝒍𝒍 𝒌𝒊 𝑯𝒆𝒂𝒓𝒕 𝒃𝒆𝒂𝒕 𝒔𝒆 💖😚 {threadName}.\n{type} 𝑬𝒏𝒋𝒐𝒚 𝑻𝒉𝒊𝒔 𝑨𝒎𝒂𝒛𝒊𝒏𝒈 𝑮𝒓𝒐𝒖𝒑 {soThanhVien} 𝑴𝒂𝒅𝒆 𝒃𝒚 𝑨𝒓𝒚𝒂𝒏 𝑩𝒂𝒃𝒖💖🥳" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}

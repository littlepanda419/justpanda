const Discord = require('discord.js')

module.exports = (msg,client) =>

{
    if(message.content.toUpperCase()==="TT") 
	{
 	   generalChannel.send(h+":"+m+":"+s) ;
	}
	
	if (message.content === "欸欸欸你過來一下"||message.content ==="欸你過來一下"||message.content ==="欸你進來一下"
	||message.content ==="欸欸欸你進來一下"||message.content ==="過來一下"||message.content.toUpperCase()==="PANDAIN")
	{
		const musicchannel = message.member.voiceChannel;
		try {
			musicchannel.join();
		message.channel.send("已加入語音");	
		message.react("🐼");
		} catch (error) {
			generalChannel.send("進不去啦幹");
			emoji(612549755502985247);
			message.react(`${emoji(/*表情ID*/ )}`);
		}
	}
	if (message.content === "滾啦幹"||message.content.toUpperCase()==="PANDAOUT")
	{
		const musicchannel = message.member.voiceChannel;
		try {
		musicchannel.leave();
		message.channel.send("已離開語音");
		message.react("🐼");	
		} catch (error) {
		generalChannel.send("08偏不要滾");
		message.react("🐼");
		}
	}
	
	if (message.content.toLowerCase()==="play") 
		{
		execute(message, serverQueue);
		return;
	   }
	    if (message.content.toLowerCase()==="skip") 
	   {
		skip(message, serverQueue);
		return;
	   }
		if (message.content.toLowerCase()==="stop") 
	   {
		stop(message, serverQueue);
		return;
	   }

	if(message.content.includes("胎死腹中"))
	{
		message.reply("你才吃飯嗆到喝水噎到");
	}

	if(message.content.toLowerCase()==="ping"){ // Check if message is "ping"
			message.channel.send("Pinging ...") // Placeholder for pinging ... 
			.then((msg) => { // Resolve promise
				msg.edit("Ping: " + (Date.now() - msg.createdTimestamp)) // Edits message with current timestamp minus timestamp of message
				message.react("🐼");
			});
		}


	if(message.content ==="歐姆定律") 
	{
		message.reply("V=IR , I=V/R , R= V/I");
	}
	if(message.content.includes("派"))
	{
		message.reply(pi);
	}
	if(message.content.includes("怕"))
	{
		message.channel.send("gan gan gan gan gan 挖就ㄍㄧㄚㄟ");
	}
	if(message.content.toUpperCase()==="KVL") 
	{
		message.reply(kvl);
	}
	if(message.content.toUpperCase()==="KCL") 
	{
		message.reply(kcl);
	}
	if(message.content.toUpperCase()==="自走其") 
	{
		message.reply(zzch);
	}

};
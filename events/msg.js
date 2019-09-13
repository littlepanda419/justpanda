const Discord = require('discord.js')
const client = new Discord.Client();

const kcl = new Discord.Attachment('https://cdn.discordapp.com/attachments/594119720022573076/594555557709611033/unknown.png');
const kvl = new Discord.Attachment('https://cdn.discordapp.com/attachments/594119720022573076/594556625155784724/unknown.png');
const zzch = new Discord.Attachment('https://cdn.discordapp.com/attachments/512603339071160377/595194587866464256/65761563_2350292711718973_5573736612304519168_o.png');
const pi  = new Discord.Attachment('https://truth.bahamut.com.tw/s01/201907/295c16d012c60f51b45fb37d629232ce.JPG');



function addZero(i) 
	{
	if (i < 10) {
	  i = "0" + i;
	}
	return i;
  }

module.exports = ('message', (message) =>

{    
	var d = new Date();
	var h = addZero(d.getUTCHours()+8);
	var m = addZero(d.getMinutes());
  	var s = addZero(d.getSeconds());
	var generalChannel =  client.channels.get('594119720022573076');    
   
	
	if(message.content.toUpperCase()==="TT") 
	{
 	  message.channel.send(h+":"+m+":"+s);
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
			message.channel.send(h+":"+m+":"+s);
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
				msg.edit("Ping: " + (Date.now() - msg.createdTimestamp)); // Edits message with current timestamp minus timestamp of message
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
});

const Discord = require('discord.js');
const client = new Discord.Client();
const time = require("./time.js");
const kcl = new Discord.Attachment('https://cdn.discordapp.com/attachments/594119720022573076/594555557709611033/unknown.png');
const kvl = new Discord.Attachment('https://cdn.discordapp.com/attachments/594119720022573076/594556625155784724/unknown.png');
const zzch = new Discord.Attachment('https://cdn.discordapp.com/attachments/512603339071160377/595194587866464256/65761563_2350292711718973_5573736612304519168_o.png');
const pi  = new Discord.Attachment('https://truth.bahamut.com.tw/s01/201907/295c16d012c60f51b45fb37d629232ce.JPG');
const {google} = require('googleapis');
const waitasec = new Discord.Attachment('https://truth.bahamut.com.tw/s01/201910/58c65f2a9243312e93cc8512034fe636.JPG');

const {PREFIX,PREFIX2} = require('../config.js');


module.exports = ('message', message =>
{    
	//獲取訊息相關資料
	/*if(message.author.id=="324536397803290626"){
	console.log(message.guild);
	console.log(message.guild.id);
	//console.log(message);
	}*/
	if(message.author == client.user)   
	return;
	if(message.author.bot)   
	return;
	

	/*//戒嚴時期
	if (message.channel.id='653569019454029864') {
	message.delete();
	message.channel.send(message.content + " BY " + message.author.username);	
	}*/

	//學加鈞說話
	/*if(message.author.id=="551290295078223885"){
	if (message.content) {
		if (message.content.url) {
			let nuupicc  = new Discord.Attachment(message.url);
			message.channel.send(nuupicc);
			message.delete();
			message.channel.send(message.content);					
		}else {
			message.delete();
			message.channel.send(message.content);
		} 
	}else {
			message.delete();
			let nuupicc  = new Discord.Attachment(message.url);
			message.channel.send(nuupicc);
		}
	}*/

	//學熊貓說話
	/*if(message.author.id=="324536397803290626"){
		if (message.attachments.size > 0) {
			if (message.attachments.every(IFattachIsImage)){
				let nuupicc  = new Discord.Attachment(message.attachments.first().url);
				message.delete();
				message.channel.send(nuupicc);
					if (message.content !=='')
					message.channel.send(message.content);
				}
			}else{
				message.delete();
				message.channel.send(message.content);
			}
		}
	*/
	
	function addZero(i) 
	{
		if (i < 10) {
		i = "0" + i;
		}
		return i;
	  }
	  

	var d = new Date();
	var h = addZero(d.getUTCHours()+8); if (h>=24)	h = "0"+(h-24);
	var m = addZero(d.getMinutes());
  	var s = addZero(d.getSeconds());
	var generalChannel =  client.channels.get('653569315089416225');	

	let command = message.content.toLowerCase().split(' ')[0];
		command = command.slice(PREFIX.length);			
	
		if(message.content.includes("<@624396190984831016>"))
		{
			message.channel.send(" <@551290295078223885> 上面有訊息要TAG你 :point_up: ，\n但是他可能跟熊貓一樣懶得找，或是眼殘TAG錯，所以我特地TAG你喔 \n <3 ");
		}

	if(message.content.includes("胎死腹中"))
		message.reply("你才吃飯嗆到喝水噎到");
	if(message.content.includes("修但幾咧"))
		message.reply(waitasec);
	if(message.content.includes("派"))
		message.reply(pi);
	if(message.content.includes("怕"))
		message.channel.send("gan gan gan gan gan 挖就ㄍㄧㄚㄟ");

	//--------------------以下需要前綴-----------------

	if (!(message.content.startsWith(PREFIX) ^ message.content.startsWith(PREFIX2)))
	return undefined;
	
	if(command ==="歐姆定律") 
	{
		message.reply("V=IR , I=V/R , R= V/I");
	}
	
	if(command.toLowerCase()==="ping"){ // Check if message is "ping"
			message.channel.send("Pinging ...") // Placeholder for pinging ... 
			.then((msg) => { // Resolve promise
				msg.edit("Ping: " + Math.abs(Date.now() - msg.createdTimestamp) + " ms"); // Edits message with current timestamp minus timestamp of message
				message.react("🐼");
			});
		}
	if (command.toLowerCase() ==='tt') {
		message.channel.send(h+":"+m+":"+s);
		}
	if (command.toUpperCase() ==='KCL') {
		message.reply(kcl);;
		}
	if (command.toUpperCase() ==='KVL') {
		message.reply(kvl);;
		}
	if (command ==='自走其') {
		message.reply(zzch);;
		}	
	if (command.toUpperCase()==="IN")
	{
		const musicchannel = message.member.voiceChannel;
		try {
		musicchannel.join();
		message.channel.send("已加入語音");			
		message.react("🐼");
		} catch (error)
		{
			message.channel.send("進不去啦幹");
			emoji(612549755502985247);
			message.react(`${emoji(/*表情ID*/ )}`);
		}
	}
	if (command.toUpperCase()==="OUT")
	{
		const musicchannel = message.member.voiceChannel;
		try {
		musicchannel.leave();
		message.channel.send("已離開語音");
		message.react("🐼");	
		}catch (error){
		message.channel.send("08偏不要滾");
		message.react("🐼");
		console.error(` cant leave : ${error}`);
		return message.channel.send(` cant leave : ${error}`);
		}
	}
	
	function IFattachIsImage(msgAttach) {
		var url = msgAttach.url;
		return url.indexOf("jpeg", url.length - "jpeg".length /*or 3*/)!==-1||(url.indexOf("jpg", url.length - "jpg".length /*or 3*/) !== -1||(url.indexOf("png", url.length - "png".length /*or 3*/) !== -1));
		// 如果附件的結尾是 JPG JPEG PNG 則回傳TRUE
	}

});
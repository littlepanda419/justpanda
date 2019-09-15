const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');

module.exports =('message',async(message)=>
{
	if (message.content.toUpperCase()==="PANDAIN")
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
  
	if (message.content.toUpperCase()==="PLAY")
	{
		const voiceChannel = message.member.voiceChannel;
		if(!voiceChannel) return message.channel.send("阿不進語音是要怎麼聽歌啦猴子");
		const permissions =voiceChannel.permissionsFOR(message.client.user);
		if(!permissions.has('CONNECT')){
			return message.channel.send("08沒權限連接啦幹");
		}
		if(!permissions.has('SPEAK')){
			return message.channel.send("08沒權限說話啦幹");
		}
		try{
			var connection =await voiceChannel.join();
		}catch(error)
		{
			console.error ("不能播啦幹")
			return message.channel.send("不能播啦幹")
		}
		const dispatcher = connection.playStream(ytdl)(args[1])
			.on ('end',()=> {
				console.log('song end');
				voiceChannel.leave();
			})
			.on('error',error =>{
			console.error(error);
			});
			dispatcher.setVolumeLogarithmic(5 / 5);





	}
	if (message.content.toUpperCase()==="PANDAOUT")
	{
		const musicchannel = message.member.voiceChannel;
		try {
		musicchannel.leave();
		message.channel.send("已離開語音");
		message.react("🐼");	
		} catch (error) {
		message.channel.send("08偏不要滾");
		message.react("🐼");
		}
	}
});

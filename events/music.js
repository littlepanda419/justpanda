const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const client = new Discord.Client();
/*
function play(connection, message)
{
	var server =servers[message.guild.id];
	server.dispatcher = connection.playStream(ytdl(sever.queue[0], {filter:"audioonly"}));
	server.queue.shift();
	server.dispatcher.on("end",function(){
		if(server.queue[0])	 
		{
		play(connection,message);
	}
	});
}
*/

module.exports =(client,message,args,ops) =>
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

	if (message.content.startsWith(play))
	{
		if (!message.member.voiceChannel) return message.member.channel.send('你要先進入語音');
		if (member.guild.me.voiceChannel) return message.member.channel.send('我在別人家了');
		if (!args[0]) return message.channel.send('給我連結啦幹');
		let validate = await ytdl.validateURL(args[0]); //validate info 
		if(!validate) return message.channel.send ('請在指令後輸入有效**網址**');
		let info = await ytdl.getInfo(args[0]);
		let connection = await message.member.voiceChannel.join();
		let dispatcher = await connection.play(ytdl(args[0], {filter : 'audioonly'}));
		message.channel.send(`Now playing : ${info.title} `);
		client.user.setActivity(`${info.title}`, { type: 'PLAYING' });	

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
};

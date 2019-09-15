const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const emote = require("./events/emote.js");
const msg = require("./events/msg.js");
const music = require("./events/music.js");
const time = require("./events/time.js");
const help = require("./events/help.js");
const client = new Discord.Client();

const PREFIX = toUpperCase('p.');
var servers = {};

var generalChannel =  client.channels.get("594119720022573076");


function addZero(i) 
	{
	if (i < 10) {
	  i = "0" + i;
	}
	return i;
  }

client.on('warn', console.warn);
client.on('error', console.error);
client.on('diconnect', () => generalChannel.send("08被來捆阿"));


client.on('ready', () =>{
	var d = new Date();	
	var h = addZero(d.getUTCHours()+8);
	var m = addZero(d.getMinutes());
	var s = addZero(d.getSeconds());
	var generalChannel =  client.channels.get("594119720022573076");
	var Myinfo = new Discord.RichEmbed()
		.addField("蛤","肏零呆蛤沙小",true)
		.addField("我在幹嘛","我誰",true)
		.setColor(0xFFFF00)
		.setThumbnail("https://qpa.tw/wp-content/uploads/2019/05/%E7%86%8A%E8%B2%93-1.jpg")
		.setFooter("阿這麼小你也要看");
	generalChannel.send(Myinfo);
	 
	client.user.setStatus('idle');
	client.user.setActivity("扣ㄉ", { type: 'PLAYING' });		
	generalChannel.send(" <@324536397803290626> bot已在 "+h+":"+m+":"+s+ " 時開始吃竹子。");

	var musicchannel = client.channels.get("506108715720769536");
	try {
	//	musicchannel.join();
	//	generalChannel.send("已加入語音");			
	} catch (error) {
		generalChannel.send("進不去啦幹");		
	}
	console.log("機器人已上線");
});
  
client.on('message', (message) =>{
	if(msg.author==client.user)   
	return;		
		time(message,client);
		help(message,client);
		music(message,client);
		emote(message,client);
		msg(message,client);

		if (message.content.toUpperCase()==="PLAY")
	{
		 let args = message.content.substring(PREFIX.length).split (" ");
	
		switch (args[0])
		{
			case 'play':

			function play (connection , message)
			{
				var server = servers [message.guild.id];
				server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));
				server.queue.shift();
				server.dispatcher.on ("end",function(){
					if (server.queue[0]){
						play (connection,message);
					}else{
						connection.disconnect();
					}
				});
			}

				if(!args[1]){
					message.channel.send("you need to provide a link");
					return;
				}
				if(!message.member.voiceChannel){
					message.channel.send("you must be in a channel to let me join to");
					return;
				}
				if(!server[message.guild.id]) server[message.guild.id] = {
					queue: []
				};
        
				var server = servers [message.guild.id];
				server.queue.push(args[1]);

				if (!message.guild.voiceConnection) message.member.voiceChannel.join() .then(function(connection){
					play(connection,message);
				});
			}
		}
	});
client.login(process.env.BOT_TOKEN);
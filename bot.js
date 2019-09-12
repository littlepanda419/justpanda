const Discord = require('discord.js');
const client = new Discord.Client();
const emote = require("./events/emote.js");
const msg = require("./events/msg.js");
const music = require("./events/music.js");
const time = require("./events/time.js");

function addZero(i) 
	{
	if (i < 10) {
	  i = "0" + i;
	}
	return i;
  }





	/*
	{ LOCAL
	const config = require("./config.json");
	client.login(config.token);
	}
	{ INTERNET
	client.login(process.env.BOT_TOKEN);
	}	
	*/


client.on('ready', () =>{
	
	var d = new Date();	
	var h = addZero(d.getHours()+8);
	var m = addZero(d.getMinutes());
	var s = addZero(d.getSeconds());

	var generalChannel =  client.channels.get("594119720022573076") ;		
	const musicchannel = "506108715720769536";	  
	client.user.setStatus('idle');
	client.user.setActivity("扣ㄉ", { type: 'PLAYING' });	
	generalChannel.send(" <@324536397803290626> bot已在 "+h+":"+m+":"+s+ " 時開始吃竹子。");
	musicchannel.join();
	console.log("機器人已上線");
});
  
client.on('message', (message) =>{
	if(msg.author==client.user)   
	return;		
		time(msg,client);
		music(msg,client);
		emote(msg,client);
		msg(msg,client);

});
client.login(process.env.BOT_TOKEN);

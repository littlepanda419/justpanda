const Discord = require('discord.js');
const client = new Discord.Client();
const addzero = require("./events/addzero.js");
const emote = require("./events/emote.js");
const msg = require("./events/msg.js");
const music = require("./events/music.js");
const time = require("./events/time.js");

var generalChannel = client.channels.get("594119720022573076") ;

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

	console.log("機器人已上線");
	generalChannel.send(" <@324536397803290626> bot已在 "+h+":"+m+":"+s+ " 時開始吃竹子。");  
	client.user.setStatus('idle');
	client.user.setActivity("扣ㄉ", { type: 'PLAYING' });
	const musicchannel = "506108715720769536";	
	musicchannel.join();
});
  
client.on('message', (message) =>{
	if(msg.author==client.user)   
	return;		
		time(msg,client);
		music(msg,client);
		emote(msg,client);
		addzero(msg,client);
		msg(msg,client);

});
client.login(process.env.BOT_TOKEN);

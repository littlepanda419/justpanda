const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => 
	{
	console.log("機器人已上線");
});

client.on('message', (message) =>{	
	Textchannel.typing===(1);
	var time = today.getHours();

	
	if(message.content ==="test")
	{
		client.channels.get(594119720022573076).send("9點了 該吃消夜嚕");
	}

	
	if(time === 21 )
	{
		client.channels.get("594119720022573076").send("9點了 該吃消夜嚕");
	}
	if(time === 6 )
	{
		client.channels.get("594119720022573076").send("6點了 快起床阿幹");
	}
	if(time === 12 )
	{
		client.channels.get("594119720022573076").send("12點了 該吃午餐嚕");
	}
	if(time === 18 )
	{
		client.channels.get("594119720022573076").send("6點了 該吃晚餐嚕");
	}

	if(message.content ==="歐姆定律") 
	{
		message.reply("V=IR , I=V/R , R= V/I");
	}
	if(message.content ==="KVL") 
	{
		message.reply( "  " + "https://cdn.discordapp.com/attachments/594119720022573076/594556625155784724/unknown.png");
	}
	if(message.content ==="KCL") 
	{
		message.reply( "  " + "https://cdn.discordapp.com/attachments/594119720022573076/594555557709611033/unknown.png");
	}
});
client.login(process.env.BOT_TOKEN);		

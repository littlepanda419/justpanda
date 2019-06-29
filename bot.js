const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => 
	{
	console.log('i am ready!');
});

client.on('message', (message) =>{
	if(message.content ==="彥宇") 
	{
		message.channel.send("猴爆");
	}
	if(message.content ==="你是不是孫文浩") 
	{
		message.channel.send("你才死胖呆");
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

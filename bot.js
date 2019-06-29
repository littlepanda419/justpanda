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
	
});
client.login(process.env.BOT_TOKEN);		

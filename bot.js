const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => 
	{
	var generalChannel = client.channels.get("594119720022573076") ;// Replace with known channel ID
	var d = new Date();
	var h = d.getHours()+8;
	var m = d.getMinutes();
	var s = d.getSeconds();

	console.log("機器人已上線");
	generalChannel.send(" <@324536397803290626> bot已在 "+h+":"+m+":"+s+ " 時運作。") ;
});

client.on('message', (message) =>{
	var generalChannel = client.channels.get("594119720022573076") ;// Replace with known channel ID
	var d = new Date();
	var h = d.getHours()+8;
	var m = d.getMinutes();
	var s = d.getSeconds();
	
	
	
	if(message.content.toUpperCase()==="TEST") 
	{
 	   generalChannel.send(h+":"+m+":"+s) ;
	}
	if(h === 22)
	{
		if(m===31)
		{
			if(s<=20)
			{
				generalChannel.send("9點了 該吃消夜嚕")  ;
			}
		}
	}
	
	if(h === 21 && m===0 && s<=2)
	{
		generalChannel.send("9點了 該吃消夜嚕")  ;
	}
	if(h === 6  && m===0 && s<=2)
	{
		generalChannel.send("6點了 快起床阿幹")  ;
	}
	if(h === 12 && m===0 && s<=2)
	{
		generalChannel.send("12點了 該吃午餐嚕")  ;
	}
	if(h === 18 && m===0 && s<=2)
	{
		generalChannel.send("6點了 該吃晚餐嚕")  ;
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

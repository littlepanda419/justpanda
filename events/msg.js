const Discord = require('discord.js');
const client = new Discord.Client();

const kcl = new Discord.Attachment('https://cdn.discordapp.com/attachments/594119720022573076/594555557709611033/unknown.png');
const kvl = new Discord.Attachment('https://cdn.discordapp.com/attachments/594119720022573076/594556625155784724/unknown.png');
const zzch = new Discord.Attachment('https://cdn.discordapp.com/attachments/512603339071160377/595194587866464256/65761563_2350292711718973_5573736612304519168_o.png');
const pi  = new Discord.Attachment('https://truth.bahamut.com.tw/s01/201907/295c16d012c60f51b45fb37d629232ce.JPG');
const sk = new Discord.Attachment('https://cdn.discordapp.com/attachments/450975130387218457/633614080665714703/v2-a41986e1f753522b7dfef8aca9c99bc2_r.png');
const PREFIX = 'p.';


module.exports = ('message', (message) =>
{    

	function addZero(i) 
	{
		if (i < 10) {
		i = "0" + i;
		}
		return i;
	  }
	  

	var d = new Date();
	var h = addZero(d.getUTCHours()+8);
	var m = addZero(d.getMinutes());
  	var s = addZero(d.getSeconds());
	var generalChannel =  client.channels.get('594119720022573076');    
   
	let args = message.content.substring(PREFIX.length).split(" ");
	switch (args[0])
		{
		case 'TT':
		case 'tt':
		message.channel.send(h+":"+m+":"+s);
		break;
		}

	if(message.content.includes("胎死腹中"))
	{
		message.reply("你才吃飯嗆到喝水噎到");
	}

	if(message.content.toLowerCase()==="ping"){ // Check if message is "ping"
			message.channel.send("Pinging ...") // Placeholder for pinging ... 
			.then((msg) => { // Resolve promise
				msg.edit("Ping: " + (Date.now() - msg.createdTimestamp)); // Edits message with current timestamp minus timestamp of message
				message.react("🐼");
			});
		}

	if(message.content ==="歐姆定律") 
	{
		message.reply("V=IR , I=V/R , R= V/I");
	}
	if(message.content.includes("派"))
	{
		message.reply(pi);
	}
	if(message.content.includes("怕"))
	{
		message.channel.send("gan gan gan gan gan 挖就ㄍㄧㄚㄟ");
	}
	if(message.content.toUpperCase()==="KVL") 
	{
		message.reply(kvl);
	}
	if(message.content.toUpperCase()==="KCL") 
	{
		message.reply(kcl);
	}
	if(message.content ==="思考") 
	{
		message.reply(sk);
	}
	if(message.content.toUpperCase()==="自走其") 
	{
		message.reply(zzch);
	}
});

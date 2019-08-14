const Discord = require('discord.js');
//var cheerio = require("cheerio"); /* Used to extract html content, based on jQuery || install with npm install cheerio */
//var request = require("request"); /* Used to make requests to URLs and fetch response  || install with npm install request */ 
//var google = require('google')
const client = new Discord.Client();


var d = new Date();	
var h = d.getHours()+8;
var m = d.getMinutes();
var s = d.getSeconds();
/*
function Hex() {
	var generalChannel = client.channels.get("594119720022573076") ;// Replace with known channel ID
    generalChannel.send(" <@551290295078223885> AS U WISH") ;
}*/

client.on('ready', () =>{
  
	var generalChannel = client.channels.get("594119720022573076") ;		
	console.log("機器人已上線");
	generalChannel.send(" <@324536397803290626> bot已在 "+h+":"+m+":"+s+ " 時運作。");  
	// Set the client user's status
	client.user.setStatus('idle');
	client.user.setActivity('code', { type: 'PLAYING' });
          
    });

function addZero(i) {
	if (i < 10) {
	  i = "0" + i;
	}
	return i;
  }

client.on('message', (message) =>{
	var d = new Date();
	var h = addZero(d.getHours()+8);
	var m = addZero(d.getMinutes());
	var s = addZero(d.getSeconds());
	var generalChannel = client.channels.get("594119720022573076") ;
	const kcl = new Discord.Attachment('https://cdn.discordapp.com/attachments/594119720022573076/594555557709611033/unknown.png');
	const kvl = new Discord.Attachment('https://cdn.discordapp.com/attachments/594119720022573076/594556625155784724/unknown.png');
	const zzch = new Discord.Attachment('https://cdn.discordapp.com/attachments/512603339071160377/595194587866464256/65761563_2350292711718973_5573736612304519168_o.png');
	
	if(message.author.bot) return;	
	
	if(message.content.toUpperCase()==="TEST") 
	{
 	   generalChannel.send(h+":"+m+":"+s) ;
	}
	if(message.content ==="胎死腹中") 
	{
		message.reply("你才吃飯嗆到喝水噎到");
	}
	if(message.content ==="歐姆定律") 
	{
		message.reply("V=IR , I=V/R , R= V/I");
	}
	if(message.content.toUpperCase()==="KVL") 
	{
		message.reply(kvl);
	}
	if(message.content.toUpperCase()==="KCL") 
	{
		message.reply(kcl);
	}
	if(message.content.toUpperCase()==="自走其") 
	{
		message.reply(zzch);
	}
	/*if(message.content.toUpperCase()===".G"+) 
	{
		message.reply(zzch);
	}*/
});
	
client.login(process.env.BOT_TOKEN);

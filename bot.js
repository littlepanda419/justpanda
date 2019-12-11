const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const YouTube = require('simple-youtube-api');
const emote = require("./events/emote.js");
const msg = require("./events/msg.js");
const pic = require("./events/pic.js");
const music = require("./events/music.js");
const time = require("./events/time.js");
const help = require("./events/help.js");
const say = require("./events/say.js");
const calc = require("./events/calc.js");
const { google } = require('googleapis');
const ignore = require('ignore-errors');
const colors = require('colors');
const crypto = require('crypto');
const {auth} = require('google-auth-library');
const Math = require('mathjs');
const safeEval = require('safe-eval');
const playwhenon = require("./events/playwhenon.js");


const client = new Discord.Client();
const { token, PREFIX, GOOGLE_API_KEY } = require('./config');
const youtube = google.youtube('v3');

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
	console.time('start');
	var d = new Date();	
	var h = addZero(d.getUTCHours()+8); if (h>=24)	h = "0"+(h-24);
	var m = addZero(d.getMinutes());
	var s = addZero(d.getSeconds());
	var generalChannel =  client.channels.get("653569315089416225");
	var Myinfo = new Discord.RichEmbed()
		.addField("蛤","肏零呆蛤沙小",true)
		.addField("我在幹嘛","我誰",true)
		//.setColor(0xFFFF00)
		.setColor('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
		)
		.setThumbnail("https://qpa.tw/wp-content/uploads/2019/05/%E7%86%8A%E8%B2%93-1.jpg")
		.setFooter("阿這麼小你也要看");
	generalChannel.send(Myinfo);	 //洗頻大師
	client.user.setStatus('idle');
	client.user.setActivity("扣ㄉ", { type: 'PLAYING' });		
	generalChannel.send(" <@324536397803290626> bot已在 "+h+":"+m+":"+s+ " 時開始吃竹子。");  //洗頻大師	
	console.log("%s\x1b[33m",colors.rainbow ("機器人已上線"));
	console.timeEnd('start');
	

	var musicchannel = client.channels.get("506108715720769536");	
	try {
		generalChannel.send("you can't see me.");
		playwhenon.playwhenon();
	} catch (error) {
		console.log(error);
		generalChannel.send("登入時播放出現錯誤");		
	}
});
  

client.on('message', (message) =>{
	if(message.author==client.user)   
	return;	
	if(message.author.bot)   
	return;
		time(message,client);
		help(message,client);
		music(message,client);
		emote(message,client);
		msg(message,client);
		pic(message,client);
		say(message,client);
		calc(message,client);
	});
//client.login(process.env.BOT_TOKEN);
client.login(token);

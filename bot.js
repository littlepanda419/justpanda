const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const YouTube = require('simple-youtube-api');
const emote = require("./events/emote.js");
const msg = require("./events/msg.js");
//const pic = require("./events/pic.js");
const music = require("./events/music old.js");
const time = require("./events/time.js");
const help = require("./events/help.js");
const say = require("./events/say.js");
const { google } = require('googleapis');
const ignore = require('ignore-errors');
var colors = require('colors');
const crypto = require('crypto');
const {auth} = require('google-auth-library');


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
	var generalChannel =  client.channels.get("594119720022573076");
	var Myinfo = new Discord.RichEmbed()
		.addField("蛤","肏零呆蛤沙小",true)
		.addField("我在幹嘛","我誰",true)
		.setColor(0xFFFF00)
		.setThumbnail("https://qpa.tw/wp-content/uploads/2019/05/%E7%86%8A%E8%B2%93-1.jpg")
		.setFooter("阿這麼小你也要看");
	generalChannel.send(Myinfo);	 //洗頻大師
	client.user.setStatus('idle');
	client.user.setActivity("扣ㄉ", { type: 'PLAYING' });		
	generalChannel.send(" <@324536397803290626> bot已在 "+h+":"+m+":"+s+ " 時開始吃竹子。");  //洗頻大師

	var musicchannel = client.channels.get("506108715720769536");
	try {
	//	musicchannel.join();
	//	generalChannel.send("已加入語音");
	} catch (error) {
		generalChannel.send("進不去啦幹");		
	}
	console.log("%s\x1b[33m",colors.rainbow ("機器人已上線"));
	console.timeEnd('start');
});
  

client.on('message', (message) =>{
	if(message.author==client.user)   
	return;		
		/*time(message,client);
		help(message,client);
		
		emote(message,client);
		msg(message,client);
		//pic(message,client);
		say(message,client);*/
		music(message,client);
	});
client.login(process.env.BOT_TOKEN);
//client.login(token);

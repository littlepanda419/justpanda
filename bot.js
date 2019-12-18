const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const colors = require('colors');
const crypto = require('crypto');
const {auth} = require('google-auth-library');
const Math = require('mathjs');
const safeEval = require('safe-eval');
const YouTube = require('simple-youtube-api');
const { google } = require('googleapis');

const emoji = require("./events/emote.js");
const msg = require("./events/msg.js");
const pic = require("./events/pic.js");
const music = require("./events/music.js");
const help = require("./events/help.js");
const say = require("./events/say.js");
const calc = require("./events/calc.js");
const search = require("./events/search.js");
const trans = require("./events/trans.js");
const addzer0 = require ("./events/addzero.js");
const sleep = require ("./events/sleep.js");//only can be used in async  cant use in like client.on


const { token, PREFIX,PREFIX2, GOOGLE_API_KEY } = require('./config');
var generalChannel =  client.channels.get("594119720022573076");

client.on('warn', console.warn);
client.on('error', console.error);
client.on('diconnect', () => generalChannel.send("08被來捆阿"));
client.on('ready', () =>{
	console.time('start');
	var d = new Date();	
	var h = addzer0.addzero(d.getUTCHours()+8);		if (h>=24) h = "0"+(h-24);
	var m = addzer0.addzero(d.getMinutes());
	var s = addzer0.addzero(d.getSeconds());
	var generalChannel =  client.channels.get("653569315089416225");
	var Myinfo = new Discord.RichEmbed()
		.addField("蛤","肏零呆蛤沙小",true)
		.addField("我在幹嘛","我誰",true)
		.setColor('#'+Math.random().toString(16).substr(-6))
		.setThumbnail("https://qpa.tw/wp-content/uploads/2019/05/%E7%86%8A%E8%B2%93-1.jpg")
		.setFooter("阿這麼小你也要看");
	client.user.setStatus('idle');
	client.user.setActivity("扣ㄉ", { type: 'PLAYING' });		
	generalChannel.send(" <@324536397803290626> bot已在 "+h+":"+m+":"+s+ " 時開始吃竹子。");//洗頻大師
	generalChannel.send(Myinfo);  //洗頻大師	
	console.log("%s\x1b[33m",colors.rainbow("機器人已上線"));
	console.timeEnd('start');
	try {
		const pandavoice = client.channels.get("506108715720769536");
		const songchannel = client.channels.get("503134664811347970");
		pandavoice.join().then(connection=> {
			console.log("已經連接至\"熊貓貓的第一個家\"");
		});
	//songchannel.send("p.play https://www.youtube.com/playlist?list=PL7tnvmTUTcvZhYaBzNPxVgGz8tdwVyyX5");	
	} catch (error) {
		console.log(error);
		generalChannel.send("登入時播放出現錯誤");		
	}
});

//機器人說話
let y =process.openStdin();
y.addListener("data",res =>{
	let x =res.toString().trim().split(/ +/g)
	client.channels.get("653569315089416225").send(x.join(" "));
});


client.on('message', (message) =>{
			
		music(message,client);
		msg(message,client);
		help(message,client);		
		pic(message,client);
		say(message,client);
		calc(message,client);
		search(message,client);
		trans(message,client);
	});
//client.login(process.env.BOT_TOKEN);
client.login(token);

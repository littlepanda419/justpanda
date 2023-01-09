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
const calc = require("./events/calc.js");
const search = require("./events/search.js");
const trans = require("./events/trans.js");
const addzer0 = require ("./events/addzero.js");
const ocl0ck = require ("./events/oclock.js");
const countdown = require ("./events/count-down.js");
const sleep = require ("./events/sleep.js");//only can be used in async  cant use in like client.on


const { token, PREFIX,PREFIX2, GOOGLE_API_KEY } = require('./config');

client.on('warn', console.warn);
client.on('error', console.error);
client.on('diconnect', () => generalChannel.send("08被來捆阿"));
client.on('ready', () =>{
	console.time('start');
	client.user.setStatus('idle');
	client.user.setActivity("扣ㄉ", { type: 'PLAYING' });		
	console.log("%s\x1b[33m",colors.rainbow("機器人已上線"));
	console.timeEnd('start');
	setInterval(()=>{
		ocl0ck.oclock(client);
		countdown.CountDown(client);
	},1000);//整點報時的啦
	/*try {
		const pandavoice = client.channels.get("506108715720769536");
		const songchannel = client.channels.get("503134664811347970");
		pandavoice.join().then(connection=> {
			console.log("已經連接至\"熊貓貓的第一個家\"");
		});
	//songchannel.send("p.play https://www.youtube.com/playlist?list=PL7tnvmTUTcvZhYaBzNPxVgGz8tdwVyyX5");
	} catch (error) {
		console.log(error);
		generalChannel.send("登入時播放出現錯誤");		
	}*/
});
//機器人會說話ㄌ
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
		calc(message,client);
		search(message,client);
		trans(message,client);
	});
//client.login(process.env.BOT_TOKEN);
client.login(token);
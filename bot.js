const {EmbedBuilder, Client, GatewayIntentBits, Partials ,Util} = require("discord.js");
const client = new Client({
	intents: [65535],
	partials: [Partials.Channel] 
});
//apis
const ytdl = require("ytdl-core");
const colors = require("colors");
const crypto = require("crypto");
const { auth } = require("google-auth-library");
const Math = require("mathjs");
const safeEval = require("safe-eval");
const YouTube = require("simple-youtube-api");
const { google } = require("googleapis");
//js export file
const emoji = require("./events/emote.js");
const msg = require("./events/msg.js");
const pic = require("./events/pic.js");
const music = require("./events/music.js");
const help = require("./events/help.js");
const calc = require("./events/calc.js");
const search = require("./events/search.js");
const trans = require("./events/trans.js");
const addzer0 = require("./events/addzero.js");
const ocl0ck = require("./events/oclock.js");
const slash = require("./events/slash.js");
const countdown = require("./events/count-down.js");
const sleep = require("./events/sleep.js"); //only can be used in async  cant use in like client.on

const { token, PREFIX, PREFIX2, GOOGLE_API_KEY } = require("./config");

client.on("warn", console.warn);
client.on("error", console.error);
client.on("diconnect", () => generalChannel.send("晚安。"));
client.on("ready", () => {
  console.time("start");
  let d = new Date();
  let h = addzer0.addzero(d.getUTCHours() + 8);
  if (h >= 24) h = "0" + (h - 24);
  let m = addzer0.addzero(d.getMinutes());
  let s = addzer0.addzero(d.getSeconds());
  let generalChannel = client.channels.cache.get("653569315089416225");
  const infoEmbed = new EmbedBuilder()
    .addFields(
      { name: "name1", value: "value1", inline: true },
      { name: "我在幹嘛", value: "這裡是哪", inline: true }
    )
    .setColor("#" + Math.random().toString(16).substr(-6))
    .setThumbnail(
      "https://qpa.tw/wp-content/uploads/2019/05/%E7%86%8A%E8%B2%93-1.jpg"
    )
	.setTimestamp()
	.setFooter({
		text: `這麼小還這麼仔細看`,
		iconURL: "https://qpa.tw/wp-content/uploads/2019/05/%E7%86%8A%E8%B2%93-1.jpg",
	  });

  client.user.setStatus("idle");
  client.user.setActivity("扣ㄉ", { type: "PLAYING" });
  generalChannel.send("<@324536397803290626> bot已在 " +h + ":" + m + ":" +s +" 時開始吃竹子。"); //洗頻大師
  generalChannel.send({ embeds: [infoEmbed] });
  console.log("%s\x1b[33m", colors.rainbow("機器人已上線"));
  console.timeEnd("start");
  setInterval(() => {
    ocl0ck.oclock(client);
    countdown.CountDown(client);
  }, 1000); 
});
//機器人會說話ㄌ

let y = process.openStdin();
y.addListener("data", (res) => {	
  let x = res.toString().trim().split(/ +/g);
  if (x=='')return ;  
  client.channels.cache.get("653569315089416225").send(x.join(" "));
});

client.on('messageCreate', (message) => {
	music(message, client);
	msg(message, client);
	help(message, client);
	pic(message, client);
	calc(message, client);
	search(message, client);
	trans(message, client);
});
client.on('interactionCreate', async interaction => {
	slash(interaction,client);
});

//client.login(process.env.BOT_TOKEN);
client.login(token);

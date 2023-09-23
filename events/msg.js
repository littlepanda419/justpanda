const {EmbedBuilder, Client, GatewayIntentBits, Partials ,Util} = require("discord.js");
const client = new Client({
	intents: [65535],
	partials: [Partials.Channel] 
});

const addzer0 = require ("./addzero.js");
//const emoji = require ("./emote.js");
const {PREFIX,PREFIX2} = require('../config.js');
const {google} = require('googleapis');

const 
	pi  = ('https://truth.bahamut.com.tw/s01/202001/4216b98a522c39fd5a28ecfdd55f719a.JPG'),
	tsu = ('https://cdn.discordapp.com/attachments/375207017259728897/655704996066754561/unknown.png'),
	mi = ('https://truth.bahamut.com.tw/s01/201911/c52f69b1e5050d8ba6b86473032c6390.JPG'),
	cornsoup = ('https://cdn.discordapp.com/attachments/375207017259728897/655745874001002517/unknown.png'),
	howO = ('https://cdn.discordapp.com/attachments/375207017259728897/658617040541843517/unknown.png'),
	waitasec = ('https://truth.bahamut.com.tw/s01/201910/58c65f2a9243312e93cc8512034fe636.JPG'),
	NO = ('https://cdn.discordapp.com/attachments/375207017259728897/658999245533216778/80051634_2831872586834440_2061970767532261376_n.png'),
	magic_hiro = ('https://truth.bahamut.com.tw/s01/202001/ea499fd84f5d4f3ea7e56558cdb05399.JPG'),
	pi4 = ('https://cdn.discordapp.com/attachments/375207017259728897/661168770240479232/unknown.png'),
	yousister = ('https://cdn.discordapp.com/attachments/375207017259728897/661168811176755223/unknown.png'),
	chiang = ('https://truth.bahamut.com.tw/s01/202001/e072bc28c028967e701923dd6eb70eb8.JPG'),
	image = ('https://truth.bahamut.com.tw/s01/202001/87b120a6ec1c4c66a796645f095786c3.JPG'),
	lary = ('https://truth.bahamut.com.tw/s01/202001/10257d23a6e466ba420c0d0f585326a1.JPG'),
	threee = ('https://i.imgur.com/qR6K7Ht.jpg'),
	youthink = ('https://truth.bahamut.com.tw/s01/202001/726f42fa427c2e033364ddda1b7b3145.JPG'),
	open = ('https://truth.bahamut.com.tw/s01/202001/12081d0806da9f244481b45652b280be.JPG'),
	moneyy = ('https://truth.bahamut.com.tw/s01/202001/a51639b34724b3a579872be913fdee61.JPG'),
	helloo = ('https://cdn.discordapp.com/attachments/375207017259728897/665161383159005195/80859153_644772576059376_3614397953780744192_n.png'),
	dickk = ('https://cdn.discordapp.com/attachments/375207017259728897/665774817407926332/81989294_1002087336858497_5836934879673057280_n.png'),
	dodo =('https://cdn.discordapp.com/attachments/375207017259728897/665773958208946196/82338092_670075040489366_551955069071785984_n.png'),
	bow = ('https://i.imgur.com/WbaPKjb.gif'),
	duck = ('https://cdn.discordapp.com/attachments/375207017259728897/677870907892695062/656f5a1b-926a-4717-b452-429c8545b0e4.png');


module.exports = ('messageCreate', message =>
{
	if(message.author.bot)   
	return;

	//獲取訊息相關資料
	//if(message.author.id=="324536397803290626")
	//	console.log(message);
	 
	/*//戒嚴時期
	if (message.channel.id='653569019454029864') {
	message.delete();
	message.channel.send(message.content + " BY " + message.author.username);	
	}*/
		
	
	//學加鈞說話
	/*if(message.author.id=="551290295078223885"){
		if (message.attachments.size > 0) {
			if (message.attachments.every(IFattachIsImage)){
				let nuupicc  = new Discord.Attachment(message.attachments.first().url);
				message.delete();
				message.channel.send(nuupicc);
					if (message.content !=='')
					message.channel.send(message.content);
				}
			}else{
				message.delete();
				message.channel.send(message.content);
			}
		}*/
	//學熊貓說話
	/*
	if(message.author.id=="324536397803290626"){
		if (message.attachments.size > 0) {
			if (message.attachments.every(IFattachIsImage)){
				let nuupicc  = new Discord.Attachment(message.attachments.first().url);
				message.channel.send(nuupicc);
					if (message.content !=='')
					message.channel.send(message.content);
				}				
				message.delete();
			}else{
				message.delete();
				message.channel.send(message.content);
			}
		}
	*/

	let d = new Date();
	let h = addzer0.addzero(d.getUTCHours()+8); if (h>=24)	h = "0"+(h-24);
	let m = addzer0.addzero(d.getMinutes());
	let s = addzer0.addzero(d.getSeconds());

	/*if(message.content.includes("<@!624396190984831016>"))
		message.channel.send(" <@551290295078223885> 上面有訊息要TAG你 :point_up:，\n但是他可能跟熊貓一樣懶得找，或是TAG錯，所以我特地TAG你喔 \n :yellow_heart: ");*/
	if(message.content.includes("<@!624396190984831016>")){
		let forMirror = message.content.split(`<@!624396190984831016>`);
		    forMirror = forMirror.join('');
		message.channel.send(" <@551290295078223885> \n"+message.author+"想要跟你說\n" + forMirror);
	}if(message.content.includes("胎死腹中"))
		message.reply("你才吃飯嗆到喝水噎到");
	if(message.content.includes("修但幾咧"))
		message.reply(waitasec);
	if(message.content.includes("欸")&&message.content.includes("<@")&&message.content.includes(">")&&message.content.includes("過來")&&message.author.id=='324536397803290626'){
		console.log(message.content);
		let come=message.content.indexOf(`過來`)+2;		
		let cometime=message.content.substring(come,come+1);
		console.log(cometime);
		for (cometime;cometime>=1;cometime--){
			message.channel.send("欸"+message.content.substring(message.content.indexOf(`<`),message.content.indexOf(`>`)+1)+"你鍋來下");
		}

	}
	if(message.content.includes("派"))
		message.reply(pi);
	if(message.content.includes("瓜張")||message.content.includes("呱張")||message.content.includes("誇張"))
		message.reply(duck);
	if(message.content.includes("怕"))
		message.channel.send("gan gan gan gan gan 挖就ㄍㄧㄚㄟ");
	if(message.content.includes("有趣")||message.content.includes("促咪")){
		if(message.content.includes("<@")&&message.content.includes(">")){
			message.channel.send("阿 "+ message.content.substring(message.content.indexOf(`<`),message.content.indexOf(`>`)+1)+" 你不就很有趣");
			message.channel.send(tsu);
			message.channel.send(mi);
		}
		else{
		message.channel.send("阿你不就很有趣");
		message.channel.send(tsu);
		message.channel.send(mi);
		}
	}
	if(message.content.includes("屁事")||message.content.includes("P4"))
		message.channel.send(pi4);	
	if(message.content.includes("神奇海螺"))
		message.channel.send(magic_hiro);
	if(message.content.includes("嗆"))
		message.channel.send(chiang);
	if(message.content.includes("尖頭"))
		message.channel.send(lary);
	if(message.content.includes("幻想"))
		message.channel.send(image);
	if(message.content.includes("三點")||message.content.includes("3.")||message.content.includes("3點"))
		message.channel.send(threee);
	if(message.content.includes("慢慢想")||message.content.includes("慢慢來"))
		message.channel.send(youthink);
	if(message.content.includes("錢"))
		message.channel.send(moneyy);
	if(message.content.includes("芝麻開門"))
		message.channel.send(open);
	if(message.content.includes("好喔")||message.content.includes("好哦")||message.content.includes("好ㄛ"))
		message.channel.send(howO);
	if(message.content.includes("不要"))
		message.channel.send(NO);		
	if(message.content.includes("在哈囉"))
		message.channel.send(helloo);
	if(message.content.includes("度的")||message.content.includes("度ㄉ"))
		message.channel.send(dodo);
	if(message.content.includes(":toadRRRRR:")){
		message.react("1060797784120373308");
		message.channel.send("<:toadrrrrr:1060797784120373308>");
		}
	//--------------------以下需要前綴-----------------

	if (!(message.content.startsWith(PREFIX) ^ message.content.startsWith(PREFIX2)))
	return undefined;		
	let command = message.content.toLowerCase().split(' ')[0];
		command = command.slice(PREFIX.length);

	const args = message.content.split(' ');
	const aftcmd = args.slice(1).join(' ');
		
	if(command ==="歐姆定律")
		message.reply("V=IR , I=V/R , R= V/I");
	if(command ==="tft")
		message.reply("https://tftactics.gg/tierlist/team-comps");

	if (command ==="clear"||command==="purge") {
        if (message.author.id!=='324536397803290626') return message.channel.send("沒有權限還想刪阿");
        let count = parseInt(aftcmd);
        if (!count) return message.channel.send("請輸入數字");
        if (isNaN(count)) return message.channel.send("請輸入有效數字");
        if (count < 1 || count > 30) return message.channel.send("數字範圍只能在1~30之間");
        message.channel.bulkDelete(count + 1, true);
	}
	
	if(command==="ping"){ 
			message.channel.send("Pinging ...") 
			.then((msg) => { 
				msg.edit("Ping: " + Math.abs(Date.now() - msg.createdTimestamp) + " ms"); 
				message.react("🐼");
			});			
		}
	if (command ==='time') {
		message.channel.send(h+":"+m+":"+s);
		}
	if (command ==='tt') {
		message.channel.send(".");
		}
	if (command === 'emojilist') {
		const emotes = message.guild.emojis.map(emoji => emoji.toString()).join(" ");
		console.log(message.guild.emojis.constructor.name);
		console.log(emotes);
		message.channel.send(emotes);
		}
		
	function IFattachIsImage(msgAttach) {
		var url = msgAttach.url;
		return (url.indexOf("jpeg", url.length - "jpeg".length )!==-1||
		url.indexOf("jpg", url.length - "jpg".length /*or 3*/) !== -1||
		url.indexOf("png", url.length - "png".length ) !== -1);
		// 如果附件的結尾是 JPG JPEG PNG 則回傳TRUE
	}

});
const Discord = require('discord.js');
const client = new Discord.Client();
const addzer0 = require ("./addzero.js");
//const emoji = require ("./emote.js");
const {PREFIX,PREFIX2} = require('../config.js');
const {google} = require('googleapis');

const 
	pi  = new Discord.Attachment('https://truth.bahamut.com.tw/s01/202001/4216b98a522c39fd5a28ecfdd55f719a.JPG'),
	tsu = new Discord.Attachment('https://cdn.discordapp.com/attachments/375207017259728897/655704996066754561/unknown.png'),
	mi = new Discord.Attachment('https://truth.bahamut.com.tw/s01/201911/c52f69b1e5050d8ba6b86473032c6390.JPG'),
	cornsoup = new Discord.Attachment('https://cdn.discordapp.com/attachments/375207017259728897/655745874001002517/unknown.png'),
	howO = new Discord.Attachment('https://cdn.discordapp.com/attachments/375207017259728897/658617040541843517/unknown.png'),
	waitasec = new Discord.Attachment('https://truth.bahamut.com.tw/s01/201910/58c65f2a9243312e93cc8512034fe636.JPG'),
	NO = new Discord.Attachment('https://cdn.discordapp.com/attachments/375207017259728897/658999245533216778/80051634_2831872586834440_2061970767532261376_n.png'),
	magic_hiro = new Discord.Attachment('https://truth.bahamut.com.tw/s01/202001/ea499fd84f5d4f3ea7e56558cdb05399.JPG'),
	pi4 = new Discord.Attachment('https://cdn.discordapp.com/attachments/375207017259728897/661168770240479232/unknown.png'),
	yousister = new Discord.Attachment('https://cdn.discordapp.com/attachments/375207017259728897/661168811176755223/unknown.png'),
	chiang = new Discord.Attachment('https://truth.bahamut.com.tw/s01/202001/e072bc28c028967e701923dd6eb70eb8.JPG'),
	image = new Discord.Attachment('https://truth.bahamut.com.tw/s01/202001/87b120a6ec1c4c66a796645f095786c3.JPG'),
	lary = new Discord.Attachment('https://truth.bahamut.com.tw/s01/202001/10257d23a6e466ba420c0d0f585326a1.JPG'),
	threee = new Discord.Attachment('https://truth.bahamut.com.tw/s01/202001/f8548b97122bbdc20ea1130bf49a2d73.JPG'),
	youthink = new Discord.Attachment('https://truth.bahamut.com.tw/s01/202001/726f42fa427c2e033364ddda1b7b3145.JPG'),
	open = new Discord.Attachment('https://truth.bahamut.com.tw/s01/202001/12081d0806da9f244481b45652b280be.JPG'),
	moneyy = new Discord.Attachment('https://truth.bahamut.com.tw/s01/202001/a51639b34724b3a579872be913fdee61.JPG'),
	helloo = new Discord.Attachment('https://cdn.discordapp.com/attachments/375207017259728897/665161383159005195/80859153_644772576059376_3614397953780744192_n.png'),
	dickk = new Discord.Attachment('https://cdn.discordapp.com/attachments/375207017259728897/665774817407926332/81989294_1002087336858497_5836934879673057280_n.png'),
	dodo =new Discord.Attachment('https://cdn.discordapp.com/attachments/375207017259728897/665773958208946196/82338092_670075040489366_551955069071785984_n.png'),
	bow = new Discord.Attachment('https://i.imgur.com/WbaPKjb.gif'),
	duck = new Discord.Attachment('https://cdn.discordapp.com/attachments/375207017259728897/677870907892695062/656f5a1b-926a-4717-b452-429c8545b0e4.png');


module.exports = ('message', message =>
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
		message.channel.send(" <@551290295078223885> 上面有訊息要TAG你 :point_up:，\n但是他可能跟熊貓一樣懶得找，或是眼殘TAG錯，所以我特地TAG你喔 \n :yellow_heart: ");*/
	if(message.content.includes("<@!624396190984831016>")){
		let forMirror = message.content.split(`<@!624396190984831016>`);
		    forMirror = forMirror.join('');
		message.channel.send(" <@551290295078223885> \n"+message.author+"想要跟你說\n" + forMirror);
	}if(message.content.includes("胎死腹中"))
		message.reply("你才吃飯嗆到喝水噎到");
	if(message.content.includes("修但幾咧"))
		message.reply(waitasec);
	if(message.content.includes("派"))
		message.reply(pi);
	if(message.content.includes("爆射"))
		message.reply(bow);
	if(message.content.includes("瓜張")||message.content.includes("呱張")||message.content.includes("誇張"))
		message.reply(duck);
	if(message.content.includes("怕"))
		message.channel.send("gan gan gan gan gan 挖就ㄍㄧㄚㄟ");
		if(message.content.includes("去你他眼鏡盒玉米濃湯的"))
			message.channel.send(cornsoup);
	if(message.content.includes("有趣")||message.content.includes("促咪")){
		if(message.content.includes("<@!")&&message.content.includes(">")){
			message.channel.send("阿 "+ message.content.substring(message.content.indexOf(`<`),message.content.indexOf(`>`)+1)+" 你不就很有趣");
			message.channel.send(tsu);
			message.channel.send(mi);
		}
		else{
		message.channel.send("阿"+ message.author+"你不就很有趣");
		message.channel.send(tsu);
		message.channel.send(mi);
		}
	}
	if(message.content.includes("你妹")||message.content.includes("妳妹"))
		message.channel.send(yousister);	
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
	if(message.content.includes("屌虐"))
		message.channel.send(dickk);
	if(message.content.includes("度的")||message.content.includes("度ㄉ"))
		message.channel.send(dodo);
	if(message.content.includes(":toadRRRRR:")){
		message.channel.send("<:toadrrrrr:1060797784120373308>");
		message.react("1060797784120373308");
		}
	//--------------------以下需要前綴-----------------

	if (!(message.content.startsWith(PREFIX) ^ message.content.startsWith(PREFIX2)))
	return undefined;		
	let command = message.content.toLowerCase().split(' ')[0];
		command = command.slice(PREFIX.length);

	const args = message.content.split(' ');
	const aftcmd = args.slice(1).join(' ');

	if (command === 'repeat'||command === 'rpt'){		
		if (!aftcmd) return message.channel.send('repeat你媽媽啦');
		else{
			if (aftcmd === '我是笨蛋'||aftcmd === '我是白癡')
			return message.channel.send('我知道阿');
		return message.channel.send(aftcmd);
		}
	}

		
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
	if (command ==="mute") {
        if (!(message.member.roles.has('501698980216832011'))) return message.channel.send("沒有權限還想靜音阿");
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("請TAG\"人\"")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("小雞雞還想靜音大懶覺阿")        
        let muterole = message.guild.roles.find(role => role.name === '馬的吵三小，給我安靜點')
        if (muterole) {
            member.addRole(muterole)
            message.channel.send(member + '解決不了問題 就解決提出問題的人 \:ok_hand: ')
        }
        else {
            message.guild.createRole({name: '馬的吵三小，給我安靜點', permissions: 0}).then(function (role) {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(function (channel) {
                    channel.overwritePermissions(role, {
						SEND_MESSAGES: false,
						MANAGE_MESSAGES:false					
                    })
				})					
                member.addRole(role);
			})
			message.guild.createRole({name: '馬的吵三小，給我安靜點', permissions: 0}).then(function (role) {
				message.guild.channels.filter(channel => channel.type === 'voice').forEach(function (channel) {
					channel.overwritePermissions(role, {
						SPEAK:false,						
						MUTE_MEMBERS:false,
						DEAFEN_MEMBERS:false,
						MOVE_MEMBERS:false	
						})						
					})	
				member.addRole(role);
			})			
		message.channel.send(member + ' 解決不了問題 就解決提出問題的人 \:ok_hand: ');
		}	
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
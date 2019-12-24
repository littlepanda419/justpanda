const Discord = require('discord.js');
const client = new Discord.Client();
const addzer0 = require ("./addzero.js");
const emoji = require ("./emote.js");

const kcl = new Discord.Attachment('https://cdn.discordapp.com/attachments/594119720022573076/594555557709611033/unknown.png');
const kvl = new Discord.Attachment('https://cdn.discordapp.com/attachments/594119720022573076/594556625155784724/unknown.png');
const zzch = new Discord.Attachment('https://cdn.discordapp.com/attachments/512603339071160377/595194587866464256/65761563_2350292711718973_5573736612304519168_o.png');
const pi  = new Discord.Attachment('https://truth.bahamut.com.tw/s01/201907/295c16d012c60f51b45fb37d629232ce.JPG');
const tsu = new Discord.Attachment('https://cdn.discordapp.com/attachments/375207017259728897/655704996066754561/unknown.png');
const mi = new Discord.Attachment('https://truth.bahamut.com.tw/s01/201911/c52f69b1e5050d8ba6b86473032c6390.JPG');
const cornsoup = new Discord.Attachment('https://cdn.discordapp.com/attachments/375207017259728897/655745874001002517/unknown.png');
const howO = new Discord.Attachment('https://cdn.discordapp.com/attachments/375207017259728897/658617040541843517/unknown.png');
const waitasec = new Discord.Attachment('https://truth.bahamut.com.tw/s01/201910/58c65f2a9243312e93cc8512034fe636.JPG');
const NO = new Discord.Attachment('https://cdn.discordapp.com/attachments/375207017259728897/658999245533216778/80051634_2831872586834440_2061970767532261376_n.png');


const {google} = require('googleapis');



const {PREFIX,PREFIX2} = require('../config.js');


module.exports = ('message', message =>
{
	if(message.author.bot)   
	return;
	//獲取訊息相關資料
	/*if(message.author.id=="324536397803290626"){
	console.log(message);
	}*/
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
	/*if(message.author.id=="324536397803290626"){
		if (message.attachments.size > 0) {
			if (message.attachments.every(IFattachIsImage)){
				message.delete();
				let nuupicc  = new Discord.Attachment(message.attachments.first().url);				
				message.channel.send(nuupicc);
					if (message.content !=='')
					message.channel.send(message.content);
				}
			}else{
				message.delete();
				message.channel.send(message.content);
			}
		}*/
	

	var d = new Date();
	var h = addzer0.addzero(d.getUTCHours()+8); if (h>=24)	h = "0"+(h-24);
	var m = addzer0.addzero(d.getMinutes());
  	var s = addzer0.addzero(d.getSeconds());

	/*if(message.content.includes("<@!624396190984831016>"))
		message.channel.send(" <@551290295078223885> 上面有訊息要TAG你 :point_up:，\n但是他可能跟熊貓一樣懶得找，或是眼殘TAG錯，所以我特地TAG你喔 \n :yellow_heart: ");*/
	if(message.content.includes("<@!624396190984831016>"))
		message.channel.send(" <@551290295078223885> "+ message.content);
	if(message.content.includes("胎死腹中"))
		message.reply("你才吃飯嗆到喝水噎到");
	if(message.content.includes("修但幾咧"))
		message.reply(waitasec);
	if(message.content.includes("派"))
		message.reply(pi);
	if(message.content.includes("怕"))
		message.channel.send("gan gan gan gan gan 挖就ㄍㄧㄚㄟ");
		if(message.content.includes("去你他眼鏡盒玉米濃湯的"))
			message.channel.send(cornsoup);
	if(message.content.includes("有趣")||message.content.includes("促咪")){
		message.channel.send("阿"+ message.author.username+  "你不就很有趣");
		message.channel.send(tsu);
		message.channel.send(mi);
	}
	if(message.content.includes("好喔")||message.content.includes("好哦")||message.content.includes("好ㄛ"))
		message.channel.send(howO);
	if(message.content.includes("不要"))
		message.channel.send(NO);


	//--------------------以下需要前綴-----------------

	if (!(message.content.startsWith(PREFIX) ^ message.content.startsWith(PREFIX2)))
	return undefined;		
	let command = message.content.toLowerCase().split(' ')[0];
		command = command.slice(PREFIX.length);

	const args = message.content.split(' ');
	const aftcmd = args.slice(1).join(' ');
		
	if(command ==="歐姆定律") 
	{
		message.reply("V=IR , I=V/R , R= V/I");
	}
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
            message.channel.send(member + '解決不了問題 就解決提出問題的人 :ok_hand: ')
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
		message.channel.send(member + ' 解決不了問題 就解決提出問題的人 :ok_hand: ');
		}	
	}

	
	if(command==="ping"){ // Check if message is "ping"
			message.channel.send("Pinging ...") // Placeholder for pinging ... 
			.then((msg) => { // Resolve promise
				msg.edit("Ping: " + Math.abs(Date.now() - msg.createdTimestamp) + " ms"); // Edits message with current timestamp minus timestamp of message
				message.react("🐼");
			});			
		}
	if (command ==='time'||command ==='tt') {
		message.channel.send(h+":"+m+":"+s);
		}
	
	
	function IFattachIsImage(msgAttach) {
		var url = msgAttach.url;
		return (url.indexOf("jpeg", url.length - "jpeg".length )!==-1||
		url.indexOf("jpg", url.length - "jpg".length /*or 3*/) !== -1||
		url.indexOf("png", url.length - "png".length ) !== -1);
		// 如果附件的結尾是 JPG JPEG PNG 則回傳TRUE
	}

});
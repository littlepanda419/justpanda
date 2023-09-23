const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
	intents: [65535]
}); 
const {PREFIX,PREFIX2,GOOGLE_API_KEY} = require(`../config.js`);
const google = require('google');
const translate = require('@vitalets/google-translate-api');

module.exports = ("message", async message => 
{
	if(message.author==client.user)   
	return;	
	if(message.author.bot)   
	return;	
	if (!(message.content.startsWith(PREFIX) ^ message.content.startsWith(PREFIX2))) return undefined;	


	let command = message.content.toLowerCase().split(' ')[0];
		command = command.slice(PREFIX.length);
	if (command === 'translate'||command ==='trans'||command ==='tr') {

	let args = message.content.split(/[ ]+/);
    let lang = args[1].toLowerCase();
    let suffix = args.slice(2).join(' ');
    if (!suffix) return message.channel.send('請輸入要翻譯的文字');
	if (!lang) return message.channel.send('請輸入要翻譯至的語言');
	try {
		translate(suffix,{to: lang}).then(res => {
			let embed = new Discord.RichEmbed()
			.setColor('#'+Math.random().toString(16).substr(-6))
			.setAuthor(`翻譯至: ${lang}`, `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/130px-Google_Translate_logo.svg.png`)
			.setDescription(`**原始文字**: ${suffix}\n**翻譯後**: ${res.text}`)
			.setTimestamp()
			.setFooter('**執行延遲: '+ `${Math.abs(Date.now() - message.createdTimestamp)}` + ' ms**', message.author.displayAvatarURL);
		return message.channel.send({embed: embed})
		})
		}catch(error){
			let embed = new Discord.RichEmbed()
			.setColor('#'+Math.random().toString(16).substr(-6))
			.setDescription(`:警告: **${message.author.username}**, ${error}`)
			.setTimestamp()
			.setFooter('**執行延遲: '+ `${Math.abs(Date.now() - message.createdTimestamp)}` + ' ms**', message.author.displayAvatarURL);
			
		}
	return message.react("🐼");
	}
});



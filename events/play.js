const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const client = new Discord.Client();


exports.run = async (client,message,args,ops)=>{

    if (!message.member.voiceChannel) return message.member.channel.send('你要先進入語音');
    if (member.guild.me.voiceChannel) return message.member.channel.send('我在別人家了');
    if (!args[0]) return message.channel.send('給我連結啦幹');
    let validate = await ytdl.validateURL(args[0]); //validate info 
    if(!validate) return message.channel.send ('請在指令後輸入有效**網址**');
    let info = await ytdl.getInfo(args[0]);
    let connection = await message.member.voiceChannel.join();
    let dispatcher = await connection.play(ytdl(args[0], {filter : 'audioonly'}));
    message.channel.send(`Now playing : ${info.title} `);
    client.user.setActivity(`${info.title}`, { type: 'PLAYING' });	
}
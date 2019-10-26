/*const Discord = require('discord.js');
const Attachment = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');

const PREFIX = 'p.';
const queue = new Map();
var servers = {};

module.exports =('message',message=>
{
 	 const args = message.content.substring(PREFIX.length).split(" ");	
		switch (args[0]){
		case 'play':
		case 'PLAY':
			function play (connection , message)
			{
			const serverQueue = queue.get(message.guild.id);
			
		var server = servers [message.guild.id];
		message.channel.send("已開始播放");
		console.log("recevied :" );
		try{
		server.dispatcher = connection.playStream(ytdl(server.queue[0],{filter: 'audioonly', quality: 'highestaudio', highWaterMark: 1<<25 }), {highWaterMark: 1});
		server.queue.shift();
		server.dispatcher.on ("end",function(){
		if (server.queue[0]){
		play(connection,message);
		}else{
		connection.disconnect();
		}
	});
		const serverQueue = queue.get(message.guild.id);
	 	if(!args[1]){
                message.channel.send("you need to provide a link");
                return;
            }
            if(!message.member.voiceChannel){
                message.channel.send("you must be in a channel to let me join");
                return;
            }
            if(!servers[message.guild.id]) servers[message.guild.id] = {
                queue : [] 
            }
            var server = servers [message.guild.id];
            server.queue.push(args[1]);

            if (!message.guild.voiceConnection) message.member.voiceChannel.join().then
            (function(connection){
                play(connection,message);
            });
		}catch(error){
			console.error(` cant join : ${error}`);
			return message.channel.send(` cant join : ${error}`);
			}}
								break;

		case 'skip':
		case 'SKIP':
			var server = servers [message.guild.id]	
			if(server.dispatcher) server.queue.push();
			message.channel.send("已跳過`**${song.title}**`");
								break;

		case 'stop':
		case 'STOP':
			var server = servers [message.guild.id];
			if (message.guild.voiceConnection)
			for(var i = server.queue.length -1 ; i>=0 ;i++){
				server.queue.splice(i,1);
			}
			server.dispatcher.end();
			message.channel.send("已停止播放並離開頻道");
								break;

		}
});*/
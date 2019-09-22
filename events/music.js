const Discord = require('discord.js');
const Attachment = require('discord.js');

const client = new Discord.Client();
const ytdl = require('ytdl-core');

const PREFIX = 'p.';
var servers = {};

module.exports =('message',message=>
{
	if (message.content.toUpperCase()==="PANDAIN")
	{
		const musicchannel = message.member.voiceChannel;
		try {
		musicchannel.join();
		message.channel.send("已加入語音");			
		message.react("🐼");
		} catch (error)
		{
			message.channel.send("進不去啦幹");
			emoji(612549755502985247);
			message.react(`${emoji(/*表情ID*/ )}`);
		}
	}
  let args = message.content.substring(PREFIX.length).split(" ");
	
		switch (args[0])
		{
			case 'play':               
            function play (connection , message)
			{
				var server = servers [message.guild.id];				
                 	        message.channel.send("now playing your song");
				console.log("recevied :" ); 
				server.dispatcher = connection.playStream(ytdl(server.queue[0],{filter: 'audioonly', quality: 'highestaudio', highWaterMark: 1<<25 }), {highWaterMark: 1}));
				server.queue.shift();
				server.dispatcher.on ("end",function(){
					if (server.queue[0]){
                        play(connection,message);
					}else{
						connection.disconnect();
					}
                });
                
			}
            if(!args[1]){
                message.channel.send("you need to provide a link");
                return;
            }
            if(!message.member.voiceChannel){
                message.channel.send("you must be in a channel to let me join to");
                return;
            }
            if(!servers[message.guild.id]) servers[message.guild.id] = {
                queue : [] 
            };
            var server = servers [message.guild.id];
            server.queue.push(args[1]);

            if (!message.guild.voiceConnection) message.member.voiceChannel.join().then
            (function(connection){
                play(connection,message);
            });
		break;

		case 'skip':
		server.queue.shift();									
        }
	
	if (message.content.toUpperCase()==="PANDAOUT")
	{
		const musicchannel = message.member.voiceChannel;
		try {
		musicchannel.leave();
		message.channel.send("已離開語音");
		message.react("🐼");	
		} catch (error) {
		message.channel.send("08偏不要滾");
		message.react("🐼");
		}
	}
});

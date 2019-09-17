const {Client,Attachment} = require ('discord.js');
const bot = new Client();
const ytdl = require("ytdl-core");
var opus = require("node-opus");

const token ='NTk0MzczMDI0ODc5NDc2NzM3.XX3JNw.retK4HT0R8PNU4FFH8A2MsbB1Ks';
const PREFIX = 'p.';
var servers = {};


bot.login(token);

    bot.on('ready', () =>{      
    console.log("機器人已上線");
    });

    bot.on('message', message =>{

        let args = message.content.substring(PREFIX.length).split(" ");
	
		switch (args[0])
		{
			case 'play':               
            function play (connection , message)
			{
				var server = servers [message.guild.id];
				server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));
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
 											
        }
    });

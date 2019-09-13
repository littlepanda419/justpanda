const Discord = require('discord.js');
//onst fs = require('fs');
const ytdl = require('ytdl-core');
const client = new Discord.Client();

function play(connection, message)
{
	var server =servers[message.guild.id];
	server.dispatcher = connection.playStream(ytdl(sever.queue[0], {filter:"audioonly"}));
	server.queue.shift();
	server.dispatcher.on("end",function(){
		if(server.queue[0])	 
		{
		play(connection,message);
	}
	});
}

async function playMusic(conn, entry = 0) {
  const song = queue[entry];

  try {
    const stream = ytdl(song, { 
      quality: 'highestaudio',
      highWaterMark: 1<<25
     });

    stream.on('info', info => {
      curSong = info.title;
      logger.info(`Playing: ${curSong}`);
      updatePresence(`► ${curSong}`);

      if (listeners <= 1) {
        dispatcher.pause();
        updatePresence(`❙ ❙ ${curSong}`);
        logger.info(`Nobody is listening in ${channel.name}, music has been paused.`);
      }
    }
	  
	  
	  
module.exports =('message', (message) =>
{
	if (message.content === "欸欸欸你過來一下"||message.content ==="欸你過來一下"||message.content ==="欸你進來一下"
	||message.content ==="欸欸欸你進來一下"||message.content ==="過來一下"||message.content.toUpperCase()==="PANDAIN")
	{
		const musicchannel = message.member.voiceChannel;
		try {
		musicchannel.join();
		var server =server[message.guild.id];
		message.channel.send("已加入語音");			
		message.react("🐼");
		server.queue.push(args);
		} catch (error)
		{
			message.channel.send("進不去啦幹");
			emoji(612549755502985247);
			message.react(`${emoji(/*表情ID*/ )}`);
		}
	}
	if(message.content.toLowerCase()==="play") 
	{	
		playMusic(connection);
	}

	if (message.content === "滾啦幹"||message.content.toUpperCase()==="PANDAOUT")
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

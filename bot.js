const Discord = require('discord.js');
const client = new Discord.Client();
//const Youtube = require('simple-youtube-api');
//const ytdl = require('yt-clone');
//const youtube =  Youtube(jLSoTuszX4pyBV0WBP5g4Fdq); // insert here your Youtube API key, you can also store it as an environment variable or in a config.json
var isPlaying; // we will use this variable to determine if a song is playing
const queue = new Map();

	/*
	{ LOCAL
	const config = require("./config.json");
	client.login(config.token);
	}
	{ INTERNET
	client.login(process.env.BOT_TOKEN);
	}	
	*/


var d = new Date();	
var h = d.getHours()+8;
var m = d.getMinutes();
var s = d.getSeconds();

client.on('ready', () =>{
	
	var generalChannel = client.channels.get("594119720022573076");		
	console.log("機器人已上線");
	generalChannel.send(" <@324536397803290626> bot已在 "+h+":"+m+":"+s+ " 時運作。");  
	// Set the client user's status
	client.user.setStatus('idle');
	client.user.setActivity("扣ㄉ", { type: 'PLAYING' });

   /* const musicchannel = client.channels.get("506108715720769536");
	musicchannel.join().then(connection => {
		generalChannel.send("連接語音成功");
	  }).catch(e => {
		generalChannel.send("連接語音失敗");
	  }); */     
    });

function addZero(i) {
	if (i < 10) {
	  i = "0" + i;
	}
	return i;
  }

  async function execute(message, serverQueue) 
  {
	const args = message.content.split(' ');
	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel) return message.channel.send('You need to be in a voice channel to play music!');
	 const permissions =     voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
	 return message.channel.send('I need the permissions to join and   speak in your voice channel!');
	}
  }

client.on('message', (message) =>{
	var d = new Date();
	var h = addZero(d.getHours()+8);
	var m = addZero(d.getMinutes());
	var s = addZero(d.getSeconds());
	var generalChannel = client.channels.get("594119720022573076") ;
	const kcl = new Discord.Attachment('https://cdn.discordapp.com/attachments/594119720022573076/594555557709611033/unknown.png');
	const kvl = new Discord.Attachment('https://cdn.discordapp.com/attachments/594119720022573076/594556625155784724/unknown.png');
	const zzch = new Discord.Attachment('https://cdn.discordapp.com/attachments/512603339071160377/595194587866464256/65761563_2350292711718973_5573736612304519168_o.png');
	const pi  = new Discord.Attachment('https://truth.bahamut.com.tw/s01/201907/295c16d012c60f51b45fb37d629232ce.JPG');
	const serverQueue = queue.get(message.guild.id);
	
	if(message.author.bot) return;	
	
	if(message.content.toUpperCase()==="TT") 
	{
 	   generalChannel.send(h+":"+m+":"+s) ;
	}
	
	if (message.content === "欸欸欸你過來一下"||message.content ==="欸你過來一下"||message.content ==="欸你進來一下"
	||message.content ==="欸欸欸你進來一下"||message.content ==="過來一下"||message.content.toUpperCase()==="PANDAIN")
	{
		const musicchannel = message.member.voiceChannel;
		try {
			musicchannel.join();
		message.channel.send("已加入語音");	
		message.react("🐼");
		} catch (error) {
			generalChannel.send("進不去啦幹");
			message.react("🐼");
		}
	}
	if (message.content === "滾啦幹"||message.content.toUpperCase()==="PANDAOUT")
	{
		const musicchannel = message.member.voiceChannel;
		try {
		musicchannel.leave();
		message.channel.send("已離開語音");
		message.react("🐼");	
		} catch (error) {
		generalChannel.send("08偏不要滾");
		message.react("🐼");
		}
	}
	
	if (message.content.toLowerCase()==="play") 
		{
		execute(message, serverQueue);
		return;
	   }
	    if (message.content.toLowerCase()==="skip") 
	   {
		skip(message, serverQueue);
		return;
	   }
		if (message.content.toLowerCase()==="stop") 
	   {
		stop(message, serverQueue);
		return;
	   }

	if(message.content.includes("胎死腹中"))
	{
		message.reply("你才吃飯嗆到喝水噎到");
	}

	if(message.content.toLowerCase()==="ping"){ // Check if message is "ping"
			message.channel.send("Pinging ...") // Placeholder for pinging ... 
			.then((msg) => { // Resolve promise
				msg.edit("Ping: " + (Date.now() - msg.createdTimestamp)) // Edits message with current timestamp minus timestamp of message
				message.react("612253892046094349");
			});
		}


	if(message.content ==="歐姆定律") 
	{
		message.reply("V=IR , I=V/R , R= V/I");
	}
	if(message.content.includes("派"))
	{
		message.reply(pi);
	}
	if(message.content.includes("怕"))
	{
		message.channel.send("gan gan gan gan gan 挖就ㄍㄧㄚㄟ");
	}
	if(message.content.toUpperCase()==="KVL") 
	{
		message.reply(kvl);
	}
	if(message.content.toUpperCase()==="KCL") 
	{
		message.reply(kcl);
	}
	if(message.content.toUpperCase()==="自走其") 
	{
		message.reply(zzch);
	}


	});

	async function execute(message, serverQueue) {
		const args = message.content.split(' ');
	
		const voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) return message.channel.send('You need to be in a voice channel to play music!');
		const permissions = voiceChannel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
			return message.channel.send('I need the permissions to join and speak in your voice channel!');
		}
	
		const songInfo = await ytdl.getInfo(args[1]);
		const song = {
			title: songInfo.title,
			url: songInfo.video_url,
		};
	
		if (!serverQueue) {
			const queueContruct = {
				textChannel: message.channel,
				voiceChannel: voiceChannel,
				connection: null,
				songs: [],
				volume: 5,
				playing: true,
			};
	
			queue.set(message.guild.id, queueContruct);
	
			queueContruct.songs.push(song);
	
			try {
				var connection = await voiceChannel.join();
				queueContruct.connection = connection;
				play(message.guild, queueContruct.songs[0]);
			} catch (err) {
				console.log(err);
				queue.delete(message.guild.id);
				return message.channel.send(err);
			}
		} else {
			serverQueue.songs.push(song);
			console.log(serverQueue.songs);
			return message.channel.send(`${song.title} has been added to the queue!`);
		}
	
	}
	
	function skip(message, serverQueue) {
		if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
		if (!serverQueue) return message.channel.send('There is no song that I could skip!');
		serverQueue.connection.dispatcher.end();
	}
	
	function stop(message, serverQueue) {
		if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end();
	}
	
	function play(guild, song) {
		const serverQueue = queue.get(guild.id);
	
		if (!song) {
			serverQueue.voiceChannel.leave();
			queue.delete(guild.id);
			return;
		}
	
		const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
			.on('end', () => {
				console.log('Music ended!');
				serverQueue.songs.shift();
				play(guild, serverQueue.songs[0]);
			})
			.on('error', error => {
				console.error(error);
			});
		dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
	}

client.login(process.env.BOT_TOKEN);

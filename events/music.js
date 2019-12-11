const { Client, Util } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const sleep = require ("./sleep.js");

const client = new Client({ disableEveryone: false });
const {PREFIX,PREFIX2, GOOGLE_API_KEY } = require('../config.js');
const youtube = new YouTube(GOOGLE_API_KEY);

const queue = new Map();

module.exports = ('message', async message => 
{
	
	if(message.content == "p.play https://www.youtube.com/playlist?list=PL7tnvmTUTcvZhYaBzNPxVgGz8tdwVyyX5" && message.author.id=='594373024879476737'){
	console.log("已自動點歌");
	await sleep.sleep(2000);
	message.delete();	
	}else if(message.author.id=='594373024879476737'){
	console.log("原來是我自己 逼逼\t"+ message.content);
	return;	
	}else if(message.author.bot){
	console.log("機器人 逼逼\t"+ message.content + message.author.username);
	return;	
	}

	if (!(message.content.startsWith(PREFIX) ^ message.content.startsWith(PREFIX2))) return undefined;


	const args = message.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(message.guild.id);
	let command = message.content.toLowerCase().split(' ')[0];
        command = command.slice(PREFIX.length);

	if (command === 'play'||command ==='p') {
		const voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) return message.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
		/*const permissions = voiceChannel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT')) {
			return message.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
		}
		if (!permissions.has('SPEAK')) {
			return message.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
		}*/

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			try {
			const playlist = await youtube.getPlaylist(url);			
			const videos = await playlist.getVideos();			
			for (const video of Object.values(videos)) {				
				const video2 = await youtube.getVideoByID(video.id);
				await handleVideo(video2, message, voiceChannel, true);
				}			
				return message.channel.send(`✅ 歌單: **${playlist.title}** 已經加入清單`);				
				} catch (err) {
					console.error(`沒得播喔 995 : ${err}`);
					message.channel.send(`清單中有私人影片，將會自動略過，其他歌曲仍可正常播放。\n如果沒有任何音樂播出，表示youtube API的免費用量已經滿了，
					請匯款至以下帳戶，讓咚咚鏘熊貓貓有錢可以儲值空間**OwO**`);
				}
			} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					message.channel.send(`__**歌曲選擇:**__${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}\n請在10秒內輸入數字來選擇歌曲!`);
					try {
						var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11 ||message2.content =="N", {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
						
					} catch (err) {
						console.error(err);
						return message.channel.send('未收到回覆或收到不正確的數值，已停止選擇，請重新點歌。');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return message.channel.send('🆘 夭壽骨喔 派ㄎㄧㄚ拉。');
				}
			}
			return handleVideo(video, message, voiceChannel);
		}
	} else if (command === 'skip') {
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
		if (!serverQueue) return message.channel.send('There is nothing playing that I could skip for you.');
		message.channel.send('已跳過歌曲');
		serverQueue.connection.dispatcher.end('已跳過歌曲');
		return undefined;
	} else if (command === 'quit') {
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
		if (!serverQueue) return message.channel.send('There is nothing playing that I could stop for you.');
		serverQueue.songs = [];
		message.channel.send('已離開語音');
		serverQueue.connection.dispatcher.end('已離開語音');
		return undefined;
	} else if (command === 'volume') {
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
		if (!serverQueue) return message.channel.send('There is nothing playing.');
		if (!args[1]) return message.channel.send(`現在音量為: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return message.channel.send(`I set the volume to: **${args[1]}**`);
	} else if (command === 'np') {
		if (!serverQueue) return message.channel.send('There is nothing playing.');
		return message.channel.send(`🎶 正在播放: **${serverQueue.songs[0].title}**`);		
	} else if (command === 'shuffle'||command === 'sh') {
		if (!serverQueue) return message.channel.send('There is nothing playing.');
		shuffle(serverQueue);
		return message.channel.send(`🎶 歌單已隨機排列。`);
	} else if (command === 'queue') {
		if (!serverQueue) return message.channel.send('There is nothing playing.');
		/*
		const musicqueue = new Discord.RichEmbed()
		.setColor('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6))
		.setTitle('Some title')
		.setURL('https://discord.js.org/')
		.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
		.setDescription('Some description here')
		.setThumbnail('https://i.imgur.com/wSTFkRM.png')
		.addField('Regular field title', 'Some value here')
		.addBlankField()
		.addField('Inline field title', 'Some value here', true)
		.addField('Inline field title', 'Some value here', true)
		.addField('Inline field title', 'Some value here', true)
		.setImage('https://i.imgur.com/wSTFkRM.png')
		.setTimestamp()
		.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
		message.channel.send(musicqueue);*/
		return message.channel.send(`__**歌曲清單: **__${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}**正在播放: ** ${serverQueue.songs[0].title}`);
		/*need to be embed*/
	} else if (command === 'pause') {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send('⏸ 已暫停音樂');
		}
		return message.channel.send('There is nothing playing.');
	} else if (command === 'resume') {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send('▶ 重新開始播放');
		}
		return message.channel.send('There is nothing playing.');
	}

	return undefined;
});

async function handleVideo(video, message, voiceChannel, playlist = false) {
	const serverQueue = queue.get(message.guild.id);
	console.log(video.title +"\t" + video.publishedAt +"\t" + video.channel.title);// LOG影片所有資訊
	const song = {
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(message.guild.id, queueConstruct);
		
		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(message.guild.id);
			return message.channel.send(`I could not join the voice channel: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		//console.log(serverQueue.songs); //對CONSOLE輸出整個歌單
		if (playlist) return undefined;
		else return message.channel.send(`✅ **${song.title}** 已被加入清單`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);1
	if (!song) {
		queue.delete(guild.id);
		return;
	}
	//console.log(serverQueue.songs); //對CONSOLE輸出整個歌單

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url), {bitrate: 128000 /* 192kbps */})
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('盡力ㄉ播放完畢ㄌ \t Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
	serverQueue.textChannel.send(`🎶 正在播放: **${song.title}**`);
}
async function 	shuffle(array) {
	try {
		var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue      = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex]  = temporaryValue;
		}
		Console.log("shuffle成功");
		return array;		
	} catch (error) {
		Console.error();
		Console.log("shuffle不成功");
	}
        
}


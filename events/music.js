const { Client, Util } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');


const client = new Client({ disableEveryone: false });
const {PREFIX,PREFIX2, GOOGLE_API_KEY } = require('../config.js');
const youtube = new YouTube(GOOGLE_API_KEY);

const queue = new Map();

module.exports = ('message', async msg => 
{
	playwhenon,play,handleVideo
	
	if (msg.author.bot) return undefined;
	if (!(msg.content.startsWith(PREFIX) ^ msg.content.startsWith(PREFIX2))) return undefined;

	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(' ')[0];
	command = command.slice(PREFIX.length)

	if (command === 'play'||command ==='p') {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			try {
			const playlist = await youtube.getPlaylist(url);			
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {				
				const video2 = await youtube.getVideoByID(video.id);
				await handleVideo(video2, msg, voiceChannel, true);
				}			
				return msg.channel.send(`✅ 歌單: **${playlist.title}** 已經加入清單`);				
				} catch (err) {
					console.error(`清單中有私人影片: ${err}`);
					msg.channel.send(`清單中有私人影片，將會自動略過，其他歌曲仍可正常播放。`);
				}
			} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					msg.channel.send(`__**歌曲選擇:**__${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}\n請在10秒內輸入數字來選擇歌曲!`);
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11 ||msg2.content =="N", {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('未收到回覆或收到不正確的數值，已停止選擇，請重新點歌。');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send('🆘 夭壽骨喔 派ㄎㄧㄚ拉。');
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === 'skip') {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing that I could skip for you.');
		msg.channel.send('已跳過歌曲');
		serverQueue.connection.dispatcher.end('已跳過歌曲');
		return undefined;
	} else if (command === 'quit') {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing that I could stop for you.');
		serverQueue.songs = [];
		msg.channel.send('已離開語音');
		serverQueue.connection.dispatcher.end('已離開語音');
		return undefined;
	} else if (command === 'volume') {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		if (!args[1]) return msg.channel.send(`現在音量為: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return msg.channel.send(`I set the volume to: **${args[1]}**`);
	} else if (command === 'np') {
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		return msg.channel.send(`🎶 正在播放: **${serverQueue.songs[0].title}**`);
	} else if (command === 'queue') {
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		/*var musicqueue = new Discord.RichEmbed()
		.addField(" ",`__**歌曲清單: **__${serverQueue.songs.map(song => `**-** ${song.title}`,true)
		.setColor(0xFFFF00)
		.setFooter("阿這麼小你也要看");
		msg.channel.send(musicqueue);*/
		return msg.channel.send(`__**歌曲清單: **__${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}**正在播放: ** ${serverQueue.songs[0].title}`);
		/*need to be embed*/
	} else if (command === 'pause') {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('⏸ 已暫停音樂');
		}
		return msg.channel.send('There is nothing playing.');
	} else if (command === 'resume') {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('▶ 重新開始播放');
		}
		return msg.channel.send('There is nothing playing.');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	const song = {
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`I could not join the voice channel: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(`✅ **${song.title}** 已被加入清單`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url), {bitrate: 128000 /* 192kbps */})
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`🎶 正在播放: **${song.title}**`);
}
async function playwhenon() {
	const rqst = "https://www.youtube.com/playlist?list=PL7tnvmTUTcvZhYaBzNPxVgGz8tdwVyyX5";
	const url = rqst[1] ? rqst[1].replace(/<(.+)>/g, '$1') : '';
	const voiceChannel = client.channels.get("506108715720769536");
	const requestchannel =client.channels.get("503134664811347970");
	if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
		try {
		const playlist = await youtube.getPlaylist(url);			
		const videos = await playlist.getVideos();
		for (const video of Object.values(videos)) {				
			const video2 = await youtube.getVideoByID(video.id);
			await handleVideo(video2, msg, voiceChannel, true);
			}			
			return requestchannel.send(`✅ 歌單: **${playlist.title}** 已經加入清單`);				
			} catch (err) {
				console.error(`清單中有私人影片: ${err}`);
				requestchannel.send(`清單中有私人影片，將會自動略過，其他歌曲仍可正常播放。`);
			}
		}
	}
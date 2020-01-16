const { Client, Util } = require('discord.js');
const Discord = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const sleep = require ("./sleep.js");

const client = new Client({ disableEveryone: false });
const {PREFIX,PREFIX2, GOOGLE_API_KEY } = require('../config.js');
const youtube = new YouTube(GOOGLE_API_KEY);

const queue = new Map();
	  lop = (false);
	  lopquq = (false);

module.exports = ('message', async message => 
{
		
	if(message.content == "p.play https://www.youtube.com/playlist?list=PL7tnvmTUTcvZhYaBzNPxVgGz8tdwVyyX5" 
	&& message.author.id=='594373024879476737'){
	console.log("已自動點歌");
	await sleep.sleep(2000);
	message.delete();	
	}else if(message.author.id=='594373024879476737'){
	//console.log("原來是我自己 逼逼\t"+ message.content);
	return;	
	}else if(message.author.bot){
	//console.log("機器人 逼逼\t"+ message.content + message.author.username);
	return;	
	}

	if (!(message.content.startsWith(PREFIX) ^ message.content.startsWith(PREFIX2))) return undefined;


	const args = message.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(message.guild.id);
	let command = message.content.toLowerCase().split(' ')[0];
		command = command.slice(PREFIX.length);	
		
	if (command === 'play'||command ==='p'||command === 'playskip'||command==='pskip'||command === 'playtop'||command==='ptop') {
		const voiceChannel = message.member.voiceChannel;
		if (!(searchString||url)) return message.channel.send('請輸入要播放的歌曲的標題或網址');
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
					message.channel.send(`若清單中有私人影片，將會自動略過，其他歌曲仍可正常播放。\n如果沒有任何音樂播出，表示youtube API的免費用量已經滿了，
請匯款至以下帳戶，讓咚咚鏘熊貓貓有錢可以儲值空間**OwO**`);
				}
			} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					message.channel.send(`__**歌曲選擇:**__${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}\n請在10秒內輸入數字來選擇歌曲!\n**--------------------------------------------------**`);
					try {
						var response = await message.channel.awaitMessages(message2 => (message2.content > 0 && message2.content < 11) ||message2.content ==="N"||message2.content ==="n", {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
						
					} catch (err) {
						console.error(err);
						return message.channel.send('未收到回覆或收到不正確的數值，已停止選擇，請重新點歌。');
					}
					const videoIndex = parseInt(response.first().content);
					if (videoIndex ==="NaN")
					return message.channel.send('❌ 已停止選擇，請重新點歌。');
					else 
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					if(errors.reason === 'quotaExceeded')
					return message.channel.send(':regional_indicator_h: :regional_indicator_a: :regional_indicator_k: :regional_indicator_a: :regional_indicator_a: 客家用量已滿 8888888。');
					return message.channel.send('🆘 夭壽骨喔 派ㄎㄧㄚ拉。');
				}
			}
			return handleVideo(video, message, voiceChannel);
		}
	} else if (command === 'skip'||command === 's') {
		if (!message.member.voiceChannel) return message.channel.send('你必須先進入一個語音頻道');
		if (!serverQueue) return message.channel.send('There is nothing playing that I could skip for you.');
		message.channel.send('已跳過歌曲。');		
		serverQueue.connection.dispatcher.end('已跳過歌曲');		
		return undefined;
		
	} else if (command === 'in'){
		const voiceChannel = message.member.voiceChannel;
		if (!message.member.voiceChannel) return message.channel.send('你必須先進入一個語音頻道');			
		if ((message.guild.me.voiceChannel)!== undefined) return message.channel.send('已經在此伺服器上的其他語音頻道');	
		if (serverQueue) return message.channel.send('我正在播音樂!');
		voiceChannel.join();
		message.react("🐼");
		return	message.channel.send("已加入語音。");

	} else if (command === 'quit'||command === 'out'||command === 'dc') {
		if (!message.member.voiceChannel) return message.channel.send('你必須先進入一個語音頻道');
		try {
		if ((message.guild.me.voiceChannel.id === message.member.voiceChannel.id)){		
		lop = (false);
		lopquq = (false);		
			if (serverQueue){ 
				serverQueue.connection.dispatcher.end('已離開語音，循環設定已重置。');
				serverQueue.songs = [];
			}
			message.member.voiceChannel.leave();
		return message.channel.send('已離開語音，循環設定已重置。');			
		}
		} catch (error) {
			return message.channel.send('你必須和我在同一個頻道才可以使用此指令');
		}
		
	} else if (command === 'volume') {
		if (!message.member.voiceChannel) return message.channel.send('你必須先進入一個語音頻道');
		if (!serverQueue) return message.channel.send('現在沒有任何影片正在播放');
		if (!args[1]) return message.channel.send(`現在音量為: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return message.channel.send(`I set the volume to: **${args[1]}**`);
	} else if (command === 'np') {
		if (!serverQueue) return message.channel.send('現在沒有任何影片正在播放');
		return message.channel.send(`🎶 正在播放: **${serverQueue.songs[0].title}**`);		
	} else if (command === 'remove'||command==='rm') {
		if (!message.member.voiceChannel) return message.channel.send('你必須先進入一個語音頻道');
		if (!serverQueue) return message.channel.send('現在沒有任何影片正在播放');
		if (!args[1]) return message.channel.send(`請輸入要移除的歌曲的編號!`);
		if (args[1]-1 ===0) serverQueue.connection.dispatcher.end('已跳過歌曲');
		
		message.channel.send(`👋 **${args[1]} - ${serverQueue.songs[args[1]-1].title} 已從清單移除**`);		
		return serverQueue.songs = serverQueue.songs.splice(args[1]-1, 1);
	}else if (command === 'stats') {
		if (!(serverQueue)){
			var npst="無";
			var npstlink=null;
			var songnumb=0;
		}else {
			var npst=serverQueue.songs[0].title;
			var npstlink=serverQueue.songs[0].url;			
			var songnumb=serverQueue.songs.length;
		}
		if (lopquq)
		var lopquqst="是";
		else var lopquqst="否";
		if (lop) 
		var lopst="是";
		else var lopst="否";

		const stat = new Discord.RichEmbed()
		.setColor('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6))
		.setTitle('音樂機器人目前狀態')		
		.setURL('https://github.com/pandayoooo/justpanda')
		.setAuthor('蛤08熊貓啦', 'https://cdn.discordapp.com/attachments/375207017259728897/654211419901919232/2ffe309e6c12b801.png', 'https://github.com/pandayoooo/justpanda')
		.setDescription('熊貓的超屌機器人')
		.setThumbnail('https://cdn.discordapp.com/attachments/375207017259728897/654211419901919232/2ffe309e6c12b801.png')
		.addField('單曲循環', lopst, true)
		.addField('清單循環', lopquqst, true)	 
		.addField('清單內共有 ', `**${songnumb}** 首歌 `)
		.addField('正在播放', `**[${npst}](${npstlink} 'panda小彩蛋')**`)
		.setImage('https://cdn.discordapp.com/attachments/450975130387218457/633675033025445889/dd9ef01df9d3dcca.png')
		.setTimestamp()
		.setFooter(':有問題都可以私訊咚咚鏘 不過他有可能不會回你', 'https://cdn.discordapp.com/attachments/450975130387218457/633675033025445889/dd9ef01df9d3dcca.png');
		message.channel.send(stat);

	}else if (command === 'loopqueue'||command === 'lpq') {
		lopquq = (lopquq^1);	
		if (lopquq) {
		return message.channel.send(`♻️ 清單循環ON。`);
		} else if (!lopquq) {
		return message.channel.send(`♻️ 清單循環OFF。`);	
		}
	}else if (command === 'loop'||command === 'lp') {
		lop = (lop^1);
		if (lop) {
		return message.channel.send(`♻️ 單曲循環ON。`);
		} else if (!lop) {
		return message.channel.send(`♻️ 單曲循環OFF。`);	
		}
	}else if (command === 'shuffle'||command === 'sh') {
		if (!serverQueue) return message.channel.send('現在沒有任何影片正在播放');
		shuffle(serverQueue.songs);
		return message.channel.send(`🎶 歌單已隨機排列。`);
	}else if (command === 'queue'||command === 'q') {
		if (!serverQueue) return message.channel.send('現在沒有任何影片正在播放');

		var npst=serverQueue.songs[0].title;
		var npstlink=serverQueue.songs[0].url;
		var songnumb=serverQueue.songs.length;
		if (songnumb>20) {
			for (let index = 0; index < 20; index) {
				var A=serverQueue.songs.map(song =>`**${++index} -** ${song.title}`).join('\n');
				console.log(A);		
			}
		} else {
			for (let index = 0; index < songnumb; index) {
				var A=serverQueue.songs.map(song =>`**${++index} -** ${song.title}`).join('\n');
				console.log(A);		
			}
		}
			
		
		var queueue = new Discord.RichEmbed()
            .setColor(0xFFFF00)
            .setTitle('__**歌曲清單: \n**__')
            .setURL('https://github.com/pandayoooo/justpanda')
			.addField('清單內共有 ', `**${songnumb}** 首歌 `,true)
			.addField('正在播放', `**[${npst}](${npstlink} 'panda小彩蛋')**`,true)
            .addField("歌曲清單",`${A}`)
            .setTimestamp()
            .setImage('https://cdn.discordapp.com/attachments/375207017259728897/658668640362561536/ddba5fa98e2085a4.png')
            .setFooter(':有問題都可以私訊咚咚鏘 不過他有可能不會回你', 'https://cdn.discordapp.com/attachments/450975130387218457/633675033025445889/dd9ef01df9d3dcca.png');
			 message.channel.send(queueue);
		
			 //`${serverQueue.songs.map(song =>`**${++index} -** ${song.title}`).join('\n')}`) /original

	   // return message.channel.send(`\n__**歌曲清單: **__\n${A}** ${serverQueue.songs[0].title}`);		
			return;
		
	} else if (command === 'pause') {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send('⏸ 已暫停音樂');
		}
		return message.channel.send('現在沒有任何影片正在播放');
	} else if (command === 'resume') {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send('▶ 重新開始播放');
		}
		return message.channel.send('現在沒有任何影片正在播放');
	}
	return undefined;
});

async function handleVideo(video, message, voiceChannel, playlist = false) {
	const serverQueue = queue.get(message.guild.id);
	console.log(video.title +"\t" + video.publishedAt +"\t" + video.channel.title);// LOG影片資訊
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
		if (message.content.toLowerCase().includes('top'))
		{
			serverQueue.songs.splice(1,0,(song));
			return message.channel.send(`✅ **${song.title}** 將會在這首播放完畢後播放`);

		}else if (message.content.toLowerCase().includes('skip'))
		{
			serverQueue.songs.splice(1,0,(song));
			message.channel.send(`✅ **${song.title}** 已插播`);			
			await sleep.sleep(2000);
			return serverQueue.connection.dispatcher.end('已跳過歌曲');			
		}else{
		serverQueue.songs.push(song);
		//console.log(serverQueue.songs); //對CONSOLE輸出整個歌單
		if (playlist) return undefined;
		else return message.channel.send(`✅ **${song.title}** 已被加入清單`);
		}
	}
	return undefined;
}

async function play(guild, song) {
	const serverQueue = queue.get(guild.id);
	if (!song) {
		queue.delete(guild.id);
		return;
	}
	//console.log(serverQueue.songs); //對CONSOLE輸出整個歌單

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url), {bitrate: 128000 /* 192kbps */})
		.on('end', async reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('播放完畢 \t Song ended.');
			else console.log(reason);
			if(!lop){
			if (!lopquq) {
			serverQueue.songs.shift();
			await sleep.sleep(500);
			return play(guild, serverQueue.songs[0]);
			} else if(lopquq) {
			serverQueue.songs.push(serverQueue.songs.shift());
			await sleep.sleep(500);
			return play(guild, serverQueue.songs[0]);
			}}
			if (lop){			
			await sleep.sleep(500);	
			return play(guild, serverQueue.songs[0]);
			}
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
	serverQueue.textChannel.send(`🎶 正在播放: **${song.title}**`);
}

async function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
	  let j = Math.floor(Math.random() * (i + 1)+1);
	  [array[i], array[j]] = [array[j], array[i]];
	}
  }


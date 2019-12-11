const { Client, Util } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const client = new Client({ disableEveryone: false });
const {PREFIX,PREFIX2, GOOGLE_API_KEY } = require('../config.js');
const youtube = new YouTube(GOOGLE_API_KEY);
const queue = new Map();

const msgchannel ='503134664811347970';
const msgguildid ='450975130387218454';
const guildid ='450975130387218454';

async function playwhenon() {

    const rqst = "https://www.youtube.com/playlist?list=PL7tnvmTUTcvZhYaBzNPxVgGz8tdwVyyX5";
    const url = rqst[1] ? rqst[1].replace(/<(.+)>/g, '$1') : '';
    const voiceChannel = client.channels.get('506108715720769536');
    const requestchannel =client.channels.get("503134664811347970");
        try {
        const playlist = await youtube.getPlaylist(url);			
        const videos = await playlist.getVideos();
        for (const video of Object.values(videos)) {				
            const video2 = await youtube.getVideoByID(video.id);
            await handleVideo(video2, msg, voiceChannel, true);
            }			
            return requestchannel.send(`✅ 歌單: **${playlist.title}** 已經加入清單`);				
            } catch (err) {
                console.error(`讀取到私人影片: ${err}`);
                requestchannel.send(`讀取到私人影片，將會自動略過，其他歌曲仍可正常播放。`);
            }
        }
    
    
async function handleVideo(video, msg,  playlist = false) {
    const voiceChannel = client.channels.get('506108715720769536');
    const serverQueue = queue.get(msgguildid);
    console.log(video);
    const song = {
        title: Util.escapeMarkdown(video.title),
        url: `https://www.youtube.com/watch?v=${video.id}`
    };
    if (!serverQueue) {
        const queueConstruct = {
            textChannel: msgchannel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        };
        queue.set(msgguildid, queueConstruct);

        queueConstruct.songs.push(song);

        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(msg.guild, queueConstruct.songs[0]);
        } catch (error) {
            console.error(`I could not join the voice channel: ${error}`);
            queue.delete(msgguildid);
            return msgchannel.send(`I could not join the voice channel: ${error}`);
        }
    } else {
        serverQueue.songs.push(song);
        //console.log(serverQueue.songs); //對CONSOLE輸出整個歌單
        if (playlist) return undefined;
        else return msgchannel.send(`✅ **${song.title}** 已被加入清單`);
    }
    return undefined;
}
function play(guild, song) {
	const serverQueue = queue.get(guildid);

	if (!song) {
		queue.delete(guildid);
		return;
	}
	//console.log(serverQueue.songs); //對CONSOLE輸出整個歌單

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url), {bitrate: 128000 /* 192kbps */})
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Stream is not generating quickly enough. \t Song ended.');
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
    const url = rqst;
	const serverQueue = queue.get(msgguildid);
		const voiceChannel = '506108715720769536';
        if (!voiceChannel) return msgchannel.send('I\'m sorry but you need to be in a voice channel to play music!');
        
		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			try {
			const playlist = await youtube.getPlaylist(url);			
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {				
				const video2 = await youtube.getVideoByID(video.id);
				await handleVideo(video2, msg, voiceChannel, true);
				}			
				return msgchannel.send(`✅ 歌單: **${playlist.title}** 已經加入清單`);				
				} catch (err) {
					console.error(`清單中有私人影片: ${err}`);
					msgchannel.send(`清單中有私人影片，將會自動略過，其他歌曲仍可正常播放。`);
				}
			} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {				
					console.error(error);
					return msgchannel.send('🆘 夭壽骨喔 派ㄎㄧㄚ拉。');
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
    module.exports = {
    playwhenon,
    handleVideo,
    play
  }
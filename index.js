const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});
client.login('NTk0MzczMDI0ODc5NDc2NzM3.XRdLaA.rm6-YR5zZ8pMKBUlIb1-I-BaFmA');//where BOT_TOKEN is the token of our bot

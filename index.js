const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX ="p.:

 

client.on('ready', () => {
    console.log('I am ready!');
});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(NTk0MzczMDI0ODc5NDc2NzM3.XRdLaA.rm6-YR5zZ8pMKBUlIb1-I-BaFmA);//where BOT_TOKEN is the token of our bot

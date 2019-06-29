const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTk0MzczMDI0ODc5NDc2NzM3.XRceuw.Jzj-o0b3OD0fnU2Eke1liDLC4_c);//where BOT_TOKEN is the token of our bot

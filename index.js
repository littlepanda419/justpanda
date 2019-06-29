const discord = require("discord.js");
const bot = new discord.Client();

bot.on('message', message => {
    if (message.content === 'ping') {
       message.reply('pong');
       }
});
bot.login(process.env.token);

const Discord = require('discord.js')
const client = new Discord.Client();


function emoji(e_id)
{
   const e = client.emojis.find(emoji => emoji.id === e_id)
    return e;
}
module.exports = {
	emoji
}
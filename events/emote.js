const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [65535]
});


function emoji(e_id)
{
   const e = client.emojis.find(emoji => emoji.id === e_id)
    return e;
}
module.exports = {
	emoji
}
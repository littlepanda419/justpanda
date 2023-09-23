const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
	intents: [65535]
});

function addzero(i) 
{
	/*var d = new Date();	
	var h = addzero(d.getUTCHours()+8); if (h>=24)	h = "0"+(h-24);
	var m = addzero(d.getMinutes());
	var s = addzero(d.getSeconds());*/
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}
module.exports = {
	addzero
}
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
	intents: [65535]
}); 
const {PREFIX,PREFIX2,GOOGLE_API_KEY} = require(`../config.js`);
const google = require('google');
const translate = require('@vitalets/google-translate-api');
// RETURN UNDEFINED
function trans1ate(txt) 
{		
	if (txt === undefined) {
		return 'Undefined value!';
	 }   
	translate( txt , {to: 'en'}).then(res => {
		console.log(res.text);
		var txt =res.text;
		console.log(txt);
		return txt;
	})
}
module.exports = {
	trans1ate
}


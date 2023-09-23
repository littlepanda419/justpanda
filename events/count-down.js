const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [65535]
});
const addzer0 = require ("./addzero.js");


        
        function CountDown(client) {
        let yuChannel =  client.channels.cache.get("681171510609838100");   
        var gd = new Date();
        gd.setFullYear(2020);
        gd.setMonth(4);
        gd.setDate(2);
        gd.setHours(0);
        gd.setMinutes(0);
        gd.setSeconds(0);

        var nd = new Date();
        var time=gd.getTime()-(nd.getTime()+8*60*60*1000);
        var d = parseInt(time/(24*60*60*1000));
        var h = parseInt(time%(24*60*60*1000)/60/60/1000);
        var m = parseInt((time%(24*60*60*1000)%(60*60*1000))/60/1000);
        let s = addzer0.addzero(nd.getSeconds()); 
    }

    module.exports = {
        CountDown
    }

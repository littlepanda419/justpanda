const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [65535]
});
const addzer0 = require ("./addzero.js");


function oclock(client) {
    let generalChannel =  client.channels.cache.get("653569315089416225");
    let yuChannel =  client.channels.cache.get("681171510609838100");    
    let d = new Date();	
    let h = addzer0.addzero(d.getUTCHours()+8); if (h>=24) h = "0"+(h-24);
    let m = addzer0.addzero(d.getMinutes());
    let s = addzer0.addzero(d.getSeconds());    
    if( m==="00" && s==="00" ){        
        /*        
        if (h==12){
        console.log(`${h}:${m}:${s}`)
        generalChannel.send(`<@324536397803290626> 中午${h-"0"}點ㄌ，該吃飯嚕。`);
        return;
        }if (h==18){
        generalChannel.send(`<@324536397803290626> 晚上${h-12-"0"}點ㄌ，該吃飯嚕。`);
        console.log(`${h}:${m}:${s}`)
        return;
        }if (h==23){
        generalChannel.send(`<@324536397803290626> 都晚上${h-12-"0"}點ㄌ，去睡覺啦。`);
        console.log(`${h}:${m}:${s}`)
        return;
        }if (h==3||h==15){
            generalChannel.send(`<@324536397803290626> 好棒，3點ㄌ`);
            console.log(`${h}:${m}:${s}`)
            generalChannel.send(threee);
            return;
        }
        else if (h>12){
            generalChannel.send(`<@324536397803290626> 現在是下午${h-12-"0"}點整。`);
            console.log(`${h}:${m}:${s}`)
            return;
        }else if (h<12){
            generalChannel.send(`<@324536397803290626> 現在是早上${h-"0"}點整。`);
            console.log(`${h}:${m}:${s}`)
            return;
        }*/
        //整點報時
        /*try {
                const pandavoice = client.channels.cache.get("506108715720769536");
                const songchannel = client.channels.cache.get("503134664811347970");
                pandavoice.join().then(connection=> {
                    console.log("已經連接至\"熊貓貓的第一個家\"");
                });
            //songchannel.send("p.play https://www.youtube.com/playlist?list=PL7tnvmTUTcvZhYaBzNPxVgGz8tdwVyyX5");
            } catch (error) {
                console.log(error);
                generalChannel.send("登入時播放出現錯誤");		
            }*/
    }
}
module.exports = {
	oclock
}
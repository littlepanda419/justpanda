const Discord = require('discord.js');
const addzer0 = require ("./addzero.js");

const threee = new Discord.Attachment('https://truth.bahamut.com.tw/s01/202001/f8548b97122bbdc20ea1130bf49a2d73.JPG');

function oclock(client) {
    let generalChannel =  client.channels.get("653569315089416225");
    console.log(generalChannel.id);
    let d = new Date();	
    let h = addzer0.addzero(d.getUTCHours()+8);		if (h>=24) h = "0"+(h-24);
    let m = addzer0.addzero(d.getMinutes());
    let s = addzer0.addzero(d.getSeconds());
    console.log(`${h}:${m}:${s}`)
    if( m==="00" && s==="00" ){
        if (h==12)        
        generalChannel.send(`<@324536397803290626> 中午${h}點ㄌ，該吃飯嚕。`);
        if (h==18)
        generalChannel.send(`<@324536397803290626> 晚上${h-12}點ㄌ，該吃飯嚕。`);
        if (h==23)
        generalChannel.send(`<@324536397803290626> 她媽都晚上${h-12}點ㄌ，馬ㄉ去睡覺啦。`);
        if (h==3||h==15){
            generalChannel.send(`<@324536397803290626> 好棒，${h-12}點ㄌ`);
            generalChannel.send(threee);
        }
        else if (h>12){
            generalChannel.send(`<@324536397803290626> 現在是下午${h-12}點整。做事阿幹`);
        }else if (h<12){
            generalChannel.send(`<@324536397803290626> 現在是早上${h}點整，做事阿幹。`);
        }
    }
}
module.exports = {
	oclock	
}

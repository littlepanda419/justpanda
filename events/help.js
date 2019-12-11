const Discord = require('discord.js')
const PREFIX = 'p.';
module.exports = (message,client) =>{

//----------------------------------表情符號--------------------------------

    function emoji(e_id)
    {
        const e = client.emojis.find(emoji => emoji.id === e_id)
        return e;
    }
    if(message.content.toString().toLowerCase()=="help")
    {
        if(message.author==client.user)   
        return;	
        if(message.author.bot)   
        return; 
    
        var help = new Discord.RichEmbed()
            .setColor(0xFFFF00)
            .addField("**指令說明**","快點把指令背起啦來幹")
            .addField("**1.文字回應**","派  胎死腹中  歐姆定律  怕  KVL  KCL  自走其  ",true)
            .addField("**2.語音**","pandain  pandaout",true)
            .addField("**3.音樂**","123",true)
            .addField("**4.管理**","123",true)
            .addField("**5.算數學**","123",true)
            .addField("**6.幫你估狗**","123",true)
            .addField("**7.我還想不到不過應該會有**","123",true)
            message.author.send(help);
            message.channel.send("拿去啦臭乞丐");
        
    }
}

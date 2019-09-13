const Discord = require('discord.js')

module.exports = (msg,client) =>{

//----------------------------------表情符號--------------------------------

    function emoji(e_id)
    {
        const e = client.emojis.find(emoji => emoji.id === e_id)
        return e;
    }
    if(msg.content.toLocaleLowerCase()=="help")
    {
        var embed = new Discord.RichEmbed();
            embed.setColor(0xFFFF00);
            embed.addField("**指令說明**","快點把指令背起啦來幹");
            embed.addField("**1.文字回應**","派  胎死腹中  歐姆定律  怕  KVL  KCL  自走其  ");
            embed.addField("**2.語音**","pandain  pandaout");
            embed.addField("**3.音樂**","");
            embed.addField("**4.管理**","");
            embed.addField("**5.算數學**","");
            embed.addField("**6.幫你估狗**","");
            embed.addField("**7.我還想不到不過會有**","");
            message.author.send({embed});
            message.channel.send("好喔!我已經把指令說明寄給你了");
        
    }
}

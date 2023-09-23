const {EmbedBuilder, Client, GatewayIntentBits, Partials ,Util} = require("discord.js");
const client = new Client({
	intents: [65535],
	partials: [Partials.Channel] 
});
const {PREFIX,PREFIX2} = require('../config.js');

module.exports = (message,client) =>{

        if(message.author.bot)   
        return;

        if (!(message.content.startsWith(PREFIX) ^ message.content.startsWith(PREFIX2)))
        return undefined;

        let command = message.content.toLowerCase().split(' ')[0];
            command = command.slice(PREFIX.length);           

        const args = message.content.split(' ');
        const helpString = args.slice(1).join(' ');
        
        if(command ==="help"){

        if(helpString ==="文字回應") 
        {
        var msghelp = new Discord.RichEmbed()
            .setColor(0xFFFF00)
            .setTitle('**機器熊貓**')// 林宇亨幫我畫頭貼   
            .setURL('https://github.com/pandayoooo/justpanda')
            .setDescription('**前綴(prefix)為 P.**')
            .addField("**文字回應指令說明**","快把指令背起來")
            .addField(":panda_face:\t","**__派__ 無須前綴** \n 今天很派ㄛ")    
            .addField(":panda_face:\t","**__怕__ 無須前綴** \n 窩好怕")
            .addField(":panda_face:\t","**__胎死腹中__ 無須前綴** \n 這樣亂講話不好吧")
            .addField(":panda_face:\t","**__修但幾咧__ 無須前綴** \n 欸不是先等一下")
            .addField(":panda_face:\t","**__有趣__ 無須前綴** \n 很有趣 ")
            .addField(":panda_face:\t","**__好ㄛ__ 無須前綴** \n 喔!好喔!")
            .addField(":panda_face:\t","**__歐姆定律__ ** \n 第一個寫出來的回應")
            .addField(":panda_face:\t","**__time__ ** \n 告訴你現在時間 ")
            .addField(":panda_face:\t","**__purge__** \n 清除訊息 用法 : __p.purge 5__ 則可以清除最新5則訊息。")            
            .setTimestamp()
            .setImage('https://cdn.discordapp.com/attachments/375207017259728897/658668640362561536/ddba5fa98e2085a4.png')
            .setFooter(':有問題都可以私訊咚咚鏘 不過他有可能不會回你', 'https://cdn.discordapp.com/attachments/450975130387218457/633675033025445889/dd9ef01df9d3dcca.png');
            message.author.send(msghelp);            
            return message.channel.send("真是拿你沒辦法");
        }else if(helpString ==="語音") 
        {
        var YuYinhelp = new Discord.RichEmbed()
            .setColor(0xFFFF00)
            .setTitle('**機器熊貓**')
            .setURL('https://github.com/pandayoooo/justpanda')
            .addField("**進出語音指令說明**","快點把指令背起來")
            .addField(":panda_face:\t","**__in__ ** \n  叫進來 什麼事都不會做 可愛的裝飾品 用法 : __p.in__")    
            .addField(":panda_face:\t","**__out__ ** \n 基本上跟quit是一樣的 離開頻道 用法 : __p.out__")                      
            .setTimestamp()
            .setImage('https://cdn.discordapp.com/attachments/375207017259728897/658668640362561536/ddba5fa98e2085a4.png')
            .setFooter(':有問題都可以私訊咚咚鏘 不過他有可能不會回你', 'https://cdn.discordapp.com/attachments/450975130387218457/633675033025445889/dd9ef01df9d3dcca.png');
            message.author.send(YuYinhelp);            
            return message.channel.send("給你ㄅ");
        }else if(helpString ==="音樂") 
        {
        var musichelp = new Discord.RichEmbed()
            .setColor(0xFFFF00)
            .setTitle('**機器熊貓**')
            .setURL('https://github.com/pandayoooo/justpanda')
            .addField("**音樂指令說明**","快點把指令背起來")
            .addField(":panda_face:\t","**__play__ 簡寫 p** \n 點播歌曲 用法 : __p.p https://www.youtube.com/watch?v=V-XZcgDkO9o__ or __p.p without you__ 後選擇正確的數字!")    
            .addField(":panda_face:\t","**__playtop__ 簡寫 ptop** \n 點播歌曲至最上方 即這首**播完**馬上播 用法 : __p.p https://www.youtube.com/watch?v=V-XZcgDkO9o__ or __p.p without you__ 後選擇正確的數字!")
            .addField(":panda_face:\t","**__playskip__ 簡寫 pskip** \n 點播歌曲並立刻播放 aka咖歌 用法 : __p.p https://www.youtube.com/watch?v=V-XZcgDkO9o__ or __p.p without you__ 後選擇正確的數字!")
            .addField(":panda_face:\t","**__queue__ 簡寫q** \n 在當前頻道傳送機器人的歌單 用法 : __p.q__")
            .addField(":panda_face:\t","**__skip__ 簡寫s** \n 跳過目前這首歌 用法 : __p.s__")
            .addField(":panda_face:\t","**__loop__ 簡寫lp** \n 重複播放目前這首歌 用法 : __p.lp__")
            .addField(":panda_face:\t","**__loopqueue__ 簡寫lpq** \n 重複播放目前的**歌單** 若歌單有3首歌 則會三首輪流重複播放 用法 : __p.lpq__")
            .addField(":panda_face:\t","**__quit__ 簡寫q** \n 叫機器人離開頻道 用法 : __p.q__")
            .addField(":panda_face:\t","**__stats__** \n 傳送機器人目前的音樂相關狀況 例如是否開啟循環之類的 用法 : __p.stats__")
            .addField(":panda_face:\t","**__shuffle__ 簡寫sh** \n 使目前的歌單隨機排列 用法 : __p.sh__")
            .addField(":panda_face:\t","**__volume__  **\n 調整機器人音量 預設為5 用法 : __p.volume__(查看目前設定的音量) or __p.volume 10__")            
            .addField(":panda_face:\t","**__pause__** \n 暫停播放 用法 : __p.pause__")
            .addField(":panda_face:\t","**__resume__** \n 開始播放 用法 : __p.resume__")
            .setTimestamp()
            .setImage('https://cdn.discordapp.com/attachments/375207017259728897/658668640362561536/ddba5fa98e2085a4.png')
            .setFooter(':有問題都可以私訊咚咚鏘 不過他有可能不會回你', 'https://cdn.discordapp.com/attachments/450975130387218457/633675033025445889/dd9ef01df9d3dcca.png');
            message.author.send(musichelp);
            return message.channel.send("給你ㄅ");
        }else if(helpString ==="查圖片") 
        {
        var pichelp = new Discord.RichEmbed()
            .setColor(0xFFFF00)
            .setTitle('**機器熊貓**')
            .setURL('https://github.com/pandayoooo/justpanda')
            .addField("**圖片指令說明**","快點把指令背起來")
            .addField(":panda_face:\t","**__image__ 簡稱 pic / img** \n 用google查隨機圖片 用法__p.pic 熊貓(任意關鍵字)__  ")    
            //.addField(":panda_face:\t","**__playtop__ ** \n  用法 ") 如果還要更多說明
            .setTimestamp()
            .setImage('https://cdn.discordapp.com/attachments/375207017259728897/658668640362561536/ddba5fa98e2085a4.png')
            .setFooter(':有問題都可以私訊咚咚鏘 不過他有可能不會回你', 'https://cdn.discordapp.com/attachments/450975130387218457/633675033025445889/dd9ef01df9d3dcca.png');
            message.author.send(pichelp);            
            return message.channel.send("給你ㄅ");
        }else if(helpString ==="算數學") 
        {
        var mathhelp = new Discord.RichEmbed()
            .setColor(0xFFFF00)
            .setTitle('**機器熊貓**')
            .setURL('https://github.com/pandayoooo/justpanda')
            .addField("**數學指令說明**","快點把指令背起來")
            .addField(":panda_face:\t","**__calc__ ** \n 阿就四則運算 用法 : __p.calc 8+9+17+9453__")    
            //.addField(":panda_face:\t","**__playtop__ ** \n ")
            .setTimestamp()
            .setImage('https://cdn.discordapp.com/attachments/375207017259728897/658668640362561536/ddba5fa98e2085a4.png')
            .setFooter(':有問題都可以私訊咚咚鏘 不過他有可能不會回你', 'https://cdn.discordapp.com/attachments/450975130387218457/633675033025445889/dd9ef01df9d3dcca.png');
            message.author.send(mathhelp);            
            return message.channel.send("給你");
        }else if(helpString ==="幫你估狗") 
        {
        var googlehelp = new Discord.RichEmbed()
            .setColor(0xFFFF00)
            .setTitle('**機器熊貓**')
            .setURL('https://github.com/pandayoooo/justpanda')
            .addField("**估狗指令說明**","快點把指令背起來")
            .addField(":panda_face:\t","**__google__ 簡寫 g** \n 跟估狗搜尋一樣的功能 用法 : __p.g 專題要怎麼做__")
            //.addField(":panda_face:\t","**__play__ ** \n ")    
            .setTimestamp()
            .setImage('https://cdn.discordapp.com/attachments/375207017259728897/658668640362561536/ddba5fa98e2085a4.png')
            .setFooter(':有問題都可以私訊咚咚鏘 不過他有可能不會回你', 'https://cdn.discordapp.com/attachments/450975130387218457/633675033025445889/dd9ef01df9d3dcca.png');
            message.author.send(googlehelp);            
            return message.channel.send("給你"); 
        }else 
        var help = new Discord.RichEmbed()
            .setColor('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6))
            .setTitle('**機器熊貓指令總覽**')
            .setThumbnail('https://cdn.discordapp.com/attachments/375207017259728897/658668640362561536/ddba5fa98e2085a4.png')
            .setURL('https://github.com/pandayoooo/justpanda')
            .setDescription('**前綴(prefix)為 P.**')
            .addField("**指令總覽**","快點把指令背起來啦")
            .addField("**1.文字回應**","派 怕 胎死腹中 歐姆定律 修但幾咧 有趣 好ㄛ time  purge \n其他的你自己找囉 \n你說的對吧 **眼鏡盒玉米濃湯**")
            .addField("**2.語音**","in out 裝飾品功能",true)
            .addField("**3.音樂**","play  playtop  playskip  queue  skip  loop  loopqueue  quit  stats  shuffle volume pause  resume ")
            .addField("**4.查圖片**","image ",true)
            .addField("**5.算數學**","calc ",true)
            .addField("**6.幫你估狗**","google ",true)            
            .addField(':point_down:',"**可以打 p.help(功能)得到更詳細的介紹 \n如: __p.help 音樂__ 可以得到音樂指令的詳細介紹 **")            
		    .setImage('https://cdn.discordapp.com/attachments/450975130387218457/633675033025445889/dd9ef01df9d3dcca.png')
            .setTimestamp()
            .setFooter(':有問題都可以私訊咚咚鏘 不過他有可能不會回你', 'https://cdn.discordapp.com/attachments/450975130387218457/633675033025445889/dd9ef01df9d3dcca.png');            
            message.author.send(help);
            return message.channel.send("給你"); 
    }               
}


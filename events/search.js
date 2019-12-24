const Discord = require('discord.js');
const client = new Discord.Client();
const {PREFIX,PREFIX2,GOOGLE_API_KEY} = require(`../config.js`);

const googleIt = require('google-it');

//2選一測試
module.exports = ("message", async message => 
{
    if(message.author.bot)   
  	return;
    if (!(message.content.startsWith(PREFIX) ^ message.content.startsWith(PREFIX2)))
    return;
    
    let command = message.content.toLowerCase().split(' ')[0];
        command = command.slice(PREFIX.length);          
    const args = message.content.split(' ');
    const searchstring = args.slice(1).join(' ');

    if (command === "g"||command === "google") { 
        
      

      googleIt({'query': searchstring}).then(results => {

      const rstbed = new Discord.RichEmbed()
      .setColor('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6))
      .setTitle(`**查詢 ${searchstring} 的結果**`)		
      .setURL(`https://www.google.com/search?q=${searchstring}`)
      .setAuthor(`${message.author.username}#${message.author.discriminator}`, 'https://cdn.discordapp.com/attachments/375207017259728897/658296295303151626/f246daf74231fd50.png', 'https://github.com/pandayoooo/justpanda')
      .setDescription('by 熊貓的超屌機器熊貓')
      .setThumbnail('https://cdn.discordapp.com/attachments/375207017259728897/658296295303151626/f246daf74231fd50.png')
      .addField(`**1- ${results[0].title}**`, `\n${results[0].snippet}\n[點此進入網站](${results[1].link} 'panda小彩蛋')`)
      .addField(`**2- ${results[1].title}**`, `\n${results[1].snippet}\n[點此進入網站](${results[2].link} 'panda小彩蛋')`)
      .addField(`**3- ${results[2].title}**`, `\n${results[2].snippet}\n[點此進入網站](${results[3].link} 'panda小彩蛋')`)
      .addField(`**4- ${results[3].title}**`, `\n${results[3].snippet}\n[點此進入網站](${results[4].link} 'panda小彩蛋')`)
      .addField(`**5- ${results[4].title}**`, `\n${results[4].snippet}\n[點此進入網站](${results[5].link} 'panda小彩蛋')`)
      .setTimestamp()
      .setFooter(':有問題都可以私訊咚咚鏘 不過他有可能不會回你', 'https://cdn.discordapp.com/attachments/450975130387218457/633675033025445889/dd9ef01df9d3dcca.png');
      message.channel.send(rstbed);   
    }).catch(error => {
      console.error();          
      // any possible errors that might have occurred (like no Internet connection)
    })

  }

});
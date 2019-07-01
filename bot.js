const Discord = require('discord.js');
const client = new Discord.Client();


var d = new Date();	
var h = d.getHours()+8;
var m = d.getMinutes();
var s = d.getSeconds();
/*
function Hex() {
	var generalChannel = client.channels.get("594119720022573076") ;// Replace with known channel ID
    generalChannel.send(" <@551290295078223885> AS U WISH") ;
}*/

client.on('ready', () =>{
  
	var generalChannel = client.channels.get("594119720022573076") ;		
	console.log("機器人已上線");
	generalChannel.send(" <@324536397803290626> bot已在 "+h+":"+m+":"+s+ " 時運作。");
  
   });
	
	client.user.setPresence({
        game: { 
            name: 'code',
            type: 'PLAYING'
        },
        status: 'idle'
          
    });
	/*console.log(get_current_time());
  	returntime = (4-today.getMinutes())*60*1000+(60-today.getSeconds())*1000;
  	if(today.getHours()<12)
    {
        returntime += (11-today.getHours())*1000*60*60;
    }
    else if(today.getHours()<18)
    {
        returntime += (14-today.getHours())*1000*60*60;
    }
    var gc = client.channels.get("594119720022573076");
    client.setTimeout(function(){gc.send("<@!324536397803290626>吃午餐啦");},returntime);*/

	

/*
	
	setTimeout(function(){ // in leftToEight() milliseconds run this:
        var dayMillseconds = 1000 * 60 * 60 * 24;
  	setInterval(function(){ // repeat this every 24 hours
            sendNightNight();
        }, dayMillseconds)
    }, leftToTen())
	
	
});

function leftToSix(){
	var d = new Date();	
    return (-d + d.setHours(6,0,0,0));
}

function sendMorning(){
    var guild = client.guilds.get('450975130387218454');
    if(guild && guild.channels.get('594119720022573076')){
        guild.channels.get('594119720022573076').send("6點了 快起床阿幹 <@554654697261105180> ");
    }

}
*/
function addZero(i) {
	if (i < 10) {
	  i = "0" + i;
	}
	return i;
  }

client.on('message', (message) =>{
	var d = new Date();
	var h = addZero(d.getHours()+8);
	var m = addZero(d.getMinutes());
	var s = addZero(d.getSeconds());
	var generalChannel = client.channels.get("594119720022573076") ;
	const kcl = new Discord.Attachment('https://cdn.discordapp.com/attachments/594119720022573076/594555557709611033/unknown.png');
	const kvl = new Discord.Attachment('https://cdn.discordapp.com/attachments/594119720022573076/594556625155784724/unknown.png');
	const zzch = new Discord.Attachment('https://cdn.discordapp.com/attachments/512603339071160377/595194587866464256/65761563_2350292711718973_5573736612304519168_o.png');
	
	if(message.author.bot) return;	
	
	if(message.content.toUpperCase()==="TEST") 
	{
 	   generalChannel.send(h+":"+m+":"+s) ;
	}		
	if(message.content ==="歐姆定律") 
	{
		message.reply("V=IR , I=V/R , R= V/I");
	}
	if(message.content.toUpperCase()==="KVL") 
	{
		message.reply(kvl);
	}
	if(message.content.toUpperCase()==="KCL") 
	{
		message.reply(kcl);
	}
	if(message.content.toUpperCase()==="自走其") 
	{
		message.reply(zzch);
	}
});
	
client.login(process.env.BOT_TOKEN);

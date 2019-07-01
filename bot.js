const Discord = require('discord.js');
const client = new Discord.Client();

var generalChannel = client.channels.get("594119720022573076") ;// Replace with known channel ID
var d = new Date();	
var h = d.getHours()+8;
var m = d.getMinutes();
var s = d.getSeconds();

function Hex() {
	var generalChannel = client.channels.get("594119720022573076") ;// Replace with known channel ID
    generalChannel.send(" <@551290295078223885> AS U WISH") ;
}
client.on('ready', () => 
	{	
	var generalChannel = client.channels.get("594119720022573076") ;
		
	console.log("機器人已上線");
	generalChannel.send(" <@324536397803290626> bot已在 "+h+":"+m+":"+s+ " 時運作。") ;
	Hex();
	client.user.setPresence({
        game: { 
            name: 'code',
            type: 'PLAYING'
        },
        status: 'idle'
    })


	setTimeout(function(){ // in leftToEight() milliseconds run this:
        var dayMillseconds = 1000 * 60 * 60 * 24;
        setInterval(function(){ // repeat this every 24 hours
            sendMorning();
        }, dayMillseconds)
    }, leftToSix())

	setTimeout(function(){ // in leftToEight() milliseconds run this:
        var dayMillseconds = 1000 * 60 * 60 * 24;
	setInterval(function(){ // repeat this every 24 hours
            sendNoon();
        }, dayMillseconds)
    }, leftToTwelve())

	setTimeout(function(){ // in leftToEight() milliseconds run this:
        var dayMillseconds = 1000 * 60 * 60 * 24;
	setInterval(function(){ // repeat this every 24 hours
            sendNight();
        }, dayMillseconds)
    }, leftToEight())
    
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

function leftToTwelve(){
	var d = new Date();	
    return (-d + d.setHours(12,0,0,0));
}
function sendNoon(){
    var guild = client.guilds.get('450975130387218454');
    if(guild && guild.channels.get('594119720022573076')){
        guild.channels.get('594119720022573076').send("12點了 該吃午餐嚕 <@554654697261105180> ");
    }

}

function leftToEight(){
	var d = new Date();	
    return (-d + d.setHours(18,0,0,0));
}
function sendNight(){
    var guild = client.guilds.get('450975130387218454');
    if(guild && guild.channels.get('594119720022573076')){
        guild.channels.get('594119720022573076').send("6點了 該吃晚餐嚕 <@554654697261105180> ");
    }

}

function leftToTen(){
	var d = new Date();	
    return (-d + d.setHours(20,0,0,0));
}
function sendNightNight(){
    var guild = client.guilds.get('450975130387218454');
    if(guild && guild.channels.get('594119720022573076')){
        guild.channels.get('594119720022573076').send("10點了 該吃消夜嚕 <@554654697261105180> ");
    }

}



client.on('message', (message) =>{
	var d = new Date();
	var h = d.getHours()+8;
	var m = d.getMinutes();
	var s = d.getSeconds();
	var generalChannel = client.channels.get("594119720022573076") ;
	const kcl = new Discord.Attachment('https://cdn.discordapp.com/attachments/594119720022573076/594555557709611033/unknown.png')
	const kvl = new Discord.Attachment('https://cdn.discordapp.com/attachments/594119720022573076/594556625155784724/unknown.png')
	
	if(message.author.bot) return;	
	
	if(message.content.toUpperCase()==="TEST") 
	{
 	   generalChannel.send(h+":"+m+":"+s) ;
	}
	
	/*if(h === 21 && m===0 && s<=2)
	{
		generalChannel.send("9點了 該吃消夜嚕")  ;
	}
	if(h === 6  && m===0 && s<=2)
	{
		generalChannel.send("6點了 快起床阿幹")  ;
	}
	if(h === 12 && m===0 && s<=2)
	{
		generalChannel.send("12點了 該吃午餐嚕")  ;
	}
	if(h === 18 && m===0 && s<=2)
	{
		generalChannel.send("6點了 該吃晚餐嚕")  ;
	}*/
	
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
});
client.login(process.env.BOT_TOKEN);		

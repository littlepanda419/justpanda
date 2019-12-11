const Discord = require('discord.js');
const client = new Discord.Client();
const {PREFIX,PREFIX2} = require('../config.js');
const Math = require('mathjs');
const colors = require('colors');
const safeEval = require('safe-eval');



module.exports = ('message', message =>
{ 
    if(message.author==client.user)   
	return;	
	if(message.author.bot)   
	return;   
    if (!(message.content.startsWith(PREFIX) ^ message.content.startsWith(PREFIX2)))
	return undefined;
	let command = message.content.toLowerCase().split(' ')[0];
        command = command.slice(PREFIX.length);
    const args = message.content.split(' ');

    
    const π = "3.14159265358979";
    
	if (command ==='calc') {
        try {
            let args = message.content.split(' ');
            var number = args.slice(1);
            var numberN = number.join(' ');            
            if(message.content.includes("[")||message.content.includes("]")){      
            message.channel.send("請輸入正確且完整的算式，括號請務必包括前後括號，\n僅能使用小括號()，優先由內而外計算。如：__**p.calc (8+9)*87**__。");}
            else{            
            //let fina = Math.evaluate(numberN);
            let fina = safeEval(numberN);
            console.log(fina);
            message.channel.send(fina);
            console.log(numberN + "\t" + numberN.brightCyan + " successed by : ".brightCyan + message.author.username);
            }
        } catch (error) {
            message.channel.send("請輸入正確且完整的算式，括號請務必包括前後括號，\n僅能使用小括號()，優先由內而外計算。如：__**p.calc (8+9)*87**__。");
            console.log(numberN.brightRed + "\t" + numberN.brightRed +" failed by : ".brightRed + message.author.username);
            return;
        }        
    }
});

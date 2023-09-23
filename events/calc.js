const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [65535]
});
const {PREFIX,PREFIX2} = require('../config.js');
const Math = require('mathjs');
const colors = require('colors');
const safeEval = require('safe-eval');

module.exports = ('message', message =>
{ 
    if(message.author.bot)   
    return;
      
    if (!(message.content.startsWith(PREFIX) ^ message.content.startsWith(PREFIX2)))
	return undefined;
	let command = message.content.toLowerCase().split(' ')[0];
        command = command.slice(PREFIX.length);
    
	if (command ==='calc') {
        try {
            //const π = "3.14159265358979";
            let args = message.content.split(' ');
            var number = args.slice(1);
            var numberN = number.join(' '); 
            var numberrule = new RegExp('[0-9]',/*'[^a-z]'*/);
            if (!(numberN.match(numberrule))) {
                message.channel.send("請輸入正確且完整的算式，括號請務必包括前後括號，\n僅能使用小括號()，優先由內而外計算。如：__**p.calc (8+9)*87**__。");
                console.log(numberN.brightRed + "\t" + numberN.brightRed +" failed by : ".brightRed + message.author.username);
                return;
            }
            if(numberN.toLowerCase().includes("[")||numberN.toLowerCase().includes("]")||
            numberN.toLowerCase().includes("v")||numberN.toLowerCase().includes("l")){      
            message.channel.send("請輸入正確且完整的算式，括號請務必包括前後括號，\n僅能使用小括號()，優先由內而外計算。如：__**p.calc (8+9)*87**__。");
            console.log(numberN.brightRed + "\t" + numberN.brightRed +" failed by : ".brightRed + message.author.username);
            }else{            
            let fina = Math.evaluate(numberN);
            //let fina = safeEval(numberN);
            //let fina1 = eval(numberN);
            message.channel.send(fina);

            console.log(numberN.brightCyan+" = ".brightCyan + colors.brightCyan(fina)+ "\t" + " successed by : ".brightCyan + message.author.username);
            }
        } catch (error) {
            console.log(numberN.brightRed + "\t" + numberN.brightRed +" failed by : ".brightRed + message.author.username);
            message.channel.send("請輸入正確且完整的算式，括號請務必包括前後括號，\n僅能使用小括號()，優先由內而外計算。如：__**p.calc (8+9)*87**__。");            
            return;
        }        
    }
});

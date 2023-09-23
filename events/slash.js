const { REST, SlashCommandBuilder, Routes ,EmbedBuilder, Client, GatewayIntentBits, Partials ,Util} = require("discord.js");
const client = new Client({
	intents: [65535],
	partials: [Partials.Channel] 
});

const { token } = require('../config.js');

const guildId='450975130387218454';//資甲
const clientId='594373024879476737';//熊貓

const slash = [
	new SlashCommandBuilder().setName('panda').setDescription('熊貓!'),
]
const rest = new REST({ version: '10' }).setToken(token);   //設定要獲取資料
rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: slash })
	.then((data) => console.log(`Successfully registered ${data.length} application commands.`))    //設定這個command是哪隻機器人與哪個伺服器
	.catch(console.error);
        //成功的話就會告知成功新增幾筆指令
module.exports = ('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;//確定這項互動是以指令的形式，不是的話就return    
    const { commandName } = interaction;//把互動的名詞存進 commandName
    if (commandName === 'panda') {
        await interaction.reply('熊貓熊貓');
    }
});
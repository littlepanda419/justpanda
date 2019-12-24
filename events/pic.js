const cheerio = require("cheerio"); /* Used to extract html content, based on jQuery || install with npm install cheerio */
const request = require("request"); /* Used to make requests to URLs and fetch response  || install with npm install request */ 
const Discord = require('discord.js');
const client = new Discord.Client(); 
const {PREFIX,PREFIX2} = require('../config.js');
const translate = require('@vitalets/google-translate-api');
const sleep = require ("./sleep.js");

module.exports = ("message", async message => 
{ 
    if(message.author.bot)   
	return;
    if (!(message.content.startsWith(PREFIX) ^ message.content.startsWith(PREFIX2)))
	return;
    let command = message.content.toLowerCase().split(' ')[0];
        command = command.slice(PREFIX.length); 
    
    
    
    // Splits message into an array for every space, 
    //our layout: "<command> [search query]" will become ["<command>", "search query"] 
    /* Simple command manager */
    
    if (command === "image"||command === "pic"||command === "img") { // Check if first part of message is image command 
    const args = message.content.split(' ');
    const searchstring = args.slice(1).join(' ');
    if (!searchstring) return message.channel.send('請輸入要查詢的文字');
    image(message, command); // Pass requester message to image function         
    } 
});

async function image(message, command) { 
    /* extract search query from message */ 
    const args = message.content.split(' ');
    const searchstring = args.slice(1).join(' ');
    if (!searchstring) return message.channel.send('請輸入要查詢的文字');
    // Slices of the command part of the array 
    //["!image", "cute", "dog"] ---> ["cute", "dog"] ---> "cute dog"
    translate( searchstring , {to: 'en'}).then(res => {
    var EN = res.text;    
    message.channel.send("查詢字元為 "+EN)
    message.channel.send("查詢中...")
    .then((msg) => { 
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + EN,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, async function(error, response, responseBody) {
        if (error) {
            // handle error
            return;
        } 
        /* Extract image URLs from responseBody using cheerio */
 
        $ = cheerio.load(responseBody); // load responseBody into cheerio (jQuery) 
        // In this search engine they use ".image a.link" as their css selector for image links
        var links = $(".image a.link");
 
        // We want to fetch the URLs not the DOM nodes, we do this with jQuery's .attr() function
        // this line might be hard to understand but it goes thru all the links (DOM) and stores each url in an array called urls
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        //console.log(urls);
        if (!urls.length) {
            // Handle no results
            message.channel.send("該關鍵字搜尋不到任何圖片");
            return;
        } 
        // Send result
         
        const rdnURL = getRandomInt(15); //1~15隨機選數字  //urls[rdnURL]為選擇隨機數字的該圖片網址

        if(!(urls[rdnURL].endsWith("jpeg")||urls[rdnURL].endsWith("jpg")||urls[rdnURL].endsWith("png"))){
                let answer0 = new Discord.Attachment(urls[0]); //隨機到的圖片並非上述格式 因此輸出第一個
                message.channel.send(answer0)
                .then(() => {
                    message.react("🐼");
                    msg.delete();//刪除"查詢中"
                    message.channel.send("是否要獲取圖片網址? 若需要的話請輸入\"y\"\n無需網址不理會即可。 ");
                    let choice = 0;
                });
        }else{
            let answer = new Discord.Attachment(urls[rdnURL]); //把查詢到的網址 隨機取一個 存成圖片
            message.channel.send(answer)
			.then(() => {
                message.react("🐼");
                msg.delete();//刪除"查詢中"
                message.channel.send("是否要獲取圖片網址? 若需要的話請輸入\"y\"\n無需網址不理會即可。 ");
                let choice = 1;
            });
        }
        try {
            var response = await message.channel.awaitMessages(message2 => message2.content =="Y"||message2.content =="y",{
                maxMatches: 1,
                time: 10000,
                errors: ['time']
            });
        } catch (err) {
            console.error(err);
            return message.channel.send('**已取消獲取網址。**');
        }
        if (response.first().content.toLowerCase='y') 
        if(choice = 0){
            urllll = urls[0];
            message.channel.send(urllll);
        } else        
            urllll = urls[rdnURL];
            message.channel.send(urllll);
        });
    }); 
})
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


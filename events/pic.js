const cheerio = require("cheerio"); /* Used to extract html content, based on jQuery || install with npm install cheerio */
const request = require("request"); /* Used to make requests to URLs and fetch response  || install with npm install request */ 
const Discord = require('discord.js');
const client = new Discord.Client(); 
const {PREFIX,PREFIX2} = require('../config.js');

module.exports = ("message", async message => 
{ 
    let command = message.content.toLowerCase().split(' ')[0];
        command = command.slice(PREFIX.length); 
    // Splits message into an array for every space, 
    //our layout: "<command> [search query]" will become ["<command>", "search query"]
 
    /* Simple command manager */
    if (command === "image") { // Check if first part of message is image command
 
        // call the image function
        
        image(message, command); // Pass requester message to image function 
        
    } 
});

async function image(message, command) { 
    /* extract search query from message */ 
    const args = message.content.split(' ');
    const searchstring = args.slice(1).join(' '); // Slices of the command part of the array 
    //["!image", "cute", "dog"] ---> ["cute", "dog"] ---> "cute dog"
    message.channel.send("查詢中...")
    .then((msg) => {
 
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + searchstring,
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
            return;
        } 
        // Send result
        
        const rdn = getRandomInt(15); //從網址亂數
        let answer = new Discord.Attachment(urls[rdn]); //把查詢到的網址 隨機取一個 存成圖片
        msg.delete();        //刪除查詢中
        message.channel.send(answer);
        message.react("🐼");
        message.channel.send("是否要獲取圖片網址? 若需要的話請輸入\"y\"\n無需網址可不理會。 ");
        try {
            var response = await message.channel.awaitMessages(message2 => message2.content =="Y"||message2.content =="y", {
                maxMatches: 1,
                time: 15000,
                errors: ['time']
            });
            if (response.first().content.toLowerCase='y') 
            message.channel.send(urls[rdn]);
            if (response.first().content.toLowerCase='n')
            return;
        } catch (err) {
            console.error(err);
            return message.channel.send('已取消獲取網址');
        }

        
         /* message.channel.send( urls[0] );
            msg.delete();
            message.react("🐼");*/
        });
        
    }); 
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
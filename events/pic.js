var cheerio = require("cheerio"); /* Used to extract html content, based on jQuery || install with npm install cheerio */
var request = require("request"); /* Used to make requests to URLs and fetch response  || install with npm install request */ 
var discord = require("discord.js");
var client = new discord.Client(); 
const {PREFIX,PREFIX2} = require('../config.js');


function image(message, commands) { 
    /* extract search query from message */ 
    const args = message.content.split(' ');
	const searchString = args.slice(1).join(' ');
    // Slices of the command part of the array
    // ["!image", "cute", "dog"] ---> ["cute", "dog"] ---> "cute dog"
 
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + searchString,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, function(error, response, responseBody) {
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
        if (!urls.length) {
            // Handle no results
            return;
        } 
        // Send result
        var answer =urls(getRandomInt(10));
        console.log(answer);
        message.channel.send(answer);
    }); 
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

 
module.exports = ('message', message =>
{    
	if(message.author==client.user)   
    return;
      
    if (!(message.content.startsWith(PREFIX) ^ message.content.startsWith(PREFIX2)))
	return undefined;

	let command = message.content.toLowerCase().split(' ')[0];
        command = command.slice(PREFIX.length)

    if (command.toLowerCase() === "image") {      

        image(message, command);

    } 
});
 

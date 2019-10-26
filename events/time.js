const Discord = require('discord.js')
module.exports = (msg,client) =>

{
	function addZero(i) 
	{
	if (i < 10) {
	  i = "0" + i;
	}
	return i;
  }


var d = new Date();	
var h = addZero(d.getUTCHours()+8); if (h>=24)	h = "0"+(h-24);
var m = addZero(d.getMinutes());
var s = addZero(d.getSeconds());


}
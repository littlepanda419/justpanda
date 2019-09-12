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
var h = addZero(d.getHours()+8);
var m = addZero(d.getMinutes());
var s = addZero(d.getSeconds());
}
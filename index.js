const express = require('express');
const app = express();
let Discord = require('discord.js')
app.get("/", (request, response) => {
  response.sendStatus(200);
});
let Eris = require('eris')
app.listen(process.env.PORT);
let client = new Eris("ODQzNjAzMDI1MjA0NzQwMDk3.YKGQig.6lbagrhVVlw6Bq0qpoSqgjgiIBM");


client.on('ready', () =>{
console.log('Ready')
})
let prefix = "."

client.on('messageCreate', async (message) => {
	if (message.author.bot || !message.channel.guild) return;
let commandNames = message.content.split(" ")[0].toLowerCase()
	let args = message.content.slice(prefix.length).trim().split(/ +/);

	let commandName = args.shift().toLowerCase();

if(!message.content.startsWith(prefix)) return;
let msg = message
let data = [{
prefix:prefix
}]




})
client.connect()
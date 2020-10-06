const Discord = require('discord.js');
const empty = require('is-empty');

module.exports.run = async(ErrorBot, message, argument) => {
  if(empty(argument)){
    message.channel.send("Pinging...").then(msg =>{
      var ping = msg.createdTimestamp - message.createdTimestamp;
      var apiPing = Math.round(ErrorBot.ws.ping);

      msg.edit(`**Bot is online**\nBot API ping is ${apiPing}ms\nMessage ping is ${ping}ms`);
    });
  }
};

module.exports.help = {
  name: "ping"
}

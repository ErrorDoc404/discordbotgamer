const Discord = require('discord.js');
const empty = require('is-empty');

module.exports.run = async(ErrorBot, message, argument) => {
  if(empty(argument)){
    message.channel.send("Pinging...").then(m =>{
      var ping = m.createdTimestamp - message.createdTimestamp;
      var apiPing = Math.round(ErrorBot.ws.ping);

      m.edit(`**Bot is online**\nBot API ping is ${apiPing}ms\nMessage ping is ${ping}ms`);
    });
  }
};

module.exports.help = {
  name: "ping"
}

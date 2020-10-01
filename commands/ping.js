const Discord = require('discord.js');

module.exports.run = async(ErrorBot, message, argument) => {
  ping(message);
};

module.exports.help = {
  name: "ping"
}

function ping(message){
  message.channel.send(`${message.content} with pong`);
}

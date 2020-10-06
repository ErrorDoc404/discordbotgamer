const Discord = require('discord.js');
const empty = require('is-empty');

module.exports.run = async(ErrorBot, message, argument) => {
  message.channel.send("Pinging...").then(m =>{
            var ping = m.createdTimestamp - message.createdTimestamp;
            var botPing = Math.round(ErrorBot.pi);

            m.edit(`**:ping_pong: Pong! Your Ping Is:-**\n  ${ping}ms`);
        });
};

module.exports.help = {
  name: "ping"
}

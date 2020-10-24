const Discord = require('discord.js');
const empty = require('is-empty');

module.exports.run = async(ErrorBot, message, argument) => {
  if (message.channel.nsfw) {
    message.channel.send("This channel is NSFW");
  } else {
    message.reply("This channel is SFW. Please try in NSFW channel");
  }
};

module.exports.help = {
  name: "lude"
}

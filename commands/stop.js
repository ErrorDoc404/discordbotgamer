const Discord = require('discord.js');
const ytdl = require('ytdl-core');

module.exports.run = async(ErrorBot, message, argument) => {
    if(!message.member.voice.channel) return message.channel.send("You need to be in a voice channel to stop the music");
    message.member.voice.channel.leave();
    return;
};

module.exports.help = {
  name: "stop"
}

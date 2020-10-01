const Discord = require('discord.js');
const empty = require('is-empty');

module.exports = (ErrorBot, channel) => {
  try{
    var log_channel = channel.guild.channels.cache.filter(chx => chx.type === "text").find(x => x.name === `mod-logs`);
    var image = empty(channel.guild.iconURL()) ? 'https://cdn.discordapp.com/embed/avatars/0.png' : channel.guild.iconURL() ;
    const embed = new Discord.MessageEmbed() // Create a new RichEmbed
    .setColor('#3cba54')
    .setAuthor(channel.guild.name , image)
    .setTimestamp()
    .setFooter(`ID: ${channel.id}`)
    .setTitle(`New Channel Created`)
    .setDescription(`Name of channel : ${channel.name}`);;

    log_channel.send({ // Send the embed to the defined channel
      embed
    });
  } catch(error){
    return console.error(error);
  }
};

const Discord = require('discord.js');
const empty = require('is-empty');

module.exports = (ErrorBot, oldChannel, newChannel) => {
    if(oldChannel.name != newChannel.name){
      try{
        var log_channel = newChannel.guild.channels.cache.filter(chx => chx.type === "text").find(x => x.name === `mod-logs`);
        var image = empty(newChannel.guild.iconURL()) ? 'https://cdn.discordapp.com/embed/avatars/0.png' : channel.guild.iconURL() ;

        const embed = new Discord.MessageEmbed() // Create a new RichEmbed
        .setColor('#f4c20d')
        .setAuthor(newChannel.guild.name , image)
        .setTimestamp()
        .setFooter(`ID: ${newChannel.id}`)
        .setTitle(`Channel name Changed`)
        .setDescription(`Name of channel : ${oldChannel.name} -> ${newChannel.name}`);

        log_channel.send({ // Send the embed to the defined channel
          embed
        });
      } catch(error){
        console.error(error);
      }
    }
    if(oldChannel.nsfw != newChannel.nsfw){
      try{
        var log_channel = newChannel.guild.channels.cache.filter(chx => chx.type === "text").find(x => x.name === `mod-logs`);
        var image = empty(newChannel.guild.iconURL()) ? 'https://cdn.discordapp.com/embed/avatars/0.png' : channel.guild.iconURL() ;
        var nsfw_type = newChannel.nsfw ? 'Yes' : 'No';
        const embed = new Discord.MessageEmbed() // Create a new RichEmbed
        .setColor('#f4c20d')
        .setAuthor(newChannel.guild.name , image)
        .setTimestamp()
        .setFooter(`ID: ${newChannel.id}`)
        .setTitle(`Explicit Category`)
        .setDescription(`Name of channel : **#${newChannel.name}**\nChange NSFW type : **${nsfw_type}**`);

        log_channel.send({ // Send the embed to the defined channel
          embed
        });
      } catch(error){
        console.error(error);
      }
    }
};

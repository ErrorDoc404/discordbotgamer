const Discord = require('discord.js');
const empty = require('is-empty');

module.exports = (ErrorBot, member) => {
  try{
    var log_channel = member.guild.channels.cache.filter(chx => chx.type === "text").find(x => x.name === `mod-logs`);
    var image = empty(member.user.avatarURL()) ? member.user.defaultAvatarURL : member.user.avatarURL() ;
    const embed = new Discord.MessageEmbed() // Create a new RichEmbed
      .setAuthor(member.user.tag, member.user.avatarURL()) // Show the Discord tag of the new member and it's avatar
      .setTitle('Member joined') // Title of the embed
      .setDescription(`${member} join our server, glad you are here`) // Description of the embed
      .setTimestamp()
      .setColor('#3cba54')
      .setFooter(`ID: ${member.id}`);

    log_channel.send({ // Send the embed to the defined channel
      embed
    });
  } catch(error){
    return console.error(error);
  }

};

const Discord = require('discord.js');

module.exports = async (ErrorBot, reaction, user) => {
  try{
    if(reaction.message.partials) await reaction.message.fetch();
    if(reaction.partials) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === '761572801328840765') {
      if(reaction.emoji.id === '761866568841035816'){
        await reaction.message.guild.members.cache.get(user.id).roles.remove('761574299840151552');
      }
      if(reaction.emoji.id === '761866569155346442'){
        await reaction.message.guild.members.cache.get(user.id).roles.remove('761573984251936820');
      }
      if(reaction.emoji.id === '761866569051537428'){
        await reaction.message.guild.members.cache.get(user.id).roles.remove('761574643819610151');
      }
    }

    if(reaction.message.channel.id === '801522289547804703') {
      if(reaction.emoji.id === '801501063240744961'){
        await reaction.message.guild.members.cache.get(user.id).roles.remove('797352282198507530');
      }

      var log_channel = reaction.message.guild.channels.cache.filter(chx => chx.type === "text").find(x => x.name === `mod-logs`);
      let newRole = reaction.message.guild.roles.cache.get("797352282198507530");
      const embed = new Discord.MessageEmbed() // Create a new RichEmbed
        .setAuthor(user.tag, user.avatarURL()) // Show the Discord tag of the new member and it's avatar
        .setTitle('Remove Role') // Title of the embed
        .setDescription(`${user} remove Role ${newRole}`) // Description of the embed
        .setTimestamp()
        .setColor('#db3236')
        .setFooter(`ID: ${user.id}`);

      log_channel.send({ // Send the embed to the defined channel
        embed
      });
    }
  } catch(error){
    return console.error(error);
  }

};

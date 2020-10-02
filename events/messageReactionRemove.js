const Discord = require('discord.js');

module.exports = async (ErrorBot, reaction, user) => {
  try{
    if(reaction.message.partials) await reaction.message.fetch();
    if(reaction.partials) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === '761572801328840765') {
      if(reaction.emoji.name === 'valorant'){
        await reaction.message.guild.members.cache.get(user.id).roles.remove('761574299840151552');
      }
      if(reaction.emoji.name === 'amongus'){
        await reaction.message.guild.members.cache.get(user.id).roles.remove('761573984251936820');
      }
      if(reaction.emoji.name === 'csgo'){
        await reaction.message.guild.members.cache.get(user.id).roles.remove('761574643819610151');
      }
    }
  } catch(error){
    return console.error(error);
  }

};

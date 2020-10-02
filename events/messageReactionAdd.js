const Discord = require('discord.js');

module.exports = async (ErrorBot, reaction, user) => {
  try{
    if(reaction.message.partials) await reaction.message.fetch();
    if(reaction.partials) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === '761149877753085953') {
      console.log('lol')
      if(reaction.emoji.name === 'valorant'){
        console.log('lol');
        await reaction.message.guild.members.cache.get(user.id).roles.add('761491800065572865');
      }
    }
  } catch(error){
    return console.error(error);
  }

};

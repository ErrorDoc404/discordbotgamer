const Discord = require('discord.js');
const empty = require('is-empty');

module.exports.run = async (ErrorBot, message, argument) => {
  if (message.member.hasPermission('ADMINISTRATOR')){
    const roles_message_embed = 'Hi there, Take the roles of games you play\n<:valorant:761149464152637471> => Valorant\n<:amongus:761149464928190464> => Amoung Us\n<:csgo:761155171446554657> => Counter Strike ; Go';
    message.channel.send(roles_message_embed).then(sentEmbed => {
      sentEmbed.react("761213162866868256")
      sentEmbed.react("761213162665017377")
      sentEmbed.react("761213163294162985")
    })
  }
};

module.exports.help = {
  name: "roles"
}

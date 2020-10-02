const Discord = require('discord.js');
const empty = require('is-empty');

module.exports.run = async (ErrorBot, message, argument) => {
  if (message.member.hasPermission('ADMINISTRATOR')){
    const roles_message_embed = 'Hi there if you play those games just vote by reacting emojies and get the role\n<:valorant:761149464152637471> => Valorant\n<:amongus:761149464928190464> => Amoung Us\n<:csgo:761155171446554657> => Counter Strike ; Go';
    message.channel.send(roles_message_embed).then(sentEmbed => {
      sentEmbed.react("761149464152637471")
      sentEmbed.react("761149464928190464")
      sentEmbed.react("761155171446554657")
    })
  }
};

module.exports.help = {
  name: "roles"
}

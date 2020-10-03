const Discord = require('discord.js');
const fetch = require('node-fetch');
const empty = require('is-empty');

module.exports.run = async(ErrorBot, message, argument) => {
  try{
    if (message.member.hasPermission('ADMINISTRATOR')){
      var rules_channel = message.guild.channels.cache.filter(chx => chx.type === "text").find(x => x.name === `rules-access`);
      var help_channel = message.guild.channels.cache.filter(chx => chx.type === "text").find(x => x.name === `help-faq`);

      if(!empty(rules_channel)){
        message.channel.send('Channel already avilable');
      }else {
        var rule_image = 'https://cdn.discordapp.com/attachments/311719903726010368/722943041303740416/image.png';
        message.guild.channels.create('rules-access', { reason: 'this channel is got rules' }).then(channel => {
          channel.setTopic('Follow instructions in Discord Rules selection to gain access to the rest of the server');
          channel.send({
            files: [{
              attachment: rule_image
            }]
          }).then(async msg => {
            const rulesEmbedText = new Discord.MessageEmbed()
              .setColor('#660000')
              .setTitle(`「Discord Rules」`)
              .setDescription('If you agree to these rules, appear ONLINE and add the reaction <:aggrement:761974498865709076> to the rules post.')
              .addFields(
                  { name: '「Text Channel Rules」', value: "１　Do not use disturbing or offensive avatars and/or nicknames.\n２　Do not post disturbing or offensive content such as pornographic discussions/material, gore, discriminating material, and so forth.\n３　Do not spam.\n４　Do not advertise publicly nor' through Direct Message.\n５　Do not post spoilers unless in a spoiler channel.\n６　Conversations and content must be on topic in relation to the channel topic.\n７　Be respectful.\n８ Avoid political and religious conflicts.", inline: true },
                  { name: '「Voice Channel Rules」', value: "１　Respect all users and members.\n２　Do not keep your microphone active with constant feedback or echo.\n３　Refrain from streaming music as your microphone.\n４　Refrain from abusing Operators who can stream music.\n５　Refrain from constantly joining and leaving.\n６　Keep your microphone level to an appropriate level.\n７　Use only Voice Channels marked with [Music] for streaming music.\n８ Avoid political and religious conflicts.", inline: true },
                  { name: '「Dispute(s)」', value: "If an issue or conflict is not resolved between the two or more involved party members, request for a @「Discord Moderator」 to intervene by messaging them through direct message."}
                );

            msg.channel.send(rulesEmbedText).then(sentEmbed => {
              sentEmbed.react("761974498865709076")
            });
          });
        });
        message.channel.send('Rules channel created sucessfully');
      }

      if(!empty(help_channel)){
        message.channel.send('Channel already avilable');
      }else {
        var help_image = 'https://cdn.discordapp.com/attachments/669702412948340781/669702464823623710/image.png';
        message.guild.channels.create('help', { reason: 'this channel is got help' }).then(channel => {
          channel.setTopic('Replies will be a DM from a moderator. Make sure DMs are enabled.');
          channel.send({
            files: [{
              attachment: help_image
            }]
          }).then(async msg => {
            msg.channel.send("```diff\n- I AM NOT SITE ADMINISTRATORS, I AM A COMMUNITY BOT.  I HAVE NO CONTROL OVER ANY SITES. I RUN THIS DISCORD ONLY.\n```\n**Q: How do I unlock the rest of this server?**\nA: Read the <#"+ message.guild.channels.cache.filter(chx => chx.type === "text").find(x => x.name === `rules-access`) +"> channel and follow it's instructions to agree to rules.");
          });
        });
        message.channel.send('Help channel created sucessfully');
      }
    }
  }catch (error){
    console.error(error);
  }
};

module.exports.help = {
  name: "channel"
}

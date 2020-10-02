const Discord = require('discord.js');
const empty = require('is-empty');

module.exports = (ErrorBot, oldMember, newMember) => {
  try{
    let log_channel = oldMember.guild.channels.cache.filter(chx => chx.type === "text").find(x => x.name === `mod-logs`);
    let embed;
    if(!empty(oldMember.channelID) && !empty(newMember.channelID)){
        embed = new Discord.MessageEmbed() // Create a new RichEmbed
        .setColor('#f4c20d')
        .setAuthor(getMemberTag(newMember), getMemberImage(newMember)) // Show the Discord tag of the new member and it's avatar
        .setThumbnail(getMemberImage(newMember))
        .setTitle(`Move Voice Channel`)
        .addFields(
          { name: 'Before', value: `${oldMember.channel.name}`, inline: true },
          { name: 'After', value: `${newMember.channel.name}`, inline: true },
        )
        .setDescription(`<@${getMemberID(newMember)}> move voice channel`)
        .setFooter(`ID: ${getMemberID(newMember)}`)
        .setTimestamp();
    }
    if(!empty(oldMember.channelID) && empty(newMember.channelID)){
        embed = new Discord.MessageEmbed() // Create a new RichEmbed
        .setColor('#db3236')
        .setAuthor(getMemberTag(oldMember), getMemberImage(oldMember)) // Show the Discord tag of the new member and it's avatar
        .setThumbnail(getMemberImage(oldMember))
        .setTitle(`Left Voice Channel`)
        .setDescription(`<@${getMemberID(oldMember)}> left voice channel **${oldMember.channel.name}**`)
        .setFooter(`ID: ${getMemberID(oldMember)}`)
        .setTimestamp();
    }
    if(empty(oldMember.channelID) && !empty(newMember.channelID)){
      embed = new Discord.MessageEmbed() // Create a new RichEmbed
      .setColor('#3cba54')
      .setAuthor(getMemberTag(newMember), getMemberImage(newMember)) // Show the Discord tag of the new member and it's avatar
      .setThumbnail(getMemberImage(newMember))
      .setTitle(`Join Voice Channel`)
      .setDescription(`<@${getMemberID(newMember)}> joined voice channel **${newMember.channel.name}**`)
      .setFooter(`ID: ${getMemberID(newMember)}`)
      .setTimestamp();
    }

    log_channel.send({ // Send the embed to the defined channel
      embed
    });
  } catch(error){
    console.error(error);
  }
};

function getMemberName(enduser){
  return enduser.member.user.username;
}


function getMemberID(enduser){
  return enduser.member.user.id;
}

function getMemberTag(enduser){
  return enduser.member.user.tag;
}

function getMemberImage(enduser){
  var image = empty(enduser.member.user.avatarURL()) ? enduser.member.user.defaultAvatarURL : enduser.member.user.avatarURL() ;
  return image;
}
function getMember(){
  return enduser.member.user;
}

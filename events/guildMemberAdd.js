const Discord = require('discord.js');
const empty = require('is-empty');
const { CanvasSenpai } = require("canvas-senpai");
const fs = require('fs');
const canva = new CanvasSenpai();



module.exports = async (ErrorBot, member) => {
  try{
    var log_channel = member.guild.channels.cache.filter(chx => chx.type === "text").find(x => x.name === `mod-logs`);
    var welcome_channel = member.guild.channels.cache.filter(chx => chx.type === "text").find(x => x.name === `welcome`);
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

    var images = [];

    fs.readdir('./image/', async (err, files) => {
      if (err) return err;
      files.forEach(function(item) {
        images.push(item);
      });

      var image = images[Math.floor((Math.random() * images.length)) % images.length];
      let data = await canva.welcome(member, { link: `./image/${image}`, blur: false });

      const attachment = new Discord.MessageAttachment(
        data
      );

      welcome_channel.send(`Welcome to the server, ${member.user.username}!`, attachment);
    });
  } catch(error){
    return console.error(error);
  }

};

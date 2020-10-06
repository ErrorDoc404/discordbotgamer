const Discord = require('discord.js');
const empty = require('is-empty');
const { CanvasSenpai } = require("canvas-senpai");
const fs = require('fs');
const xp = require('../xp.json');
const canva = new CanvasSenpai();

module.exports.run = async(ErrorBot, message, argument) => {
  if(!empty(argument)){
    const member = message.mentions.members.first();
    if(!empty(xp[member.user.id])){
      var images = [];

      fs.readdir('./image/', async (err, files) => {
        if (err) return err;
        files.forEach(function(item) {
          images.push(item);
        });

        var image = images[Math.floor((Math.random() * images.length)) % images.length];

        let data = await canva.rankcard(
           {
             link: `./image/${image}`,
             name: member.user.username,
             discriminator: member.user.discriminator,
             level: xp[member.user.id].level,
             rank: 'N/A',
             currentXP: xp[member.user.id].xp,
             fullXP: ((xp[member.user.id].level * (xp[member.user.id].level + 1) * 100) + ((xp[member.user.id].level * (xp[member.user.id].level + 1)) * 20)),
             avatar: member.user.displayAvatarURL({ format: "png"}),
             blur: false
           })



           const attachment = new Discord.MessageAttachment(
           data,
            `${image}`
          );

          message.channel.send(
            ``,
            attachment
          );
      });
    }else {
      if(!xp[member.user.id]){
        xp[member.user.id] = {
          xp: 1,
          level: 1
        };
      }

      var images = [];

      fs.readdir('./image/', async (err, files) => {
        if (err) return err;
        files.forEach(function(item) {
          images.push(item);
        });

        var image = images[Math.floor((Math.random() * images.length)) % images.length];

        let data = await canva.rankcard(
           {
             link: `./image/${image}`,
             name: member.user.username,
             discriminator: member.user.discriminator,
             level: xp[member.user.id].level,
             rank: 'N/A',
             currentXP: xp[member.user.id].xp,
             fullXP: ((xp[member.user.id].level * (xp[member.user.id].level + 1) * 100) + ((xp[member.user.id].level * (xp[member.user.id].level + 1)) * 20)),
             avatar: member.user.displayAvatarURL({ format: "png"}),
             blur: false
           })



           const attachment = new Discord.MessageAttachment(
           data,
            `${image}`
          );

          message.channel.send(
            ``,
            attachment
          );
      });
    }
  }else{
    var images = [];

    fs.readdir('./image/', async (err, files) => {
      if (err) return err;
      files.forEach(function(item) {
        images.push(item);
      });

      var image = images[Math.floor((Math.random() * images.length)) % images.length];

      let data = await canva.rankcard(
         {
           link: `./image/${image}`,
           name: message.author.username,
           discriminator: message.author.discriminator,
           level: xp[message.author.id].level,
           rank: 'N/A',
           currentXP: xp[message.author.id].xp,
           fullXP: ((xp[message.author.id].level * (xp[message.author.id].level + 1) * 100) + ((xp[message.author.id].level * (xp[message.author.id].level + 1)) * 20)),
           avatar: message.author.displayAvatarURL({ format: "png"}),
           blur: false
         })



         const attachment = new Discord.MessageAttachment(
         data,
          `${image}`
        );

        message.channel.send(
          ``,
          attachment
        );
    });
  }
};

module.exports.help = {
  name: "profile"
}

function getMemberImage(enduser){
  var image = empty(enduser.user.avatarURL()) ? enduser.user.defaultAvatarURL : enduser.user.avatarURL() ;
  return image;
}

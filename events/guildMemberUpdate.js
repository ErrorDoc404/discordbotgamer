const Discord = require('discord.js');
const empty = require('is-empty');
const { CanvasSenpai } = require("canvas-senpai");
const fs = require('fs');
const canva = new CanvasSenpai();

module.exports = (ErrorBot, oldMember, newMember) => {
  if(!empty(oldMember.channelID) && !empty(newMember.channelID)){
    console.log('a');
  }
  else {
    console.log(newMember.roles.name);
  }
};

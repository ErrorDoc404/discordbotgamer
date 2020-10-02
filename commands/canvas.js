const Discord = require('discord.js');
const fetch = require('node-fetch');
const empty = require('is-empty');
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();

module.exports.run = async(ErrorBot, message, argument) => {
  let data = await canva.welcome(member, { link: "https://wallpapercave.com/wp/wp5128415.jpg" })

  let mage = new Canvas(300, 300)
    .setColor('#AEFD54')
    .printRectangle(5, 5, 290, 290)
    .setColor('#FFAE23')
    .setTextFont('28px Impact')
    .printText('Hello World!', 130, 150)
    .toBuffer();

      message.channel.send({files: [mage]}) //lol i forget again
};

module.exports.help = {
  name: "canvas"
}

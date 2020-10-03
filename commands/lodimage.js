const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async(ErrorBot, message, argument) => {
  var array = ['smaple'];
  var images = [];

  fs.readdir('./image/', async (err, files) => {
    if (err) return console.error;
    files.forEach(function(item) {
      images.push(item);
    });

    console.log(images[Math.floor((Math.random() * images.length)) % images.length]);
  });
};

module.exports.help = {
  name: "lodimage"
}

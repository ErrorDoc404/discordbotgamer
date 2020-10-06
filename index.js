require('dotenv').config();
const Discord = require('discord.js');
const fs = require('fs');
const Enmap = require('enmap');
const ErrorBot = new Discord.Client({partials: ["MESSAGE" , "CHANNEL", "REACTION"]});

ErrorBot.commands = new Enmap();

fs.writeFile('xp.json', 'Learn Node FS module', function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});

fs.readdir('./events/', (err, files) => {
  if (err) return console.error;
  files.forEach(file => {
    if (!file.endsWith('.js')) return;
    const evt = require(`./events/${file}`);
    let evtName = file.split('.')[0];
    console.log(`Loaded event '${evtName}'`);
    ErrorBot.on(evtName, evt.bind(null, ErrorBot));
  });
});

fs.readdir('./commands/', async (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
      if (!file.endsWith('.js')) return;
      let props = require(`./commands/${file}`);
      let cmdName = file.split('.')[0];
      console.log(`Loaded command '${cmdName}'`);
      ErrorBot.commands.set(cmdName, props);
    });
  });

ErrorBot.login(process.env.token);

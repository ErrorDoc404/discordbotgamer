const xp = require('../xp.json');
const fs = require('fs');
module.exports = (ErrorBot, message) => {
  if(message.author.bot) return;
  if(message.content.type === "dm") return;

  let xpAdd = Math.floor(Math.random() * 5) + 15;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 1,
      level: 1
    };
  }

  let currXp = xp[message.author.id].xp;
  let currLevel = xp[message.author.id].level;

  if(message.content.startsWith(`${process.env.prefix}`)){
    console.log('xp not earned with commands line');
  }else {
    xp[message.author.id].xp = currXp + xpAdd;
  }

  let nextLevel = ((currLevel * (currLevel + 1) * 100) + ((currLevel * (currLevel + 1)) * 20));
  if(nextLevel <= currXp){
    xp[message.author.id].level = xp[message.author.id].level + 1;
    xp[message.author.id].xp = currXp - nextLevel;
  }
  console.log(xp);
  fs.writeFile('./xp.json', JSON.stringify(xp), (err) => {
    if(err) console.log(err);
  });

  let MessageArray = message.content.split(" ");
  let command = MessageArray[0];
  let argument = MessageArray.slice(1).join(" ");

  if(!command.startsWith(`${process.env.prefix}`)) return;

  let cmd = ErrorBot.commands.get(command.slice(process.env.prefix.length));
  if (cmd) cmd.run(ErrorBot, message, argument);
};

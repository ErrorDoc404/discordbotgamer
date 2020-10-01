module.exports = (ErrorBot, message) => {
  if(message.author.bot) return;
  if(message.content.type === "dm") return;

  let MessageArray = message.content.split(" ");
  let command = MessageArray[0];
  let argument = MessageArray.slice(1).join(" ");

  if(!command.startsWith(`${process.env.prefix}`)) return;

  let cmd = ErrorBot.commands.get(command.slice(process.env.prefix.length));
  if (cmd) cmd.run(ErrorBot, message, argument);
};

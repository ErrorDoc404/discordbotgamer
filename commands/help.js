const Discord = require("discord.js");

module.exports.run = async(ErrorBot, message, argument) => {
  try{
			const helpEmbedText = new Discord.MessageEmbed()
				.setColor('#660000')
				.setTitle(`${ErrorBot.user.username}`)
				//.setURL('https://www.google.com')
				.setAuthor(`${ErrorBot.user.username}`, 'https://i.imgur.com/zDljcntt.jpg', 'https://discord.js.org')
				.setDescription(process.env.description)
				.setThumbnail('https://i.imgur.com/zDljcntt.jpg')
				.addFields(
					{ name: 'About', value: 'Version : '+process.env.version },
					{ name: '\u200B', value: '\u200B' },
					{ name: 'Commands', value: '`^help`\n`^about`\n`^meme`', inline: true },
					{ name: 'Description', value: 'Shows the help commands\nShows the about this bot\nmeme in gifs', inline: true },
				)
				//.addField('Inline field title', 'Some value here', true)
				.setImage('https://i.imgur.com/zDljcnt.jpg')
				.setTimestamp()
				.setFooter('Some footer text here', 'https://i.imgur.com/zDljcntt.jpg');

			message.channel.send(helpEmbedText);
		}catch (err){
			message.channel.send(`Server Error: ${err}`);
		}
};

module.exports.help = {
  name: "help"
}

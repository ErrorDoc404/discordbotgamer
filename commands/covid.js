const Discord = require('discord.js');
const fetch = require('node-fetch');
const empty = require('is-empty');

module.exports.run = async(ErrorBot, message, argument) => {
  if(!argument){
    message.channel.startTyping();
    var covid_data = fetch('https://api.covid19api.com/summary', {method: "Get"}).then(response => response.json());
    var image = empty(ErrorBot.user.avatarURL()) ? ErrorBot.user.defaultAvatarURL : ErrorBot.user.avatarURL() ;
    covid_data
    .then(function(result) {
        try{
    			const helpEmbedText = new Discord.MessageEmbed()
    				.setColor('#660000')
    				.setTitle(`Covid-19 Global Result`)
    				.setAuthor(`${ErrorBot.user.username}`, image)
    				.addFields(
    				 	{ name: 'NewConfirmed', value: result.Global.NewConfirmed },
    				 	{ name: 'TotalConfirmed', value: result.Global.TotalConfirmed },
    				 	{ name: 'NewDeaths', value: result.Global.NewDeaths },
    				 	{ name: 'TotalDeaths', value: result.Global.TotalDeaths },
    				 	{ name: 'NewRecovered', value: result.Global.NewRecovered },
    				 	{ name: 'TotalRecovered', value: result.Global.TotalRecovered },
    				 )
    			message.channel.send(helpEmbedText);
    		}catch (err){
    			message.channel.send(`Server Error: ${err}`);
    		}
      message.channel.stopTyping();
    }).catch(error => {
      console.error(error);
    })
  } else {
    try{
      message.channel.startTyping();
      var covid_data = fetch(`https://api.covid19api.com/dayone/country/${argument}`, {method: "Get"}).then(response => response.json());
      covid_data
      .then(function(result) {
        console.log(result[result.length - 1].Country)
          try{
            var image = empty(ErrorBot.user.avatarURL()) ? ErrorBot.user.defaultAvatarURL : ErrorBot.user.avatarURL() ;
            console.log(image);
      			const helpEmbedText = new Discord.MessageEmbed()
      				.setColor('#660000')
      				.setTitle(`Covid-19 ${result[result.length - 1].Country} Result`)
      				.setAuthor(`${ErrorBot.user.username}`, image)
      				.addFields(
      				 	{ name: 'Country', value: result[result.length - 1].Country },
      				 	{ name: 'Confirmed', value: result[result.length - 1].Confirmed },
      				 	{ name: 'Deaths', value: result[result.length - 1].Deaths },
      				 	{ name: 'Recovered', value: result[result.length - 1].Recovered },
      				 	{ name: 'Active', value: result[result.length - 1].Active },
      				 	{ name: 'Date', value: result[result.length - 1].Date },
      				 )
      			message.channel.send(helpEmbedText);
      		}catch (err){
      			message.channel.send(`Server Error: ${err}`);
      		}
        message.channel.stopTyping();
      }).catch(error => {
        console.error(error);
      })
    }catch(error){
      console.error(error);
    }
  }
};

module.exports.help = {
  name: "covid"
}

const Discord = require("discord.js");
const cheerio = require("cheerio");
const request = require("request");

module.exports.run = async(ErrorBot, message, argument) => {
    message.channel.startTyping();

    var options = {
		    url: "http://results.dogpile.com/serp?qc=images&q=" + argument,
		    method: "GET",
		    headers: {
		        "Accept": "text/html",
		        "User-Agent": "Chrome"
		    }
		};

		request(options, function(error, response, responseBody) {
			if(error) {
				console.log(error);
				return;
			}
			if(response){
				$ = cheerio.load(responseBody);
				var links = $(".image a.link");

				var image_url = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
				var image_length = image_url.length;

				var random_image = Math.floor((Math.random() * 10) - 1) % image_length;

				message.channel.send({
          files: [{
            attachment: image_url[random_image]
          }]
        });
			}
		})

    message.channel.stopTyping();

};

module.exports.help = {
  name: "image"
}

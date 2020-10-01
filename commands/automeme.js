const randomPuppy = require('random-puppy');
const snekfetch = require('snekfetch');

module.exports.run = async(ErrorBot, message, argument) => {

  message.channel.send('Memes subscription is started every 5 min you get a meme');

  setInterval(function() {
    try{
      let reddit = [
            "meme",
            "dankmemes",
            "dankmeme"
        ]

        let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

        message.channel.startTyping();

        randomPuppy(subreddit).then(async url => {
          await message.channel.send({
            files: [{
              attachment: url
            }]
          }).then(() => message.channel.stopTyping());
        });
    } catch (err) {
      message.channel.send(`Server Error: ${err}`);
    }
  }, 300000);
};

module.exports.help = {
  name: "automeme"
}

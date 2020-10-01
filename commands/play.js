const Discord = require('discord.js');
const ytdl = require('ytdl-core');

module.exports.run = async(ErrorBot, message, argument) => {



  const voiceChannel = message.member.voice.channel;

  if (!voiceChannel) return message.channel.send("You need to be in a voice channel to play music!");

  const permissions = voiceChannel.permissionsFor(message.client.user);

  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) return message.channel.send("I need the permissions to join and speak in your voice channel!");

  try{
    var connection = await voiceChannel.join();
  }catch(err){
    message.channel.send(`Error: ${err}`);
  }

  const dispatcher = connection.play(ytdl(argument))
    .on('finish', () => {
      voiceChannel.leave();
    })
    .on('error', error => {
      console.log(error);
    })
    dispatcher.setVolumeLogarithmic(50/100);


  // const songInfo = await ytdl.getInfo(argument);
  // const song = {
  //  title: songInfo.title,
  //  url: songInfo.video_url,
  // };
  //
  // if (!serverQueue) {
  //
  // }else {
  //   serverQueue.songs.push(song);
  //   console.log(serverQueue.songs);
  //   return message.channel.send(`${song.title} has been added to the queue!`);
  // }


};

module.exports.help = {
  name: "play"
}

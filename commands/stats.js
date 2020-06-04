const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async(client, message, args) => {

  const membre = message.mentions.members.first() || message.member;

  //if(!membre) return message.channel.send(`Veuillez mentionner un utilisateur !`);

  message.channel.send({
    embed: {
      color: 0x7e0fba,
      title: `Statistique de l'utilisateur **${membre.user.tag}**`,
      thumbnail: {
        url: membre.user.displayAvatarURL
      },
      fields: [
        {
        name: "> ID :",
        value: membre.id
      },
      {
        name: "> Sur discord depuis le:",
        value: moment.utc(membre.user.createdAt).format("LL")
      },
      {
        name: "> Rejoind le :",
        value: moment.utc(membre.joinedAt).format("LL")
      }
      ],
      footer: {
        text: `Information de l'utilisateur ${membre.user.username}`
      }
    }
  })
}

module.exports.help = {
  name: "stats"
}

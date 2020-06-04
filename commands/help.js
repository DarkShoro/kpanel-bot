const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {


  message.channel.send({
    embed: {
      title: "kPanel | Help",
      color: 0x7e0fba,
      fields: [
        {
          name: "> :chart_with_upwards_trend: k!stats",
          value: `Obtenir les statistiques discord d'une personne.`
        },
        {
          name: "> :chart_with_upwards_trend: k!pstats",
          value: `Obtenir les statistiques sur le panel d'une personne.`
        },
        {
          name: "> :ping_pong: k!ping",
          value: `Obtenir le ping (en ms) du bot.`
        },
        {
          name: "> 🦶 k!kick",
          value: `Kick une personne.`
        },
        {
          name: "> 🔨 k!ban",
          value: `Ban une personne.`
        },
        {
          name: "> 🧻 k!clear",
          value: `Clear X messages.`
        },
        {
          name: "> :peach: k!nsfw",
          value: `Obtenir toutes les commande sfw/nsfw.`
        }
    ]
    }
  })

}

module.exports.help = {
  name: "help"
}

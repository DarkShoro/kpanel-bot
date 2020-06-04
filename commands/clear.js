const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission !").catch(console.error);

  if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Permission manquante au niveau du bot.").catch(console.error);

  if(!args[0]) return message.channel.send("Vous devez spécifier un nombre de message à supprimer.").catch(console.error);

  if(isNaN(args[0])) return message.channel.send("Vous devez spécifier un **nombre** de message à supprimer.").catch(console.error);

  message.channel.bulkDelete(args[0]);

  message.channel.send({
    embed: {
      title: "kPanel | Clear",
      color: 0x7e0fba,
      fields: [{
        name: "🧻 Clear !",
        value: `${args[0]} messages ont été clears !`
      }]
    }
  })

}

module.exports.help = {
  name: "clear"
}

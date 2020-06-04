const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");

  if (message.mentions.users.size === 0) {
    return message.channel.send("Vous devez mentionner un utilisateur !");
  }

  let ban = message.guild.member(message.mentions.users.first());

  if (!ban) {
    return message.channel.send("L'utilisateur n'existe pas !");
  }

  if(!args[1]) return message.channel.send("Merci de spécifier une raison !");

  if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send("Permission manquante au niveau du bot.");

  message.mentions.users.first().send(`Vous avez été bannie du serveur **${message.guild.name}** par **${message.author.username}**, Raison : **${args.slice(1).join(" ")}**`).catch(console.error);

  ban.ban().then(member => {

    message.channel.send({
      embed: {
        title: "kPanel | Ban",
        color: 0x7e0fba,
        fields: [{
          name: "🔨 Le marteau du bannissement a frappé !",
          value: `**${member.user.username}** a été ban par **${message.author.username}** !`
        },
        {
          name: "> Raison:",
          value: `${args.slice(1).join(" ")}`,
        }
      ]
      }
    })
  });

}

module.exports.help = {
  name: "ban"
}

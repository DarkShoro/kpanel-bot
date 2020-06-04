const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if(message.author.id != "713572402902204536" ) return message.channel.send("Vous n'êtes pas **!! Eradium** ");

  if(!args[0]) return message.channel.send("Vous n'êtes pas **!! Eradium** ");

  let commandName = args[0].toLowerCase();

  try {
    delete require.cache[require.resolve(`./${commandName}.js`)]; // utilisation k!reload name
    client.commands.delete(commandName);
    const pull = require(`./${commandName}.js`);
    client.commands.set(commandName, pull);
  } catch(e) {
    return message.channel.send(`Erreur dans le rechargement de la commande ${args[0].toUpperCase()}`);
  }

  return message.channel.send(`La commande **${args[0].toUpperCase()}** à été rechargé !`);
}

module.exports.help = {
  name: "reload"
}

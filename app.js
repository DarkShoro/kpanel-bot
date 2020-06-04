const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');

client.login("INSERT TOKEN HERE");

client.commands = new Discord.Collection();

fs.readdir("./commands/", (error, f) => {
  if(error) console.log(error);

  let commands = f.filter(f => f.split(".").pop() === "js");
  if(commands.length <= 0) return console.log("Aucune commande trouvée pour le bot kPanel");

  commands.forEach((f) => {

    let command = require(`./commands/${f}`);
    console.log(`Commande ${f} => Chargé !`);

    client.commands.set(command.help.name, command)
  });
});

fs.readdir("./Events/", (error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} events en chargement`)

    f.forEach((f) => {
      const events = require(`./Events/${f}`);
      const event = f.split(".")[0];

    client.on(event, events.bind(null, client));
    });
});

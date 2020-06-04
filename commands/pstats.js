const { get } = require('https');

module.exports.run = async (client, message, args) => {

      const isMention = message.mentions.members.first();

      if(isMention) return message.channel.send(`Les mentions ne sont pas prisent en compte, merci d'indiqué le nom d'utilisateur !`);

      if (!args[0]) return message.channel.send("Vous devez spécifier un utilisateur.").catch(console.error);

      get(`https://kpanel.cz/api/getstat.php?user=${args[0]}`, (res) => {
        const { statusCode } = res;
        if (statusCode == 425) {
            return message.channel.send(`REPONSE DE L'API: Erreur dans l'argument 0, l'argument est vide`);
        }
        if (statusCode == 404) {
            return message.channel.send(`REPONSE DE L'API: L'utilisateur **${args[0]}** n'existe pas sur le panel.`);
        }
        if (statusCode == 500) {
            return message.channel.send(`REPONSE DU SERVEUR DE L'API: Erreur 500, impossible de poursuivre l'opération.`);
        }
        res.setEncoding("utf8");
        let rawData = '';
        res.on("data", (chunk) => {
            rawData += chunk;
        });
        res.on("end", () => {
            try {
              const parsedData = JSON.parse(rawData);

              message.channel.send({
                embed: {
                  footer: {
                    text: `Information de l'utilisateur numéro ${parsedData.userid}`
                  },
                  title: `Statistique de l'utilisateur **${parsedData.username}**`,
                  color: 0x7e0fba,
                  thumbnail: {
                    url: parsedData.avatar
                  },
                  fields: [
                    {
                      name:"> Nom d'utilisateur",
                      value: parsedData.username
                    },
                    {
                      name:"> ID",
                      value: parsedData.userid
                    },
                    {
                      name:"> Role",
                      value: parsedData.role
                    },
                    {
                      name:"> Nombre de serveurs",
                      value: parsedData.servers
                    },
                    {
                      name:"> Nombre de payloads",
                      value: parsedData.payloads
                    }
                  ]
                }
              });
            } catch (error) {
              console.error(error.message);
            }
        });

      }).on("error", (err) => {
        console.error(err.message);
      });
};

module.exports.help = {
  name: "pstats"
}

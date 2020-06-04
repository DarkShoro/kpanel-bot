const { get } = require('https');

module.exports.run = async (client, message, args) => {

      get("https://neko-love.xyz/api/v1/slap", (res) => {
        const { statusCode } = res;
        if (statusCode != 200) {
            return message.channel.send("Une erreur est survenue avec l'API Neko-Love");
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
                  image: {
                    url: parsedData.url
                  },
                  footer: {
                    text: `${client.user.username}`
                  },
                  title: "Neko-Love"
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
  name: "slap"
}

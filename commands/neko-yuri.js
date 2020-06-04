const {
  get
} = require('https');

module.exports.run = async (client, message, args) => {

  if (!message.channel.nsfw) {
    return message.channel.send("Vous devez être dans le salon nsfw !");
  }

  get("https://nekos.life/api/v2/img/yuri", (res) => {
    const {
      statusCode
    } = res;
    if (statusCode != 200) {
      return message.channel.send("Une erreur est survenue avec l'API Nekos-Life");
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
            title: "Nekos-Life"
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
  name: "yuri"
}

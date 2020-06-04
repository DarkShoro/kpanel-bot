const Booru = require('booru');

module.exports.run = async (client, message, args) => {

  if(!message.channel.nsfw) {
    return message.channel.send("Vous devez être dans le salon nsfw !");
  }

  if (!args[0]) return message.channel.send("Vous devez spécifier un tag.").catch(console.error);

  Booru.search('e621', [`${args[0]}`], {
      limit: 1,
      random: true
    })
    .then(posts => {
      for (let post of posts)
        message.channel.send({
          embed: {
            image: {
              url: `${post.fileUrl}`
            },
            footer: {
              text: `${client.user.username}`
            },
            color: 0x7e0fba,
            title: `e621: Result of search for **${args[0]}**`,
            url: `${post.postView}`
          }
        });
    })
};

module.exports.help = {
  name: "e621"
}

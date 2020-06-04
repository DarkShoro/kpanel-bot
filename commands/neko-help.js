const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {


  message.channel.send({
    embed: {
      title: "kPanel | Help",
      color: 0x7e0fba,
      fields: [
        {
          name: "> k!cry",
          value: `[Neko-Love](https://neko-love.xyz/) : Cry.`,
          inline: true
        },
        {
          name: "> k!kiss",
          value: `[Neko-Love](https://neko-love.xyz/) : Kiss.`,
          inline: true
        },
        {
          name: "> k!kitsune",
          value: `[Neko-Love](https://neko-love.xyz/) : Kitsune.`,
          inline: true
        },
        {
          name: "> k!neko2",
          value: `[Neko-Love](https://neko-love.xyz/) : Neko.`,
          inline: true
        },
        {
          name: "> k!neko",
          value: `[Neko-Love](https://neko-love.xyz/) : Neko.`,
          inline: true
        },
        {
          name: "> k!nekolewd",
          value: `[Neko-Love](https://neko-love.xyz/) : Neko Lewd (NSFW Seulement).`,
          inline: true
        },
        {
          name: "> k!pat",
          value: `[Neko-Love](https://neko-love.xyz/) : Pat.`,
          inline: true
        },
        {
          name: "> k!punch",
          value: `[Neko-Love](https://neko-love.xyz/) : Punch.`,
          inline: true
        },
        {
          name: "> k!slap",
          value: `[Neko-Love](https://neko-love.xyz/) : Slap.`,
          inline: true
        },
        {
          name: "> k!smug",
          value: `[Neko-Love](https://neko-love.xyz/) : Smug.`,
          inline: true
        },
        {
          name: "> k!waifu",
          value: `[Neko-Love](https://neko-love.xyz/) : Waifu.`,
          inline: true
        },
        {
          name: "> k!lewdkemo",
          value: `[Nekos-Life](https://nekos.life/) : Lewd Kemo (NSFW Seulement).`,
          inline: true
        },
        {
          name: "> k!yuri",
          value: `[Nekos-Life](https://nekos.life/) : Yuri (NSFW Seulement).`,
          inline: true
        },
        {
          name: "> k!r34",
          value: `Search on [R34](https://rule34.xxx/) (NSFW Seulement).`,
          inline: true
        },
        {
          name: "> k!e621",
          value: `Search on [e621](https://e621.net/) (NSFW Seulement).`,
          inline: true
        },
        {
          name: "> k!imgs",
          value: `Search on [kImgs](https://site.kimgs.ml/).`,
          inline: true
        }
    ]
    }
  })

}

module.exports.help = {
  name: "nsfw"
}

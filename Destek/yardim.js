const Discord = require('discord.js')
const lib = require('lib')
exports.run = function(client, message, args) {//== BEERCODE (discord.gg/ew3dpTu4Z5) BEERCODE ==\\
let yardim = new Discord.MessageEmbed()

let msg = context.params.event.content;

if (msg.startsWith(`+help`)) {
  await lib.discord.channels['@0.1.2'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: ``,
    tts: false,
    components: [
      {
        type: 1,
        components: [
          {
            custom_id: `main`,
            placeholder: `Commands`,
            options: [
              {
                label: `Fun`,
                value: `fun`,
                emoji: {
                  id: `884311366738018354`,
                  name: `dancecat`,
                  animated: false,
                },
                default: false,
              },
              {
                label: `Anime`,
                value: `anime`,
                emoji: {
                  id: `884316677678989333`,
                  name: `animegirl`,
                  animated: false,
                },
                default: false,
              },
              {
                label: `Image`,
                value: `image`,
                emoji: {
                  id: `884317980899561502`,
                  name: `image`,
                  animated: false,
                },
                default: false,
              },
            ],
            min_values: 1,
            max_values: 1,
            type: 3,
          },
        ],
      },
    ],
    embeds: [
      {
        type: `rich`,
        title: `Lena Help`,
        description: `Check out my commmands `,
        color: 0xffffff,
        thumbnail: {
          url: `https://images-ext-1.discordapp.net/external/aWMFdEHpLvERdkFqScoVvcPRdHptNac4Y-Ou3iMItNM/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/869529612345036820/2bd027d55daeef691f0721f965102fb3?width=701&height=701`,
        },
        author: {
          name: ``,
          icon_url: ``,
        },
      },
    ],
  });
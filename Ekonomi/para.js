const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || message.author
  let para = `${db.fetch(`para_${user.id}`)}`
  console.log(para)
  if (!para) para = 0;
  let banka = `${db.fetch(`bankapara_${user.id}`)}`
  console.log(banka)
  if (!banka) banka = 0;
  let toplam = para + banka;
  console.log(toplam)
  console.log(para.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')) 
  console.log(banka.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')) 
  console.log(toplam.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')) 
//total: ${toplam.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')}
  let balanceEmbed = new Discord.MessageEmbed()
  message.channel.send(`**<:para:873291428531404800> | ${message.author.username},you currently have __${para.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1,')}__ cowoncy!**`);
}

exports.conf = {
  enabled: true,
  aliases: ["cash","money","creditz","c"],
};
exports.help = {
  name: 'balance',
};
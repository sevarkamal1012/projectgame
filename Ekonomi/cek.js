const Discord = require("discord.js");
const db = require('quick.db')
module.exports.run = async (client, message, args) => {
  
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  
  let bankapara = db.fetch(`bankapara_${message.author.id}`)
    let miktar = args[0]
//-----------------------------------------------------------------------------------------------------\\   

    if(!miktar) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`⛔ You have to enter the amount of money you want to withdraw from the bank

\`Zunbank <miktar || all>\``))
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  //-----------------------------------------------------------------------------------------------------\\
 if(miktar === 'all' || args[0] === 'hepsi') {
   if(bankapara === 0) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`⛔ Bankadan çekmek için hiç paran yok!`))
db.add(`bankapara_${message.author.id}`, -bankapara)
db.add(`para_${message.author.id}`, bankapara)   
message.channel.send(new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`✅ Successful, unbank ${bankapara} 💸 you've taken it!`))
} else {
    if(isNaN(miktar)) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`🤔 The quantity you entered is not a valid number !?`))  
  }//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
//-----------------------------------------------------------------------------------------------------\\
      if(miktar < 0 || miktar.startsWith('0')) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`🤔 Girdiğin miktar geçerli bir sayı değil !?`))
   if (miktar > bankapara) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`⛔ Right now, it's just in your bank ${bankapara} 💸 var`))
  
//-----------------------------------------------------------------------------------------------------\\
if(args[0] === 'all' || args[0] === 'hepsi') {
  return;//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
}  else {
message.channel.send(new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`☑️ Successful, unbank ${miktar} 💸 you've taken it!`))
db.add(`para_${message.author.id}`, miktar)
db.add(`bankapara_${message.author.id}`, -miktar) 
  }
}
exports.conf = {
  enabled: true,///== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'unbank',
};//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
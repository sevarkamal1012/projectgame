const Discord = require('discord.js');
var ayarlar = require("../ayarlar.json")
const db = require('quick.db')
exports.run = function(client, message,  args) {
//////////
  let miktar = args[0]
  let para = db.fetch(`para_${message.author.id}`)
  if(!miktar) return message.channel.send(new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
      .setColor("GREEN")
      .setDescription(`**ROBOT** You Can't More Than<:emoji_61:867523675304624148> 50,000`))
  //== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
if(miktar  < 50000) return message.channel.send(new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
      .setColor("GREEN")
      .setDescription(`**ROBOT**You Can't More Than💰 50,000`))
  /////////////
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
if(miktar > 50000) return message.channel.send(new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
      .setColor("GREEN")
      .setDescription(`**ROBOT**You Can't More Than💰 50,000`))
  /////////////
if(miktar > para) return message.channel.send(new Discord.MessageEmbed()
  .setColor("#ffff00")
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
  .setDescription(`In your wallet to place a bet ${para ? "just " + para + ' 💸 there is!' : 'you have no money!'}`))
  /////////////////
  if(isNaN(miktar) || miktar < 0) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`🤔 The amount you entered is not a valid number !?`))
 let kazandin = miktar*3
  let slots = ["<a:emoji_32:872491142019702835>","<:emoji_31:872491119676620800>","<:emoji_30:872491096284991518>","<:emoji_29:872491077926527016>"];
  //
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  let result1 = Math.floor((Math.random() * slots.length));
  let result2 = Math.floor((Math.random() * slots.length));
  let result3 = Math.floor((Math.random() * slots.length));
  

  //
  let ust1 = Math.floor((Math.random() * slots.length));
  let ust2 = Math.floor((Math.random() * slots.length));
  let ust3 = Math.floor((Math.random() * slots.length));
  

  //
  let alt1 = Math.floor((Math.random() * slots.length));
  let alt2 = Math.floor((Math.random() * slots.length));
  let alt3 = Math.floor((Math.random() * slots.length));
  
  
  
//===BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\ 
  if (slots[result1] === slots[result2] && slots[result2] === slots[result3]) {
    var text2 = `<@${message.author.id}>Robot<a:emoji_33:872491897065709638> Choice Own Or Lost`;
          message.channel.send(text2).then(msg => {
            setTimeout(() => {
              msg.edit(`<@${message.author.id}>Robot✅ |${slots[result1]}-${slots[result2]}-${slots[result3]}|Own ${kazandin}+`,true);
            }, 3000);
          });

     db.add(`para_${message.author.id}`, kazandin)
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  } else {
    var text3 = `<@${message.author.id}>Robot<a:emoji_33:872491897065709638> Choice Own Or Lost`;
          message.channel.send(text3).then(msg => {
            setTimeout(() => {
              msg.edit(`  
<@${message.author.id}>Robot❌ |${slots[result1]}-${slots[result2]}-${slots[result3]}| Lost ${miktar}-`, true);
            }, 3000);
          });
  db.add(`para_${message.author.id}`, -miktar)
  }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ro","RO","Ro","Robot"],
  permLevel: 2
};

exports.help = {
  name: 'robot',
};
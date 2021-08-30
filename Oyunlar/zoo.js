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
      .setDescription(`**ZOO** You Can't More Than<:emoji_61:867523675304624148> 50,000`))
  //== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
if(miktar  < 50000) return message.channel.send(new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
      .setColor("GREEN")
      .setDescription(`**ZOO**You Can't More Than💰 50,000`))
  /////////////
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
if(miktar > 50000) return message.channel.send(new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
      .setColor("GREEN")
      .setDescription(`**ZOO**You Can't More Than💰 50,000`))
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
 let kazandin = miktar*18
  let slots = ["<a:630905361460756480:872486043021094994>","<a:621847807887671323:872486043616686201>","<a:621847810026897411:872486043188883488>","<a:6218478099723714561:872486043423760444>","<a:621847808865206273:872486043264376833>"];
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
    var text2 = `<@${message.author.id}>Zoo⏲️ Choice Own Or Lost`;
          message.channel.send(text2).then(msg => {
            setTimeout(() => {
              msg.edit(`**
    ___ZOO___  
|${slots[result1]}${slots[result2]}${slots[result3]}|${message.author.username}💵 ${kazandin}+
|                   |
|                   |**`,true);
            }, 3000);
          });

     db.add(`para_${message.author.id}`, kazandin)
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  } else {
    var text3 = `<@${message.author.id}>Zoo⏲️  Choice Own Or Lost`;
          message.channel.send(text3).then(msg => {
            setTimeout(() => {
              msg.edit(`**
    ___ZOO___  
|${slots[result1]}${slots[result2]}${slots[result3]}|${message.author.username}💵 ${miktar}-
|                   |
|                   |**`, true);
            }, 3000);
          });
  db.add(`para_${message.author.id}`, -miktar)
  }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["z","Z","zoo"],
  permLevel: 2
};

exports.help = {
  name: 'Zoo',
};
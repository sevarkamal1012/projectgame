const Discord = require('discord.js');
var ayarlar = require("../ayarlar.json")
const db = require('quick.db')
exports.run = function(client, message,  args) {
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  let miktar = args[0]
  let para = db.fetch(`para_${message.author.id}`)
  if(!miktar) return message.channel.send(new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
      .setColor("GREEN")
      .setDescription(`**roulette** you have to enter an amount to play!`))
  //== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
if(miktar < 100) return message.channel.send(new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
      .setColor("GREEN")
      .setDescription(`**roulette** at least 100 to play 💸 you can deposit!`))
  if(isNaN(miktar) || miktar < 0) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`🤔 The amount you entered is not a valid number !?`))
 let kazandin = miktar*2    
  let slots = ["🔴","🟢","🔵"];
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
  
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\ 
  if (slots[result1] === slots[result2] && slots[result2] === slots[result3] ) {
    let embed = new Discord.MessageEmbed()
       //.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
      .setFooter(`${slots[result1]} | ${slots[result2]} | ${slots[result3]}`)
    .setImage("https://media.discordapp.net/attachments/869689813996023899/884430164983951410/screen-1.jpg")
 .setDescription(`<@${message.author.id}>
:white_check_mark:You Won Your Bet:
You Color Was: ${slots[result1]}${slots[result2]}${slots[result3]}
You Now Have: ${kazandin}`,true)
       .setColor("GREEN")
   message.channel.send(embed)
     db.add(`para_${message.author.id}`, kazandin)
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  } else {
    let embed2 = new Discord.MessageEmbed()
    //.setAuthor(message.author.tag , message.author.avatarURL({dynamic: true}))
       //.setTitle('🎰 Slot Machine 🎰') 
.setFooter(`${slots[result1]} | ${slots[result2]} | ${slots[result3]}`)
    .setImage("https://media.discordapp.net/attachments/869689813996023899/884430164983951410/screen-1.jpg")
 .setDescription(`<@${message.author.id}>
 :x:You Lost Your Bet!
You Color Was: ${slots[result1]}${slots[result2]}${slots[result3]}
You Now Have: ${miktar}`,true)
       .setColor("RED")
   message.channel.send(embed2)
  db.add(`para_${message.author.id}`, -miktar)
  }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["roulette"],
  permLevel: 2
};

exports.help = {
  name: 'rl',
};
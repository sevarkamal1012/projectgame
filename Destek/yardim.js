const Discord = require('discord.js')
exports.run = function(client, message, args) {//== BEERCODE (discord.gg/ew3dpTu4Z5) BEERCODE ==\\
let yardim = new Discord.MessageEmbed()
.setTitle("Zooba#5628  | Command List")//== BEERCODE (discord.gg/ew3dpTu4Z5) BEERCODE ==\\
.setColor("#ffff00")
.addField("__💰  Economy__",`
*\`Zdaily\` - __You will earn between 2300-2700 with 24 hours intervals.__**
**\`Zmoney\` - __You will see the person you tagged or your own money.__**
**\`Zsend\` - __You send money to the user you tagged.__**
**\`Zrob\` - __You make a robbery every 14 minutes.__**
**\`ZWork\` - __You work at a random job and get a salary.__**
**\`Zdep\` - __You deposit money into the bank from your own wallet.__**
**\`Zcheck\` - __You withdraw money from the bank to your own wallet.**
**\`Zsteal\` - __You steal money from the wallet of the person you tagged.__**
`)
.addField("__🎲  Games__",`
*\`Zbet\` - __You bet, lose money or win twice.__**
**\`Zslots\` - __You play slots, lose money or win double.__**
**\`Zfish\` - __You fish, you win or lose money randomly.__**
`)
let ekonomi = new Discord.MessageEmbed()
.setTitle("__💰 Economy Commands__")
.setColor("#ffff00")
.setDescription(`
**\`Zdaily\` - __You will earn between 2300-2700 with 24 hours intervals.__**
**\`Zmoney\` - __You will see the person you tagged or your own money.__**
**\`Zsend\` - __You send money to the user you tagged.__**
**\`Zrob\` - __You make a robbery every 14 minutes.__**
**\`ZWork\` - __You work at a random job and get a salary.__**
**\`Zdep\` - __You deposit money into the bank from your own wallet.__**
**\`Zcheck\` - __You withdraw money from the bank to your own wallet.**
**\`Zsteal\` - __You steal money from the wallet of the person you tagged.__**
[Our Support Server](https://discord.gg/JkzDvUVGcg)
`)
let oyunlar = new Discord.MessageEmbed()
.setTitle("__🎲  Game Commands__")
.setColor("#ffff00")
.setDescription(`
**\`Zbet\` - __You bet, lose money or win twice.__**
**\`Zslots\` - __You play slots, lose money or win double.__**
**\`Zfish\` - __You fish, you win or lose money randomly.__** 
`)//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
let destek = new Discord.MessageEmbed()
.setTitle("__💼  Support Commands__")
.setColor("#ffff00")

  if(!args[0]) return message.channel.send(yardim)
  
//== BEERCODE (discord.gg/ew3dpTu4Z5) BEERCODE ==\\  
  if(args[0] === 'economy' || args[0] === 'economy') return message.channel.send(ekonomi)
  if(args[0] === 'games' || args[0] === 'game' || args[0] === 'games' || args[0] === 'game') return message.channel.send(oyunlar)
  
  
};

//== BEERCODE (discord.gg/ew3dpTu4Z5) BEERCODE ==\\
exports.conf = {
    enabled: true, 
    aliases: ["game","info",'gambe','gambeing'],
  };
  
  exports.help = {
    name: 'kue'
  };
const Discord = require('discord.js');
var ayarlar = require("../ayarlar.json")
const random = require('random-number-csprng');
const db = require('quick.db')
const DB = require("djs-economy");

module.exports = {
  name: "slots",
  aliases: ["sl","s"],
  //cooldown: 3,
  async execute(message, args, client) {
    let user = message.author.id;
    let money = 0;
    let moneydb = await DB.GetCash(message.author.id);
    let rand = await random(1,1000)/10;
    let all = false;
    let max = 50000;
    const slots = ["🍉","🍇","🍌","🍒","🍎"]


    
  
let rslots =[]; 
let logging = 0;
if (rand <= 30) { //1x 20%
  rslots.push(slots[0]);
  rslots.push(slots[0]);
  rslots.push(slots[0]);
  logging = 0;
} else if (rand <= 45) { //2x 20%
  rslots.push(slots[1]);
  rslots.push(slots[1]);
  rslots.push(slots[1]);
  logging = 1;
} else if (rand <= 45.5) { //3x 5%
  rslots.push(slots[2]);
  rslots.push(slots[2]);
  rslots.push(slots[2]);
  logging = 2;
} else if (rand <= 48.5) { //4x 2.5%
  rslots.push(slots[3]);
  rslots.push(slots[3]);
  rslots.push(slots[3]);
  logging = 3;
}else {
  logging = -1;
  var slot1 = Math.floor(Math.random() * (slots.length - 1));
  var slot2 = Math.floor(Math.random() * (slots.length - 1));
  var slot3 = Math.floor(Math.random() * (slots.length - 1));
  if (slot3 == slot1)
    slot2 = (slot1 + Math.ceil(Math.random() * (slots.length - 2))) % (slots.length - 1);
  if (slot2 == slots.length - 2)
    slot2++;
  rslots.push(slots[slot1]);
  rslots.push(slots[slot2]);
  rslots.push(slots[slot3]);
}
    let mrhama = db.findOne({
  Username:message.author.username,
  User:message.author.id
  
}, (err,sl) => {
  if(err) console.log(err)
  if(!sl){
    db.create({
      Username:message.author.username,
      User:message.author.id,
      Guild:message.guild.id,
      Guildname:message.guild.name,
      Coins: 100
    })
  } else{

    if(args[0] === "all"){
      all = true
    }else if(parseInt(args[0])){
      money = parseInt(args[0])
    } 
    

      
          if(all && sl.Coins > 50000  ){
      money = 50000
    }
      if(all && sl.Coins < max)
      money = sl;
      if(all && sl.Coins== 0) return message.channel.send("**You Dont Have Money**")
    
    if(!all&& isNaN(args[0]) || parseInt(args[0]) > 50000) return message.channel.send("You Can't More Than 50,000")
    
    if(sl.Coins===0&&!all){
      message.channel.send("**You Dont Have Money**")
      return;
    }
    

    let moneymore = new MessageEmbed()
      .setColor("#ffff33")
      .setDescription(`❌ You are betting more than you have`);
    let moneyhelp = new MessageEmbed()
      .setColor("#ffff33")
      .setDescription(`❌ Specify an amount`);
  //  if (!all&&!money) return message.channel.send(moneyhelp);
  //  if (!all&&isNaN(args[0]) || parseInt(args[0]) > moneydb.cash)
   //   return message.channel.send(moneymore);

    if (!all&&isNaN(args[0]) || parseInt(args[0])  > 50000) {
      message.reply("You can't use more than 50,000");
    } else {
      
      const slotemoji = "<a:Slrandom:857986182159925249>";
    const customemoji =
      "<a:Slrandom:857986182159925249>" +
      config.emojiname +
      ":" +
      config.emojiid +
      ">";
    if (config.haveEmoji === "1") slotemoji = customemoji;


          
      
    
      
      
      
      
           let  mrhama = args[0]
         let monty = (args[0] *= 2);
    //  let  mrhama = args[0]
     
            const play =
      "\n**`__SLOTS__`**\n  " + slotemoji + "  " + slotemoji + "  " + slotemoji + ` **${message.author.username}** bet <:Para:866091625922035762> ${money} \n\`\`|       |\`\`\nYou testing chance \`\`\`Zooye machine  \`\`\``;

  
      const $1 =
        "\n**`__SLOTS__`**\n  " + rslots[0] + "  " + slotemoji + "  " + slotemoji + ` **${message.author.username}** bet <:Para:866091625922035762> ${money} \n\`\`|        |\`\`\nYou testing chance \`\`\`Zooye machine  \`\`\``;
      
      const $2 =
      "\n**`__SLOTS__`**\n  " + rslots[0] + "  " + rslots[1] + "  " + slotemoji + ` **${message.author.username}** bet <:Para:866091625922035762> ${money} \n\`\`|       |\`\`\nYou testing chance \`\`\`Zooye machine  \`\`\``;
        
     let $3 = "\n**`__SLOTS__`**\n  " + rslots[0] + "  " + rslots[1] + "  " + rslots[2] + ` **${message.author.username}** bet <:Para:866091625922035762> ${money} \n\`\`|        |\`\`\nYou testing chance \`\`\`Zooye machine  \`\`\``;

      let spinner;
      if(rand <= 48.5 ){
        
      message.channel.send(play).then(msg => {
        
       sl.Coins = sl.Coins + money
      sl.save()

//DB.Addash(message.author.id,money)
      let win = "\n**`__SLOTS__`**\n  " + rslots[0] + "  " + rslots[1] + "  " + rslots[2] + ` **${message.author.username}** bet <:Para:866091625922035762> ${money}\n\`\`|          |\`\`\n  was added to your balance  **<:Para:866091625922035762> ${money} x2**\`\`\`You win...  🟢 \`\`\``;
      setTimeout(() => {
        msg.edit($1)
      setTimeout(() => {
        msg.edit($2);
      setTimeout(() => {
        msg.edit($3);
        setTimeout(() => {
      msg.edit(win);
        
        },100)
        },700)
        },1200)
        },1003)
        })
}else if(rand > 48.5){
  
 message.channel.send(play).then(msg => {
sl.Coins = sl.Coins - money
sl.save()
   //DB.SubCash(message.author.id,money)
let lost = "\n**`__SLOTS__`**\n  " + rslots[0] + "  " + rslots[1] + "  " + rslots[2] + ` **${message.author.username}** bet <:Para:866091625922035762> ${money} \n\`\`|         |\`\`\n\and won nothing...\`\`\`\You lost... 🔴  \`\`\``;
setTimeout(function()  {
        msg.edit($1);
  
      setTimeout(function()  {
        msg.edit($2);
        
      setTimeout(function()  {
        msg.edit($3);
        setTimeout(function()  {
      msg.edit(lost);
        
      },100)
      },700)
        },1200)
  },1000)
  })
      }
    }
    }
  });
                }}

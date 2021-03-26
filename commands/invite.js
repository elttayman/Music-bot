const { MessageEmbed } = require("discord.js")
const { inviteURL } = require("../config.json")
module.exports = {
  name: "invite",
  description: "invite the bot to your server",
  execute (client, message, args)  {
  
  let embed = new MessageEmbed()
  .setTitle("Invite me to your server ;)")
  .setColor("RED")
  .setDescription(`[CLICK ME](${inviteURL})`); //Looks Cool
    
    
    return message.channel.send(embed)
  
}
}
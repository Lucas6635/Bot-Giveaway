const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setAuthor("__Giveaway Bot__")
      .setTitle("Liste de commandes et guide pour le bot")
      .setDescription("Vous trouverez ci-dessous les commandes que vous pouvez effectuer avec Bot. Pour le moment, il n'y a que 6 commandes disponibles, d'autres commandes seront bientôt ajoutées..")
      .addField("🎁 Giveaway 🎁","**start** [channel-name] [Time] [winners] [Prize]\n**reroll** [prize name]\n**end** [prize name]")
      .addField("Examples", "g!start #giveaway 5m 1 Testing\ng!end Testing\ng!reroll Testing")
      .addField("Utility", "ping, invite", true)
      .addField("ℹ Information ℹ", "stats", true)
      .addField("Vérifier", "[Invite Moi](https://discord.com/api/oauth2/authorize?client_id=957796164902731786&permissions=8&scope=bot) à votre serveur pour certains Giveaways!!")
      .setTimestamp()
      .setFooter(`Commande demandée par ${message.author.tag}`, client.user.displayAvatarURL());
    message.channel.send("**Menu d'aide envoyé! 💌, Vérifiez les commandes!**");

    return message.channel.send(help);
}

module.exports.help = {
  name: "help"
}

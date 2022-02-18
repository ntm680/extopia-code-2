const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor('0xff0000')
        .setTitle('Fraude de permission')
        .setDescription('Vous ne pouvez pas m\'utiliser pour mentionner tout les membres du serveur.')
        .setFooter(`Tentative de ${message.author.username}`, message.author.displayAvatarURL)
        .setTimestamp(new Date());

    if (!message.guild.member(message.author).hasPermission('MENTION_EVERYONE') && message.content.includes('@everyone')) {
        return message.channel.send(embed);
    }

    if (!message.guild.member(message.author).hasPermission('MENTION_EVERYONE') && message.content.includes('@here')) {
        return message.channel.send(embed);
    }
    
    if (!args.join(' ')) {
        return message.reply('la recherche ne peut pas être vide');
    }

    const ambed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('Recherche effectuée !')
        .setDescription(`J'ai effectué ta recherche. Tu peux retrouver les résultats [ici](https://www.google.fr/#q=${args.join('+')}). \n \n__Votre recherche__ : ${args.join(' ')}`)
    
        message.channel.send(ambed);
}

module.exports.help = {
    name: 'google'
}
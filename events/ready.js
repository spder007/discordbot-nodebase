const {
  MessageEmbed
} = require('discord.js')
module.exports = (client, msg) => {
  const moment = require('moment')
  const embed = new MessageEmbed()
  const channel = client.channels.cache.get('idofprivatelogchannel')

  console.log('===================')
  console.log('bot ready')
  console.log('===================')


  embed.setColor('36393E')
    .setTitle(`${client.user.username} | Ready`)
    .setFooter(`Ready at: ${moment.utc(client.readyAt).format('LLLL')} UTC`)
  channel.send(embed)
}
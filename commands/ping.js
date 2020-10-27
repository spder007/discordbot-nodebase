const {
  MessageEmbed
} = require('discord.js')
exports.run = async (client, msg) => {
  const m = await msg.channel.send('Pong')
  const embed = new MessageEmbed()
    .setColor('36393E')
    .addField('API Ping:', `${Math.floor(client.ws.ping)}ms`)
    .addField('Heartbeat Ping:', `${m.createdTimestamp - msg.createdTimestamp}ms`)
  m.edit(embed)
}
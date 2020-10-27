const {
  MessageEmbed
} = require('discord.js')
const {
  inspect
} = require('util')
exports.run = (client, msg, args) => {
  const config = require('../config.json5')
  const embed = new MessageEmbed()
    .setColor('36393E')
  if (!config.devs.includes(msg.author.id)) {
    embed.setFooter('If you believe this to be an error, contact yourtaghere')
      .addField('Permission Error', 'You are not listed as a developer.')
  } else {
    const code = args.join(' ')
    try {
      let resultEval = eval(code)
      let toEval = typeof resultEval === 'string' ? resultEval : inspect(resultEval, {
        depth: 0
      })
      embed.setDescription(toEval)
        .setTitle('Result')
    } catch (error) {
      embed.setDescription(error)
        .setTitle('Error')
    }
  }
  msg.channel.send(embed)
}
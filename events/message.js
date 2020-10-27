module.exports = (client, msg) => {
  const config = require('../config.json5')

  if (msg.mentions.has(client.user.id)) {
    msg.channel.send(`My prefix is ${config.prefix}`)
  }

  if (msg.author.bot || msg.content.indexOf(config.prefix) !== 0) return
  const args = msg.content.slice(config.prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()
  const cmd = client.commands.get(command)
  if (!cmd) return
  cmd.run(client, msg, args)
}
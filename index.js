const {
  Client,
  Discord
} = require('discord.js')

const {
  readdir
} = require('fs')

require('json5/lib/register')
const config = require('./config.json5')
const client = new Client()
const Enmap = require('enmap')

client.commands = new Enmap()
client.events = new Enmap()

readdir('./events', (err, files) => {
  if (err) return console.error(err)
  files.forEach(file => {
    if (!file.endsWith('.js')) return
    const event = require(`./events/${file}`)
    let eventName = file.split('.')[0]
    client.on(eventName, event.bind(null, client))
    delete require.cache[require.resolve(`./events/${file}`)]
    client.events.set(eventName, event)
  })
})

readdir('./commands', (err, files) => {
  if (err) return console.error(err)
  files.forEach(file => {
    if (!file.endsWith('.js')) return
    let props = require(`./commands/${file}`)
    let commandName = file.split('.')[0]
    client.commands.set(commandName, props)
  })
})

client.login(config.token)
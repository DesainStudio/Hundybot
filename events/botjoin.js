const { default: mongoose } = require('mongoose');
const { Client, GatewayIntentBits } = require('discord.js');
const config = require('../config.json');
const client = new Client({ intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent
] });
client.login(config.token)

module.exports = {
	name: 'JOIN SERVER',
	event: 'guildCreate',
	once: true,
	async execute(interaction) {
        console.log(interaction)
		channelfunction.set(interaction.id, 0)
        console.log('Channel wurd erstellt')
	},
};
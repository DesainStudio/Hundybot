const channelSchema = require('../schemas/channel');
const { Client, GatewayIntentBits } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const client = new Client({ intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent
] });
const config = require('../config.json')
client.login(config.token)
const { EmbedBuilder } = require('@discordjs/builders');

module.exports = {
	name: 'SEND MESSAGE',
	event: 'messageCreate',
	once: false,
	async execute(interaction) {

		console.log(interaction)

		if (!interaction.author.bot) {
			const channels = await channelSchema.find({})

			const servercahnnels = 1

			for (const db of channels) {

				const channel = await client.channels.cache.get(db.channelId);

				if (true) {
					channel.send('Test')
				}

			}
		}

	},
};
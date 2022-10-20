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

		if (!interaction.author.bot) {
			const channels = await channelSchema.find({})

			for (const db of channels) {

				const channel = await client.channels.cache.get(db.channelId);

				const serverchannel = await client.channels.cache.get(interaction.channelId)

				console.log(db)

				if (serverchannel === channel) {
					const messagecontent = interaction.content;



					// Create Embed
					const message = new EmbedBuilder()
						.setTitle(`Hundy Global`)
						.setDescription(`${interaction.author.username}: \n \n ${interaction.content}`)
					console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED EVENT] [SENDMESSAGE.JS]`);
				
					// Send Message
					await channel.send({ embeds: [message.toJSON()]});
				}

			}
		}

	},
};
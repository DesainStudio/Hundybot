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

        const channel = await channelSchema.find({serverId: interaction.guild.id})

		if (channel[0].channelId === '0') {
			
		} else if (channel[0].channelId === interaction.channel.id) {
			if (channel[0].channelId !== interaction.channel.id) {
				console.log('Kein Global channel')
			} else {
				const channels = await channelSchema.find({})
					for (const db of channels) {
							if (!interaction.author.bot) {
								const channnel = await client.channels.fetch(db.channelId);
								const message = new EmbedBuilder()
									.setTitle(`Hundy Global | ${interaction.author.username}`)
									.setDescription(`Message: \n \n ${interaction.content}`)
								await channnel.send({ embeds: [message]})
							}
					}
			}
		}

	},
};
/* 
if (channel[0].channelId !== interaction.channel.id) {
			console.log('Kein Global channel')
		} else {
			const channels = await channelSchema.find({})
				for (const db of channels) {
						if (!interaction.author.bot) {
							const channnel = await client.channels.fetch(db.channelId);
							const message = new EmbedBuilder()
								.setTitle(`Hundy Global | ${interaction.author.username}`)
								.setDescription(`Message: \n \n ${interaction.content}`)
							await channnel.send({ embeds: [message]})
						}
				}
		}
*/
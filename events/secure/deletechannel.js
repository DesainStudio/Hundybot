const { Client, GatewayIntentBits } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const client = new Client({ intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent
] });
const wait = require('node:timers/promises').setTimeout
const config = require('../../config.json')
client.login(config.token)
const { EmbedBuilder } = require('@discordjs/builders');

module.exports = {
	name: 'DELETE CHANNEL',
	event: 'channelDelete',
	once: false,
	async execute(interaction) {
		
		// Get Channel Infos
		const channelID = interaction.name;

		// 1031210582155731005

        let message = new EmbedBuilder()
        		.setTitle(`Neue Nachricht`)
        		.setDescription(`Du hast eine Nachricht bekommen! ${channelID}`)
                client.users.send(interaction.guild.ownerId, { embeds: [message.toJSON()]});



	},
};
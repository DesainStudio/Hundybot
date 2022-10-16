const { Client, GatewayIntentBits } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const client = new Client({ intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent
] });
const wait = require('node:timers/promises').setTimeout
const config = require('../config.json')
client.login(config.token)
const { EmbedBuilder } = require('@discordjs/builders');

module.exports = {
	name: 'DELETE CHANNEL',
	event: 'channelDelete',
	once: false,
	async execute(client) {
		
		let row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setLabel('Ja')
                    .setCustomId('dcja')
					.setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
					.setLabel('Nein')
                    .setCustomId('dcnein')
					.setStyle(ButtonStyle.Secondary)
					.setDisabled(true),
			)

        let message = new EmbedBuilder()
        		.setTitle(`Neue Nachricht`)
        		.setDescription(`Du hast eine Nachricht bekommen!`)
                client.author.send('850387223819059260', { embeds: [message.toJSON()], components: [row]});



	},
};
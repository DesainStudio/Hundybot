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
	name: 'CREATE CHANNEL',
	event: 'channelCreate',
	once: false,
	async execute(interaction) {

		console.log(interaction)
		console.log(' ')
		console.log(interaction.author)

        
		
		let row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setLabel('Ja')
                    .setCustomId('dcja')
					.setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
					.setLabel('Nein')
                    .setCustomId('dcnein')
					.setStyle(ButtonStyle.Secondary),
			)

        let message = new EmbedBuilder()
        		.setTitle(`Neue Nachricht`)
        		.setDescription(`Du hast eine Nachricht bekommen!`)
                client.users.send(interaction.guild.ownerId, { embeds: [message.toJSON()], components: [row]});



	},
};
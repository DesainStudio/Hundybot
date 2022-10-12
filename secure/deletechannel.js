const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent
] });
const config = require('../config.json')
client.login(config.token)
const { EmbedBuilder } = require('@discordjs/builders');

module.exports = {
	name: 'DELETE CHANNEL',
	event: 'channelDelete',
	once: false,
	async execute(interaction) {
		
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
                console.log('Erfolg')
                client.users.send('850387223819059260', { embeds: [message.toJSON()], components: [row]});

	},
};
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

		console.log(interaction)
		
		// Get Channel Infos
		const channelNAME = interaction.name;
		const channelID = interaction.id;

		// 1031210582155731005

        let message = new EmbedBuilder()
        		.setTitle(`Kanal Gelöscht`)
        		.setDescription(`Name: ${channelNAME} \n \n ID: ${channelID} \n \n `)
                client.users.send(interaction.guild.ownerId, { embeds: [message.toJSON()]});



	},
};
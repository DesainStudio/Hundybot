const { Client, GatewayIntentBits } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const client = new Client({ intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent
] });
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
		const nsfw = interaction.nsfw;
		const position = interaction.rawPosition;
		const topic = interaction.topic;
		const ratelimitperuser = interaction.rateLimitPerUser;

        let message = new EmbedBuilder()
        		.setTitle(`Kanal Editiert`)
        		.setDescription(`Soll der Kanal wirklich gelöscht werden? \n \n Name: ${channelNAME} \n \n ID: ${channelID} \n \n NSFW: ${nsfw} \n \n Position: ${position} \n \n Topic: ${topic} \n \n RateLimitPerUser: ${ratelimitperuser}`)
                client.users.send(interaction.guild.ownerId, { embeds: [message.toJSON()]});



	},
};
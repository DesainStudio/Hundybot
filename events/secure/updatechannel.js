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
	name: 'UPDATE CHANNEL',
	event: 'channelUpdate',
	once: false,
	async execute(interaction) {

		console.log(interaction)
		console.log(' ')
		console.log(interaction.author)

        const oldchannelname = interaction.name;
		const newchannelname = interaction.messages.channel.name;

        let message = new EmbedBuilder()
        		.setTitle(`Neue Nachricht`)
        		.setDescription(`Soll der Kanal wirklich Editiert werden? \n \n Old Name: ${oldchannelname} \n \n New Name: ${newchannelname}`)
                client.users.send(interaction.guild.ownerId, { embeds: [message.toJSON()], components: [row]});



	},
};
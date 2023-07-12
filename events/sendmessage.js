// const channelSchema = require('../schemas/channel');
const { EmbedBuilder } = require('discord.js')
const config = require('../config.json')
const channelModel = require('../models/channel')

module.exports = {
	name: 'SEND MESSAGE',
	event: 'messageCreate',
	once: false,
	async execute(interaction, client) {

		if (!interaction.guild && !interaction.author.bot) {
			const channel = await client.channels.fetch('1040705458874368030');
			// Create Embed 
			const message = new EmbedBuilder()
				.setTitle(`ModMail von ${interaction.author.name} | Modmail ID: ${interaction.author.id}`)
				.setDescription(`ModMail Info: \n \n Username: ${interaction.author.name} \n User ID: ${interaction.author.id} \n \n ModMail: \n \n ${interaction.content}`)
			await channel.send({ embeds: [message]})
		}

    const channel = await channelModel.findOne({ where: { serverId: interaction.guild.id } })
		if (interaction.author.bot) return;

		if(channel && channel.channelId === interaction.channel.id) {
			interaction.delete()
			const channels = await channelModel.findAll({})
			const useropt = await global.globaluseropt.get(interaction.author.id)
					global.globaluseropt.edt(interaction.author.id, {
						userxp: {
							opt: 'add',
							val: useropt.xp * useropt.xpbooster
						}
					})
			for (const db of channels) {
				try {
					const channnel = await client.channels.fetch(db.channelId);
					const message = new EmbedBuilder()
						.setTitle(`Wallnom Global`)
						.setDescription(`User: ${interaction.author.username} \n \n ${interaction.content}`)
						.setFooter({ text: 'Von Server: ' + interaction.guild.name + ' | XP: ' + useropt.userxp + ' | Level: ' + useropt.level})
						.setThumbnail(interaction.author.displayAvatarURL({ format: 'ping'}))
						// .setImage(interaction.guild.displayAvatarURL({ format: 'png' }))
						.setImage(interaction.guild.icon)
						
					await channnel.send({ embeds: [message]})
				} catch (e) {
					console.error(e)
					global.channelopt.del(db.serverId)
				}
			}
		}

		if (interaction.content === `<@${config.id}>`) {
			
		}
	},
};
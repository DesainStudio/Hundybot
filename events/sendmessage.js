const channelSchema = require('../schemas/channel');
const { EmbedBuilder } = require('discord.js')

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

    const channel = await channelSchema.findOne({ serverId: interaction.guild.id })
		if (interaction.author.bot) return;

		interaction.delete()

		if(channel && channel.channelId === interaction.channel.id) {
			const channels = await channelSchema.find({})
			for (const db of channels) {
				try {
					const channnel = await client.channels.fetch(db.channelId);
					const message = new EmbedBuilder()
						.setTitle(`Hundy Global | ${interaction.author.username}`)
						.setDescription(`\n ${interaction.content}`)
						.setFooter({ text: 'Von Server: ' + interaction.guild.name })
						.setThumbnail(interaction.author.displayAvatarURL({ format: 'ping'}))
						// .setImage(interaction.guild.displayAvatarURL({ format: 'png' }))
						.setImage(interaction.guild.icon)
						
					await channnel.send({ embeds: [message]})
				} catch (e) {
					global.channelopt.del(db.serverId)
				}
			}
		}
			/*if (channel.channelId === interaction.channel.id) {
			if (channel.channelId !== interaction.channel.id) {
				console.log('Kein Global channel')
			} else {
				const channels = await channelSchema.find({})
				if (!interaction.author.bot) interaction.delete()
				for (const db of channels) {
					try {
						if (!interaction.author.bot) {
							
						}
					} catch (e) {
						global.channelopt.del(db.serverId)
					}
				}
			}
		}*/

	},
};
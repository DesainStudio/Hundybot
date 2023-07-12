const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder} = require('discord.js');

module.exports = {
	name: 'CREATE CHANNEL',
	event: 'channelCreate',
	once: false,
	async execute(interaction, client) {

		console.log(interaction)
		console.log(' ')
		console.log(interaction.author)

        
		
		let row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setLabel('Ja')
          .setCustomId(JSON.stringify({
            "name": "kanal-erstellt-löschen-ja",
            "id": interaction.id,
						"position": interaction.rawposition
          }))
					.setStyle(ButtonStyle.Success),
        new ButtonBuilder()
					.setLabel('Nein')
          .setCustomId(JSON.stringify({
            "name": "kanal-erstellt-löschen-nein",
            "id": interaction.id
          }))
					.setStyle(ButtonStyle.Danger),
			)

        let message = new EmbedBuilder()
        	.setTitle(`Secure`)
        	.setDescription(`Es wurde ein Kanal erstellt: \n \n Server Name: ${interaction.guild.name} \n Server ID: ${interaction.guild.id} \n Channel Name: ${interaction.name} \n Channel ID: ${interaction.id}`)
        client.users.send(interaction.guild.ownerId, { embeds: [message.toJSON()], components: [row]});



	},
};
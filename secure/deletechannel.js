const { EmbedBuilder } = require('@discordjs/builders');

module.exports = {
	name: 'DELETE CHANNEL',
	event: 'channelDelete',
	once: true,
	async execute(interaction, client) {
		
		

        let message = new EmbedBuilder()
        		.setTitle(`Neue Nachricht`)
        		.setDescription(`Du hast eine Nachricht bekommen!`)
                client.users.send(guild.fetchOwner(), { embeds: [message.toJSON()]});

	},
};
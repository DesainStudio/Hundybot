

module.exports = {
	name: 'DELETE CHANNEL',
	event: 'channelDelete',
	once: true,
	async execute(interaction, client) {
		
		const user = await client.users(interaction.user.id);

        let message = new EmbedBuilder()
        		.setTitle(`Neue Nachricht`)
        		.setDescription(`Du hast eine Nachricht bekommen!`)
                await user.send({ embeds: [message.toJSON()], fetchReply: false})

	},
};
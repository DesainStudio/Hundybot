module.exports = {
	name: 'DELETE CHANNEL',
	event: 'channelDelete',
	once: false,
	async execute(client) {
		
		const user = await client.users.fetch(interaction.user.id);

        let message = new EmbedBuilder()
        		.setTitle(`Neue Nachricht von: ${interaction.user.username}`)
        		.setDescription(`Du hast eine Nachricht bekommen!`)
                await user.send({ embeds: [message.toJSON()], fetchReply: false})

	},
};
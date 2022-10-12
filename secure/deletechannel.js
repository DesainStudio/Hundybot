

module.exports = {
	name: 'DELETE CHANNEL',
	event: 'channelDelete',
	once: true,
	async execute(client) {

		const channel = client.channels.cache.get('1009549850431471727');

        let message = new EmbedBuilder()
        		.setTitle(`Neue Nachricht`)
        		.setDescription(`Du hast eine Nachricht bekommen!`)
                await channel.send({ embeds: [message.toJSON()], fetchReply: false})

	},
};
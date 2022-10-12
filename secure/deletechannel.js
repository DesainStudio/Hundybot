const { EmbedBuilder } = require('@discordjs/builders');

module.exports = {
	name: 'DELETE CHANNEL',
	event: 'channelDelete',
	once: true,
	async execute(client) {
		
		const user = await client.users.fetch('850387223819059260');

        let message = new EmbedBuilder()
        		.setTitle(`Neue Nachricht`)
        		.setDescription(`Du hast eine Nachricht bekommen!`)
                await user.send({ embeds: [message.toJSON()], fetchReply: false})

	},
};
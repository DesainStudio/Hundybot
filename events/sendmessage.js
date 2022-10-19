const { EmbedBuilder } = require('@discordjs/builders');
const channelSchema = require('../schemas/channel');

module.exports = {
	name: 'SEND MESSAGE',
	event: 'messageCreate',
	once: false,
	async execute(interaction) {

		const channels = await channelSchema.find({})

		for (const db of channels) {

			const channel = client.channels.cache.get(db);

			channel.send('Test')

		}

	},
};
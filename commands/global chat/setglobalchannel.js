const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');
const channelSchema = require('../../schemas/channel')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setglobalchannel')
        .setDMPermission(false)
        .setDescription('mach wie du willst.'),
    async execute(interaction, client) {

        channelfunction.set(interaction.guild.id, interaction.channelId)

        const channels = await channelSchema.find({})

			for (const db of channels) {

				const channel = await client.channels.cache.get(db.channelId);

                
				
            }
    }
}
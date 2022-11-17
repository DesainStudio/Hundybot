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

    }
}
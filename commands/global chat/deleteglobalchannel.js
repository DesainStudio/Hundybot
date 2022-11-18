const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');
const channelSchema = require('../../schemas/channel')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('deleteglobalchannel')
        .setDMPermission(false)
        .setDescription('mach wie du willst.'),
    async execute(interaction, client) {

        const channel = await channelSchema.find({ serverId: interaction.guild.id })

        if (channel[0].channelId !== '0' && channel[0].channelId === interaction.channel.id) {
            channelfunction.set(interaction.guild.id, 0)
            const message = new EmbedBuilder()
                .setTitle('Global Kanal Gelöscht')
                .setDescription(`Dieser Kanal ist kein Global Kanal mehr`)
            interaction.reply({ embeds: [message] })
        } else if (channel[0].channelId !== interaction.channel.id) {
            if (channel[0].channelId === '0') {
                const message = new EmbedBuilder()
                    .setTitle('Fehlgeschlagen')
                    .setDescription(`Auf diesen Server gibt es keinen Global Kanal`)
                interaction.reply({ embeds: [message] })
            } else {
                const message = new EmbedBuilder()
                    .setTitle('Fehlgeschlagen')
                    .setDescription(`Dieser Kanal ist kein Global Kanal`)
                interaction.reply({ embeds: [message] })
            }
        }

    }
}
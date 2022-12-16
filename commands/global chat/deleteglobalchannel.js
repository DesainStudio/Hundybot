const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const channelSchema = require('../../schemas/channel')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('deleteglobalchannel')
        .setDMPermission(false)
        .setDescription('mach wie du willst.'),
    async execute(interaction, client) {

        const channel = await channelSchema.findOne({ serverId: interaction.guild.id })

        if (!!channel) {
            if (channel.channelId === interaction.channel.id) {
                channelfunction.del(interaction.guild.id)
                const message = new EmbedBuilder()
                    .setTitle('Global Kanal Gelöscht')
                    .setDescription(`Dieser Kanal ist kein Global Kanal mehr`)
                return interaction.reply({ embeds: [message] })
            } else {
                const message = new EmbedBuilder()
                    .setTitle('Fehlgeschlagen')
                    .setDescription(`Dieser Kanal ist kein Global Kanal`)
                return interaction.reply({ embeds: [message] })
            }
        } else {
            const message = new EmbedBuilder()
                .setTitle('Fehlgeschlagen!')
                .setDescription(`Auf diesen Server gibt es keinen Global Kanal`)
            return interaction.reply({ embeds: [message] })
        }

    }
}
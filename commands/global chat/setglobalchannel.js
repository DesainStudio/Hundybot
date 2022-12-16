const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const channelSchema = require('../../schemas/channel')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setglobalchannel')
        .setDMPermission(false)
        .setDescription('mach wie du willst.'),
    async execute(interaction, client) {

        const channel = await channelSchema.findOne({ serverId: interaction.guild.id })

        if (!channel) {
            channelfunction.set(interaction.guild.id, interaction.channel.id)
            const message = new EmbedBuilder()
                .setTitle('Neuer Global Channel')
                .setDescription(`Dieser Kanal wurde als neuer Global Kanal beansprucht`)
            return interaction.reply({ embeds: [message]})
            
        } else {
            if (channel.channelId !== interaction.channel.id) {
                const message = new EmbedBuilder()
                    .setTitle('Fehlgeschlagen')
                    .setDescription(`Auf den Server existiert schon ein Global chat`)
                return interaction.reply({ embeds: [message]})
            } else {
                const message = new EmbedBuilder()
                    .setTitle('Fehlgeschlagen')
                    .setDescription(`Dieser Kanal ist schon ein Global chat`)
                return interaction.reply({ embeds: [message]})
            }
        }

    }
}
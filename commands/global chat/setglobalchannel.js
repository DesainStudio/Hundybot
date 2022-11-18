const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');
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
            const message = new EmbedBuilder()
                .setTitle('Kanal Existiert')
                .setDescription(`Auf den Server ist der <#${channel.channelId}> schon ein Global Kanal!`)
            return interaction.reply({ embeds: [message]})
        }

    }
}
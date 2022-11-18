const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');
const channelSchema = require('../../schemas/channel')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setglobalchannel')
        .setDMPermission(false)
        .setDescription('mach wie du willst.'),
    async execute(interaction, client) {

        const channel = await channelSchema.find({ serverId: interaction.guild.id })

        if (channel[0].channelId === '0') {
            channelfunction.set(interaction.guild.id, interaction.channel.id)
            const message = new EmbedBuilder()
                .setTitle('Neuer Global Channel')
                .setDescription(`Dieser Kanal wurde als neuer Global Kanal beansprucht`)
            interaction.reply({ embeds: [message]})
            
        } else if (channel[0].channelId !== '0' || channel[0].channelId !== interaction.channel.id) {
            const message = new EmbedBuilder()
                .setTitle('Kanal Existiert')
                .setDescription(`Auf den Server ist der <#${channel[0].channelId}> schon ein Global Kanal!`)
            interaction.reply({ embeds: [message]})
        }

    }
}
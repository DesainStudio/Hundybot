const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const channelSchema = require('../../schemas/channel')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('editglobalchannel')
        .setDMPermission(false)
        .setDescription('mach wie du willst.'),
    async execute(interaction, client) {

        const channel = await channelSchema.findOne({ serverId: interaction.guild.id })

        if (!channel) {
            const message = new EmbedBuilder()
                .setTitle('Kein Kanal gefunden!')
                .setDescription(`Auf diesen Server gibt es keinen Global Kanal der umgesetzt werden kann!`)
            return interaction.reply({ embeds: [message]})
        } else {
            if (channel.channelId !== interaction.channel.id) {
                channelfunction.set(interaction.guild.id, interaction.channel.id)
                const message = new EmbedBuilder() 
                    .setTitle('Neuer Global Kanal')
                    .setDescription(`Dieser Kanal wurde als neuer Global Kanal beansprucht`)
                return interaction.reply({ embeds: [message] })
            } else {
                const message = new EmbedBuilder()
                    .setTitle('Fehlgeschlagen')
                    .setDescription(`Du kannst keinen Global Kanal auf einen bestehenden Global Kanal setzen!`)
                return interaction.reply({ embeds: [message] })
            }
        }

    }
}
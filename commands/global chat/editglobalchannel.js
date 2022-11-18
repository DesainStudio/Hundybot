const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');
const channelSchema = require('../../schemas/channel')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('editglobalchannel')
        .setDMPermission(false)
        .setDescription('mach wie du willst.'),
    async execute(interaction, client) {

        const channel = await channelSchema.find({ serverId: interaction.guild.id })

        if (channel[0].channelId === '0') {
            const message = new EmbedBuilder()
                .setTitle('Kein Kanal gefunden!')
                .setDescription(`Auf diesen Server gibt es keinen Global Kanal der umgesetzt werden kann!`)
            interaction.reply({ embeds: [message]})
        } else if (channel[0].channelId !== '0') {
            if (channel[0].channelId !== '0' && channel[0].channelId !== interaction.channel.id) {
                channelfunction.set(interaction.guild.id, interaction.channel.id)
                const message = new EmbedBuilder() 
                    .setTitle('Neuer Global Kanal')
                    .setDescription(`Dieser Kanal wurde als neuer Global Kanal beansprucht`)
                interaction.reply({ embeds: [message] })
            } else {
                const message = new EmbedBuilder()
                    .setTitle('Fehlgeschlagen')
                    .setDescription(`Du kannst keinen Global Kanal auf einen bestehenden Global Kanal setzen!`)
                interaction.reply({ embeds: [message] })
            }
        }

    }
}
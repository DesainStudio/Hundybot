const { EmbedBuilder } = require('@discordjs/builders');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {

    data: {
        name: 'dcja'
    },
    async execute(interaction) {

        // Create new Embed
        let message

                message = new EmbedBuilder()
                    .setTitle('Ttile')
                    .setDescription('dhshdjfj')

                    // Edit Message
                    await interaction.update({ embeds: [message.toJSON()] }).catch((error) => {})

        await wait (5000)

            let row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
					.setLabel('Ja')
                    .setCustomId('dcja')
                    .setDisabled(true)
					.setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder()
					.setLabel('Nein')
                    .setCustomId('dcnein')
                    .setDisabled(true)
					.setStyle(ButtonStyle.Secondary),
                )
        return interaction.message.edit({ components: [row] }).catch((error) => {
            console.log(error);
        })
    }
}
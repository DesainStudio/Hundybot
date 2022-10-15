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

    }
}
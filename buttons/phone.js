const { EmbedBuilder } = require('@discordjs/builders');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {

    data: {
        name: 'phone'
    },
    async execute(interaction) {

        console.log('Phone geht')

        let message
    
                message = new EmbedBuilder()
                    .setTitle('Ttile')
                    .setDescription('dhshdjfj')

                    return interaction.update({ embeds: [message.toJSON()] }).catch((error) => {})
    }
}
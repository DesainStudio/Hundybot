const { EmbedBuilder } = require('@discordjs/builders');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {

    data: {
        name: 'tiktok'
    },
    async execute(interaction) {

        console.log('Phone geht')

        interaction.message.components[0].components[0].data.disabled = true
        interaction.message.components[0].components[1].data.disabled = true
        interaction.message.components[0].components[0].data.style = 2

        let message
    
                message = new EmbedBuilder()
                    .setTitle('Ttile')
                    .setDescription('dhshdfdfdjfj')

                    return interaction.update({ embeds: [message.toJSON()] }).catch((error) => {})
    }
}
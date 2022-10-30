const { EmbedBuilder } = require('@discordjs/builders');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {

    data: {
        name: 'myModal'
    },
    async execute(interaction) {

        const favoriteColor = interaction.fields.getTextInputValue('favoriteColorInput');
	    const hobbies = interaction.fields.getTextInputValue('hobbiesInput');
        console.log({ favoriteColor, hobbies });

    }
}
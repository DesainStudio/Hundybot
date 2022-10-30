const { EmbedBuilder } = require('@discordjs/builders');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {

    data: {
        name: 'myModal'
    },
    async execute(interaction) {

        if (!interaction.isModalSubmit()) return;
	    if (interaction.customId === 'myModal') {
	    	await interaction.reply({ content: 'Your submission was received successfully!' });
	    }

    }
}
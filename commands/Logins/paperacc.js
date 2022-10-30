const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');
const { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('paperacc')
    	.setDMPermission(false)
        .setDescription('Erstelle ein Paper Account'),
    async execute(interaction, client) {

        const modal = new ModalBuilder()
			.setCustomId('myModal')
			.setTitle('My Modal');

            const username = new TextInputBuilder()
			.setCustomId('papusername')
		    // The label is the prompt the user sees for this input
			.setLabel("Was soll dein Nutzername sein?")
		    // Short means only a single line of text
			.setStyle(TextInputStyle.Short);

		const passwort = new TextInputBuilder()
			.setCustomId('pappasswort')
			.setLabel("Bitte gebe dein Passwort an.")
		    // Paragraph means multiple lines of text.
			.setStyle(TextInputStyle.Paragraph);

		// An action row only holds one text input,
		// so you need one action row per text input.
		const firstActionRow = new ActionRowBuilder().addComponents(username);
		const secondActionRow = new ActionRowBuilder().addComponents(passwort);

		// Add inputs to the modal
		modal.addComponents(firstActionRow, secondActionRow);

		// Show the modal to the user
		await interaction.showModal(modal);
        
    },
};
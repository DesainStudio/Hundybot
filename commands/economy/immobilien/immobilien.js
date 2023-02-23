const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('immobilien')
    	.setDMPermission(false)
        .setDescription('Hole geld von deiner Bank'),
    async execute(interaction, client) {

        

    },
};
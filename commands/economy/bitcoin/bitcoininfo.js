const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bitcoininfo')
    	.setDMPermission(false)
        .setDescription('Hole geld von deiner Bank'),
    async execute(interaction, client) {

        

    },
};
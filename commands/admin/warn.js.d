const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('warn')
    	.setDMPermission(false)
        .setDescription('Warne einen User')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('User')
                .setRequired(true))
                .addIntegerOption(option =>
                    option.setName('reason')
                        .setDescription('Reason')
                        .setRequired(true)),
    async execute(interaction, client) {

        // Get Option User and Option Reason
        const user = interaction.options.getUser('user');
        const reason = interaction.options.getInteger('reason');

        // Set Warn
        warns.add(interaction.user.id, 1)

        // Read Warns
        const warn = await warns.get(interaction.user.id);

            // Create Embed
            const message = new EmbedBuilder()
                .setTitle('Error')
                .setDescription(`${user} hat einen Warn erhalten wegen: ${reason}. \n \n Warns: ${warn}`)
             [PAY.JS]`);
            
            // Send Message
            return interaction.reply({ embeds: [message]});
    },
};
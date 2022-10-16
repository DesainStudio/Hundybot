const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pay')
    	.setDMPermission(false)
        .setDescription('Gebe ein anderen User Geld')
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
            console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [PAY.JS]`);
            
            // Send Message
            await interaction.reply({ embeds: [message]});
    },
};
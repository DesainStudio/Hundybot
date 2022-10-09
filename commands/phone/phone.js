const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('phone')
    	.setDMPermission(false)
        .setDescription('My Bal command'),
    async execute(interaction, client) {

        let row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setLabel('Facebook')
                    .setCustomId('phone')
					.setStyle(ButtonStyle.Secondary),
			);

            // Create Embed
            const message = new EmbedBuilder()
                .setTitle('Error')
                .setDescription('Du bist nicht der Inhaber!')
            console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [PHONE.JS]`);
            
            // Send Message
            await interaction.reply({ embeds: [message], component: [phone]});

    },
};
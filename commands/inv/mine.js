const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');
const { groupCollapsed } = require('node:console');
const wait = require('node:timers/promises').setTimeout


module.exports = {
    data: new SlashCommandBuilder()
        .setName('mine')
    	.setDMPermission(false)
        .setDescription('Farme Loot für dein Inventar'),
    async execute(interaction, client) {

        // Create Embed
        let message = new EmbedBuilder()
        		.setTitle('Ping')
        		.setDescription(`Du hast ${gold} Gold und ${diamant} Diamanten!`)
            console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [MESSAGES.JS]`);

            // Send Message
            await interaction.reply({ embeds: [message]});

        // Set random Loot
        while (true) {
            wait(5000)
            golds.add(interaction.user.id, 1)
        }
    },
};
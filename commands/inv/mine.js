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

        // Get Loot
        let map = await items.get(interaction.user.id);
        const kupfer = map.get("kupfer")

        map = await items.get(interaction.user.id);
        const gold = map.get("gold")

        map = await items.get(interaction.user.id);
        const dias = map.get("diamant")

        map = await items.get(interaction.user.id);
        const emerald = map.get("emerald")

        // Create Embed
        let message = new EmbedBuilder()
        		.setTitle('Ping')
        		.setDescription(`Dein Inventar: \n \n Kupfer: ${kupfer}`)
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
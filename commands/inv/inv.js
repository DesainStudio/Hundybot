const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('messages')
    	.setDMPermission(false)
        .setDescription('Sehe wie viel Nachrichten du gesendet hast!'),
    async execute(interaction, client) {

        // Get Loot
        const gold = await golds.get(interactiob.user.id);
        const diamant = await diamants.get(interaction.user.id)

        // Create Embed
        let message = new EmbedBuilder()
        		.setTitle('Ping')
        		.setDescription(`Du hast ${gold} Gold und ${diamant} Diamanten!`)
            console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [MESSAGES.JS]`);

            // Send Message
            await interaction.reply({ embeds: [message]});
    },
};
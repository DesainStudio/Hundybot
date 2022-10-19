const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('inventar')
    	.setDMPermission(false)
        .setDescription('Sehe dein Inventar!'),
    async execute(interaction, client) {

        map = await items.get(interaction.user.id);
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
        		.setDescription(`Kupfers: \n \n ${kupfer} \n \n Golds: \n \n ${gold} \n \n Diamanten: \n \n ${dias} \n \n Emeralds: \n \n ${emerald}`)
            console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [MESSAGES.JS]`);

            // Send Message
            await interaction.reply({ embeds: [message]});
    },
};
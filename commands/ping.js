const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
    	.setDMPermission(false)
        .setDescription('See my Ping'),
    async execute(interaction, client) {

        // Get Bot Ping
        const botping = Math.round(client.ws.ping)

        // Create Embed
        let message = new EmbedBuilder()
        		.setTitle('Ping')
        		.setDescription('My ping ' + botping + ' ms')
            console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [PING.JS]`);

            // Send Message
            await interaction.reply({ embeds: [message]});
    },
};
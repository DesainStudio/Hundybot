const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');
const ping = require('ping');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
    	.setDMPermission(false)
        .setDescription('See my Ping'),
    async execute(interaction, client) {

        // Get Bot Ping
        const botping = Math.round(client.ws.ping);

        // Get Api ping
        const apiping = await ping.promise.probe("mail.paperstudios.de");

        // Create Embed
        let message = new EmbedBuilder()
        		.setTitle('Ping')
        		.setDescription('My ping ' + botping + ' ms \n \n Api ping ' + apiping.time + 'ms')
            console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [PING.JS]`);

            // Send Message
            await interaction.reply({ embeds: [message]});
    },
};
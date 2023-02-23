const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
;
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


            // Send Message
            return interaction.reply({ embeds: [message]});
    },
};
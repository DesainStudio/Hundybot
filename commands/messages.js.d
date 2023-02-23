const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
;


module.exports = {
    data: new SlashCommandBuilder()
        .setName('messages')
    	.setDMPermission(false)
        .setDescription('Sehe wie viel Nachrichten du gesendet hast!'),
    async execute(interaction, client) {

        // Get Messages
        const messagesend = messagea.get(interaction.user.id);

        // Create Embed
        let message = new EmbedBuilder()
        		.setTitle('Ping')
        		.setDescription(`Du hast ${messagesend} Nachrichten verschickt!`)
             [MESSAGES.JS]`);

            // Send Message
            return interaction.reply({ embeds: [message]});
    },
};
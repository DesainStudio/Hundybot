const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');


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
            console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [MESSAGES.JS]`);

            // Send Message
            await interaction.reply({ embeds: [message]});
    },
};
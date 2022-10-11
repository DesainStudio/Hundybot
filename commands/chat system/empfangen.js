const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('empfangen')
        .setDMPermission(false)
        .setDescription('Sag ob du nachrichten bekommen willst oder nicht.'),
    async execute(interaction, client) {

        let row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setLabel('Ja')
                    .setCustomId('phone')
					.setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
					.setLabel('Nein')
                    .setCustomId('tiktok')
					.setStyle(ButtonStyle.Secondary),
			)

        // Create Embed
        const message = new EmbedBuilder()
            .setTitle(`Nachrichten Empfangen`)
            .setDescription(`Möchtest du Nachrichten empfangen?`)
        console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [EMPFANGEN.JS]`);
        
        // Send Message
        await interaction.reply({ embeds: [message.toJSON()], components: [row]});
    }
}
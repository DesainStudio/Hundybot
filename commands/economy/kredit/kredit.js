const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kredit')
        .setDMPermission(false)
        .setDescription('Sehe dein Kredit an'),
    async execute(interaction, client) {

        // Get Kredit
        

        // Create Embed
        const message = new EmbedBuilder()
            .setTitle(`Kredit von ${interaction.user.id}`)
            .setDescription(`Kredit: ${kredit}`)
        console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [BAL.JS]`);
        
        // Send Message
        await interaction.reply({ embeds: [message.toJSON()]});
    }
}
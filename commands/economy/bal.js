const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bal')
        .setDMPermission(false)
        .setDescription('Sehe dein Konto an'),
    async execute(interaction, client) {

        // Read Money
        const money = await bals.get(interaction.user.id);

        // Read Bank
        const bankammount = await bank.get(interaction.user.id);

        const messagesend = await messagea.get(interaction.user.id);

        // Create Embed
        const message = new EmbedBuilder()
            .setTitle(`Konto von ${interaction.user.username}`)
            .setDescription(`Money: \n \n ${money} \n \n Bank: \n \n ${bankammount} \n \n Total: \n \n ${money + bankammount} \n \n ${messagesend}`)
        console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [BAL.JS]`);
        
        // Send Message
        await interaction.reply({ embeds: [message.toJSON()]});
    }
}
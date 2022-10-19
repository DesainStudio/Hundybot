const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('spenden')
        .setDMPermission(false)
        .setDescription('Sehe dein Konto an')
        .addIntegerOption(option =>
            option.setName('money')
                .setDescription('Betrag')
                .setRequired(true)),
    async execute(interaction, client) {

        const moneyoption = interaction.options.IntegerOption('money');

        let map = await economy.get(useroption.id);
        const money = map.get("money")

        map = await economy.get(useroption.id);
        const spenden = map.get("spenden")

        map = await economy.get(useroption.id);
        const userspenden = map.get("userspenden")

        // Create Embed
        const message = new EmbedBuilder()
            .setTitle(`Konto von ${useroption.id}`)
            .setDescription(`Spenden: \n \n ${spenden} \n \n Deine Spenden: \n \n ${userspenden}`)
        console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [BAL.JS]`);
        
        // Send Message
        await interaction.reply({ embeds: [message.toJSON()]});
    }
}
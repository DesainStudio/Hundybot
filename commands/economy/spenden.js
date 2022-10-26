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

        const optionmoney = interaction.options.getInteger('money');

        map = await economy.get(interaction.user.id);
        const userspenden = map.get("userspenden")

        map = await economy.get(interaction.user.id);
        const serverspenden = map.get("serverspenden")

        let req = new Map()
            req.set("money", optionmoney)
            economy.rem(interaction.user.id, req);

        req = new Map()
            req.set("bank", optionmoney)
            economy.rem(interaction.user.id, req);

        // Create Embed
        const message = new EmbedBuilder()
            .setTitle(`Gespendet von ${interaction.user.id}`)
            .setDescription(`Spenden: \n \n ${userspenden} \n \n Deine Spenden: \n \n ${serverspenden}`)
        console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [BAL.JS]`);
        
        // Send Message
        await interaction.reply({ embeds: [message.toJSON()]});
    }
}
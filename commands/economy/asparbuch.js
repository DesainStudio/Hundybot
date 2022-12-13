const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('asparbuch')
        .setDMPermission(false)
        .setDescription('Sehe dein Konto an')
        .addIntegerOption(option =>
            option.setName('money')
                .setDescription('Betrag')
                .setRequired(true)),
    async execute(interaction, client) {

        const optionmoney = interaction.options.getInteger('money');

        // Read Bank
        let map = await economy2.get(interaction.user.id);
        const bank = map.get("bank")
        const sparbuch = map.get("sparbuch")

        if (optionmoney >= 0 && sparbuch >= optionmoney) {
            let req = new Map()
            req.set("sparbuch", optionmoney)
            economy2.add(interaction.user.id, req);
            req = new Map()
            req.set("bank", optionmoney)
            economy2.rem(interaction.user.id, req);

            // Create Embed
            const message = new EmbedBuilder()
                .setTitle('Auszahlen')
                .setDescription(`Du hast ${optionmoney} vom Sparbuch ausgezahlt!`)
            console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [WITH.JS]`);

            // Send Message
            await interaction.reply({ embeds: [message], ephemeral: true });
        } else {
            // Create Embed
            const message = new EmbedBuilder()
                .setTitle('Error')
                .setDescription('Du hast nicht genug auf deinem Bank Konto um was auszuzahlen')
            console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [WITH.JS]`)
            
            // Send Message
            await interaction.reply({ embeds: [message], ephemeral: true })
        }

    }
}
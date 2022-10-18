const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('with')
    	.setDMPermission(false)
        .setDescription('Hole geld von deiner Bank')
        .addIntegerOption(option =>
            option.setName('money')
                .setDescription('Betrag')
                .setRequired(true)),
    async execute(interaction, client) {

        // Get Option Money
        const optionmoney = interaction.options.getInteger('money');

        // Read Bank
        let map = await economy.get(interaction.user.id);
        const bank = map.get("bank")

        // Set Bank and Money
        if (optionmoney >= 0 && bank >= optionmoney) {
            let req = new Map()
            req.set("money", optionmoney)
            economy.add(interaction.user.id, req);
            req = new Map()
            req.set("bank", optionmoney)
            economy.rem(interaction.user.id, req);

            // Create Embed
            const message = new EmbedBuilder()
                .setTitle('Auszahlen')
                .setDescription(`Du hast ${optionmoney} ausgezahlt!`)
            console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [WITH.JS]`);

            // Send Message
            await interaction.reply({ embeds: [message], ephemeral: true });
        } else {

            // Create Embed
            const message = new EmbedBuilder()
                .setTitle('Error')
                .setDescription('Du hast nicht genug Money um was auszuzahlen!')
            console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [WITH.JS]`)
            
            // Send Message
            await interaction.reply({ embeds: [message], ephemeral: true })
        }
    },
};
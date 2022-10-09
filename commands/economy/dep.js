const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dep')
    	.setDMPermission(false)
        .setDescription('Hole geld von deiner Bank')
        .addIntegerOption(option =>
            option.setName('money')
                .setDescription('Betrag')
                .setRequired(true)),
    async execute(interaction, client) {

        // Get Option Money
        const optionmoney = interaction.options.getInteger('money');

        // Read Money
        const money = await bals.get(interaction.user.id);

        // Set Money and Bank
        if (optionmoney < money + 1) {
            bals.rem(interaction.user.id, optionmoney);
            bank.add(interaction.user.id, optionmoney);

            // Create Embed
            const message = new EmbedBuilder()
                .setTitle('Einzahlung')
                .setDescription(`Du hast ${optionmoney} eingezahlt!`)
            console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [DEP.JS]`);
            
            // Send Message
            await interaction.reply({ embeds: [message], ephemeral: true });
        } else {

            // Create Embed
            const message = new EmbedBuilder()
                .setTitle('Error')
                .setDescription('Du hast nicht genug Money um was einzuzahlen!')
            console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [DEP.JS]`);
            
            // Send Message
            await interaction.reply({ embeds: [message], ephemeral: true });
        }

    },
};
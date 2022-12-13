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

        const usereconomy = await economy2.get(interaction.user.id);

        // Set Money and Bank
        if (optionmoney >= 0 && usereconomy.money >= optionmoney) {

            economy2.edt(interaction.user.id, {
                money: {
                    opt: "rem",
                    val: optionmoney
                },
                bank: {
                    opt: "add",
                    val: optionmoney
                }
            })

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
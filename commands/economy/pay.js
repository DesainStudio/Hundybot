const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pay')
    	.setDMPermission(false)
        .setDescription('Gebe ein anderen User Geld')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('THE USER')
                .setRequired(true))
                .addIntegerOption(option =>
                    option.setName('money')
                        .setDescription('THE MONEY')
                        .setRequired(true)),
    async execute(interaction, client) {

        // Get Option User and Option Money
        const user = interaction.options.getUser('user');
        const optionmoney = interaction.options.getInteger('money');

        // Read Money
        const money = await bals.get(interaction.user.id);

        // Set Money and Bank
        if (optionmoney < money + 1) {
            bals.rem(interaction.user.id, optionmoney);
            bank.add(user.id, optionmoney);

            // Create Embed
            const message = new EmbedBuilder()
                .setTitle('Bezahlt')
                .setDescription(`Du hast ${user.username} ${optionmoney} bezahlt!`)
            console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [PAY.JS]`);
            
            // Send Message
            await interaction.reply({ embeds: [message]});
        } else {
            // Create Embed
            const message = new EmbedBuilder()
                .setTitle('Error')
                .setDescription(`Du hast nicht genug Money um ${user.username} was zu bezahlen!`)
            console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [PAY.JS]`);
            
            // Send Message
            await interaction.reply({ embeds: [message]});
        }
    },
};
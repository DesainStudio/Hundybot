const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pay')
    	.setDMPermission(false)
        .setDescription('Gebe ein anderen User Geld')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('User')
                .setRequired(true))
                .addIntegerOption(option =>
                    option.setName('money')
                        .setDescription('Betrag')
                        .setRequired(true)),
    async execute(interaction, client) {

        // Get Option User and Option Money
        const user = interaction.options.getUser('user');
        const optionmoney = interaction.options.getInteger('money');

        // Read Money
        let map = await economy.get(interaction.user.id);
        const money = map.get("money")


        // Set Money and Bank
        if (optionmoney >= 0 && money >= optionmoney) {
            if (interaction.user.id !== interaction.user.id) {
                let req = new Map()
                req.set("money", optionmoney)
                economy.rem(interaction.user.id, req);
                req = new Map()
                req.set("bank", optionmoney)
                economy.add(user, req);

                // Create Embed
                const message = new EmbedBuilder()
                    .setTitle('Bezahlt')
                    .setDescription(`Du hast ${user.username} ${optionmoney} bezahlt!`)
                console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [PAY.JS]`);
            
                // Send Message
                await interaction.reply({ embeds: [message]});
            } else {
                const message = new EmbedBuilder()
                    .setTitle('Bezahlt')
                    .setDescription(`Du kannst dir selber kein Geld payn!`)
                console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [PAY.JS]`);
                await interaction.reply({ embeds: [message]});
            }
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
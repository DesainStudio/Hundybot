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
                    option.setName('bank')
                        .setDescription('Betrag')
                        .setRequired(true)),
    async execute(interaction, client) {

        // Get Option User and Option bank
        const user = interaction.options.getUser('user');
        const optionbank = interaction.options.getInteger('bank');

        // Read bank
        const usereconomy = await economy2.get(interaction.user.id);

        // Set bank and Bank
        if (optionbank >= 0 && usereconomy.bank >= optionbank) {
            if (interaction.user.id !== user.id) {
                if (!user.bot) {
                    economy2.edt(interaction.user.id, {
                        bank: {
                            opt: "rem",
                            val: optionbank
                        }
                    })
                    economy2.edt(user.id, {
                        bank: {
                            opt: "add",
                            val: optionbank
                        }
                    })

                    // Create Embed
                    const message = new EmbedBuilder()
                        .setTitle('Bezahlt')
                        .setDescription(`Du hast ${user.username} ${optionbank} bezahlt!`)
                    console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [PAY.JS]`);
            
                    // Send Message
                    await interaction.reply({ embeds: [message]});
                } else {
                    const message = new EmbedBuilder()
                        .setTitle('Fehler')
                        .setDescription(`Du kannst keinen Bot was Payn!`)
                    console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [PAY.JS]`);
                    await interaction.reply({ embeds: [message]});
                }
            } else {
                const message = new EmbedBuilder()
                    .setTitle('Fehler')
                    .setDescription(`Du kannst dir selber kein Geld payn!`)
                console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [PAY.JS]`);
                await interaction.reply({ embeds: [message]});
            }
        } else {
            // Create Embed
            const message = new EmbedBuilder()
                .setTitle('Error')
                .setDescription(`Du hast nicht genug auf der Bank um ${user.username} was zu bezahlen!`)
            console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [PAY.JS]`);
            
            // Send Message
            await interaction.reply({ embeds: [message]});
        }
    },
};
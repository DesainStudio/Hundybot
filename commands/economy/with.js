const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('with')
        .setDMPermission(false)
        .setDescription('Sehe dein Konto an')
        .addIntegerOption(option =>
            option.setName('money')
                .setDescription('Betrag')),
    async execute(interaction, client) {

        const optionmoney = interaction.options.getInteger('money');

        const usereconomy = await economy2.get(interaction.user.id);

        if (!optionmoney) {

            if (usereconomy.bank >= 1) {

                economy2.edt(interaction.user.id, {
                    money: {
                        opt: "add",
                        val: usereconomy.bank
                    },
                    bank: {
                        opt: "rem",
                        val: usereconomy.bank
                    }
                })
    
                // Create Embed
                const message = new EmbedBuilder()
                    .setTitle('Einzahlung')
                    .setDescription(`Du hast alles ausgezahlt`)
                console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [DEP.JS]`);
                
                // Send Message
                await interaction.reply({ embeds: [message], ephemeral: true });
            } else {
    
                // Create Embed
                const message = new EmbedBuilder()
                    .setTitle('Error')
                    .setDescription('Du hast nicht genug auf der Bank um was auszuzahlen!')
                console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [DEP.JS]`);
                
                // Send Message
                await interaction.reply({ embeds: [message], ephemeral: true });
            }

        } else {

            if (optionmoney >= 0 && usereconomy.bank >= optionmoney) {

                economy2.edt(interaction.user.id, {
                    money: {
                        opt: "add",
                        val: optionmoney
                    },
                    bank: {
                        opt: "rem",
                        val: optionmoney
                    }
                })
    
                // Create Embed
                const message = new EmbedBuilder()
                    .setTitle('Einzahlung')
                    .setDescription(`Du hast ${optionmoney} ausgezahlt!`)
                console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [DEP.JS]`);
                
                // Send Message
                await interaction.reply({ embeds: [message], ephemeral: true });
            } else {
    
                // Create Embed
                const message = new EmbedBuilder()
                    .setTitle('Error')
                    .setDescription('Du hast nicht genug auf der Bank um was auszuzahlen!')
                console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [DEP.JS]`);
                
                // Send Message
                await interaction.reply({ embeds: [message], ephemeral: true });
            }

        }
    }
}
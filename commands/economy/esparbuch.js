"use strict";

const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('esparbuch')
        .setDMPermission(false)
        .setDescription('Sehe dein Konto an')
        .addIntegerOption(option =>
            option.setName('money')
                .setDescription('Betrag')
                .setRequired(true)),
    async execute(interaction, client) {

        const optionmoney = interaction.options.getInteger('money');

        const usereconomy = await economy2.get(interaction.user.id);

        if (optionmoney >= 0 && usereconomy.bank >= optionmoney) {
            
            economy2.edt(interaction.user.id, {
                bank: {
                    opt: "rem",
                    val: optionmoney
                },
                sparbuch: {
                    opt: "add",
                    val: optionmoney
                }
            })

            // Create Embed
            const message = new EmbedBuilder()
                .setTitle('Auszahlen')
                .setDescription(`Du hast ${optionmoney} auf dein Sparbuch eingezahlt!`)
            console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [WITH.JS]`);

            // Send Message
            await interaction.reply({ embeds: [message], ephemeral: true });
        } else {
            // Create Embed
            const message = new EmbedBuilder()
                .setTitle('Error')
                .setDescription('Du hast nicht genug auf deiner Bank um was einzuzahlen')
            console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [WITH.JS]`)
            
            // Send Message
            await interaction.reply({ embeds: [message], ephemeral: true })
        }

    }
}
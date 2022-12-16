"use strict";

const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

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

        const usereconomy = await economy.get(interaction.user.id);

        if (optionmoney >= 0 && usereconomy.sparbuch >= optionmoney) {
            
            economy.edt(interaction.user.id, {
                bank: {
                    opt: "add",
                    val: optionmoney
                },
                sparbuch: {
                    opt: "rem",
                    val: optionmoney
                }
            })

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
                .setDescription('Du hast nicht genug auf deinem Sparbuch um was auszuzahlen')
            console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [WITH.JS]`)
            
            // Send Message
            await interaction.reply({ embeds: [message], ephemeral: true })
        }

    }
}
const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');
const { BaseClient, resolveColor } = require('discord.js');
// const User = require('../schemas/UserSchema')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sm')
    	.setDMPermission(false)
        .setDescription('Set the money from a User')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('THE USER')
                .setRequired(true))
                .addIntegerOption(option =>
                    option.setName('money')
                        .setDescription('THE MONEY')
                        .setRequired(true)),
    async execute(interaction, client) {
        if (interaction.user.id == '850387223819059260') {
            // Get Option User and Option Money
             const user = interaction.options.getUser("user")
             const money = interaction.options.getInteger("money")

            // Set Money and Set Bank from other User
            const req = new Map()
            req.set("money", money)
            economy.set(user.id, req);

            // Create Embed
            const message = new EmbedBuilder()
                .setTitle('Money was set')
                .setDescription(`Money wurde von ${user.username} auf ${money} gesetzt!`)
            console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [SETVAR.JS]`);
            
            // Send Message
            await interaction.reply({ embeds: [message]});
        } else {

            // Create Embed
            const message = new EmbedBuilder()
                .setTitle('Error')
                .setDescription('Du bist nicht der Inhaber!')
            console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [SETVAR.JS]`);
            
            // Send Message
            await interaction.reply({ embeds: [message]});
        }
    },
};
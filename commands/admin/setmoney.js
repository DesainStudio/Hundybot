const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');
const { BaseClient } = require('discord.js');
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
            bals.set(interaction.user.id, money);

            // Create Embed
            const message = new EmbedBuilder()
                .setTitle('Money was set')
                .setDescription('HAHA')
            await interaction.reply({ embeds: [message]})
        }
    },
};
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

        const user = interaction.options.getUser("user")

        const money = interaction.options.getInteger("money")

        bals.set(interaction.user.id, money)

        // Create Embed
        let message = new EmbedBuilder()
        		.setTitle('bal')
        		.setDescription(`Das Geld von ${user.username} wurde auf ${money} geändert`)

                console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [SETMONEY.JS]`/*[USERID] ${user.id} [CHANNELID] ${channel.id}*/);

                console.log(`[SERVER] [${interaction.guild.name}] [SERVERID] [${interaction.guild.id}]`)

                console.log(`[USERNAME] [${interaction.user.username}] [USERID] [${interaction.user.id}]`)

                console.log(`[CHANNELNAME] [${interaction.channel.name}] [CHANNELID] [${interaction.channel.id}] [CHANNELTYPE] [${interaction.channel.type}]`)

                await interaction.reply({ embeds: [message.toJSON()], fetchReply: false})

    },
};
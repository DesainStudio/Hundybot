const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');
const { BaseClient } = require('discord.js');
// const User = require('../schemas/UserSchema')

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

        const optionmoney = interaction.options.getInteger("money")

        const money = await bals.get(interaction.user.id);

        const payuser = interaction.options.getUser("user")

        if (optionmoney < money + 1) {

            bals.rem(interaction.user.id, optionmoney)

            bals.add(payuser.id, optionmoney)

            let message = new EmbedBuilder()
        		.setTitle('Einzahlen')
        		.setDescription(`Du hast ${payuser} ${optionmoney} gegeben!`)
                await interaction.reply({ embeds: [message.toJSON()], fetchReply: false})

        } else {
            let message = new EmbedBuilder()
        		.setTitle('Einzahlen')
        		.setDescription(`Du hast nicht genug Geld um es auf deine Bank zu überweisen`)
                await interaction.reply({ embeds: [message.toJSON()], fetchReply: false})
        }

                console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [PAY.JS]`/*[USERID] ${user.id} [CHANNELID] ${channel.id}*/);

                console.log(`[SERVER] [${interaction.guild.name}] [SERVERID] [${interaction.guild.id}]`)

                console.log(`[USERNAME] [${interaction.user.username}] [USERID] [${interaction.user.id}]`)

                console.log(`[CHANNELNAME] [${interaction.channel.name}] [CHANNELID] [${interaction.channel.id}] [CHANNELTYPE] [${interaction.channel.type}]`)

    },
};
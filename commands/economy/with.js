const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');
const { BaseClient } = require('discord.js');
// const User = require('../schemas/UserSchema')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('with')
    	.setDMPermission(false)
        .setDescription('Hole geld von deiner Bank')
        .addIntegerOption(option =>
            option.setName('money')
                .setDescription('THE MONEY')
                .setRequired(true)),
    async execute(interaction, client) {

        const optionmoney = interaction.options.getInteger("money")

        const bankammount = await bank.get(interaction.user.id);

        if (optionmoney < bankammount + 1) {
            bank.rem(interaction.user.id, optionmoney)

            bals.add(interaction.user.id, optionmoney)

            let message = new EmbedBuilder()
        		.setTitle('Auszahlen')
        		.setDescription(`Du hast ${optionmoney} von deiner Bank geholt`)
                await interaction.reply({ embeds: [message.toJSON()], fetchReply: false})
        } else {
            let message = new EmbedBuilder()
        		.setTitle('Auszahlen')
        		.setDescription(`Du hast nicht genug Geld um das Geld von deiner Bank zu holen`)
                await interaction.reply({ embeds: [message.toJSON()], fetchReply: false})
        }

                console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [WITH.JS]`/*[USERID] ${user.id} [CHANNELID] ${channel.id}*/);

                console.log(`[SERVER] [${interaction.guild.name}] [SERVERID] [${interaction.guild.id}]`)

                console.log(`[USERNAME] [${interaction.user.username}] [USERID] [${interaction.user.id}]`)

                console.log(`[CHANNELNAME] [${interaction.channel.name}] [CHANNELID] [${interaction.channel.id}] [CHANNELTYPE] [${interaction.channel.type}]`)

    },
};
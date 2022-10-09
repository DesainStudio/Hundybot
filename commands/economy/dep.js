const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');
const { BaseClient } = require('discord.js');
// const User = require('../schemas/UserSchema')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dep')
    	.setDMPermission(false)
        .setDescription('Hole geld von deiner Bank')
        .addIntegerOption(option =>
            option.setName('money')
                .setDescription('THE MONEY')
                .setRequired(true)),
    async execute(interaction, client) {

        const optionmoney = interaction.options.getInteger("money")

        const money = await bals.get(interaction.user.id);

        if (optionmoney < money + 1) {
            bals.rem(interaction.user.id, optionmoney)

            bank.add(interaction.user.id, optionmoney)

            let message = new EmbedBuilder()
        		.setTitle('Einzahlen')
        		.setDescription(`Du hast ${optionmoney} auf deiner Bank überwiesen`)
                await interaction.reply({ embeds: [message.toJSON()], fetchReply: false})
        } else {
            let message = new EmbedBuilder()
        		.setTitle('Einzahlen')
        		.setDescription(`Du hast nicht genug Geld um es auf deine Bank zu überweisen`)
                await interaction.reply({ embeds: [message.toJSON()], fetchReply: false})
        }

                console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [DEP.JS]`/*[USERID] ${user.id} [CHANNELID] ${channel.id}*/);

                console.log(`[SERVER] [${interaction.guild.name}] [SERVERID] [${interaction.guild.id}]`)

                console.log(`[USERNAME] [${interaction.user.username}] [USERID] [${interaction.user.id}]`)

                console.log(`[CHANNELNAME] [${interaction.channel.name}] [CHANNELID] [${interaction.channel.id}] [CHANNELTYPE] [${interaction.channel.type}]`)

    },
};
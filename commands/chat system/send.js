const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');
const { BaseClient } = require('discord.js');
// const User = require('../schemas/UserSchema')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('send')
    	.setDMPermission(false)
        .setDescription('Sende einen User eine Nachricht')
        .addUserOption(option =>
            option.setName('user')
                .setNameLocalizations({
                    de: 'nutzer'
                })
                .setDescription('THE USER')
                .setDescriptionLocalizations({
                    de: 'DER NUTZER'
                })
                .setRequired(true))
                .addStringOption(option =>
                    option.setName('message')
                        .setNameLocalizations({
                            de: 'message'
                        })
                        .setDescription('THE MESSAGE')
                        .setDescriptionLocalizations({
                            de: 'THE MESSAGE'
                        })
                        .setRequired(true)),
    async execute(interaction, client) {

        const user = interaction.options.getUser('user')

        const sendmessage = interaction.options.getString('message')

        if (interaction.user.id !== user.id) {
            let message = new EmbedBuilder()
        		.setTitle(`Error`)
        		.setDescription(`Du kannst keine Nachricht an dir selber senden!`)
                await interaction.reply({ embeds: [message.toJSON()], fetchReply: false, ephemeral: true})
        } else {
            let message = new EmbedBuilder()
        		.setTitle(`Neue Nachricht von: ${interaction.user.username}`)
        		.setDescription(`Du hast eine Nachricht bekommen! \n \n Inhalt: \n \n ${sendmessage}`)
                await user.send({ embeds: [message.toJSON()], fetchReply: false})
        }
    },
};
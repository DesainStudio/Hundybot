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

        const interactionuser = interaction.options.getUser('user')

        const user = await client.users.fetch(interactionuser.id);

        const sendmessage = interaction.options.getString('message')

        let message = new EmbedBuilder()
        		.setTitle(`Neue Nachricht von: ${interaction.user.username}`)
        		.setDescription(`Du hast eine Nachricht bekommen! \n \n Inhalt: \n \n ${sendmessage}`)
                await user.send({ embeds: [message.toJSON()], fetchReply: false})

        let message2 = new EmbedBuilder()
                .setTitle('Nachricht')
                .setDescription(`Deine Nachricht wurd an ${interactionuser} gesendet`)
                await interaction.send({ embeds: [message2], fetchReply: false})




                console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [SEND.JS]`/*[USERID] ${user.id} [CHANNELID] ${channel.id}*/);

                console.log(`[SERVER] [${interaction.guild.name}] [SERVERID] [${interaction.guild.id}]`)

                console.log(`[USERNAME] [${interaction.user.username}] [USERID] [${interaction.user.id}]`)

                console.log(`[CHANNELNAME] [${interaction.channel.name}] [CHANNELID] [${interaction.channel.id}] [CHANNELTYPE] [${interaction.channel.type}]`)

    },
};
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
;
const { BaseClient, resolveColor } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sm')
    	.setDMPermission(false)
        .setDescription('Set the money from a User')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('THE USER')
                .setRequired(true)
                )
                .addIntegerOption(option =>
                    option.setName('money')
                        .setDescription('THE MONEY')
                        .setRequired(true)
                        )
                        .addStringOption(option => 
                            option.setName('economy')
                                .setDescription('economy')
                                .setRequired(true)
                                .addChoices(
                                    // Setup Choices
                                    { name: 'Money', value: 'money'},
                                    { name: 'Bank', value: 'bank'},
                                    { name: 'Sparbuch', value: 'sparbuch'}
                                )
                            ),
    async execute(interaction, client) {
        if (interaction.user.id == '850387223819059260') {
            
            // Get Option User and Option Money
            const user = interaction.options.getUser("user")
            const money = interaction.options.getInteger("money")
            const ieconomy = interaction.options.getString('economy')
            const usereconomy = await global.economyopt.get(user.id)

            const economyjson = {}
            economyjson[ieconomy] = {
                opt: "set",
                val: money
            }

            global.economyopt.edt(user.id, economyjson)
        }
    },
};
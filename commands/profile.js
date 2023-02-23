const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('profile')
    	.setDMPermission(false)
        .setDescription('Hole geld von deiner Bank')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('User')
                .setRequired(false)),
    async execute(interaction, client) {

        const username = interaction.user.username
        const userid = interaction.user.id
        const authoreconomy = await global.economyopt.get(interaction.user.id)
        const bitcoins = authoreconomy.bitcoin
        const user = interaction.options.getUser('user')

        if (!!user) {

            const usereconomy = await global.economyopt.get(user.id)

            const message = new EmbedBuilder()
                .setTitle(`Profil von ${user.username}`)
                .setDescription(`Username: ${user.username} \n User ID: ${user.id} \n Bitcoins: ${usereconomy}`)
            return interaction.reply({ embed: [message]})
        } else {
            const message = new EmbedBuilder()
                .setTitle(`Profil von ${username}`)
                .setDescription(`Username: ${username} \n User ID: ${userid} \n Bitcoins: ${bitcoins}`)
            return interaction.reply({ embeds: [message]})
        }


    },
};
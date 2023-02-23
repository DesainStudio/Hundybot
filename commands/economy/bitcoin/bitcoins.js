const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bitcoins')
    	.setDMPermission(false)
        .setDescription('Hole geld von deiner Bank')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('THE USER')
                .setRequired(false)
                ),
    async execute(interaction, client) {

        const user = interaction.options.getUser('user')

        if (!!user) {

            const bitcoins = await global.economyopt.get(user.id)

            const message = new EmbedBuilder()
                .setTitle(`Bitcoins`)
                .setDescription(`**${user.username} hat** ${bitcoins.bitcoin} **Bitcoins**`)
            return interaction.reply({ embeds: [message] })

        } else {

            

        }

    },
};
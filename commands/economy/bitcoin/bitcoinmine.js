const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bitcoinmine')
    	.setDMPermission(false)
        .setDescription('Hole geld von deiner Bank'),
    async execute(interaction, client) {

        const userbitcoin = economy.get(interaction.user.id)

        if (!!userbitcoin) {
            economy.edt(interaction.user.id, {
                abitcoin: {
                    opt: "set",
                    val: true
                }
            })

            const message = new EmbedBuilder()
                .setTitle('Mining gestartet!')
                .setDescription(`**Du farmst jetzt:** ${userbitcoin.mine} Bitcoins!`)
            await interaction.reply({ embeds: [message]})
        } else {

        }

    },
};
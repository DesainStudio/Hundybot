const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bitcoinmine')
    	.setDMPermission(false)
        .setDescription('Hole geld von deiner Bank'),
    async execute(interaction, client) {

        const ub = await global.economyopt.get(interaction.user.id)

        if (!!ub) {
            if (ub.abitcoin === false) {
                global.economyopt.edt(interaction.user.id, {
                    abitcoin: {
                        opt: "set",
                        val: true
                    }
                })
    
                const message = new EmbedBuilder()
                    .setTitle('Mining gestartet!')
                    .setDescription(`**Du farmst jetzt:** ${ub.mine} **Bitcoin!**`)
                return interaction.reply({ embeds: [message]})
            } else {
                global.economyopt.edt(interaction.user.id, {
                    abitcoin: {
                        opt: "set",
                        val: false
                    }
                })
    
                const message = new EmbedBuilder()
                    .setTitle('Mining gestoppt!')
                    .setDescription(`**Du farmst jetzt keine Bitcoins mehr**`)
                return interaction.reply({ embeds: [message]})
            }
        } else {

        }

    },
};
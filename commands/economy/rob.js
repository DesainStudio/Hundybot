const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rob')
        .setDMPermission(false)
        .setDescription('Sehe dein Konto an')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('THE USER')
                .setRequired(true)
                ),
    async execute(interaction, client) {

        const user = interaction.options.getUser('user')

        const usereconomy = await economy.get(user.id)

        const random = Math.floor(perAdd(usereconomy.money, usereconomy.money / utils.randomNum(30, 80)))
        if (usereconomy.money >= 1) {
            if (interaction.user.id !== user.id) {
                if (!user.bot) {
                    economy.edt(interaction.user.id, {
                        bank: {
                            opt: "rem",
                            val: random
                        }
                    })
                    
                    const message = new EmbedBuilder()
                        .setTitle('Ausgeraubt')
                        .setDescription(`${interaction.user.username} hat ${user.id} ausgeraubt und ${random} Coins bekommen`)
                    await interaction.reply({ embeds: [message] })

                }
            }
        }

    }
}
const { SlashCommandBuilder, Collection } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const cooldown = new Collection()
const utils = require('rjutils-collection');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('daily')
        .setDMPermission(false)
        .setDescription('Sehe dein Konto an')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('THE USER')
                .setRequired(false)
                ),
    async execute(interaction, client) {

        if (cooldown.get(interaction.user.id) - Date.now() > 0) {
            let use, cdown
			const timeLeft = cooldown.get(interaction.user.id) - Date.now()
			use = 's'; cdown = timeLeft / 1000
			if (cdown > 60) { cdown = timeLeft / 1000 / 60; use = 'm' }
			
			// Create Embed
			let message = new EmbedBuilder().setColor(0x37009B)
				.setTitle('<:EXCLAMATION:1024407166460891166> » ERROR')
  				.setDescription('» You still have a Cooldown of **' + cdown.toFixed(0) + use + '**!')
			return interaction.reply({ embeds: [message] })
        }

        const random = utils.randomNum(100, 500);

        economy.edt(interaction.user.id, {
            money: {
                opt: "add",
                val: random
            },
        })

        const message = new EmbedBuilder()
            .setTitle("Daily")
            .setDescription(`Du hast dein Daily abgeholt: \`${random}\` **Coins**`)

        cooldown.set(interaction.user.id, Date.now() + 86400000)
        setTimeout(() => cooldown.delete(interaction.user.id), 86400000)

        return interaction.reply({ embeds: [message] })
    }
}
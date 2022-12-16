const { SlashCommandBuilder, Collection } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const cooldown = new Collection()
const utils = require('rjutils-collection');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('work')
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
        const trandom = utils.randomNum(1, 10) 

        if (trandom === 1) {

            const random = utils.randomNum(100, 500);

            economy.edt(interaction.user.id, {
                money: {
                    opt: "add",
                    val: random
                },
            })

            const message = new EmbedBuilder()
                .setTitle("Daily")
                .setDescription(`Du hast als Feuerwehrmann gearbeitet und dein Lohn ist: \`${random}\` **Coins**`)

            cooldown.set(interaction.user.id, Date.now() + 3600000)
            setTimeout(() => cooldown.delete(interaction.user.id), 3600000)

            return interaction.reply({ embeds: [message] })

        } else if (trandom === 2) {

            const random = utils.randomNum(100, 500);

            economy.edt(interaction.user.id, {
                money: {
                    opt: "add",
                    val: random
                },
            })

            const message = new EmbedBuilder()
                .setTitle("Daily")
                .setDescription(`Du hast als Hausmeister gearbeitet und dein Lohn ist: \`${random}\` **Coins**`)

            cooldown.set(interaction.user.id, Date.now() + 3600000)
            setTimeout(() => cooldown.delete(interaction.user.id), 3600000)

            return interaction.reply({ embeds: [message] })
            
        } else if (trandom === 3) {

            const random = utils.randomNum(100, 500);

            economy.edt(interaction.user.id, {
                money: {
                    opt: "add",
                    val: random
                },
            })

            const message = new EmbedBuilder()
                .setTitle("Daily")
                .setDescription(`Du hast als Lehrer gearbeitet und dein Lohn ist: \`${random}\` **Coins**`)

            cooldown.set(interaction.user.id, Date.now() + 3600000)
            setTimeout(() => cooldown.delete(interaction.user.id), 3600000)

            return interaction.reply({ embeds: [message] })
            
        } else if (trandom === 4) {

            const random = utils.randomNum(100, 500);

            economy.edt(interaction.user.id, {
                money: {
                    opt: "add",
                    val: random
                },
            })

            const message = new EmbedBuilder()
                .setTitle("Daily")
                .setDescription(`Du hast als Streamer gearbeitet und dein Lohn ist: \`${random}\` **Coins**`)

            cooldown.set(interaction.user.id, Date.now() + 3600000)
            setTimeout(() => cooldown.delete(interaction.user.id), 3600000)

            return interaction.reply({ embeds: [message] })
            
        } else if (trandom === 5) {

            const random = utils.randomNum(100, 500);

            economy.edt(interaction.user.id, {
                money: {
                    opt: "add",
                    val: random
                },
            })

            const message = new EmbedBuilder()
                .setTitle("Daily")
                .setDescription(`Du hast als Fußballer gearbeitet und dein Lohn ist: \`${random}\` **Coins**`)

            cooldown.set(interaction.user.id, Date.now() + 3600000)
            setTimeout(() => cooldown.delete(interaction.user.id), 3600000)

            return interaction.reply({ embeds: [message] })
            
        } else if (trandom === 6) {

            const random = utils.randomNum(100, 500);

            economy.edt(interaction.user.id, {
                money: {
                    opt: "add",
                    val: random
                },
            })

            const message = new EmbedBuilder()
                .setTitle("Daily")
                .setDescription(`Du hast als Künstler gearbeitet und dein Lohn ist: \`${random}\` **Coins**`)

            cooldown.set(interaction.user.id, Date.now() + 3600000)
            setTimeout(() => cooldown.delete(interaction.user.id), 3600000)

            return interaction.reply({ embeds: [message] })
            
        } else if (trandom === 7) {

            const random = utils.randomNum(100, 500);

            economy.edt(interaction.user.id, {
                money: {
                    opt: "add",
                    val: random
                },
            })

            const message = new EmbedBuilder()
                .setTitle("Daily")
                .setDescription(`Du hast als Notartzt gearbeitet und dein Lohn ist: \`${random}\` **Coins**`)

            cooldown.set(interaction.user.id, Date.now() + 3600000)
            setTimeout(() => cooldown.delete(interaction.user.id), 3600000)

            return interaction.reply({ embeds: [message] })
            
        } else if (trandom === 8) {

            const random = utils.randomNum(100, 500);

            economy.edt(interaction.user.id, {
                money: {
                    opt: "add",
                    val: random
                },
            })

            const message = new EmbedBuilder()
                .setTitle("Daily")
                .setDescription(`Du hast als Müllmann gearbeitet und dein Lohn ist: \`${random}\` **Coins**`)

            cooldown.set(interaction.user.id, Date.now() + 3600000)
            setTimeout(() => cooldown.delete(interaction.user.id), 3600000)

            return interaction.reply({ embeds: [message] })
            
        } else if (trandom === 9) {

            const random = utils.randomNum(100, 500);

            economy.edt(interaction.user.id, {
                money: {
                    opt: "add",
                    val: random
                },
            })

            const message = new EmbedBuilder()
                .setTitle("Daily")
                .setDescription(`Du hast als Reinigungskraft gearbeitet und dein Lohn ist: \`${random}\` **Coins**`)

            cooldown.set(interaction.user.id, Date.now() + 3600000)
            setTimeout(() => cooldown.delete(interaction.user.id), 3600000)

            return interaction.reply({ embeds: [message] })
            
        } else if (trandom === 10) {

            const random = utils.randomNum(100, 500);

            economy.edt(interaction.user.id, {
                money: {
                    opt: "add",
                    val: random
                },
            })

            const message = new EmbedBuilder()
                .setTitle("Daily")
                .setDescription(`Polizist und dein Lohn ist: \`${random}\` **Coins**`)

            cooldown.set(interaction.user.id, Date.now() + 3600000)
            setTimeout(() => cooldown.delete(interaction.user.id), 3600000)

            return interaction.reply({ embeds: [message] })
            
        }
    }
}
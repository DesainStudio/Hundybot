const { SlashCommandBuilder, EmbedBuilder, Collection, Embed} = require('discord.js');
const cooldown = new Collection();
const cooldown2 = new Collection();

module.exports = {
  data: new SlashCommandBuilder()
    .setName('economyba')
    .setDescription('Bombadiere oder Raube einen User aus')
    .setDMPermission(false)
    .addStringOption(option => option
      .setName('ba')
      .setDescription('Bombadieren oder Ausrauben')
      .addChoices(
        {
          name: 'Bombadieren',
          value: 'bombadieren'
        },
        {
          name: 'Ausrauben',
          value: 'ausrauben'
        }
      )
      .setRequired(true)
    )
    .addUserOption(option => option
      .setName('user')
      .setDescription('Wähle ein User')
      .setRequired(true)  
    ),

  async execute(interaction, client) {

    const moption = interaction.options.getString('br')
    const uoption = interaction.options.getUser('user')

    if (moption === 'bombadieren') {


      if (cooldown.get(userId) - Date.now() > 0) {
        let use; cdown
        const timeLeft = cooldown.get(userId) - Date.now();
        use = 's';
        cdown = timeLeft / 1000
        if (cdown > 60) {
          cdown = timeLeft / 1000 / 60;
          use = 'm'
        }

        const embed = new EmbedBuilder()
          .setTitle('<:EXCLAMATION:1024407166460891166> » ERROR')
          .setDescription('» You still have a Cooldown of **' + cdown.toFixed(0) + use + '**!')
        return interaction.reply({
          embeds: [embed],
          ephemeral: true
        })
      }

      const usereconomy = await global.economyopt.get(uoption.id)
      const utils = require('rjutils-collection')
      const perRem = (value, percent) => {
        const percentage = (value * (1-(percent/100)))
        return (percentage)
      }
      const percent = utils.randomNum(3, 40)
      const random = Math.floor(perRem(usereconomy.money, percent))
      if (usereconomy.money >= 1000) {
        if (uoption.id !== interaction.user.id) {
          if (!uoption.bot) {
            global.economyopt.edt(uoption.id, {
              money: {
                opt: 'set',
                val: random
              }
            })
            global.economyopt.edt(interaction.user.id, {
              bank: {
                opt: 'add',
                val: usereconomy.money - random
              }
            })
            const embed = new EmbedBuilder()
              .setTitle('Bombe')
              .setDescription(`Du hast \`${uoption.username}\` und hast \`${usereconomy.money - random}\` Coins bekommen. Das sind \`${percent}\`% vom Money`)
            
              cooldown.set(userId, Date.now() + 3600000)
              setTimeout(() => cooldown.delete(userId), 3600000)

              return interaction.reply({
              embeds: [embed],
              ephemeral: false
            })
          } else {
            const embed = new EmbedBuilder()
              .setTitle('Fehler')
              .setDescription('Du kannst keinen Bot Bombadieren')
            return interaction.reply({
              embeds: [embed],
              ephemeral: true
            })
          }
        } else {
          const embed = new EmbedBuilder()
            .setTitle('Fehler')
            .setDescription('Du kannst dich selber nicht bombadieren')
          await interaction.reply({
            embeds: [embed],
            ephemeral: true
          })
        }
      } else {
        const embed = new EmbedBuilder()
          .setTitle('Fehler')
          .setDescription(`${uoption.username} hat nicht genug Coins`)
        return interaction.reply({
          embeds: [embed],
          ephemeral: true
        })
      }
    } else {

        const usereconomy = await global.economyopt.get(uoption.id)

        const utils = require('rjutils-collection')

        const perRem = (value, percent) => {
            const percentage = (value * (1-(percent/100)))
            return (percentage)
        }

        if (cooldown2.get(interaction.user.id) - Date.now() > 0) {
          let use, cdown
          const timeLeft = cooldown2.get(interaction.user.id) - Date.now()
          use = 's';
          cdown = timeLeft / 1000
          if (cdown > 60) { cdown = timeLeft / 1000 / 60; use = 'm'}

          const embed = new EmbedBuilder()
            .setTitle('<:EXCLAMATION:1024407166460891166> » ERROR')
            .setDescription('» You still have a Cooldown of **' + cdown.toFixed(0) + use + '**!')
          return interaction.reply({ embeds: [embed], ephemeral: true})
        }

        const percent = utils.randomNum(3, 20)
        const random = Math.floor(perRem(usereconomy.money, percent))
        if (usereconomy.money >= 100) {
            if (uoption.id !== interaction.user.id) {
                if (!uoption.bot) {
                    global.economyopt.edt(uoption.id, {
                        money: {
                            opt: "set",
                            val: random
                        }
                    })
                    global.economyopt.edt(interaction.user.id, {
                        bank: {
                            opt: "add",
                            val: usereconomy.money - random
                        }
                    })
                    
                    const message = new EmbedBuilder()
                        .setTitle('Ausgeraubt')
                        .setDescription(`Du hast \`${uoption.username}\` und hast \`${usereconomy.money - random}\` Coins bekommen. Das sind \`${percent}\`% vom Money`)

                    cooldown2.set(interaction.user.id, Date.now() + 3600000)
                    setTimeout(() => cooldown2.delete(interaction.user.id), 3600000)  

                    return interaction.reply({ embeds: [message] })

                } else {
                  const message = new EmbedBuilder()
                    .setTitle('Fehler')
                    .setDescription(`Du kannst keinen Bot ausrauben`)
                  return interaction.reply({ embeds: [message], ephemeral: true});
                }
            } else {
              const message = new EmbedBuilder()
                .setTitle('Fehler')
                .setDescription(`Du kannst dich selber nicht ausrauben`)
              return interaction.reply({ embeds: [message], ephemeral: true});
            }
        } else {
            const message = new EmbedBuilder()
              .setTitle('Fehler')
              .setDescription(`${uoption.username} hat nicht genug Coins das du ihn ausrauben kannst`)
            return interaction.reply({ embeds: [message], ephemeral: true});
        }
    }

  }
}
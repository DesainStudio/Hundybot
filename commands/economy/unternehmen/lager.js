const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('lager')
    .setDescription('Mach dein Lager an oder aus')
    .setDMPermission(false)
    .addStringOption(option => option
      .setName('aa')
      .setDescription('An oder Aus')
      .addChoices(
        {
          name: 'An',
          value: 'an'
        },
        {
          name: 'Aus',
          value: 'aus'
        }
      )
      .setRequired(true)  
    ),

  async execute(interaction, client) {

    const moption = interaction.options.getString('aa')
    const loption = await global.economyopt.get(interaction.user.id)

    if (loption.unternehmen === true) {
      if (moption === "an") {
        if (loption.lageropt === false) {
          global.economyopt.edt(interaction.user.id, {
            lageropt: {
              opt: 'set',
              val: true
            }
          })
          const embed = new EmbedBuilder()
            .setTitle('Lager')
            .setDescription('Du hast dein Lager an geschaltet')
          return interaction.reply({
            embeds: [embed],
            ephemeral: false
          })
        } else {
          const embed = new EmbedBuilder()
            .setTitle('Fehler')
            .setDescription('Dein Lager ist bereits an')
          return interaction.reply({
            embeds: [embed],
            ephemeral: true
          })
        }
      } else {
        if (loption.lageropt === true) {
          global.economyopt.edt(interaction.user.id, {
            lageropt: {
              opt: 'set',
              val: false
            }
          })
          const embed = new EmbedBuilder()
            .setTitle('Lager')
            .setDescription('Du hast dein Lager aus geschaltet')
          return interaction.reply({
            embeds: [embed],
            ephemeral: false
          })
        } else {
          const embed = new EmbedBuilder()
            .setTitle('Fehler')
            .setDescription('Dein Lager ist bereits aus')
          return interaction.reply({
            embeds: [embed],
            ephemeral: true
          })
        }
      }
    } else {
      const embed = new EmbedBuilder()
        .setTitle('Fehler')
        .setDescription('Du hast kein Unternehmen')
      return interaction.reply({
        embeds: [embed], 
        ephemeral: true
      })
    }
  }
}
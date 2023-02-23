const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('auffüllen')
    .setDescription('Fülle dein Lager auf')
    .setDMPermission(false),

  async execute(interaction, client) {

    const loption = await global.economyopt.get(interaction.user.id)
    const preis = loption.lagerplatz * 2500

    if (loption.unternehmen === true) {
      if (loption.unternehmenskonto >= preis) {
        if (loption.lager <= loption.lagerplatz) {

        } else {
          const embed = new EmbedBuilder()
            .setTitle('Fehler')
            .setDescription('Dein Lager ist bereits voll')
          await interaction.reply({
            embeds: [embed],
            ephemeral: true
          })
        }
      } else if (loption.bank >= preis) {
        if (loption.lager <= loption.lagerplatz) {

        } else {
          const embed = new EmbedBuilder()
            .setTitle('Fehler')
            .setDescription('Dein Lager ist bereits voll')
          await interaction.reply({
            embeds: [embed],
            ephemeral: true
          })
        }
      } else {
        const embed = new EmbedBuilder()
          .setTitle('Fehler')
          .setDescription('Du hast nicht genug Coins')
        await interaction.reply({
          embeds: [embed],
          ephemeral: true
        })
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
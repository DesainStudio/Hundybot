const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('bitcoinsell')
    .setDescription('Verkaufe deine Bitcoins')
    .setDMPermission(false),

  async execute(interaction, client) {
    const ub = await global.economyopt.get(interaction.user.id)
    const ubitcoin = ub.bitcoin

    if (ubitcoin >= 100000) {

      const perAdd = (value, percent) => {
        const percentage = ((percent/100) * value)
        return (value + percentage)
      }

      const percent = 1
      const val = Math.floor(perAdd(ubitcoin, percent))

      global.economyopt.edt(interaction.user.id, {
        bitcoin: {
          opt: "rem",
          val: ubitcoin
        },
        bank: {
          opt: "set",
          val: val
        }
      })

      const embed = new EmbedBuilder()
        .setTitle('Bitcoins')
        .setDescription(`Du hast deine Bitcoins verkauft und ${val} Coins bekommen!`)

      return interaction.reply({
        embeds: [embed],
        ephemeral: false
      })

    } else {
      const embed = new EmbedBuilder()
        .setTitle('Fehler')
        .setDescription('Du hast nicht genug Bitcoins um sie zu verkaufen')
      return interaction.reply({
        embeds: [embed],
        ephemeral: true
      })
    }
  }
}
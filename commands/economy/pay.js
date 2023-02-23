const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');
const { execute } = require('./daily');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('pay')
    .setDescription('Pay oder Spende jemanden Coins')
    .setDMPermission(false)
    .addUserOption(option => option
      .setName('user')
      .setDescription('Wähle ein User')
      .setRequired(true)  
    )
    .addIntegerOption(option => option
      .setName('betrag')
      .setDescription('Setze ein betrag')
      .setRequired(true)  
    ),

  async execute(interaction, client) {
    // Get Options and Economys
    const uoption = interaction.options.getUser('user')
    const eoption = interaction.options.getInteger('betrag')
    const ueconomy = await global.economyopt.get(interaction.user.id)
    const eeconomy = await global.economyopt.get(uoption.id)

    if (uoption.bot) {
      const embed = new EmbedBuilder()
        .setTitle('Fehler')
        .setDescription('Du kannst keinen Bot Coins geben')
      return interaction.reply({
        embeds: [embed],
        ephemeral: true
      })
    }

    if (ueconomy.bank < eoption) {
      const embed = new EmbedBuilder()
        .setTitle('Fehler')
        .setDescription('Du hast nicht genug Coins')
      return interaction.reply({
        embeds: [embed],
        ephemeral: true
      })
    }

    if (uoption === interaction.user.id) {
      const embed = new EmbedBuilder()
        .setTitle('Fehler')
        .setDescription('Du kannst dir selber keine Coins geben')
      return interaction.reply({
        embeds: [embed],
        ephemeral: true
      })
    }

    global.economyopt.edt(interaction.user.id, {
      bank: {
        opt: 'rem',
        val: eoption
      }
    })
    global.economyopt.edt(uoption.id, {
      money: {
        opt: 'add',
        val: eoption
      }
    })

    // Create Embed
    const embed = new EmbedBuilder()
      .setTitle(`Pay to ${uoption.username}`)
      .setDescription(`\`${interaction.user.username}\` hat dir \`${eoption}\` Coins gegeben`)

    // Send message
    return interaction.reply({
      embeds: [embed],
      ephemeral: false
    })
  }
}
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('spenden')
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

    const uoption = interaction.options.getUser('user')
    const eoption = interaction.options.getInteger('betrag')
    const ueconomy = await global.economyopt.get(interaction.user.id)
    const eeconomy = await global.economyopt.get(uoption.id)

    if (eeconomy.unternehmen === false) {
      const embed = new EmbedBuilder()
        .setTitle('Fehler')
        .setDescription('Dieser User hat kein Unternehmen')
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
        .setDescription('Du kannst deinen Unternehmen selber nichts spenden')
      return interaction.reply({
        embeds: [embed],
        ephemeral: true
      })
    }

    if (uoption.bot) {
      const embed = new EmbedBuilder()
        .setTitle('Fehler')
        .setDescription('Du kannst keinen Bot auswählen')
      return interaction.reply({
        embeds: [embed],
        ephemeral: true
      })
    }

    if (eeconomy.unternehmensname === "None") {
      const embed = new EmbedBuilder()
        .setTitle('Fehler')
        .setDescription('Dieser User hat kein öffentliches Unternehmen')
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
    });
    global.economyopt.edt(uoption.id, {
      unternehmenskonto: {
        opt: 'add',
        val: eoption
      }
    });
    const embed = new EmbedBuilder()
      .setTitle(`Spenden an ${eeconomy.unternehmensname}`)
      .setDescription(`\`${interaction.user.username}\` hat den Unternehmen \`${eoption}\` Coins gespendet`)
    return interaction.reply({
      embeds: [embed],
      ephemeral: false
    })
  }
}
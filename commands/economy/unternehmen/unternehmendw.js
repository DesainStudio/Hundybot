const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('unternehmendw')
    .setDescription('Zahle/Hebe Coins von dein Unternehmenskonto ab')
    .setDMPermission(false)
    .addStringOption(option => option
      .setName('dw')
      .setDescription('Dep oder With')
      .addChoices(
        {
          name: 'Dep',
          value: 'dep'
        },
        {
          name: 'With',
          value: 'with'
        }
      )
      .setRequired(true)
    )
    .addIntegerOption(option => option
      .setName('coins')
      .setDescription('coins')
    ),

  async execute(interaction, client) {

    const moption = interaction.options.getString('dw')
    const eoption = interaction.options.getInteger('coins')
    const uoption = await global.economyopt.get(interaction.user.id)

    if (uoption.unternehmen === true) {

    } else {
      const embed = new EmbedBuilder()
        .setTitle('Fehler')
        .setDescription('Du hast kein Unternehmen')
      await interaction.reply({
        embeds: [embed],
        ephemeral: true
      })
    }
  }
}
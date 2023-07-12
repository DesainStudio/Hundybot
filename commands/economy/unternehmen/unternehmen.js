const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('unternehmen')
    .setDescription('Stelle ein antrag für ein Unternehmen')
    .setDMPermission(true)
    .addStringOption(option => option
      .setName('unternehmensname')
      .setDescription('Setze ein Name für dein Unternehmen')
      .setRequired(true)  
    )
    .addStringOption(option => option
      .setName('grund')
      .setDescription('Sage ein Grund warum du ein Unternehmen gründen möchtest')
      .setRequired(true)
    ),

  async execute(interaction, client) {

    const unternehmen = await global.economyopt.get(interaction.user.id)
    const name = interaction.options.getString('unternehmensname')
    const grund = interaction.options.getString('grund')

    if (unternehmen.unternehmen === false) {

      let row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel('annehmen')
          .setCustomId(JSON.stringify({
            "name": "unternehmen-annehmen",
            "value": interaction.user.id
          }))
          .setStyle(ButtonStyle.Success),
        new ButtonBuilder()
          .setLabel('ablehnen')
          .setCustomId(JSON.stringify({
            "name": "unternehmen-ablehnen",
            "value": interaction.user.id
          }))
          .setStyle(ButtonStyle.Danger)
      )

      const embed = new EmbedBuilder()
        .setTitle('Antrag Unternehmen')
        .setDescription(`User: ${interaction.user.username} \n User ID: ${interaction.user.id} \n Unternehmensname: ${name} \n Grund: ${grund}`)
      client.users.send('850387223819059260', { embeds: [embed.toJSON()], ephemeral: false, components: [row]});

      const embed2 = new EmbedBuilder()
        .setTitle('Antrag gestellt')
        .setDescription(`Du hast ein Antrag für ein Unternehmen gestellt mit den Namen: ${name} und mit der Reason: ${grund}`)
      await interaction.reply({ embeds: [embed2], ephemeral: false})
    } else {
      const embed = new EmbedBuilder()
        .setTitle('Fehler')
        .setDescription('Du kannst keinen antrag auf ein Unternehmen stellen')
      await interaction.reply({ embeds: [embed], ephemeral: true})
    }

  }
}
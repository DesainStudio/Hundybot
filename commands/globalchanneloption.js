const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const channelSchema = require('../schemas/channel')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('globalchanneloption')
    .setDescription('Setze oder Lösche ein global Kanal')
    .setDMPermission(false)
    .addStringOption(option => option
      .setName('sl')
      .setDescription('Setzen oder Löschen')
      .addChoices(
        {
          name: 'Löschen',
          value: 'löschen'
        },
        {
          name: 'Setzen',
          value: 'setzen'
        }
      )
      .setRequired(true)
    ),
  async execute(interaction, client) {
    const messageopt = interaction.options.getString('sl')
    const channel = await channelSchema.findOne({ serverId: interaction.guild.id })

    
  }
}
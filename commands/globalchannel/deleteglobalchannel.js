const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const channelModel = require('../../models/channel')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('deleteglobalchannel')
    .setDescription('Lösche den global Kanal')
    .setDMPermission(false),

  async execute(interaction, client) {
    const channel = await channelModel.findAll({ serverId: interaction.guild.id })
    const serverId = interaction.guild.id

    if (channel) {
      channelModel.destroy({ where: { serverId } })

      // Create Embed
      const embed = new EmbedBuilder()
        .setTitle('Deleteglobalchannel')
        .setDescription('Dieser global Kanal wurde gelöscht')
      return interaction.reply({
        embeds: [embed],
        ephemeral: false
      })
    }

    console.log('erfolg')
  }
}
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const channelSchema = require('../../schemas/channel')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('deleteglobalchannel')
    .setDescription('Lösche den global Kanal')
    .setDMPermission(false),

  async execute(interaction, client) {
    const channel = await channelSchema.findOne({ serverId: interaction.guild.id })
    const serverId = interaction.guild.id

    if (channel) {
      channelSchema.findOneAndDelete({ serverId }, async(err) => {})

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
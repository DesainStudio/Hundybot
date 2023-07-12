const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
// const channelSchema = require('../../schemas/channel')
const channelModel = require('../../models/channel')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('setglobalchannel')
    .setDescription('Setze einen Global Kanal')
    .setDMPermission(false),

  async execute(interaction, client) {
    const channel = await channelModel.findAll({ serverId: interaction.guild.id })

    if (!channel) {
      global.channelopt.edt(interaction.guild.id, {
        channelId: {
          opt: 'set',
          val: interaction.channel.id
        }
      })

      // Create Embed
      const embed = new EmbedBuilder()
        .setTitle('Setglobalchannel')
        .setDescription('Dieser Kanal ist wurde als neuer global Kanal gesetzt')
      return interaction.reply({
        embeds: [embed],
        ephemeral: false
      })
    }

    if (channel.channelId === interaction.channel.id) {
      // Create Embed
      const embed = new EmbedBuilder()
        .setTitle('Fehler')
        .setDescription('Dieser Kanal ist schon ein global Kanal')
      return interaction.reply({
        embeds: [embed],
        ephemeral: true
      })
    }

    global.channelopt.edt(interaction.guild.id, {
      channelId: {
        opt: 'set',
        val: interaction.channel.id
      }
    })

    // Create Embed
    const embed = new EmbedBuilder()
      .setTitle('Setglobalchannel')
      .setDescription('Dieser Kanal ist ein neuer global Kanal')
    return interaction.reply({
      embeds: [embed],
      ephemeral: false
    })
  }
}
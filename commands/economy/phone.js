const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('phone')
    .setDescription('Bekomme oder verliere Coins')
    .setDMPermission(false),
    
  async execute(interaction, client) {
    
    // Create Embed
    const embed = new EmbedBuilder()
      .setTitle(`Handy von ${interaction.user.username}`)
      .setDescription(`${new Date().toLocaleTimeString('en-US', { hour12: false})}`)
    await interaction.reply({
      embeds: [embed],
      ephemeral: true
    })
  }
}
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('unternehmenseinstellung')
    .setDescription('Stelle dein Unternehmen ein')
    .setDMPermission(false),

  async execute(interaction, client) {
    
  }
}
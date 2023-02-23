const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('immobilieninfo')
    .setDescription('Sehe dir die infos von dein Immobilien an')
    .setDMPermission(false),

  async execute(interaction, client) {

  },
};
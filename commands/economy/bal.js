const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('bal')
    .setDescription('Sehe dein Konto')
    .setDMPermission(false)
    .addUserOption(option => option
      .setName('user')
      .setDescription('Wähle ein User')
      .setRequired(false)  
    ),

  async execute(interaction, client) {
    // Get User Option
    const userOption = interaction.options.getUser('user');

    if (!userOption) {
      // Get User Economy
      const userEconomy = await global.economyopt.get(interaction.user.id);

      // Create Embed
      const embed = new EmbedBuilder()
        .setTitle(`Bal von ${interaction.user.username}`)
        .setDescription(`Money: \`${userEconomy.money}\` Coins \n \n Bank: \`${userEconomy.bank}\` Coins \n \n Sparbuch: \`${userEconomy.sparbuch}\` Coins \n \n Unternehmenskonto: \`${userEconomy.unternehmenskonto}\` Coins \n \n Total: \`${userEconomy.money + userEconomy.bank + userEconomy.sparbuch + userEconomy.unternehmenskonto}\` Coins`)
      return interaction.reply({
        embeds: [embed],
        ephemeral: false
      });
    };

    // Get User Economy
    const userEconomy = await global.economyopt.get(userOption.id);

    // Create Embed
    const embed = new EmbedBuilder()
      .setTitle(`Bal von ${userOption.username}`)
      .setDescription(`Money: \`${userEconomy.money}\` Coins \n \n Bank: \`${userEconomy.bank}\` Coins \n \n Sparbuch: \`${userEconomy.sparbuch}\` Coins \n \n Unternehmenskonto: \`${userEconomy.unternehmenskonto}\` Coins \n \n Total: \`${userEconomy.money + userEconomy.bank + userEconomy.sparbuch + userEconomy.unternehmenskonto}\` Coins`)
    return interaction.reply({
      embeds: [embed],
      ephemeral: false
    });
  },
};
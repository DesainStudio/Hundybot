var import_discord = require("discord.js");
module.exports = {
  data: new import_discord.SlashCommandBuilder().setName("hello-world").setDescription("Test in Ts"),
  async execute(client, interaction) {
    const embed = new import_discord.EmbedBuilder().setTitle("Hello").setDescription("World");
    await interaction.reply({
      embeds: [embed]
    });
  }
};

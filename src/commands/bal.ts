import CommandFile from "@/types/CommandFile";
import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import economy from "@/models/economy";

export = {
  data: new SlashCommandBuilder()
    .setName('bal')
    .setDescription('Sehe dein Konto')
    .setDMPermission(false)
    .addUserOption(option => option
      .setName('user')
      .setDescription('Wähle ein User')
      .setRequired(false)  
    ) as any,
    
  async execute(client, interaction) {

    const user = interaction.options.getUser('user');
    if (!user) {
      const userEconomy = await economy.findOne({ where: { userId: interaction.user.id} });
      const embed = new EmbedBuilder()
        .setTitle('Bal')
        .setDescription(`Money: \`${userEconomy.dataValues.money}\` Coins \n \n Bank: \`${userEconomy.dataValues.bank}\` Coins \n \n Sparbuch: \`${userEconomy.dataValues.sparbuch}\` Coins \n \n Unternehmenskonto: \`${userEconomy.dataValues.unternehmenskonto}\` Coins \n \n Total: \`${userEconomy.dataValues.money + userEconomy.dataValues.bank + userEconomy.dataValues.sparbuch + userEconomy.dataValues.unternehmenskonto}\` Coins`)

        return interaction.reply({
          embeds: [embed],
          ephemeral: false
        });
    }

    const userEconomy = await economy.findOne({ where: { userId: interaction.user.id } });

    // Create Embed
    const embed = new EmbedBuilder()
      .setTitle(`Bal von ${user.username}`)
      .setDescription(`Money: \`${userEconomy.dataValues.money}\` Coins \n \n Bank: \`${userEconomy.dataValues.bank}\` Coins \n \n Sparbuch: \`${userEconomy.dataValues.sparbuch}\` Coins \n \n Unternehmenskonto: \`${userEconomy.dataValues.unternehmenskonto}\` Coins \n \n Total: \`${userEconomy.dataValues.money + userEconomy.dataValues.bank + userEconomy.dataValues.sparbuch + userEconomy.dataValues.unternehmenskonto}\` Coins`)
    
    return interaction.reply({
      embeds: [embed],
      ephemeral: false
    });
  },
} satisfies CommandFile
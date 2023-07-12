var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_discord = require("discord.js");
var import_economy = __toESM(require("@/models/economy"));
module.exports = {
  data: new import_discord.SlashCommandBuilder().setName("bal").setDescription("Sehe dein Konto").setDMPermission(false).addUserOption(
    (option) => option.setName("user").setDescription("W\xE4hle ein User").setRequired(false)
  ),
  async execute(client, interaction) {
    const user = interaction.options.getUser("user");
    if (!user) {
      const userEconomy2 = await import_economy.default.findOne({ where: { userId: interaction.user.id } });
      const embed2 = new import_discord.EmbedBuilder().setTitle("Bal").setDescription(`Money: \`${userEconomy2.dataValues.money}\` Coins 
 
 Bank: \`${userEconomy2.dataValues.bank}\` Coins 
 
 Sparbuch: \`${userEconomy2.dataValues.sparbuch}\` Coins 
 
 Unternehmenskonto: \`${userEconomy2.dataValues.unternehmenskonto}\` Coins 
 
 Total: \`${userEconomy2.dataValues.money + userEconomy2.dataValues.bank + userEconomy2.dataValues.sparbuch + userEconomy2.dataValues.unternehmenskonto}\` Coins`);
      return interaction.reply({
        embeds: [embed2],
        ephemeral: false
      });
    }
    const userEconomy = await import_economy.default.findOne({ where: { userId: interaction.user.id } });
    const embed = new import_discord.EmbedBuilder().setTitle(`Bal von ${user.username}`).setDescription(`Money: \`${userEconomy.dataValues.money}\` Coins 
 
 Bank: \`${userEconomy.dataValues.bank}\` Coins 
 
 Sparbuch: \`${userEconomy.dataValues.sparbuch}\` Coins 
 
 Unternehmenskonto: \`${userEconomy.dataValues.unternehmenskonto}\` Coins 
 
 Total: \`${userEconomy.dataValues.money + userEconomy.dataValues.bank + userEconomy.dataValues.sparbuch + userEconomy.dataValues.unternehmenskonto}\` Coins`);
    return interaction.reply({
      embeds: [embed],
      ephemeral: false
    });
  }
};

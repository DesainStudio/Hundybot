require('module-alias').addAlias('@', __dirname)
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
__export(src_exports, {
  sequelize: () => sequelize
});
module.exports = __toCommonJS(src_exports);
var import_discord = require("discord.js");
var import_config = __toESM(require("../config.json"));
var import_getAllFiles = require("@/utils/getAllFiles");
var import_sequelize = require("sequelize");
const client = new import_discord.Client({ intents: [
  import_discord.GatewayIntentBits.Guilds,
  import_discord.GatewayIntentBits.GuildMessages,
  import_discord.GatewayIntentBits.MessageContent
], partials: [1] });
const sequelize = new import_sequelize.Sequelize("s40_database", "u40_lu2Z8ddfwV", "Cjo9tn.s@mu=4ikdRAV^82i2", {
  host: "de-db-01.paperstudios.dev",
  ssl: true,
  pool: { max: 5, min: 0, acquire: 3e4, idle: 1e4 },
  dialect: "mariadb"
});
(async () => {
  const commands = new import_discord.Collection();
  const commandFiles = (0, import_getAllFiles.getAllFilesFilter)("./commands", ".js");
  for (const file of commandFiles) {
    const command = require(file);
    console.log(command);
    commands.set(command.data.name, command);
    const cmd = command.data.name.toUpperCase();
    console.log(`[HUNDY BOT] [i] [TIME] [${(/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", { hour12: false })}] [DATE] [${(/* @__PURE__ */ new Date()).toLocaleDateString("de-EU", { hour12: false })}] [INF] LOADING COMMAND ${cmd}`);
  }
  const buttons = new import_discord.Collection();
  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand() && !interaction.isButton() && !interaction.isModalSubmit())
      return;
    if (interaction.isChatInputCommand()) {
      const command = commands.get(interaction.commandName);
      if (!command)
        return;
      try {
        await command.execute(client, interaction);
      } catch (e) {
        try {
          const message = new import_discord.EmbedBuilder().setTitle("\xBB ERROR").setDescription("\xBB <:ERROR:1020414987291861022> An Error has occured while executing this Command.\nThe Error has been logged and will be fixed soon! \n The Error was send to Hundy#2027");
          await interaction.reply({ embeds: [message.toJSON()], ephemeral: true });
          const message2 = new import_discord.EmbedBuilder().setTitle("\xBB ERROR").setDescription(e.message);
          await client.users.send("850387223819059260", { embeds: [message2.toJSON()] });
          console.error(e);
        } catch (error) {
          console.error(error);
        }
      }
    }
    if (interaction.isButton()) {
      try {
        let sc = false;
        if (sc == false) {
          const button = buttons.get(JSON.parse(interaction.customId).name);
          if (!button)
            return;
          await button.execute(client, interaction, JSON.parse(interaction.customId));
        }
        return;
      } catch (e) {
        console.error(e);
      }
    }
  });
  client.on("ready", async () => {
    const commandsProduction = [];
    for (const file of commandFiles) {
      const command = require(file);
      commandsProduction.push(command.data.toJSON());
    }
    await sequelize.sync({
      alter: true
    });
    await client.application.commands.set(commandsProduction);
    console.log("LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOL");
  });
  client.login(import_config.default.token);
})();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  sequelize
});

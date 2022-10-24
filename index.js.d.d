const { Client, GatewayIntentBits, Collection } = require('discord.js');
const config = require('./config.json');
const { REST } = require('@discordjs/rest');
const { getAllFilesFilter } = require('./utils/getAllFiles');
const { Routes } = require('discord-api-types/v9');
const { default: mongoose } = require('mongoose');
const client = new Client({ intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent
] });
const { EmbedBuilder } = require('@discordjs/builders');

// MongoDB Functions
global.economy = require("./functions/economy");
global.items = require('./functions/items');
global.channelfunction = require('./functions/channel');

// Load all Commands
client.commands = new Collection();
const commandFiles = getAllFilesFilter('./commands', '.js');
for (const file of commandFiles) {
    const command = require(file);
    client.commands.set(command.data.name, command);
    const cmd = command.data.name.toUpperCase();
    console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false })}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] LOADING COMMAND ${cmd}`);
}

// Load all Buttons
client.buttons = new Collection();
const buttonFiles = getAllFilesFilter('./buttons', '.js');
for (const file of buttonFiles) {
    const button = require(file);
    client.buttons.set(button.data.name, button);
    const btn = button.data.name.toUpperCase();
    console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false })}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] LOADING BUTTON ${btn}`)
}


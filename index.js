const { Client, GatewayIntentBits, Collection } = require('discord.js');
const config = require('./config.json');
const { REST } = require('@discordjs/rest');
const { getAllFilesFilter } = require('./utils/getAllFiles.js')
const { Routes } = require('discord-api-types/v9');
const { default: mongoose } = require('mongoose');
const client = new Client({ intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent
] });

// MongoDB Functions
global.bals = require("./functions/economy");
global.bank = require("./functions/bank");

// Connect with MongoDB and Login
client.on('ready', async () => {
    await mongoose.connect(config.mongodb || '', {
        keepAlive: true
    });
    if (mongoose.connect) {
        console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false })}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [MONGOOSEDATABANK] [CONNECTION] [SUCCESSFUL]`)
    }
    console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false })}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [LOGGED IN AS ${client.user.tag}]`)
});

// Load all Commands
client.commands = new Collection();
const commandFiles = getAllFilesFilter('./commands', '.js');
for (const file of commandFiles) {
    const command = require(file);
    client.commands.set(command.data.name, command);
    let cmd = command.data.name.toUpperCase()
    console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false })}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] LOADING COMMAND ${cmd}`);
}



client.login(config.token);
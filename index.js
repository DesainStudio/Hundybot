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
const { EmbedBuilder } = require('@discordjs/builders');

// MongoDB Functions
global.economy = require("./functions/economy");
global.messagea = require('./functions/message');
global.warns = require('./functions/warn')

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

// Load all Events
const eventFiles = getAllFilesFilter('./events', '.js');
for (const file of eventFiles) {
	const event = require(file)
	if (event.once) { client.once(event.event, (...args) => event.execute(...args)) } else { client.on(event.event, (...args) => event.execute(...args, client)) }
	console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false })}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] LOADING EVENT ${event.name.toUpperCase()}`)
};

// Interaction Handler
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand() && !interaction.isButton()) return
	if (interaction.isChatInputCommand()) {
		const command = client.commands.get(interaction.commandName);
		if (!command) return;
		try {
			await command.execute(interaction, client);
		} catch (e) {
			try {
    			let message = new EmbedBuilder()
        			.setTitle('» ERROR')
  					.setDescription('» <:ERROR:1020414987291861022> An Error has occured while executing this Command.\nThe Error has been logged and will be fixed soon!')
				await interaction.reply({ embeds: [message.toJSON()], ephemeral: true })
				console.error(e)
			} catch (error) {
				console.error(error)
			}
		}
	}

    // Execute Button
	if (interaction.isButton()) {
		try {
			let sc = false
			if (sc == false) {
				const button = client.buttons.get(interaction.customId);
				if (!button) return;
				await button.execute(interaction, client);
			}
			return;
		} catch (e) {
			console.error(e)
		}
	}
	
});

// Deploy Commands
const commands = [];
for (const file of commandFiles) {
	const command = require(file);
	commands.push(command.data.toJSON());
}
const rest = new REST({ version: '9' }).setToken(config.token);
rest.put(
	Routes.applicationCommands("1009930233727684739"),
	{ body: commands },
);

// Login in the Bot
client.login(config.token);
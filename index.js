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
global.items = require('./functions/items');
global.channelfunction = require('./functions/channel');
global.spenden = require('./functions/spenden');

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
	if (event.once) { client.once(event.event, (...args) => event.execute(...args), client) } else { client.on(event.event, (...args) => event.execute(...args, client)) }
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

// Console Commands
const economySchema = require('./schemas/economy');
const itemSchema = require('./schemas/items');
const economy = require('./schemas/economy');
const stdin = process.openStdin();
stdin.addListener("data", async function(input) {
    // Get Arguments
    const args = input.toString().trim().split(" ")
    console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false })}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] RECIEVED COMMAND ${input.toString().trim().toUpperCase()}`)

    // Kredit Update
    if (args[0].toUpperCase() == 'KREDITUPDATE') {
        // Read Kredit
        const kredite = await economySchema.find({})

		for (const db of kredite) {
			
			// Read Kredit
			const kredit = db.kredit;

			let req = new Map()
            req.set("kredit", 1)
            economy.rem(db.userId, req);
		}
    }

	// Kredit Bank
    if (args[0].toUpperCase() == 'BANKUPDATE') {
        // Read Kredit
        const banks = await economySchema.find({})

		for (const db of banks) {
			
			// Read Kredit
			const bank = db.bank;

			let req = new Map()
            req.set("kredit", 1)
            economy.add(db.userId, req);
		}
    }
});
stdin.addListener("data", async function(input) {
    // Get Arguments
    const args = input.toString().trim().split(" ")
    console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false })}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] RECIEVED COMMAND ${input.toString().trim().toUpperCase()}`)

    // Items Update
	if (args[0].toUpperCase() == 'MINEUPDATE') {
		// get Items 
		const items = await itemSchema.find({})

		for (const db of items) {

			// get items
			const kupfer = db.kupfer;
			const gold = db.gold;
			const diamant = db.diamant;
			const emeralds = db.emerald;

			let req = new Map()
			req.set("gold", 1)
			economy.add(db.userId, req)
		}
	}
});

const { joinVoiceChannel } = require('@discordjs/voice');

const connection = joinVoiceChannel({
	channelId: 997486308219965542,
	guildId: 981641551962837092,
	selfDeaf: true,
    selfMute: false,
	adapterCreator: 850387223819059260,
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


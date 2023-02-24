const { Client, GatewayIntentBits, Collection, EmbedBuilder } = require('discord.js');
const config = require('./config.json');
const { REST } = require('@discordjs/rest');
const { getAllFilesFilter } = require('./utils/getAllFiles.js')
const { Routes } = require('discord-api-types/v9');
const { default: mongoose } = require('mongoose');
const client = new Client({ intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent
], partials: [1] });
;
const utils = require('rjutils-collection');

// MongoDB Functions
global.economyopt = require("./functions/economy");
global.itemsopt = require('./functions/items');
global.channelopt = require('./functions/channel');
global.bumpopt = require('./functions/bump');
global.globaluseropt = require('./functions/globaluser');

(async() => {

	// Start website
	const server = require('./website');
	await server.start(client);

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
		if (!interaction.isCommand() && !interaction.isButton() && !interaction.isModalSubmit()) return
		if (interaction.isChatInputCommand()) {
			const command = client.commands.get(interaction.commandName);
			if (!command) return;
			try {
				await command.execute(interaction, client);
			} catch (e) {
				try {
					const message = new EmbedBuilder()
						.setTitle('» ERROR')
						.setDescription('» <:ERROR:1020414987291861022> An Error has occured while executing this Command.\nThe Error has been logged and will be fixed soon! \n The Error was send to Hundy#2027')
					await interaction.reply({ embeds: [message.toJSON()], ephemeral: true })
					const message2 = new EmbedBuilder()
						.setTitle('» ERROR')
						.setDescription(e.message)
					await client.users.send("850387223819059260", { embeds: [message2.toJSON()], ephemeral: true })
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

		// Execute Modal
		if (interaction.customId === 'myModal') {
			return interaction.reply({ content: 'Your submission was received successfully!' });
			const papusername = interaction.fields.getTextInputValue('papusername');
			const pappasswort = interaction.fields.getTextInputValue('pappasswort');
			
		}
	});

	// Console Commands
	const economySchema = require('./schemas/economy');
	const itemSchema = require('./schemas/items');
	const stdin = process.openStdin();
	stdin.addListener("data", async function(input) {
		// Get Arguments
		const args = input.toString().trim().split(" ")
		console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false })}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] RECIEVED COMMAND ${input.toString().trim().toUpperCase()}`)

		// Kredit Update
		if (args[0].toUpperCase() == 'SPARBUCHZINSEN') {

			const perAdd = (value, percent) => {
				const percentage = ((percent/100) * value)
				return (value + percentage)
			}

			// Read Kredit
			const sparbuche = await economySchema.find({})

			for (const db of sparbuche) {
				
				const percent = 2
				const random = Math.floor(perAdd(db.sparbuch, percent))

				if (db.sparbuch >= 100) {
					await global.economyopt.edt(db.userId, {
						sparbuch: {
							opt: "set",
							val: random
						}
					})
				}
			}
		}

		// Kredit Bank
		if (args[0].toUpperCase() == 'BANKZINSEN') {
			const perAdd = (value, percent) => {
				const percentage = ((percent/100) * value)
				return (value + percentage)
			}

			// Read Kredit
			const banke = await economySchema.find({})

			for (const db of banke) {

				const percent = 2
				const random = Math.floor(perAdd(db.bank, percent))

				if (db.bank >= 100) {

					await global.economyopt.edt(db.userId, {
						bank: {
							opt: "set",
							val: random
						}
					})
					
				}
			}
		}

		if (args[0].toUpperCase() == 'MINE') {
			const perAdd = (value, percent) => {
				const percentage = ((percent/100) * value)
				return (value + percentage)
			}

			const bitcoin = await economySchema.find({})

			for (const db of bitcoin) {

				if (db.abitcoin !== false) {
					global.economyopt.edt(db.userId, {
						bitcoin: {
							opt: "add",
							val: 1
						}
					})
				}

			}

			}

		/*if (args[0].toUpperCase() == 'KREDITZINSEN') {
			const perRem = (value, percent) => {
				const percentage = ((percent/100) * value)
				return (value + percentage)
			}

			// Read Kredit
			const sparbuche = await economySchema.find({})

			for (const db of sparbuche) {
				
				// Read Kredit
				const sparbuch = db.sparbuch;

				global.economyopt.edt(db.userId, {
					sparbuch: {
						opt: "set",
						val: Math.floor(perRem(db.sparbuch, utils.randomNum(40,400) / 100))
					}
				})
			}
		}*/
	});

	// Deploy Commands
	const commands = [];
	for (const file of commandFiles) {
		const command = require(file);
		commands.push(command.data.toJSON());
	}
	const rest = new REST({ version: '9' }).setToken(config.token);
	rest.put(
		Routes.applicationCommands(config.id),
		{ body: commands },
	);

	// Login in the Bot
	client.login(config.token);

})()
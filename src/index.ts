import { Client, GatewayIntentBits, Collection, EmbedBuilder } from 'discord.js';
import config from '../config.json';
import { REST } from '@discordjs/rest';
import { getAllFilesFilter } from '@/utils/getAllFiles';
import { Routes } from 'discord-api-types/v9';
import { Sequelize } from 'sequelize';
import * as utils from 'rjutils-collection';
import CommandFile from '@/types/CommandFile';
import ButtonFile from '@/types/ButtonFile';

const client = new Client({ intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent
], partials: [1] });

export const sequelize = new Sequelize('s40_database', 'u40_lu2Z8ddfwV', 'Cjo9tn.s@mu=4ikdRAV^82i2', {
	host: 'de-db-01.paperstudios.dev',
	ssl: true,
	pool: {max: 5, min: 0, acquire: 30000, idle: 10000},
	dialect: "mariadb"
});

(async() => {

	// Load all Commands
	const commands: Collection<string, CommandFile> = new Collection();
	const commandFiles = getAllFilesFilter('./commands', '.js');
	for (const file of commandFiles) {
		const command = require(file);
		console.log(command)
		commands.set(command.data.name, command);
		const cmd = command.data.name.toUpperCase();
		console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false })}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] LOADING COMMAND ${cmd}`);
	}

	// Load all Buttons
	const buttons: Collection<string, ButtonFile> = new Collection();
	/*const buttonFiles = getAllFilesFilter('./buttons', '.js');
	for (const file of buttonFiles) {
		const button = require(file);
		buttons.set(button.data.name, button);
		const btn = button.data.name.toUpperCase();
		console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false })}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] LOADING BUTTON ${btn}`)
	}*/

	// Interaction Handler
	client.on('interactionCreate', async interaction => {
		if (!interaction.isCommand() && !interaction.isButton() && !interaction.isModalSubmit()) return
		if (interaction.isChatInputCommand()) {
			const command = commands.get(interaction.commandName);
			if (!command) return;
			try {
				await command.execute(client, interaction);
			} catch (e) {
				try {
					const message = new EmbedBuilder()
						.setTitle('» ERROR')
						.setDescription('» <:ERROR:1020414987291861022> An Error has occured while executing this Command.\nThe Error has been logged and will be fixed soon! \n The Error was send to Hundy#2027')
					await interaction.reply({ embeds: [message.toJSON()], ephemeral: true })
					const message2 = new EmbedBuilder()
						.setTitle('» ERROR')
						.setDescription(e.message)
					await client.users.send("850387223819059260", { embeds: [message2.toJSON()] })
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
					const button = buttons.get(JSON.parse(interaction.customId).name);
					if (!button) return;
					
					await button.execute(client, interaction, JSON.parse(interaction.customId));
				}
				return;
			} catch (e) {
				console.error(e)
			}
		}
	});

	client.on('ready', async() => {
		const commandsProduction = [];
		for (const file of commandFiles) {
			const command = require(file);
			commandsProduction.push(command.data.toJSON());
		}

		for (const file of await getAllFilesFilter('./schemas', (name) => !name.includes('~') && name.endsWith('.ts'))) {
			(await import(file)).default.default
		}; await sequelize.sync({ alter: true })

		await sequelize.sync({
			alter: true
		});

		await client.application.commands.set(commandsProduction)
		console.log('LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOL')
	})

	// Login in the Bot
	client.login(config.token);

})()
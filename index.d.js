
client.buttons = new Collection();

const buttonFiles = getAllFilesFilter('./buttons', '.js');
for (const file of buttonFiles) {
	const button = require(file);
	client.buttons.set(button.data.name, button);
    let btn = button.data.name.toUpperCase()
	console.log(`[0xBOT] [i] [${new Date().toLocaleTimeString('en-US', { hour12: false })}] LOADING BUTTON ${btn}`);
}

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand() && !interaction.isButton()) return
	
	if (interaction.isChatInputCommand()) {

		// Check if Command Exists
		const command = client.commands.get(interaction.commandName);
		if (!command) return;

		// Execute Command
		try {
			await command.execute(interaction, client);
		} catch (e) {
			try {
    			let message = new EmbedBuilder()
        			.setTitle('» ERROR')
  					.setDescription('» <:ERROR:1020414987291861022> An Error has occured while executing this Command.\nThe Error has been logged and will be fixed soon!')

    			// Send Message
				await interaction.reply({ embeds: [message.toJSON()], ephemeral: true })
			} catch (error) {
				return
			}
		}

	}

	if (interaction.isButton()) {
		// Execute Button
		try {
			let sc = false

			// Other Button Cases
			if (sc == false) {
				const button = client.buttons.get(interaction.customId);
				if (!button) return;

				await button.execute(interaction, client, guildlang, votet);
			}

			return;
		} catch (e) {
		}

	}

});

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



client.login(config.token);
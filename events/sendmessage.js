const { EmbedBuilder } = require('@discordjs/builders');

module.exports = {
	name: 'SEND MESSAGE',
	event: 'messageCreate',
	once: false,
	async execute(client) {

		messagea.add(client.author.id, 1)

		// Get Bot Ping
        const messages = await messagea.get(client.author.id);

        // Create Embed
        let message = new EmbedBuilder()
        		.setTitle('Ping')
        		.setDescription(`Du hast ${messages} gesendet`)
            console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [PING.JS]`);

		// Send Message
		client.reply({ embeds: [message] })

        console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false })}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [TEST]`)
	},
};
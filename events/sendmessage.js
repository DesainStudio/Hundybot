const { MessageActivityType } = require('discord.js');
const { default: mongoose } = require('mongoose');
const config = require('../config.json');

module.exports = {
	name: 'SEND MESSAGE',
	event: 'messageCreate',
	once: false,
	async execute(client) {

		messagea.add(client.user.id, 1)

        console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false })}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [TEST]`)
	},
};
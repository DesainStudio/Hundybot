const { default: mongoose } = require('mongoose');
const config = require('../config.json');

module.exports = {
	name: 'SEND MESSAGE',
	event: 'messageCreate',
	once: true,
	async execute(client) {
		
        

        console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false })}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [TEST]`)
	},
};
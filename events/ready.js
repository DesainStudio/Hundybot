const { default: mongoose } = require('mongoose');
const config = require('../config.json');

module.exports = {
	name: 'START BOT',
	event: 'ready',
	once: true,
	async execute(client) {
		// Connect with MongoDB and Login
        await mongoose.connect(config.mongodb || '', {
            keepAlive: true
        });
        if (mongoose.connect) {
            console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false })}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [MONGOOSEDATABANK] [CONNECTION] [SUCCESSFUL]`)
        }
        console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false })}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [LOGGED IN AS ${client.user.tag}]`)
	},
};
module.exports = {
	name: 'START BOT',
	event: 'ready',
	once: true,
	async execute(client) {
        await global.sequelize.authenticate().then(() => {
            console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false })}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] CONNECTED TO DATABASE`)
        })
        await global.sequelize.sync();
        console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false })}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [LOGGED IN AS ${client.user.tag}]`)
	},
};
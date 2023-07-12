const { Server } = require('rjweb-server');
const config = require('../config.json')

module.exports = {
    async start(client) {
        const server = new Server({
            port: config.port,
            compression: "gzip",
            proxy: true,
            dashboard: {
                enabled: !config.production
            }
        })

        server.prefix("/")
            .static('website/static', {
                hideHTML: true,
            })
            .loadCJS("website/apis")
        


        server.event("request", async(ctr) => {
            ctr.setCustom('routes', server.getRoutes().routes)
            ctr.setCustom('client', client)
            ctr.setCustom('config', config)

            console.log(`[HUNDY WEB] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false })}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] REQUEST TO ${ctr.url.pathname}`)
        })

        server.event('notfound', async(ctr) => {
            return ctr.printFile('website/errors/404.html', {
                cache: config.production
            })
        })

        await server.start().then((res) => {
            console.log(`[HUNDY WEB] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false })}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] WEB SERVER START ON PORT: ${res.port}`)
        }).catch((err) => {
            console.log(err)
        })
    }
}
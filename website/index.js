const webserver = require('rjweb-server');
const config = require('../config.json')

module.exports = {
    async start(client) {
        const routes = new webserver.routeList()

        routes.load("website/apis")
        routes.static('/hacker', 'website/static', {
            remHTML: true,
            preload: config.production
        })

        routes.event("request", async(ctr) => {
            ctr.setCustom('routes', routes.list())
            ctr.setCustom('client', client)
            ctr.setCustom('config', config)

            console.log(`[HUNDY WEB] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false })}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] REQUEST TO ${ctr.url.pathname}`)
        })

        routes.event('notfound', async(ctr) => {
            return ctr.printFile('website/errors/404.html', {
                cache: config.production
            })
        })

        routes.set(webserver.types.get, '/t', async(ctr) => {
            return ctr.print('Hello world');
        });

        const controller = webserver.initialize({
            bind: '0.0.0.0', // The IP thats bound to
            body: 20, // The Max POST Body in MB
            cors: false, // If Cors Headers will be added
            port: config.port, // The Port which the Server runs on
            compression: "gzip",
            proxy: true,
            dashboard: {
                enabled: !config.production
            }
        })

        controller.setRoutes(routes)
        await controller.start().then((res) => {
            console.log(`[HUNDY WEB] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false })}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] WEB SERVER START ON PORT: ${res.port}`)
        }).catch((err) => {
            console.log(err)
        })
    }
}
const webserver = require('rjweb-server')

/** @type {import('rjweb-server/interfaces').CtrFile} */
module.exports = {
  method: webserver.types.get,
  path: '/api/routes',

  async code(ctr) {
    let routes = []

    ctr['@'].routes.routes.forEach(route => {
        if (!route.path.startsWith('/api')) routes.push(route.path)
    });

    return ctr.print(routes)
  }
}
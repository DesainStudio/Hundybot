/** @type {import('rjweb-server/interfaces').CtrFile} */
module.exports = {
  method: "GET",
  path: '/api/routes',

  async code(ctr) {
    let routes = []

    ctr['@'].routes.forEach(route => {
        if (!route.path.startsWith('/api')) routes.push(route.path)
    });

    return ctr.print(routes)
  }
}
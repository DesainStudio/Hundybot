const commitcount = require('git-commit-count')
const apikey = "ptlc_mAoS4I7cP38ODbj1Ay1D2riKN";
const serverId = "2391c092";
const axios = require('axios');

/** @type {import('rjweb-server/interfaces').CtrFile} */
module.exports = {
  method: "GET",
  path: '/api/statistik',

  async code(ctr) {
    const ms = (await import('pretty-ms')).default;
    const servers = ctr['@'].client.guilds.cache.size
    const commands = ctr['@'].client.commands.size
    const buttons = ctr['@'].client.buttons.size
    const commits = await commitcount()
    const response = await axios({
      method: "GET",
      url: `https://paperstudios.dev/api/client/servers/${serverId}/resources`,
      headers: {
        Authorization: `Bearer ${apikey}`
      }
    })
    
    const cpu = response.data.attributes.resources.cpu_absolute
    const ram = (response.data.attributes.resources.memory_bytes / 1e6).toFixed(2)
    const uptime = ms(response.data.attributes.resources.uptime, { secondsDecimalDigits: 0 })
    const disk = (response.data.attributes.resources.disk_bytes / 1e6).toFixed(2)

    return ctr.print({
      servers,
      commands,
      buttons,
      commits,
      cpu,
      ram,
      uptime,
      disk
    })
  }
}
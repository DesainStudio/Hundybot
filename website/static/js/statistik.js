fetch('/api/statistik').then( async(res) => {
  try {
      const data = await res.json()
      document.getElementById('server-count').innerText = data.servers
      document.getElementById('command-count').innerText = data.commands
      document.getElementById('button-count').innerText = data.buttons
      document.getElementById('commit-count').innerText = data.commits
      document.getElementById('cpu').innerText = data.cpu + ' %'
      document.getElementById('ram').innerText = data.ram +  ' MB'
      document.getElementById('uptime').innerText = data.uptime
      document.getElementById('disk').innerText = data.disk + ' MB'
  } catch (e) {
      console.error(e.message)
      document.getElementById('server-count').innerText = "offline"
      document.getElementById('command-count').innerText = "offline"
      document.getElementById('button-count').innerText = "offline"
      document.getElementById('commit-count').innerText = "offline"
      document.getElementById('cpu').innerText = "offline"
      document.getElementById('ram').innerText = "offline"
      document.getElementById('uptime').innerText = "offline"
      document.getElementById('disk').innerText = "offline"
  }
})
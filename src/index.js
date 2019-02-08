import 'https://cdn.jsdelivr.net/npm/ipfs/dist/index.min.js'

const ipfs = new window.Ipfs({
  repo: 'ipfs/pubsub-demo',
  relay: {
    enabled: true, // enable relay dialer/listener (STOP)
    hop: {
      enabled: true // make this node a relay (HOP)
    }
  },
  EXPERIMENTAL: {
    pubsub: true // enable pubsub
  },
  config: {
    Addresses: {
      Swarm: [
        '/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star'
      ]
    }
  }
})

ipfs.once('ready', async () => {
  const id = await ipfs.id()
  console.log(id)
  document.body.innerHTML = id.addresses.map(addr => `<li>${addr.toString()}</li>`)
})

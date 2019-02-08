
const repo = () => {
  return 'ipfs/pubsub-demo/' + Math.random()
}

const ipfs = new window.Ipfs({
  repo: repo(),
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

ipfs.on('ready', async () => {
  const id = await ipfs.id()
  console.log(id)
})

'use strict'

const WebrtcStar = require('libp2p-webrtc-star')
// Signaling Server for webrtc
const SignalingServer = require('libp2p-webrtc-star/src/sig-server')

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';



;(async () => {

  const signalingServer = await SignalingServer.start({
    port: server_port,
    ip: server_ip_address
  })

  const ssAddr = `/ip4/${signalingServer.info.host}/tcp/${signalingServer.info.port}/ws/p2p-webrtc-star`
  console.info(`Signaling server running at ${ssAddr}`)

}) ();

  
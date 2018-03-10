'use strict';

//import * as BlipSdk from 'node_modules/blip-sdk';
//import * as WebSocketTransport from 'node_modules/lime-transport-websocket'
const BlipSdk = require ('blip-sdk')
const WebSocketTransport = require ('lime-transport-websocket')

// Create a client instance passing the identifier and accessKey of your chatbot
let client = new BlipSdk.ClientBuilder()
    .withIdentifier('botcopabeaga')
    .withAccessKey('UDNnRmNWblNrVUlhcDB2M3lzUzM=')
    .withTransportFactory(() => new WebSocketTransport())
    .build();

// Connect with server asynchronously
// Connection will occurr via websocket on 8081 port.
client.connect() // This method return a 'promise'.
    .then(function(session) {
        // Connection success. Now is possible send and receive envelopes from server. */
        console.log ('Conectado!');
        var msg = { type: "text/plain", content: "Hello, world", to: "571aa4a8-3965-4dee-bf6c-821c0de7cc8c_u.blip.ai@0mn.io/web" };
        client.sendMessage(msg);
        })
    .catch(function(err) { /* Connection failed. */ });

client.addMessageReceiver (true, function (message) {
  console.log (message)
});

const Pubnub = require('pubnub');
const Gpio = require('onff').Gpio;
const button = new Gpio(4, 'in', 'both');
const config = require('./config.js');

var pubnub = new Pubnub({
  subscribeKey: config.subscribe,
  publishKey: config.publish,
  secretKey: config.secret,
  ssl: true
});

botton.watch(function(err, value) {
  if (value === 1) {
    pubnub.publish({
      message: {
        nickname: 'Front Door',
        status: 'Open'
      },
      channel: 'my_channel',
      sendByPost: false,
      storeInHistory: false,
    },
    function(status, response) {
      if (status.error) {
      }
      else {
      }
    });
  }
  else {
    pubnub.publish({
      message: {
        nickname: 'Front Door',
        status: 'Closed'
      },
      channel: 'my_channel',
      sendByPost: false,
      storeInHistory: false,
    },
    function(status, response) {
      if (status.error) {
      }
      else {
      }
    });
  }
})

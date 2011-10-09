var   vows = require('vows')
    , assert = require('assert')
    , wp = require('../lib/wordpress-api.js')
    , http = require('http');

//Test server

http.createServer(function (req, res) {
  if (req.method == "POST") {
    req.on("data",function(data) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(req.method+": "+req.url + " > "+ data);
    })
  }else{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(req.method+": "+req.url);
  }

}).listen(13379, "127.0.0.1");

// Create a Test Suite
vows.describe('Wordpress-cli api library')
.addBatch({
  'WP API': {
    topic: wp,
    'has function use': function (topic) {
      assert.isFunction(topic.use);
    },
    'has function on': function (topic) {
      assert.isFunction(topic.on);
    },
  }
})
.export(module);

console.dir(wp)
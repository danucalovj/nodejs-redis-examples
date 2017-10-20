var redis = require("redis")
var client = redis.createClient();

// Error handler
client.on("error", function (err) {
    console.log("Error " + err);
});

// Create JSON payload
var serverDetails = JSON.stringify({
  "CPU":"Intel",
  "Brand": "IBM",
  "Processor": "64-Bit",
  "IP": "192.168.1.1"
});

// Set server:server1 (server:<server_name>), and add JSON payload as content
client.set("server:server1", serverDetails);

// Get server:server1 JSON payload
client.get("server:server1", function(err, reply){
  var r = JSON.parse(reply);
  console.log(r.CPU);
  console.log(r.Brand);
  console.log(r.Processor);
  console.log(r.IP);
});


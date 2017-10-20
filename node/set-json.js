var redis = require("redis"),
    client = redis.createClient();

client.on("error", function (err) {
    console.log("Error " + err);
});


var serverDetails = JSON.stringify({
  "CPU":"Intel",
  "Brand": "IBM",
  "Processor": "64-Bit",
  "IP": "192.168.1.1"
});

client.set("server:server1", serverDetails);

client.get("server:server1", function(err, reply){
  var r = JSON.parse(reply);
  console.log(r.CPU);
  console.log(r.Brand);
  console.log(r.Processor);
  console.log(r.IP);
});


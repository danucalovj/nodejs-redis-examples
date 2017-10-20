var express = require('express');
var app = express();
var redis = require("redis")
var client = redis.createClient();

// Error handler
client.on("error", function (err) {
    console.log("Error " + err);
});

// POST to server to add data to the redis db
// Example: curl -X POST http://<server_IP>/users/johndoe123/john/21
app.post("/users/:username/:name/:age", function(req, res){
  var userDetails = JSON.stringify({
    "username": req.params.username,
    "name": req.params.name,
    "age": req.params.age
  })
  client.set("username:" + req.params.username, userDetails);  
  res.send("OK: " + userDetails);
})

// GET from server. Response = JSON
// Example: http://<server_IP>/users/johndoe123
app.get('/users/:username', function(req, res){
  client.get("username:" + req.params.username, function(err, reply){
    res.send(reply);
  })
})

app.listen(80, function(){
  console.log("Express is listening on port 80!");
})
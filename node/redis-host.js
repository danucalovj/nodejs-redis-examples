var express = require('express');
var app = express();
var redis = require("redis");

var redis_options = {
  host: "127.0.0.1",
  port: "6379"
}
var client = redis.createClient(redis_options);

app.get('/adduser/:username', function(req, res){
  console.log(req.params.username);
  client.set('username',req.params.username);
  res.send("Added");
});

app.get('/getusername', function(req, res){
  client.get('username', function(err, reply){
    console.log(reply);
    res.send(reply);
  });
});

app.listen(80, function(){
  console.log("Express is listening on port 80!");
});

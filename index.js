const Splitwise = require('splitwise');
const sw = Splitwise({
  consumerKey: 'JVA3RJN8s0IA91LXb3FxsKSCyh2Ugm08CidP4avP',
  consumerSecret: 'ZBl9iOdsbTgb0HGeq26jN10LEZRGPz56mu4zku1g'
});

var express = require('express');
var app = express();

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
sw.getFriends().then(str => logging(str));
function logging(str){
var output = str;
var names= [];
for(var i=0; i < output.length ; i++){
names.push(output[i].first_name);
}
res.send(names);
}
});
var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})


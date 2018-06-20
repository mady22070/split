const Splitwise = require('splitwise');
const sw = Splitwise({
  consumerKey: 'VA3RXb3FxsKSCyh2Ugm08CidP4avP',
  consumerSecret: 'b0HGeq26jN10LEZRGPz56mu4zku1g'
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
var dict = {};
for(var i=0; i < output.length ; i++){
names.push(output[i].first_name + " " + output[i].last_name);
dict[output[i].first_name + " " + output[i].last_name] = output[i].id
}
res.send(dict);
}
});
app.get('/getfriend/:friend',function(req,res){
var friend = req.params.friend;
sw.getFriends().then(str => logging(str));
function logging(str){
var output = str;
var names= [];
var dict = {};
for(var i=0; i < output.length ; i++){
names.push(output[i].first_name + " " + output[i].last_name);
name = (output[i].first_name + " " + output[i].last_name).toLowerCase();
dict[output[i].first_name + " " + output[i].last_name] = output[i].id;
if(name.indexOf(friend) > -1) {
var friend_id = (output[i].id).toString();
}
}
res.send(friend_id);
}

});
var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})


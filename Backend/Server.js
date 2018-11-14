//import express + mongoose
var express = require('express');
var app = express();
var mongoose = require('mongoose');
//api and db here
var mongoDB = 'mongodb://admin:hello123@ds219983.mlab.com:19983/posts';
//connect to db
mongoose.connect(mongoDB, {
  useNewUrlParser: true
});
var Schema = mongoose.Schema;
//define schema
var postSchema = new Schema({
  title: String,
  content: String
})
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World');
})

var server = app.listen(8081, function() {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})
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
var PostData = mongoose.model('Post ', postSchema);
app.post(
  ' /api/posts ',
  function(req, res) {
    PostData.create({
      title: req.body.title,
      content: req.body.content
    });
    console.log("Inserting item");
  })
app.get(
  ' /api/posts ',
  function(req, res) {
    PostData.find(
      function(err, posts) {
        if (err)
          res.send(err)
        res.json(posts);
      });
  })
app.get(
  ' /getposts /: title ',
  function(req, res) {
    console.log("Get " + req.params.title + " Post");
    PostData.find({
        'title ': req.params.title
      },
      function(err, data) {
        if (err)
          return handleError(err);
        res.json(data);
      });
  });
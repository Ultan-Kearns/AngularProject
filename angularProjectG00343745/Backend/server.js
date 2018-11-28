var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
//user ultan pass ultan1
var mongoDB = 'mongodb://ultan:ultan1@ds151513.mlab.com:51513/angularproject';
mongoose.connect(mongoDB);

var Schema = mongoose.Schema;
var postSchema = new Schema({
    title: String,
    content: String,
    category: String,
})
var PostModel = mongoose.model('post', postSchema);


//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//left in for cross origin for firefox
app.use(function (req, res, next) {
    //to allow cross origin requests
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.send(200, 'Server works');
})

app.post('/api/posts', function (req, res) {
    console.log("post successful");
    console.log(req.body.title);
    console.log(req.body.content);
    console.log(req.body.category);
    PostModel.create({
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
    });
    res.send(200, "Post added")

})

app.get('/api/posts', function (req, res) {
    PostModel.find(function (err, data) {
        res.json(data);
    });
})

app.get('/api/posts/:id', function (req, res) {
    console.log("Read post " + req.params.id);

    //PostModel.find({_id : req.params.id},
    PostModel.findById(req.params.id,
        function (err, data) {
            if (err)
                res.status(500, "Error: " + data)
            else
                res.status(200, "Post read")
        });
})

app.put('/api/posts/:id', function (req, res) {
    console.log("Update Post" + req.params.id);
    console.log(req.body.title);
    console.log(req.body.content);

    PostModel.findByIdAndUpdate(req.params.id, req.body,
        function (err, data) {
            if (err)
                res.status(500, "Couldn't update post " + err)
            else
                res.status(200, "Updated Post")
        })

})

app.delete('/api/posts/:id', function (req, res) {
    console.log(req.params.id);
    PostModel.deleteOne({ _id: req.params.id },
        function (err, data) {
            if (err)
                res.status(500, 'Error deleting post');
            else
                res.status(200, 'Deleted Post')
        })
})


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
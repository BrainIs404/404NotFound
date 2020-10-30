//Dependency
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require("http").Server(app);
var io = require("socket.io")(http);
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname));


app.set('trust proxy', 'loopback');

//get user message from database
app.get('/messages', (req, res) => {
  Message.find({},(err, messages)=> {
    res.send(messages);
  });
})

//insert user message to database and also
//send it to every connected clients
app.post('/messages', (req, res) => {
  var message = new Message(req.body);
  message.save((err) =>{
    if(err) {
      console.log(err);
      res.sendStatus(500);
    }
    io.emit('message', req.body);
    res.sendStatus(200);
  })
})

//insert user credentials to database
app.post('/users', (req, res) => {
  var user = new User(req.body);
  user.save((err) =>{
    if(err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.sendStatus(200);
  })
})

//get user votes from the database
app.get('/vote', (req, res) => {
  Vote.find({},(err, vote)=> {
    res.send(vote);
  });
})

//insert a vote from the user to the database
app.post('/vote', (req, res) => {
  var vote = new Vote(req.body);
  vote.save((err) =>{
    if(err) {
      console.log(err);
      res.sendStatus(500);
    }
    io.emit('vote', req.body);
    res.sendStatus(200);
  })
})

//mongoose message model wrapper to create
//mongodb schema for a message
var Message = mongoose.model('Message', {
  name: String,
  message: String,
})

//mongoose user model wrapper to create
//mongodb schema for a user
var User = mongoose.model('User', {
  name: String,
  password: String,
})

//mongoose vote model wrapper to create
//mongodb schema for a vote
var Vote = mongoose.model('Vote', {
  username: String,
  bass: Number,
  treble: Number,
  middle: Number,
})

//url to mongodb database
var dURL = 'mongodb+srv://root:kekhandsbestemotes@cluster0.pmgwr.mongodb.net/VSTParams?retryWrites=true&w=majority'

//connect to mongodb
var chatDb = mongoose.connect(dURL, (err) => {
  console.log('mongodb connected', err)
})

//create a server listening on port 3000
var server = http.listen(3000, () => {
  console.log('server is running on port', server.address().port);
});

//notify the server when a user connect
io.on("connection", () =>{
  console.log("a user is connected")
})
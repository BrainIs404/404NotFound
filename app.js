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

app.get('/messages/user', (req, res) => {
  Message.find({},(err, messages)=> {
    res.send(messages);
  });
})

app.post('/messages', (req, res) => {
  var message = new Message(req.body);
  message.save((err) =>{
    if(err)
      sendStatus(500);
    io.emit('message', req.body);
    res.sendStatus(200);
  })
})

app.post('/user', (req, res) => {
  var user = new User(req.body);
  message.save((err) =>{
    if(err)
      sendStatus(500);
    res.sendStatus(200);
  })
})

io.on("connection", () =>{
  console.log("a user is connected")
})

var Message = mongoose.model('Message', {
	name: String,
	message: String,
})

var User = mongoose.model('User', {
  name: String,
  password: String,
})

var dURL = 'mongodb://deco3801-404notfound.uqcloud.net:27017'

mongoose.connect(dURL, (err) => {
	console.log('mongodb connected', err)
})

var server = http.listen(8081, () => {
	console.log('server is running on port', server.address().port);
});6
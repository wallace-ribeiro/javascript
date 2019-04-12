var express = require('express');
const uuidv4 = require('uuid/v4');
var app = express();
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded());

var logged = {};


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.get('/', function(req, res) {
  let token;
  if(req.headers.cookie) {
    token = req.headers.cookie.split("=")[1];
    console.log('cookie: ',req.headers.cookie)
    if(!logged[token]) {
      //token = uuidv4();
      //logged[token] = {counter: 0};
      logged[token] = {counter: 0};
      //res.cookie('userToken',token, { maxAge: 9000000000, httpOnly: false });
    }
  } else {
    token = uuidv4();
    logged[token] = {counter: 0};
    res.cookie('userToken',token, { maxAge: 9000000000, httpOnly: false });
  }
  
  res.sendFile("/root/cookies-backend/index.html");
});

app.get('/api/counter', function(req, res) {
  let counter = {counter: 0};
  if(req.headers.cookie) {
    token = req.headers.cookie.split("=")[1];
    console.log('cookie: ',req.headers.cookie)
    if(logged[token]) {
      counter = logged[token];
    } else {
      token = uuidv4();
      logged[token] = {counter: 0};
      res.cookie('userToken',token, { maxAge: 9000000000, httpOnly: false });
    }
  } else {
    token = uuidv4();
    logged[token] = {counter: 0};
    res.cookie('userToken',token, { maxAge: 9000000000, httpOnly: false });
  }
  res.send(JSON.stringify(counter));
});


app.post('/api/counter', function(req, res) {
  let counter = {counter: 0};
  if(req.headers.cookie) {
    token = req.headers.cookie.split("=")[1];
    console.log('cookie: ',req.headers.cookie)
    if(logged[token]) {
      logged[token].counter = logged[token].counter + 1;
      counter = logged[token];
    } else {
      //token = uuidv4();
      //logged[token] = {counter: 0};
      logged[token] = {counter: 0};
      //res.cookie('userToken',token, { maxAge: 9000000000, httpOnly: false });
    }
    
  } else {
    token = uuidv4();
    logged[token] = {counter: 0};
    res.cookie('userToken',token, { maxAge: 9000000000, httpOnly: false });
  }
  res.send(JSON.stringify(counter));
});

app.listen(3007, function () {
  console.log('Example app listening on port 3007!');
});

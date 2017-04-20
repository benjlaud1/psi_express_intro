var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

var songData = [
  {name: 'shake it off'},
  {name: 'what is going on'}
];

// middle ware that makes the files
// in the public folder visible
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/song', function(req, res) {
  console.log('in get song route');
  // all the work
  res.send(songData);
});

app.post('/', function (req, res) {
  console.log('in index post', req.body.name);
  console.log();
  console.log('in songData', songData);
  for (var i=0; i<songData.length; i++) {
    if (songData[i].name === req.body.name) {
      res.status(500).send('that song already exists');

    }
  }

  if (req.body.name === ''){
      res.status(501).send('cannot leave field blank');

  } else {
      songData.push(req.body);
      res.sendStatus(201);
    }



  // res.sendStatus(200);
  //songData.push(req.body);
  // res.sendStatus(201);
});

// app.post('/song', function(req, res) {
//   console.log('in post route');
//   console.log('req.body ->', req.body);
//   songData.push(req.body);
//   res.sendStatus(201);
// });

// tells our server to listen on 5000
app.listen(5000, function() {
  console.log('listening on port 5000');
});

// console.log('HEY CLASS!');

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = 8000;

require('./server/config/routes')(app);

app.use(bodyParser.json());
app.use(express.static(path.resolve('client')))
app.use(express.static(path.resolve('bower_components')))
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`)
})

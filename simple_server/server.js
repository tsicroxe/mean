var express = require('express'),
    path = require('path')
    bodyParser = require('body-parser'),
    PORT = 8000,
    app = express();

require('./server/config/mongoose.js');
require('./server/config/routes')(app);

app.use(bodyParser.json());
app.use(express.static(path.resolve('client')))
app.use(express.static(path.resolve('bower_components')))


app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`)
})

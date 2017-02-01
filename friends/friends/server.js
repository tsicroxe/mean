var express = require('express'),
    path = require('path')
    bodyParser = require('body-parser'),
    PORT = 8000,
    app = express();

require('./server/config/mongoose.js')
require('./server/config/routes')(app);

app.use(bodyParser.json());
app.use(express.static(path.resolve('client')))
app.use(express.static(path.resolve('bower_components')))

// set an environment variable called APPROOT to keep track of the root folder of your app
process.env['APPROOT'] = __dirname;

//require mongoose configuration, use path.join to build the route
require(path.join(process.env['APPROOT'], 'server/config/mongoose.js'));
//require routes configuration, get a function from the module.exports, that gets invoked while passing it the app
require(path.join(process.env['APPROOT'], 'server/config/routes.js'))(app);


app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`)
})

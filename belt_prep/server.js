var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    app = express(),
    PORT = 8000,
    session = require('express-session'),
    ejs = require('ejs'),
    cookieParser = require('cookie-parser')

    var sessionInfo = {
      secret: 'this is my secret cookie info',
      resave: false,
      saveUninitialized: true,
      name: 'Black Belt - Mean',
      cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 3600000
      }
    }

app.use(express.static(path.resolve('client')))
app.use(express.static(path.resolve('bower_components')))
app.use(cookieParser('cookieSecret'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(session(sessionInfo))


// set an environment variable called APPROOT to keep track of the root folder of your app
  process.env['APPROOT'] = __dirname;

  //require mongoose configuration, use path.join to build the route
  require(path.join(process.env['APPROOT'], 'server/config/mongoose.js'));
  //require routes configuration, get a function from the module.exports, that gets invoked while passing it the app
  require(path.join(process.env['APPROOT'], 'server/config/routes.js'))(app);

var server = app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`)
})

io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
	// (Listener) On Connection
 	console.log("Connected - Socket ID: ", socket.id);
  	// (Listener) On Disconnect
	socket.on('disconnect', function() {
		console.log("Disconnected - Socket ID: ", socket.id);
 	})

  //Actions below

});

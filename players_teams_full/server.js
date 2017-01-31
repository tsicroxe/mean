var express = require('express'),
    path = require('path')
    bodyParser = require('body-parser'),
    PORT = 8000,
    app = express();

    app.use(express.static(path.resolve('client')))
    app.use(express.static(path.resolve('bower_components')))
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json());

    require('./server/config/mongoose.js')
    require('./server/config/routes')(app);



    // set an environment variable called APPROOT to keep track of the root folder of your app
    process.env['APPROOT'] = __dirname;

    //require mongoose configuration, use path.join to build the route
    require(path.join(process.env['APPROOT'], 'server/config/mongoose.js'));
    //require routes configuration, get a function from the module.exports, that gets invoked while passing it the app
    require(path.join(process.env['APPROOT'], 'server/config/routes.js'))(app);

    // var routes = require(path.resolve('server', 'config', 'routes'))(app);

app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`)
})

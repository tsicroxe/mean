var express = require('express'),
    bodyParser = require('body-parser')
    app = express(),
    path = require('path'),
    PORT = 8000,
    session = require('express-session')

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.resolve('client')));


var sessionInfo = {
    secret: "CookieMonster",
    resave: false,
    saveUninitialized: true,
    name: 'myCookie',
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 3600000
    }
}

app.use(session(sessionInfo));
require('./server/config/db');

require('./server/config/routes')(app);

app.listen(PORT, function(){
    // console.log(session)
    console.log(`Listening on port ${PORT}`)
})

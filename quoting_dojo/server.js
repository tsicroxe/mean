var express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

require('./routes.js')(app);


app.listen(8000, function(){
  console.log("Listening on port 8000");
});

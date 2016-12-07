
var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var Dog = require('./database');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var path = require('path');

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {

    Dog.find({}, function(err, results){
        if (err) { console.log(err); }
        res.render('index', { dogs: results });
    });
})

app.get('/dogs/edit/:id', function(req, res){
    dog_id = req.params.id;
    Dog.find({_id: dog_id}, function(err, response){
        if (err) {console.log(err);}
        res.render('edit', {dog: response[0]});
    })
})

app.post('/dogs/edit/:id', function(req, res){
    dog_id = req.params.id;
    Dog.update({_id: dog_id}, req.body, function(err, response){
        if (err) {console.log(err);}
        res.redirect('/');
    });
});

app.post('/dogs/new', function(req, res){
    res.render('new');

})

app.post('/dogs/destroy/:id', function(req, res){
    dog_id = req.params.id;
    Dog.remove({_id: dog_id}, function(err, result){
        if(err){ console.log(err) };
        res.redirect('/')
    });
});

app.post('/dogs/create', function(req, res){
    var dog = new Dog(req.body);
    dog.save(function(err){
        if(err){
            console.log("Error creating new dog");
        }
    });
    res.redirect('/')
})


app.listen(8000, function() {
    console.log("listening on port 8000");
})

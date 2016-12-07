var Quote = require('./database.js');

module.exports = function(app){
  if(!app){throw Error('Must provide app object')}
  app.get('/', function(req, res){
    res.render('index');
  })
  app.post('/quotes', function(req, res){
    console.log(req.body);
    console.log('qutoe added');
    var quote = new Quote(req.body);
    quote.save(function(err){
      if(err){console.log('error adding quote')}
    })
    res.redirect('/quotes');
  })
  app.get('/quotes', function(req, res){
    Quote.find({}, function(err, results){
      console.log(results);
        if (err) { console.log(err); }
        res.render('quotes', { quotes: results });
    });
  })
};

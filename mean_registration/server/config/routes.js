var users = require('./../controllers/users.js');


module.exports = function(app){
	app.get('/login')
	app.get('/main', users.index)
	app.post('/register', users.register)
	app.post('/login', users.login)
	// app.post('/login', users.login);

}

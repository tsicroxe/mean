var users = require('./../controllers/users.js');


module.exports = function(app){
	// app.get('/dashboard')
	app.get('/verifySession', users.verifySession)
	app.get('/main', users.index)
	app.post('/register', users.register)
	app.post('/login', users.login)
	app.delete('/logout:id', users.logout)
	// app.post('/login', users.login);

}

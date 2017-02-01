var Users = require('../controllers/users');

module.exports = function(app){
  app.get('/', Users.index);
  app.post('/login', Users.login)
  app.post('/register', Users.register)

}

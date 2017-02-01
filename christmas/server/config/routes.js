var Main = require('../../controllers/main');

console.log('reached routes')
module.exports = function(app){
  app.get('/', Main.index);
  app.get('/challenge1', Main.challenge1)
}

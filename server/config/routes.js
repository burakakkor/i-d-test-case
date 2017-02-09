var apiController = require('../controllers/api');
var indexController = require('../controllers/index');

module.exports = function(app) {

	app.get('/', indexController.index);

  app.get('/api/data', apiController.getData);

  app.get('/api/cart', apiController.getCart);
  app.post('/api/cart', apiController.postCart);
  app.delete('/api/cart/:id', apiController.deleteCart);

};
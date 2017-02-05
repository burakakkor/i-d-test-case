var apiController = require('../controllers/api');
var indexController = require('../controllers/index');

module.exports = function(app) {

	app.get('/', indexController.index);
  app.get('/api/data', apiController.index);

};
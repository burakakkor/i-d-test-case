var indexController = require('../src/client/app/controllers/index');

module.exports = function(app) {
	
	require('./api')(app);

	app.get('/', indexController.index);

};
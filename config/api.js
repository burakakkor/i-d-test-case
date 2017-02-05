var fs = require('fs');
var path = require('path');

module.exports = function(app) { 

  app.get('/api/data', function(req, res) {    
    var json = JSON.parse(fs.readFileSync(path.join(__dirname, 'assets/data.json'), 'utf8'));
		res.json(json);
    
  });

};
var fs = require('fs');
var path = require('path');

exports.index = (req, res) => {
  var json = JSON.parse(fs.readFileSync('../config/assets/data.json'), 'utf8');
  res.json(json);
};

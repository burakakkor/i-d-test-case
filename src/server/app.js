var express = require('express');
var path = require('path');
var sass = require('node-sass-middleware');

var app = express();

var port = process.env.PORT || 3000;

port = (typeof port === "number") ? port : 3000;

app.use(sass({
  src: path.join(__dirname, 'src/public/css'),
  dest: path.join(__dirname, 'src/public/css/dist'),
  force: true,
  outputStyle: 'compressed',
  prefix: '/public/css'
}));

app.set('port', port);
app.set('views', path.join(__dirname, 'src/public/views/pug'));
app.set('view engine', 'pug');

app.use('/public', express.static(path.join(__dirname, 'src/public')));
app.use('/lib', express.static(path.join(__dirname, 'node_modules')));
app.use('/', express.static(path.join(__dirname, '/')));

require('./config/routes')(app);

if (!module.parent) { 
  app.listen(app.get('port'));
}

module.exports = app;
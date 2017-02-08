var express = require('express');
var path = require('path');
var sass = require('node-sass-middleware');
var bodyParser = require('body-parser')

var app = express();

var port = process.env.PORT || 3000;

port = (typeof port === "number") ? port : 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(sass({
  src: path.join(__dirname, '../src/public/css/lib/main'),
  dest: path.join(__dirname, '../src/public/css/dist'),
  force: true,
  outputStyle: 'compressed',
  prefix: '/public/css'
}));

app.set('port', port);
app.set('views', path.join(__dirname, '../src/public/views/pug'));
app.set('view engine', 'pug');

app.use('/public', express.static(path.join(__dirname, '../src/public')));
app.use('/lib', express.static(path.join(__dirname, '../node_modules')));
app.use('/', express.static(path.join(__dirname, '../')));

require('./config/routes')(app);

if (!module.parent) { 
  app.listen(app.get('port'), function () {
    console.log('App started on port 3000, try localhost:3000');
  });
}

module.exports = app;
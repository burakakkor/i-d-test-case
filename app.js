var express = require('express');
var path = require('path');

var indexController = require('./src/client/app/controllers/index');

var app = express();

app.set('port', 3000);
app.set('views', path.join(__dirname, 'src/client/app/views'));
app.set('view engine', 'pug');

app.get('/', indexController.index);

app.use(express.static(path.join(__dirname, 'src/client/app/assets')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/', express.static(path.join(__dirname, '/')));

app.listen(app.get('port'), () => {
  console.log('**App is running at http://localhost:%d', app.get('port'));
  console.log('**Press CTRL-C to stop\n');
});

module.exports = app;
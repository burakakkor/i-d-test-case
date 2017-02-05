var express = require('express');
var path = require('path');

var app = express();

var port = process.env.PORT || (process.argv[2] || 3000);

port = (typeof port === "number") ? port : 3000;

app.set('port', port);
app.set('views', path.join(__dirname, 'src/client/app/views'));
app.set('view engine', 'pug');

app.use('/assets', express.static(path.join(__dirname, 'src/client/app/assets')));
// app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/', express.static(path.join(__dirname, '/')));

require('./config/routes')(app);

if (!module.parent) { 
  app.listen(app.get('port'), () => {
    console.log('**App is running at http://localhost:%d', app.get('port'));
    console.log('**Press CTRL-C to stop\n');
  });
}

module.exports = app;
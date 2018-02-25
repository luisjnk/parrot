
var express = require('express')
    ,app = express()
    ,routes = require('../app/routes')
    ,path =  require('path')
    ,bodyParser = require('body-parser');
  
var config = require('./config.js');
require('./mongodb.js')(config.config.mongodDB.database);

app.set('clientPath', path.join(__dirname, '../..', 'client'));
app.use(express.static(app.get('clientPath')));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


routes(app);

module.exports = app;
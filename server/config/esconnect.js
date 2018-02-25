var elasticsearch = require('elasticsearch');
var config = require('./config')

var client = new elasticsearch.Client(config.config.elasticSearch);

module.exports = client;

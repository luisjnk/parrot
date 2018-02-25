let config = require('./app-config.json')[process.env.NODE_ENV || 'development'];
//let config = require(env.configPath + 'application-ogma-api.json')[process.env.NODE_ENV || 'development'];

module.exports.config = config;
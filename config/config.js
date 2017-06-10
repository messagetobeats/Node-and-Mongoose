var _ = require('lodash');

var config = {
                dev: 'development', // development, production, testing
                port: process.env.PORT || 4000
             }

config.env = process.env.NODE_ENV || config.dev;

var envConfig = require('./'+ config.env);


config = _.merge(config, envConfig);
module.exports = config;

const credentials = require('./credentials.js');

const db = module.exports = require('monk')(credentials.uri());

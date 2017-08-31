const credentials = require('./credentials.js');

const db = module.exports = require('monk')(credentials.uri(), function(err, _db) {

	console.log("hey, connected!", err || "");
	if (err) throw new Error('There was an error!');
});

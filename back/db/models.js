const monkdb = require('./monkdb.js');
const models = module.exports = {

	/* additional collections go here */
	books: monkdb.get('books')
};

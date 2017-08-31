const db = require('./db.js');
const models = module.exports = {

	/* additional collections go here */
	books: db.get('books'),
	users: db.get('users')
};

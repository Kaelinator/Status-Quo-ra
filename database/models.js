const db = require('./database.js')

const models = module.exports = {

	/* additional collections go here */
	profiles: db.get('profiles')
}

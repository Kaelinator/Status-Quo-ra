const credentials = require('./credentials.js')

const db = module.exports = require('monk')(credentials.uri(), (err) => {
	if (err) throw new Error('Couldn\'t connect to database')
})

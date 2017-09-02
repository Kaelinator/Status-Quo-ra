
const errors = module.exports = {}

errors.internal = (err, req, res, next) => {
	res.status(500)
		.send('500 : error!')
}

errors.client = (req, res) => {
	res.status(404)
		.send('400 : Not found!')
}

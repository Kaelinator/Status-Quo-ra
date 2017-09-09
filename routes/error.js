
const errors = module.exports = {}

errors.internal = (err, req, res, next) => {
	res.status(500)
		.send(res)
}

errors.client = (req, res) => {
	res.status(404)
		.send('400 : Not found!')
}

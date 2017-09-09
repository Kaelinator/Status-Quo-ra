const express = require('express')
const router = module.exports = express.Router()
const {profiles} = require('../database/models.js')

router.route('/:query?')
	.get(find)

function find(req, res, next) {

	profiles.find()
		.then((u) => res.render('users.pug', {results: u}))
		.catch((err) => { next(err) })
}

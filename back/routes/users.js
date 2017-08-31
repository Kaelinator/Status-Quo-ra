const express = require('express');
const router = module.exports = express.Router();
const {users} = require('../db/models.js');

router.route('/:query?')
	.get(find);

function find(req, res, next) {
	console.log('Starting route', res && res.render);
	users.find()
		.then((u) => res.render('users.pug', {results: u}))
		.catch(err => console.error('USER.FIND ERROR', err));
}

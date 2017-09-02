const {test} = require('../database/models.js')

const find = () => test.find()
const remove = () => test.remove({name: 'Jack'});

test.insert({name: 'Jack', age: -55, pet: 'platypus'})
	.then(find)
	.then(remove)

const {users} = require('../db/models.js');

users.insert({name: 'Jack', age: -55, pet: 'platypus'})
	.then(find);

function find() {

	return users.find()
	.then((x) => console.log(x));
}

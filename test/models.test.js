
const tape = require('tape').test
const {test} = require('../database/models.js')

const data = {name: 'Judy', age: 24, pet: 'carrot'}

tape('Test model', t => {

  test.insert(data).then((entry) => {

		t.equal(data.name, entry.name, 'should push one entry into the database')
	})
	.then(test.find(data).then((res) => {

		t.equal(res.length, 1, 'should find the one entry')
	}))
	.then(test.remove(data).then((res) => {

		t.equal(res.result.ok, 1, 'should delete the one entry')
		test.manager.close()
		t.end()
	}))

})

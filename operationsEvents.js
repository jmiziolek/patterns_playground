const queue = require('./queue');
const db = require('./db');

const OPERATION_LOG = 'operation_log';

queue.process(OPERATION_LOG, (event, done) => {
	//validations, saving in real DB
	// eventual consistency
	return setTimeout(() => {
		db.add(event);
		return done();
	}, 5000);
})

module.exports = (req, res, next) => {
	queue.create(OPERATION_LOG, req.body);
	return res.send({
		data: req.body,
		message: 'event added',
	})
}

const kue = require('kue');
const jobs = kue.createQueue({
	prefix: 'zuo',
	redis: 'redis://127.0.0.1:6379'
});

kue.app.listen(4000);

module.exports = {
	create: jobs.create.bind(jobs),
	process: jobs.process.bind(jobs)
}

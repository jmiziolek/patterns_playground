const request = require('supertest');
const app = require('../server');

describe('Operation Event Log', () => {
	test('List is initially empty', async () => {
		const res = await app.get('/v1/operations_log');
		console.log(res);
	})
})

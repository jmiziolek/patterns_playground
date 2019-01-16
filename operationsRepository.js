const DB = require('./db');

class OperationsRepository {
	constructor(db = DB) {
		this.db = db;
	}
	getAll() {
		return this.db.getAll();
	}
	getLast(type) {
		return this.db.getLast();
	}
}

module.exports = OperationsRepository;

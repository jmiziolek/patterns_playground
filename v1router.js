const express = require('express');
const router = express.Router();

const OperationsRepository = require('./operationsRepository');
const opRepo = new OperationsRepository();
const operationEvents = require('./operationsEvents');

router.route('/operations_log')
	.get(opRepo.getAll)
	.post(operationEvents)

module.exports = router;

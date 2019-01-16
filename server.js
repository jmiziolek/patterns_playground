'use strict';

const debug = require('debug')
const helmet = require('helmet')
const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');
const v1Router = require('./v1router');
const app = express();

app.use(helmet())
	.options('*', cors())
	.use(cors())
	.use(bodyParser.json())
	.use('/v1', v1Router)
	.set('json spaces', 2);

	const server = app.listen(3000);

	process.on('unhandledrejection', (error) => {
		debug('unhandledrejection', error);
		process.exit(1);
	});

'use strict';

const DB = Symbol.for("DB");
var globalSymbols = Object.getOwnPropertySymbols(global);
var hasDB = (globalSymbols.indexOf(DB) > -1);

if (!hasDB){
  global[DB] = [];
}

// define the singleton API
const singleton = {
	getAll: () => DB.concat(),
	getLast: () => {
		return DB[DB.length - 1];
	},
	add: (logEvent) => {
		DB.push(logEvent);
	}
};


// ensure the API is never changed
Object.freeze(singleton);

// export the singleton API only
module.exports = singleton;

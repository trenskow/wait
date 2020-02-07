'use strict';

const ms = require('ms');

module.exports = exports = (interval) => {
	return new Promise((resolv) => {
		setTimeout(resolv, ms(interval));
	});
};

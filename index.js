'use strict';

const ms = require('ms');

module.exports = exports = (interval) => {
	return new Promise((resolv) => {
		setInterval(resolv, ms(interval));
	});
};

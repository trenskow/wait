'use strict';

const ms = require('ms');

module.exports = exports = (interval) => {
	return new Promise((resolve) => {
		if (typeof interval === 'string') interval = ms(interval);
		setTimeout(resolve, interval);
	});
};

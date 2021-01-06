'use strict';

const
	{ duration } = require('@trenskow/units');

module.exports = exports = (interval) => {

	let timeoutId;
	let resolver;

	let result = new Promise((resolve) => {
		if (typeof interval === 'string') interval = duration.ms(interval);
		resolver = resolve;
		timeoutId = setTimeout(resolve, interval);
	});

	result.elapse = () => {
		clearTimeout(timeoutId);
		resolver();
	};

	return result;
};

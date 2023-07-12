//
// index.js
// @trenskow/app
//
// Created by Kristian Trenskow on 2023/07/12
// For license see LICENSE.
//

import { duration } from '@trenskow/units';

const wait = (interval) => {

	let timeoutId;
	let resolver;

	let result = new Promise((resolve) => {
		if (typeof interval === 'string') interval = duration.ms(interval);
		resolver = resolve;
		timeoutId = setTimeout(resolve, interval);
	});

	result.cancel = () => {
		clearTimeout(timeoutId);
		resolver();
	};

	result.elapse = result.cancel;

	result.delayed = async (todo) => {

		let todoResult = (await Promise.allSettled([
			Promise.resolve(todo(result.cancel)),
			result
		]))[0];

		if (todoResult.status === 'rejected') throw todoResult.reason;

		return todoResult.value;

	};

	return result;

};

export default wait;

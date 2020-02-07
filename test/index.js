'use strict';

require('chai').use(require('chai-as-promised'));

const { expect } = require('chai');

const wait = require('../');

describe('wait', () => {
	it('should wait one seconds.', () => {
		const startTime = new Date();
		return expect(
			wait('1s').then(() => {
				return (new Date()).getTime() - startTime.getTime();
			}))
			.to.eventually.be.satisfy((val) => val >= 1000);
	});
});

'use strict';

require('chai').use(require('chai-as-promised'));

const { expect } = require('chai');

const wait = require('../');

describe('wait', () => {
	it('should wait one seconds (string).', () => {
		const startTime = new Date();
		return expect(
			wait('1s').then(() => {
				return (new Date()).getTime() - startTime.getTime();
			}))
			.to.eventually.be.satisfy((val) => val >= 1000);
	});
	it('should wait one seconds (number).', () => {
		const startTime = new Date();
		return expect(
			wait(1000).then(() => {
				return (new Date()).getTime() - startTime.getTime();
			}))
			.to.eventually.be.satisfy((val) => val >= 1000);
	});
	it ('should elapse after 200ms', () => {
		const startTime = new Date();
		const promise = wait(1000);
		setTimeout(promise.elapse, 200);
		return expect(
			promise.then(() => {
				return (new Date()).getTime() - startTime.getTime();
			}))
			.to.eventually.be.satisfies((val) => val >= 200 && val <= 250);
	});
});

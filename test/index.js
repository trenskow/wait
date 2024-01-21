//
// index.js
// @trenskow/wait
//
// Created by Kristian Trenskow on 2023/07/12
// For license see LICENSE.
//

import { use as chaiUse, expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';

import wait from '../index.js';

chaiUse(chaiAsPromised);

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
	it ('delayed function should return the correct value.', () => {
		const startTime = new Date();
		return expect(
			wait(1000).delayed(async () => {
				return 'Hello, World!';
			}).then((result) => {
				expect((new Date()).getTime() - startTime.getTime()).to.satisfies((val) => val >= 1000);
				return result;
			}))
			.to.eventually.equal('Hello, World!');

	});
	it ('delayed function should throw an error.', () => {
		const startTime = new Date();
		return expect(
			wait(1000).delayed(async () => {
				throw new Error('This is an error!');
			}).catch((error) => {
				expect((new Date()).getTime() - startTime.getTime()).to.satisfies((val) => val >= 1000);
				throw error;
			}))
			.to.eventually.be.rejectedWith('This is an error!');

	});
});

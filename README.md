@trenskow/wait
----

A promisified version of `setTimeout`.

# Usage

````javascript
const wait = require('@trenskow/wait');

await wait('2s');
`````
> Waits two seconds.

## Time Interval Format

Internally it uses the [ms](https://npmjs.org/package/ms) package – see that package for documentation.

## Cancelling

You can also cancel the wait before the specified time.

````javascript
const waiter = wait('2s');

setTimeout(waiter.elapse, 1000);

await waiter;

/* returns after one second instead of two because `setTimeout` triggers the elapse function of `waiter`. */

````

# License

MIT (see license)

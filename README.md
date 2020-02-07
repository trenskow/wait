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

# License

MIT (see license)

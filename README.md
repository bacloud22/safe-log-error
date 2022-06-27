# safe-log-error

**SafeLogError** is an Error. A JS Error wrapper that limits `err.message` to some fixed length if the same error
has been seen in a time window.  
The "same" error is defined either by the same exact message, or the same message
plus the same stack, or with a user defined callback that decides uniqueness.  
<hr>
<br>

`format` reformats `(err.message, err.stack)`. If not provided, we split the `err.message` by: 

> `str.slice(0, 120) + nearest function call in the stack`

*120* is chosen arbitrarily in **SafeLogError** while It is generally a good length of a line (Word wrap in IDEs)

`unique` is uniqueness function. If not provided, we calculate:
>`err.message + err.stack`

The return object is a "safe to log" error object. Stack is left intact ! You are supposed to only log the message (knowing the purpose of this !)

## Example  
```js
const { SafeLogError } = require(".");

// Example
function test(safeLogger1) {
  try {
      null.f()
  } catch (error) {
      throw new safeLogger1(error);
  }

}
const unique = (message, stack) => message + stack
let format = (message, stack) => message.slice(0, 120) + '\t' +stack.split('at')[1].trim()
let window = 100 // milliseconds
const safeLogger1 = SafeLogError(window, format, unique)
for (let index = 0; index < 100; index++) {
  try {
      test(safeLogger1);
  } catch (err) {
      console.log(err.message);
  }
}
```

## License
### author
A.B. 2022  
MIT
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
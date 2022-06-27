# safe-log-error

*SafeLogError* is an Error. A JS Error wrapper that limits `err.message` to some fixed length if the same error
has been seen in a time window. The "same" error is defined either by the same exact message, or the same message
plus the same stack, or with a user defined callback that decides uniqueness.
 *
`format` reformats (err.message, err.stack). If not provided, we split the err.message by: str.slice(0, 120) + nearest function call in the stack
120 is chosen arbitrarily in *SafeLogError* while It is generally a good length of a line (Word wrap in IDEs)
`unique` uniqueness function. If not provided, we calculate err.message + err.stack

The return object is a "safe to log" error object. Stack is left intact ! You are supposed to only log the message (knowing the purpose of this !)

## License
### author
A.B. 2022  
MIT
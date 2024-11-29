# Exercise 7: Function Arguments and Variadic Tuple Types

Based on the types of exercise 3, create a function `safe` that

- accepts any function `fn` as first arguments
- accepts the parameters of `fn` as the rest of the arguments
- returns a `Result<T>` where `T` is the return value of `fn`
- if `fn` errors, it wraps the error message in an `ErrorT`

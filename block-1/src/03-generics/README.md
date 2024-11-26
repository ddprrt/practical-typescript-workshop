# Exercise 3: Error Handling and Generics

Implement the following types in `task.ts`:

- `ErrorT` type that represents an error with a message
- `Success<T>` type that represents a successful result with a value of type `T`
- `Result` type that represents either a successful result with a value or an error with a message

Implement the following functions:

- `success` that creates a `Success` type
- `error` that creates an `ErrorT` type
- `handleResult` that unwraps the value of `Result<T>` or returns `null` if it's an error

# Exercise 5: Generic Constraints

Create the following types and functions in `task.ts`:

- `EventType` type that represents a valid event type, eg. `click`, `focus`, `blur`
- `Event` type that reperesents a corresponding event, e.g. `onClick`, `onFocus`, `onBlur`
- `EventHandler<T>` type that represents a function that handles an event of type `T`. The function has a single parameter of type `Event` and returns `void`.
- A function `addEventListener` that accepts an `Event` and an `EventHandler<T>` and returns `void`. The function should add the event handler to the event map.
- The function `addEventListener` should make sure that the event in the event handler matches the event type. E.g. if the event is `onClick`, the event handler should be `EventHandler<"onClick">`.

## Stretch goals:

- Design your `addEventListener` and `EventHandler` types in a way that `addEventListener` accepts `Event`, but passes `EventType` to the `EventHandler`.

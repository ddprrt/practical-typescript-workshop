type Result<T, E = Error> =
  | { success: true; value: T }
  | { success: false; error: E };

//@ts-expect-error
function handleResult<T>(result: Result<T>): T {}

export {};

type Result<T, E = Error> =
  | { success: true; value: T }
  | { success: false; error: E };

function handleResult<T>(result: Result<T>): T {
  switch (true) {
    case result.success:
      return result.value;
    case !result.success && result.error instanceof TypeError:
      throw new Error(`Type error: ${result.error.message}`);
    case !result.success && result.error instanceof RangeError:
      throw new Error(`Range error: ${result.error.message}`);
    default:
      throw result.error;
  }
}

export {};

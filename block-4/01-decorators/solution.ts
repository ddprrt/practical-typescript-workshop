function logMethod<This, Args extends any[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >,
) {
  const methodName = String(context.name);

  function replacementMethod(this: This, ...args: Args): Return {
    console.log(`LOG: Entering method '${methodName}'.`);
    let result = target.call(this, ...args);

    if (result instanceof Promise) {
      return result.then((value) => {
        console.log(`LOG: Exiting method '${methodName}'.`);
        return value;
      }) as Return;
    }
    console.log(`LOG: Exiting method '${methodName}'.`);
    return result;
  }

  return replacementMethod;
}

interface Id {
  id: number;
  name: string;
}

class UserService {
  @logMethod
  getUserById(id: number): Id {
    return { id, name: "John Doe" };
  }

  @logMethod
  async getUserByIdAsync(id: number): Promise<Id> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return { id, name: "John Doe" };
  }
}

export {};

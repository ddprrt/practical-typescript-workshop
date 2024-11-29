// Implement a logging decorator that preserves type information
// and logs method parameters, return value, and execution time

function logMethod() {
  return function <T extends (...args: any[]) => any>(
    originalMethod: T,
    context: ClassMethodDecoratorContext,
  ) {};
}

interface Id {
  id: number;
  name: string;
}

class UserService {
  getUserById(id: number): Id {
    return { id, name: "John Doe" };
  }

  async getUserByIdAsync(id: number): Promise<Id> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return { id, name: "John Doe" };
  }
}

export {};

const serializables = new WeakMap<object, string[]>();

//@ts-expect-error
Symbol.metadata ??= Symbol("Symbol.metadata");

type Context =
  | ClassAccessorDecoratorContext
  | ClassGetterDecoratorContext
  | ClassFieldDecoratorContext;

export function serialize(_target: any, context: Context): void {
  // push the propnames to the serializables map
}

export function jsonify(instance: object): string {
  // load the serializables
  return "";
}

class Person {
  firstName: string;
  lastName: string;

  @serialize
  age: number;

  @serialize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  toJSON() {
    return jsonify(this);
  }

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

let me = new Person("John", "Doe", 42);

export {};

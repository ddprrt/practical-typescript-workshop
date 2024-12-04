# Exercise 9: Decorator Metadata

Whenever decorator functions are used, they now have access to a new metadata property on their context object. The metadata property just holds a simple object. Since JavaScript lets us add properties arbitrarily, it can be used as a dictionary that is updated by each decorator. Alternatively, since every metadata object will be identical for each decorated portion of a class, it can be used as a key into a Map. After all decorators on or in a class get run, that object can be accessed on the class via `Symbol.metadata`.

- The `serialize` decorator is used to mark properties that should be included in the JSON representation of an object.
- It stores the property name in a serializables object.
- The `jsonify` function should return a JSON representation of the object instance.
- It should only include the properties that have been marked with the `@serialize` decorator.

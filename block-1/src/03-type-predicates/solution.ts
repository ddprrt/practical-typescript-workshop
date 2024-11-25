interface Cat {
  type: "cat";
  meow(): void;
}

interface Dog {
  type: "dog";
  bark(): void;
}

type Animal = Cat | Dog;

// Type predicate
function isCat(animal: Animal): animal is Cat {
  return animal.type === "cat";
}

function isDog(animal: Animal): animal is Dog {
  return animal.type === "dog";
}

// Using type predicates
function makeAnimalSound(animal: Animal): void {
  if (isCat(animal)) {
    animal.meow(); // TypeScript knows this is safe
  } else {
    animal.bark(); // TypeScript knows this is a Dog
  }
}

export {};

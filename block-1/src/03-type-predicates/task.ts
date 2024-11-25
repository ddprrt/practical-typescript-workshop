// Implement these type predicates

interface Cat {
  type: "cat";
  meow(): void;
}

interface Dog {
  type: "dog";
  bark(): void;
}

type Animal = Cat | Dog;

// 1. Implement type predicates
function isCat(animal: Animal): boolean {
  // Implement
  return false;
}

// 2. Use type predicates in a function
function makeAnimalSound(animal: Animal): void {
  // Implement
}

export {};

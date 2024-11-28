**WARNING** WORK IN PROGRESS NOT READY TO CLONE (Update Dec. 1)

# Workshop: Practical TypeScript

This repository contains the contents for the Practical TypeScript workshop.

## Prerequisites

1. Node.js 22+
2. An TypeScript capable editor (e.g. Visual Studio Code, Zed, ...)

## Contents

### 1. Type System Fundamentals

Contents are found in [block-1](./block-1). You can install dependencies but they're not requried as long as you use a TypeScript capable editor.

We work on the

- [Union and Intersection Types](./block-1/src/01-union-intersection)
- [Type Predicates](./block-1/src/02-type-predicates)
- [Generics](./block-1/src/03-generics)
- [Template Literal Types](./block-1/src/04-template-literals)
- [Generic Constraints](./block-1/src/05-generic-constraints)
- [Variadic Tuples](./block-1/src/06-variadic-tuples)
- [Function Arguments](./block-1/src/07-function-arguments)
- [Conditional Types](./block-1/src/08-conditional-types)

Please follow these steps:

1. Navigate to each folder
2. Read the README.md
3. Try to implement the task in `task.ts`
4. Compare with `solution.ts`


### 2. Type Design

Contents are found in [block-2-3](./block-2-3). Please find the worst Angular application ever written and navigate around. Got to [the project folder](./block-2-3/project), install the dependencies and try to compile the software.

We discuss and refactor the design of our `Task` types and the SDK, including:

- States vs boolean flags
- Inference vs Annotation
- Derived types
- Interfaces vs. type aliases
- return types
- Class design
- `null` and `undefined`
- Optional types

`crib.ts` contains a cheat sheet should you get lost.

### 3. Backend Communication

Continued in [block-2-3](./block-2-3/). We discuss and refactor the design of backend/server communication, including:

- SDK as part of the project (or its separate package)
- Shared types
- Validation with Yup / Zod
- Error handling

### 4. TypeScript 5+ Features

Contents are found in [block-4](./block-4). You can install dependencies but they're not requried as long as you use a TypeScript capable editor.

We look at some of the most noteworthy TypeScript 5+ features, including:

- [Well-Typed Decorators](./block-4/01-decorators)
- [const Type Parameters](./block-4/02-const-type-parameters)
- [satisfies Operator](./block-4/03-satisfies)
- [Method Overrides in Classes](./block-4/04-override)
- [Unrelated Types for Getters and Setters](./block-4/05-getter-setter-types)
- [using Declarations](./block-4/06-using)
- [The NoInfer Utility Type](./block-4/07-no-infer)
- [switch(true) Type Narrowing](./block-4/08-switch-true)
- [Decorator Metadata](./block-4/09-decorator-metadata)

Please follow these steps:

1. Navigate to each folder
2. Read the README.md
3. Try to implement the task in `task.ts`
4. Compare with `solution.ts`

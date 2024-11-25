// 1. String subset
type SolutionStringSubset = 'a' | 'b' | 'c';

// 2. Empty set
type SolutionEmptySet = never;

// 3. Universal set
type SolutionUniversalSet = unknown;

// 4. Set operations
type A = { a: string };
type B = { b: number };

type SolutionUnion = A | B;
type SolutionIntersection = A & B;

// 5. Type guard implementation
function isInStringSubset(value: unknown): value is SolutionStringSubset {
  return typeof value === 'string' && ['a', 'b', 'c'].includes(value);
}
import { fibsRec as fibs } from './fibonacci.js';

test('module exists', () => {
  expect(fibs).toBeDefined;
});

test('returns an array', () => {
  expect(Array.isArray(fibs())).toBe(true);
});

test('base cases', () => {
  expect(fibs(0)).toStrictEqual([]);
  expect(fibs(1)).toStrictEqual([0]);
});

test('two array elements', () => {
  expect(fibs(2)).toStrictEqual([0, 1]);
});

test('first addition', () => {
  expect(fibs(3)).toStrictEqual([0, 1, 1]);
});

test('n = 8', () => {
  expect(fibs(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

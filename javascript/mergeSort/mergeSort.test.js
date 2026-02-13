import mergeSort from './mergeSort.js';

test('module exists', () => {
  expect(mergeSort).toBeDefined;
});

test('errors when parameter != array', () => {
  expect(mergeSort(1)).toBe(null);
  expect(mergeSort('1')).toBe(null);
  expect(mergeSort(undefined)).toBe(null);
});

test('returns an array', () => {
  expect(Array.isArray(mergeSort([1, 2, 3]))).toBe(true);
});

test('base case', () => {
  expect(mergeSort([1])).toStrictEqual([1]);
  expect(mergeSort([2])).toStrictEqual([2]);
});

test('sort unsorted array', () => {
  expect(mergeSort([3, 2, 1])).toStrictEqual([1, 2, 3]);
  expect(mergeSort([4, 2, 1, 3])).toStrictEqual([1, 2, 3, 4]);
});

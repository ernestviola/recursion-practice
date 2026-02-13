/*
[3,2,1]
arr.length = 3


midpoint (1) = Math.floor(arr.length / 2)
left = arr.slice(0, midpoint)
right = arr.slice(midpoint, arr.length)

*/

export default function mergeSort(arr) {
  if (!Array.isArray(arr)) return null;
  if (arr.length === 1) {
    return arr;
  }
  // split into left and right, then merge
  const midpoint = Math.floor(arr.length / 2);
  const leftArr = mergeSort(arr.slice(0, midpoint));
  const rightArr = mergeSort(arr.slice(midpoint, arr.length));

  let leftPointer = 0;
  let rightPointer = 0;
  const newArr = [];

  while (leftPointer < leftArr.length || rightPointer < rightArr.length) {
    let nextVal;

    if (leftPointer >= leftArr.length) {
      // automatic right
      nextVal = rightArr[rightPointer];
      rightPointer++;
    } else if (rightPointer >= rightArr.length) {
      // automatic right
      nextVal = leftArr[leftPointer];
      leftPointer++;
    } else if (leftArr[leftPointer] < rightArr[rightPointer]) {
      nextVal = leftArr[leftPointer];
      leftPointer++;
    } else {
      nextVal = rightArr[rightPointer];
      rightPointer++;
    }
    newArr.push(nextVal);
    console.log('what');
  }

  return newArr;
}

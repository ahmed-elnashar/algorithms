let arr = [1, 4, 8, 6, 8, 5, 9, 2];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // set current index as minimum
    let min = i;
    let temp = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        // update minimum if current indx is lower than what we had previously
        min = j;
      }
    }
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

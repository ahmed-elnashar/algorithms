let arr = [1, 4, 8, 6, 80, 5, 9, 2];

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      // move number of the first position;
      arr.unshift(arr.splice(i, 1)[0]);
    } else {
      // find where number should go
      for (let j = 1; j < i; j++) {
        if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
          // mover number to the right spot
          arr.splice(j, 0, arr.splice(i, 1)[0]);
        }
      }
    }
  }
  return arr;
}

insertionSort(arr);

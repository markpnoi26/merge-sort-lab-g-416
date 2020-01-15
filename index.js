function findMinAndRemoveSorted(array) {
  let min = array[0]
  let minIndex = 0
  
  array.forEach(element => {
    if (element < min) {
      min = element
      minIndex = array.indexOf(element)
    }
  })
  
  array.splice(minIndex, 1)
  return min
}

function merge(arrayOne, arrayTwo) {
  let sorted = []
  
  while (arrayOne.length !== 0 && arrayTwo.length !== 0) {
    if (arrayOne[0] < arrayTwo[0]) {
      sorted.push(findMinAndRemoveSorted(arrayOne))
    } else if (arrayOne[0] > arrayTwo[0]) {
      sorted.push(findMinAndRemoveSorted(arrayTwo))
    } 
  }
  return sorted.concat(arrayOne).concat(arrayTwo)
}

function mergeSort(unsortedArray) {
  let arrayOne;
  let arrayTwo;
  
  if (arrayOne)
}
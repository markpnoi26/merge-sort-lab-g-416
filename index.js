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
    if (arrayOne[0] > arrayTwo[0]) {
      sorted.push(findMinAndRemoveSorted())
    } else if (arrayOne[0] < arrayTwo[0]) {
      sorted.push(arrayOne.shift())
    } else if (arrayOne === undefined || arrayOne.length === 0) {
      sorted.push(arrayTwo.shift())
    } else if (arrayTwo === undefined || arrayTwo.length === 0) {
      sorted.push(arrayOne.shift())
    } 
  }
  return sorted
}

let firstSubarray = [3, 4, 6, 7]
let secondSubArray = [1, 2, 5, 8]
console.log(merge(firstSubarray, secondSubArray))
console.log(firstSubarray)
console.log(secondSubArray)
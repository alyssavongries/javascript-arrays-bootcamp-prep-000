var chocolateBars = ["snickers", "hundred-grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {  
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
<<<<<<< HEAD
  return array
=======
  console.log(array)
>>>>>>> 438f1452f862f9925d4629fc44dea4a1a89065d8
}

function addElementToEndOfArray (array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
<<<<<<< HEAD
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
=======
  console.log(array)
}

function accessElementInArray(array, index) {
  console.log(array[index])
}

function destructivelyRemoveElementFromBeinginningOfArray(array) {
>>>>>>> 438f1452f862f9925d4629fc44dea4a1a89065d8
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}


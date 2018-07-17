var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var candy = 'foo'

function addElementToBeginningOfArray(chocolateBars, candy){
  return [candy, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candy){
  chocolateBars.unshift(candy);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, candy){
  return [...chocolateBars, candy];
}

function destructivelyAddElementToEndOfArray(chocolateBars, candy){
  chocolateBars.push(candy);
  return chocolateBars;
}

function accessElementInArray(array, element){
  return array[element];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  return chocolateBars.pop();
}

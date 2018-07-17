var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var candy = 'foo'

function addElementToBeginningOfArray(chocolateBars, candy){
  [candy, ...chocolateBars];
  return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candy){
  chocolateBars.unshift(candy);
  return chocolateBars;
}

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(chocolateBars, '1'){
  ['1', ...chocolateBars];
  return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, '1'){
  chocolateBars.unshift('1');
  return chocolateBars;
}

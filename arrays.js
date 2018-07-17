chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, '1'){
  const array = ['two', 'three'];
  ['1', ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, '1'){
  var array = ['two', 'three'];
  array.unshift('1');
  return array;
}

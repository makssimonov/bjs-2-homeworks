function compareArrays(arr1, arr2) {
  let result;
  
  result = arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);
  
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  const array = arr
    .filter((arr) => arr > -1)
    .filter((arr) => arr % 3 === 0)
    .map((arr) => arr * 10)
  
  resultArr = array;
  return resultArr; //array
}

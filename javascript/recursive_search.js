function recursiveSearch(arr, target) {
  // base case
  if (arr.length === 0) {
    return false;
  }
  if (arr[0] === target) {
    return true;
  }
  return recursiveSearch(arr.slice(1), target);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));

  console.log("expecting true");
  console.log(recursiveSearch([5, 4, 6, 8, 9, 10, 23, 25], 10));

  console.log("expecting false");
  console.log(recursiveSearch([], 5));

  console.log("expecting true");
  console.log(recursiveSearch([2], 2));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution
/*
Problem: given an array and a target, return true if the target is in the array, and false if not. Use recursion.
Base case: if array length is zero, return false.
if array[0] equals target, return true.
otherwise, return result of recursive search again, passing in array with the first element sliced off.
*/

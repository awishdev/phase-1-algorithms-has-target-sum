function hasTargetSum(array, target) {
    for (let tester = 0; tester < array.length; tester++) {
      for (let testee = tester + 1; testee < array.length; testee++) {
        if (target === array[tester] + array[testee]) {
          return true;
        }
      }
    }
    return false
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
  quadratic
*/

/* 
  Add your pseudocode here
  I use flowcharts on a whiteboard and stickynotes
  Nested iteration to check each num for sum
*/

/*
  Add written explanation of your solution here
  iterate through array checking each number with each other to check
  for the sum and return true if found.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

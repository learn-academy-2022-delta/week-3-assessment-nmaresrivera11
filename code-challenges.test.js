// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("nocchi", () => {
    it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
        const fibLength1 = 6
        // Expected output: [1, 1, 2, 3, 5, 8]
        const fibLength2 = 10
        // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
      expect(nocchi(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
      expect(nocchi(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
  })
//   ReferenceError: nocchi is not defined

/* Psuedo Code:
- Create a function called nocchi
- The function will take a number (to be it's index of the new array)
- The new array will be known as fibArr
- [1, 1] is to return the same 0, 1 indexes so that the fibonacci sequence can start after that
- Iterate over until the given number is met
- Output the length of that number in indexes using the fibonacci sequence
*/

// b) Create the function that makes the test pass.

let nocchi = (number) => {
        let fibArr = [1, 1]
        for (let i=2; i < number; i++) {
                fibArr.push(fibArr[i-2] + fibArr[i-1])
        }
        return fibArr
}


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("leastToGreatest", () => {
    it("returns a new array of only odd numbers sorted from least to greatest", () => {
        const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
        // Expected output: [-9, 7, 9, 199]
        const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
        // Expected output: [-823, 7, 23]
      expect(leastToGreatest(fullArr1)).toEqual([-9, 7, 9, 199])
      expect(leastToGreatest(fullArr2)).toEqual([-823, 7, 23])
    })
  })
//   ReferenceError: leastToGreatest is not defined

/* Psuedo Code:
- Create a function called leastToGreatest
- The function will iterate over the values (.filter) to search for and return only odds numbers
- Then the values will be sorted (.sort) from least to greatest
- Giving a new array as the output
*/

// b) Create the function that makes the test pass.

// const leastToGreatest = (array) => {
//         let filteredArr = array.filter(value => value % 2 !== 0 && typeof value === "number")
// }

// I had to look at my notes to give my path a direction


const leastToGreatest = (array) => {
    return array.filter(value => value % 2 !== 0 && typeof value === "number").sort((a,b) => a-b)
}
//   console.log(leastToGreatest(fullArr1));
//   console.log(leastToGreatest(fullArr2));
  

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("additionArray", () => {
    it("returns an array of the accumulating sum", () => {
        const numbersToAdd1 = [2, 4, 45, 9]
         // Excpected output: [2, 6, 51, 60]
        const numbersToAdd2 = [0, 7, -8, 12]
         // Expected output: [0, 7, -1, 11]
        const numbersToAdd3 = []
        // Expected output: []
      expect(additionArray(numbersToAdd1)).toEqual([2, 6, 51, 60])
      expect(additionArray(numbersToAdd2)).toEqual([0, 7, -1, 11])
      expect(additionArray(numbersToAdd3)).toEqual([])
    })
  })
//   ReferenceError: additionArray is not defined

/* Psuedo Code:
- Create a function called additionArray
- The function will take in an array
- The function "additionArray" will add the last value to the next
- It will return a new array of the same length (.map), of the accumulating sum of the given array
- It will return an empty array if given an empty array
*/

// b) Create the function that makes the test pass.
// const numbersToAdd1 = [2, 4, 45, 9]
// const numbersToAdd2 = [0, 7, -8, 12]
// const numbersToAdd3 = []
// These were to check my console.logs

const additionArray = (array) => {
    let sum = 0
    return array.map(value => sum += value)
}
// console.log(additionArray(numbersToAdd1));
// console.log(additionArray(numbersToAdd2));
// console.log(additionArray(numbersToAdd3));

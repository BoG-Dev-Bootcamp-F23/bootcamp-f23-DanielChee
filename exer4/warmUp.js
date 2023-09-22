/**
 * Let's do some coding warm up to get you started with JS!
 *
 */

/**
 * Task 1: Create a function that takes an integer as input and returns the
 * letter grade (as a string) corresponding to it. Return "INVALID" if the
 * integer is outside the range [0, 100].
 *
 * Letter grade:
 * A = 90 -> 100
 * B = 80 -> 89
 * C = 70 -> 79
 * D = 60 -> 69
 * F = anything < 60
 */
function toLetterGrade(numGrade) {
    if (numGrade >= 90 && numGrade <= 100) {
        return "A";
    } else if (numGrade >= 80) {
        return "B";
    } else if (numGrade >= 70) {
        return "C";
    } else if (numGrade >= 60) {
        return "D";
    } else if (numGrade >= 0) {
        return "F";
    } else {
        return "INVALID";
    }
}

/**
 * Task 2: Create a function that takes in an array of integers and returns a
 * new array containing only even elements from the original array. The
 * ordering of the remaining elements should be the same as the original array.
 *
 * Example: [9, 3, 4, 1, 2, 0] --> [4, 2, 0]
 */
function getEvenElements(array) {
    return array.filter(i => i % 2 === 0);
}

/**
 * Task 3: Create a function that takes in a sentence and returns the LENGTH
 * of the longest word in that sentence. No punctuation will appear in the
 * sentence.
 *
 * Hint: The .split() method might be useful here
 *
 * Example: "I love Bits of Good" --> 4
 */
function findLongestWord(string) {
    let arr = string.split(" ");
    let max_length = 0;
    arr.forEach(word => {
        if (word.length > max_length) {
            max_length = word.length;
        }
    });
    return max_length;
}

/**
 * Task 4: Create a function that takes in 2 objects and return an object that 
 * is the combination of the 2
 *
 * Example:
    {
        name: "Casey",
        age: 10
    }
    {
        breed: "Pomeranian",
        friendly: false
    }
    -->
    {
        name: "Casey",
        age: 10,
        breed: "Pomeranian",
        friendly: false
    } 
 */
function combineObjects(object1, object2) {
    let totalObj = {
        ...object1,
        ...object2
    }
    return totalObj;
}

/**
 *  Task 5: Create a function that takes an array as an argument and returns
 *  the reverse array.
 *
 *  DO NOT USE THE .reverse() METHOD!!
 *
 *  Example: [1, 2, 3] -> [3, 2, 1]
 */
function reverseArr(array) {
    let size = array.length;
    let newArr = [];
    for (let i = 0; i < size; i++) {
        newArr[size - 1 - i] = array[i];
    }
    return newArr;
}

console.log(toLetterGrade(90))
console.log(getEvenElements([1, 2, 3, 4, 5, 6, 6]))
console.log(findLongestWord("I love Bits Of Good"))
console.log(combineObjects({ name: "Casey", age: 18 }, { breed: "Pomeranian", friendly: false }))
console.log(reverseArr([1, 2, 3]))

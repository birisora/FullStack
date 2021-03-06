// NOTE: uncomment any of the console logs for what you want to test

// wanted a way to get python's range
// https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp
const range = (start, end) => (
    Array.from({ length: end - start }, (v, k) => k + start)
);

const array1 = [1, 2, 3];
const array2 = range(1, 11);
// console.log(array2);
const array3 = range(1, 101);
// console.log(array3);
const array4 = range(1, 1001);

/*
 * Constant time O(1)
 * no matter size of input, takes same amount of time to complete
 * e.g. access array item, perform basic arithmetic operations
 */
function getRandomItem (array) {
    let sum = 0;
    let ticks = 0;
    // get random num and access element in array
    const item = array[Math.floor(Math.random() * array.length)];
    ticks += 1;

    return {
        result: item,
        ticks
    };
}

function getRunTimeOperations (fn, input) {
    const { ticks, result } = fn(input);
    console.log(
        `With input of size ${input.length}, ${fn.name} ` +
            `clocked ${ticks} ticks to generate result of ${result}.`
    );
}

// getRunTimeOperations(getRandomItem, array1);
// getRunTimeOperations(getRandomItem, array2);
// getRunTimeOperations(getRandomItem, array3);

/*
 * Logarithmic time O(log(n))
 * is next best thing after constant time
 * can take longer with larger inputs, run time increases slowly
 * e.g. 1 sec to complete size 10, 2 for 100, 3 for 1000
 * sample function below
 * It takes a sorted array of integers (arr) and a less than value (n) as
 * arguments, and returns the number of elements from the array
 * whose value is less than n
 */
function howManyLessThanNitems (arr, n) {
    let ticks = 0;
    //  if 1st ele in arr is greater than 'n' returns 0,
    // because no items in arr is less than 'n'
    if (!arr.length || arr[0] >= n) {
        return 0;
    }

    let lowIndex = 0;
    let highIndex = arr.length;
    while (highIndex > lowIndex) {
        // find midpoint
        const midIndex = Math.floor((highIndex + lowIndex) / 2);
        ticks += 1;
        // if `midIndex` element is greater than `n`, that means all elements
        // to the right of `midIndex` are also greater than `n`, so
        // we only need to focus on elements to the left of `midIndex`.
        // We set `highIndex` to the currrent value of `midIndex` so next time
        // through the loop, we'll only look at the left half.
        if (arr[midIndex] >= n) {
            highIndex = midIndex;
            ticks += 1;
        }

        // if element to the right of `midIndex` is less than `n`, then we
        // know that we need to check the items to the right of `midIndex`, so
        // we set `lowIndex` to the current value of `midIndex`, so that next
        // time through the loop we only look at the right side.
        else if (arr[midIndex + 1] < n) {
            lowIndex = midIndex;
            ticks += 1;
        }

        // otherwise if the element to the right of `midIndex` is equal to greater
        // than or equal to `n`, we know that the item at `midIndex` is the last
        // one that's less than `n`, so we return `midIndex +  1` to get the total
        // number of items that are less than `n`.
        else {
            return {
                result: midIndex + 1,
                ticks
            };
        }
    }
}

function getRunTimeOperations2 (fn, input) {
    const { arr, n } = input;
    const { ticks, result } = fn(arr, n);
    console.log(
        `With input of size ${arr.length}, ${fn.name} ` +
            `clocked ${ticks} ticks to generate result of ${result}.`
    );
}

// getRunTimeOperations2(howManyLessThanNitems, { arr: array1, n: 2 });
// getRunTimeOperations2(howManyLessThanNitems, { arr: array2, n: 9 });
// getRunTimeOperations2(howManyLessThanNitems, { arr: array3, n: 99 });
// getRunTimeOperations2(howManyLessThanNitems, { arr: array4, n: 999 });

/*
 * Linear Time O(n)
 * run times directly porportional to the size (n) of input
 * give an A and a B where B is 2x of A, B will take twice as long
 * linear run times are summing the elements in array or finding min or max val
 */
function findMin (array) {
    let min = array[0];
    let ticks = 1;
    for (let i = 1; i < array.length; i += 1) {
        ticks += 1;
        if (array[i] < min) {
            ticks += 1;
            min = numArray[i];
        }
    }
    return {
        result: min,
        ticks
    };
}

function getRunTimeOperations3 (fn, input) {
    const { ticks, result } = fn(input);
    console.log(
        `With input of size ${input.length}, ${fn.name} ` +
            `clocked ${ticks} ticks to generate result of ${result}.`
    );
}
// getRunTimeOperations3(findMin, array1);
// getRunTimeOperations3(findMin, array2);
// getRunTimeOperations3(findMin, array2);
// getRunTimeOperations3(findMin, array3);

/*
 * Polynomial time O(n^k)
 * run time of input n raised to some constant power k.
 * easiest way to understand is nested loops
 * 2 inner loops is O(n^2), and so on
 */
function hasDuplicates(array) {
    let ticks = 0;
    let result = false;
    for (let i = 0; i < array.length; i += 1) {
        ticks += 1;
        for (let j = 0; j < array.length; j += 1) {
            ticks += 1;
            if (array[i] === array[j] && i !== j) {
                ticks += 1;
                result = true;
            }
        }
    }
    return {
        result,
        ticks
    };
}

// getRunTimeOperations3(hasDuplicates, [1, 2, 2]);
// getRunTimeOperations3(hasDuplicates, [1, 2, 3, 4, 5, 6, 7, 8, 9, 9]);
// getRunTimeOperations3(hasDuplicates,
//     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
//         11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
//         22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
//         34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
//         46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
//         58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
//         70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81,
//         82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
//         94, 95, 96, 97, 98, 99, 99
//     ]);

/*
 * Exponential time O(2^n)
 * run times grow rapidly with increase in input size
 * 2^2 = 4, 2^10 = 1024
 */
function countTriangle (layers) {
    let ticks = 1;
    let count = 0; // num of dots counted so far
    let layer = 0; // current layer
    let lastLayer = 1; // num of dots counted in prev layer
    while (layer < layers) {
        let newLayer = 0; // num dots counted so far in curr layer
        for (let i = 0; i < lastLayer; i += 1) {
            ticks += 1;
            newLayer += 2;
        }
        lastLayer = newLayer;
        count += lastLayer;
        layer += 1;
    }
    return { result: count, ticks };
}

function getRunTimeOperations4 (fn, input) {
    const { ticks, result } = fn(input);
    console.log(
        `With input of size ${input}, ${fn.name} ` +
            `clocked ${ticks} ticks to generate result of ${result}.`
    );
}

// getRunTimeOperations4(countTriangle, 2);
// getRunTimeOperations4(countTriangle, 4);
// getRunTimeOperations4(countTriangle, 16);

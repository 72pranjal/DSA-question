// Q1: Sort the arrya in acending order using bubble sort
let arr1 = [10, 12, 23, 1, 3, 4]
for(let i=0; i<arr1.length; i++) {
    for(let j=0; j<arr1.length -1; j++) {
        if(arr1[j] > arr1[j+1]) {
            [arr1[j], arr1[j+1]] = [arr1[j+1], arr1[j]]
        }
    }
}
console.log("Bubble Sort for acending order = ",arr1)

// Q2: Sort the arrya in decending order using bubble sort 
for(let i=0; i<arr1.length; i++) {
    for(let j=0; j<arr1.length -1; j++) {
        if(arr1[j] < arr1[j+1]) {
            [arr1[j], arr1[j+1]] = [arr1[j+1], arr1[j]]
        }
    }
}
console.log("Bubble Sort for decending order = ",arr1)

// Q3: Sort the arrya in acending order using selection sort 
for(let i=0; i<arr1.length; i++) {
    let min = arr1[i]
    let minIndex = i
    for(let j=i+1; j<arr1.length; j++) {
        if(min > arr1[j]) {
            min = arr1[j]
            minIndex = j
        }
    }
    [arr1[i], arr1[minIndex]] = [arr1[minIndex], arr1[i]]

}
console.log("Selection Sort for acending order = ",arr1)

// Q4: Sort the arrya in decending order using selection sort 
for(let i=0; i<arr1.length; i++) {
    let max = arr1[i]
    let maxIndex = i
    for(let j=i+1; j<arr1.length; j++) {
        if(arr1[j] > max) {
            max = arr1[j]
            maxIndex = j
        }
    };
    [arr1[i], arr1[maxIndex]] = [arr1[maxIndex], arr1[i]]

}
console.log("Selection Sort for decending order = ",arr1)

// Q5: You are given an array arr of length n. Your task is to print the element which has maximum occurrences 
// in the array. If two elements have the same occurrence then print the smaller element
const n = 10;
const arr = [7, 7, 6, 4, 8, 7, 3, 1, 1, 1];
function getMaxOccurrenceNumber(arr, n) {
    let frequencyMap = new Map();
    let maxFrequency = 0;
    let result = Infinity;
    for(let i=0; i<n; i++) {
        let num = arr[i]
        const frequency = (frequencyMap.get(num) || 0) + 1;
        frequencyMap.set(num, frequency);

        if(frequency > maxFrequency || (frequency === maxFrequency && num < result)) {
            result = num
            maxFrequency = frequency
        }
    }
    console.log(frequencyMap)
    return result
}
console.log(getMaxOccurrenceNumber(arr,n))

// Q: Given an array arr of size N. Your task is to determine that
//  if by reversing any one subarray can the given array be sorted or not.
let numbers = [1,4,2,3]
function checkSubArray(arr) {
  let start = -1, end = -1;
  for(let i=0; i<arr.length -1; i++) {
    if(arr[i] > arr[i+1]) {
        if(start === -1) start = i
        end = i+1
    }
  }
  if(start === -1) return true

  let reversedSubArray = arr.slice(start, end+1).reverse()
  let newArr = [...arr.slice(0,start), ...reversedSubArray, ...arr.slice(end+1)]

  for(let i=0; i<newArr.length-1; i++) {
    if(newArr[i] > newArr[i+1]) return false
  }

  return true
}
let result = checkSubArray(numbers)
console.log(result ? 'Yes' : 'No')


// Q: You have a sequence p1, p2, p3..., pn which is a permutation of {1, 2, 3, ..., n}. 
// You can do the following operation at most 1 time: Choose 2 indices i and j. Swap (pi, pj). Can you sort the permutation.
let pairsArray = [5 ,1 ,2 ,4 ,3] 
function checkPairs(arr) {
    let start = -1;
    let end = -1;
    for(let i=0; i<arr.length -1; i++) {
        if(arr[i] > arr[i+1]) {
            if(start === -1) start = i;
            end = i +1
        }
    }
    if(start === -1) return true;
    [arr[start], arr[end]] = [arr[end], arr[start]]
    for(let i=0; i<arr.length -1; i++) {
        if(arr[i] > arr[i+1]) return false
    }
    return true
}
console.log(checkPairs(pairsArray))

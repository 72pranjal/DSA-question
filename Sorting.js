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
